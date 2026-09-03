'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface FlipTextProps {
  /**
   * Additional CSS classes for the wrapper
   */
  className?: string;

  /**
   * The text content to animate (will be split by spaces)
   */
  children: string;

  /**
   * Duration of the flip animation in seconds
   * @default 2.2
   */
  duration?: number;

  /**
   * Initial delay before animation starts in seconds
   * @default 0
   */
  delay?: number;

  /**
   * Whether the animation should loop infinitely
   * @default false
   */
  loop?: boolean;

  /**
   * Custom separator for splitting text (default is space)
   * @default " "
   */
  separator?: string;

  /**
   * Whether all characters should animate together (no stagger)
   * @default false
   */
  together?: boolean;
}

export function FlipText({
  className,
  children,
  duration = 2.2,
  delay = 0,
  loop = false,
  separator = ' ',
  together = false,
}: FlipTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const words = useMemo(() => children.split(separator), [children, separator]);
  const totalChars = children.length;
  const wordOffsets = useMemo(() => {
    const separatorLength = separator.length;
    let offset = 0;

    return words.map((word) => {
      const wordOffset = offset;
      offset += word.length + separatorLength;
      return wordOffset;
    });
  }, [separator.length, words]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        setHasEnteredView(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(wrapper);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={cn(
        'flip-text-wrapper inline-block leading-none',
        hasEnteredView && 'flip-text-visible',
        className,
      )}
      style={{ perspective: '1000px' }}
    >
      {words.map((word, wordIndex) => {
        const chars = word.split('');

        return (
          <span
            key={wordIndex}
            className='word inline-block whitespace-nowrap'
            style={{ transformStyle: 'preserve-3d' }}
          >
            {chars.map((char, charIndex) => {
              const currentGlobalIndex = wordOffsets[wordIndex] + charIndex;

              const normalizedIndex = totalChars
                ? currentGlobalIndex / totalChars
                : 0;
              const staggerDelay = together
                ? delay
                : Math.sin(normalizedIndex * (Math.PI / 2)) *
                    (duration * 0.25) +
                  delay;
              const calculatedDelay = Number(staggerDelay.toFixed(6));

              return (
                <span
                  key={charIndex}
                  className='flip-char relative inline-block'
                  data-char={char}
                  style={
                    {
                      '--flip-duration': `${duration}s`,
                      '--flip-delay': `${calculatedDelay}s`,
                      '--flip-iteration': loop ? 'infinite' : '1',
                    } as CSSProperties
                  }
                >
                  {char}
                </span>
              );
            })}
            {separator === ' ' && wordIndex < words.length - 1 && (
              <span className='whitespace inline-block'>&nbsp;</span>
            )}
            {separator !== ' ' && wordIndex < words.length - 1 && (
              <span className='separator inline-block'>{separator}</span>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default FlipText;
