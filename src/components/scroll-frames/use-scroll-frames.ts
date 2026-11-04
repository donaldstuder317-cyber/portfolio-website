'use client';

import { useEffect, useRef, type RefObject } from 'react';

type Options = {
  /**
   * Frame image paths, in playback order. Must be referentially stable
   * (declare it at module scope) -- a new array identity restarts the
   * sequence and rebuilds the image cache.
   */
  frames: string[];
  /**
   * Exponential smoothing time constant, in seconds: how long the rendered
   * frame takes to close ~63% of the gap to the scroll target. Applied
   * against elapsed time rather than per tick, so the feel is identical on
   * 60Hz and 120Hz displays.
   */
  responseTime?: number;
  /**
   * A gap this large (in frames) is treated as a discontinuity -- an anchor
   * jump or a hard flick -- and cuts straight to the target instead of
   * easing across frames that were never fetched.
   */
  jumpThreshold?: number;
  /** Frames loaded on either side of the current one. */
  preloadRadius?: number;
};

/**
 * Drives a scroll-linked image sequence on a canvas.
 *
 * Frames are fetched lazily around the scroll position rather than all at
 * once, and the canvas is only repainted when the target frame changes, so
 * idle scrolling costs nothing. Returns the ref to attach to the canvas.
 */
export function useScrollFrames({
  frames: paths,
  responseTime = 0.08,
  jumpThreshold = 8,
  preloadRadius = 3,
}: Options): RefObject<HTMLCanvasElement | null> {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;

    const frameCount = paths.length;
    if (frameCount === 0) return;

    const frames: (HTMLImageElement | undefined)[] = new Array(frameCount);

    let animationFrame = 0;
    let isRendering = false;
    let targetIndex = 0;
    let currentIndex = 0;
    let renderedIndex = -1;
    let lastFrameTime = 0;
    let disposed = false;

    const requestRender = () => {
      if (disposed || document.hidden || isRendering) return;
      isRendering = true;
      animationFrame = window.requestAnimationFrame(render);
    };

    /**
     * Creates the Image for a slot on first use. The previous version built
     * all 53 Images up front and attached a load listener to each, but only
     * ever assigned src to the handful near the scroll position -- so most
     * of those listeners were retained for the page's lifetime and could
     * never fire.
     */
    const loadFrame = (index: number) => {
      if (frames[index]) return;

      const image = new window.Image();
      frames[index] = image;
      image.decoding = 'async';
      image.addEventListener('load', requestRender, { once: true });
      image.src = paths[index];
    };

    const preloadNearbyFrames = (index: number) => {
      for (let offset = -preloadRadius; offset <= preloadRadius; offset += 1) {
        const nearbyIndex = index + offset;
        if (nearbyIndex >= 0 && nearbyIndex < frameCount) {
          loadFrame(nearbyIndex);
        }
      }
    };

    const isReady = (index: number) => {
      const frame = frames[index];
      return Boolean(frame?.complete && frame.naturalWidth);
    };

    /**
     * The closest frame to `index` that has actually decoded. Without this a
     * gap in the cache leaves the canvas showing whatever it drew last,
     * which reads as a freeze followed by a pop.
     */
    const nearestReady = (index: number) => {
      if (isReady(index)) return index;
      for (let offset = 1; offset < frameCount; offset += 1) {
        if (index - offset >= 0 && isReady(index - offset))
          return index - offset;
        if (index + offset < frameCount && isReady(index + offset)) {
          return index + offset;
        }
      }
      return -1;
    };

    const renderFrame = (wanted: number, force = false) => {
      const index = nearestReady(wanted);
      if (index < 0) return;

      const frame = frames[index];
      if (!frame || (!force && index === renderedIndex)) return;

      const { width, height } = canvas;
      const frameRatio = frame.naturalWidth / frame.naturalHeight;
      const viewportRatio = width / height;

      // Cover: fill the canvas and center the overflowing axis.
      let drawWidth = width;
      let drawHeight = height;
      let offsetX = 0;
      let offsetY = 0;

      if (viewportRatio > frameRatio) {
        drawHeight = width / frameRatio;
        offsetY = (height - drawHeight) / 2;
      } else {
        drawWidth = height * frameRatio;
        offsetX = (width - drawWidth) / 2;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(frame, offsetX, offsetY, drawWidth, drawHeight);
      renderedIndex = index;
    };

    function render(now: number) {
      // Elapsed-time easing, so 60Hz and 120Hz displays settle alike. The
      // first tick has no previous timestamp, so assume one 60Hz frame.
      const deltaSeconds = lastFrameTime
        ? (now - lastFrameTime) / 1000
        : 1 / 60;
      lastFrameTime = now;

      const gap = targetIndex - currentIndex;
      if (Math.abs(gap) > jumpThreshold) {
        currentIndex = targetIndex;
      } else {
        // Clamp dt so a backgrounded tab resuming cannot overshoot.
        const alpha = 1 - Math.exp(-Math.min(deltaSeconds, 0.1) / responseTime);
        currentIndex += gap * alpha;
      }

      const roundedIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.round(currentIndex)),
      );
      renderFrame(roundedIndex);
      preloadNearbyFrames(roundedIndex);

      // Below half a frame the rounding no longer changes, so further ticks
      // would be invisible work.
      if (Math.abs(targetIndex - currentIndex) >= 0.5) {
        animationFrame = window.requestAnimationFrame(render);
      } else {
        currentIndex = targetIndex;
        renderFrame(Math.round(currentIndex));
        isRendering = false;
        lastFrameTime = 0;
      }
    }

    /** Maps scroll position to a frame index. Returns true if it moved. */
    const syncToScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const clamped = Math.min(Math.max(progress, 0), 1);
      const nextTargetIndex = Math.min(
        frameCount - 1,
        Math.floor(clamped * frameCount),
      );

      const changed = nextTargetIndex !== targetIndex;
      targetIndex = nextTargetIndex;
      preloadNearbyFrames(targetIndex);
      return changed;
    };

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      renderFrame(Math.round(currentIndex), true);
      requestRender();
    };

    const handleScroll = () => {
      if (syncToScroll()) requestRender();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(animationFrame);
        isRendering = false;
        // Drop the stale timestamp so resuming does not see a huge delta.
        lastFrameTime = 0;
        return;
      }

      requestRender();
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.visualViewport?.addEventListener('resize', resizeCanvas);

    preloadNearbyFrames(0);
    resizeCanvas();
    syncToScroll();
    requestRender();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      frames.forEach((frame) =>
        frame?.removeEventListener('load', requestRender),
      );
      resizeObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.visualViewport?.removeEventListener('resize', resizeCanvas);
    };
  }, [paths, responseTime, jumpThreshold, preloadRadius]);

  return canvasRef;
}
