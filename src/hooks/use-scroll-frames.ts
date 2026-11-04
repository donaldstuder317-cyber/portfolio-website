'use client';

import { useEffect, useRef, type RefObject } from 'react';

type Options = {
  /** Frame image paths, in playback order. */
  frames: string[];
  /**
   * How far the rendered frame moves toward the scroll target each tick,
   * between 0 and 1. Lower values trail the scroll more softly.
   */
  smoothing?: number;
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
  frames: framePaths,
  smoothing = 0.08,
  preloadRadius = 2,
}: Options): RefObject<HTMLCanvasElement | null> {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Read inside the effect so a new array identity cannot restart it.
  const pathsRef = useRef(framePaths);
  pathsRef.current = framePaths;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;

    const paths = pathsRef.current;
    const frameCount = paths.length;
    if (frameCount === 0) return;

    const frames: (HTMLImageElement | undefined)[] = new Array(frameCount);

    let animationFrame = 0;
    let isRendering = false;
    let targetIndex = 0;
    let currentIndex = 0;
    let renderedIndex = -1;
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

    const renderFrame = (index: number, force = false) => {
      const frame = frames[index];
      if (
        !frame ||
        !frame.complete ||
        !frame.naturalWidth ||
        (!force && index === renderedIndex)
      ) {
        return;
      }

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

    function render() {
      currentIndex += (targetIndex - currentIndex) * smoothing;
      const roundedIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.round(currentIndex)),
      );

      renderFrame(roundedIndex);

      if (Math.abs(targetIndex - currentIndex) > 0.01) {
        animationFrame = window.requestAnimationFrame(render);
      } else {
        currentIndex = targetIndex;
        renderFrame(Math.round(currentIndex));
        isRendering = false;
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
  }, [smoothing, preloadRadius]);

  return canvasRef;
}
