'use client';

import { useScrollFrames } from '@/hooks/use-scroll-frames';

const FRAME_COUNT = 53;

const FRAMES = Array.from(
  { length: FRAME_COUNT },
  (_, index) => `/video/frames/frame_${String(index + 1).padStart(4, '0')}.jpg`,
);

/**
 * Fixed, scroll-linked image sequence behind the page, with a dark scrim
 * over it so foreground copy stays legible on bright frames.
 */
export default function ScrollFrameBackdrop() {
  const canvasRef = useScrollFrames({ frames: FRAMES });

  return (
    <>
      <div className='pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden'>
        <canvas
          ref={canvasRef}
          aria-hidden='true'
          className='block h-full w-full brightness-[0.92]'
        />
      </div>

      <div
        aria-hidden='true'
        className='bg-backdrop/30 pointer-events-none fixed inset-0 z-[1]'
      />
    </>
  );
}
