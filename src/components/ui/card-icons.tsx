import type { SVGProps } from 'react';

interface CheckmarkCircleProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function CheckmarkCircle({
  size = 24,
  className,
  ...props
}: CheckmarkCircleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-hidden='true'
      {...props}
    >
      <circle cx='12' cy='12' r='12' fill='#06B6D4' />
      <path
        d='M7 12.5L10.2 15.7L17 8.5'
        stroke='#FFFFFF'
        strokeWidth='2.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function RocketIcon({
  size = 24,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-hidden='true'
      {...props}
    >
      <path
        d='M12 2C8.3 4.1 6.2 8.5 6.2 13.4V17.2L9.2 16.1L12 18L14.8 16.1L17.8 17.2V13.4C17.8 8.5 15.7 4.1 12 2Z'
        fill='#06B6D4'
      />
      <path
        d='M6.3 12.5C4.1 13.8 2.9 16.3 3 19.3L3.1 20.7L6.2 18.2L8.2 15.4L6.3 12.5Z'
        fill='#0891B2'
      />
      <path
        d='M17.7 12.5C19.9 13.8 21.1 16.3 21 19.3L20.9 20.7L17.8 18.2L15.8 15.4L17.7 12.5Z'
        fill='#0891B2'
      />
      <path
        d='M9.6 16.2L12 18L14.4 16.2V19.2L12 21L9.6 19.2V16.2Z'
        fill='#22D3EE'
      />
      <circle
        cx='12'
        cy='9'
        r='2.2'
        fill='#ECFEFF'
        stroke='#0891B2'
        strokeWidth='1'
      />
    </svg>
  );
}

interface ThumbsUpIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export function ThumbsUpIcon({
  size = 24,
  className = '',
  ...props
}: ThumbsUpIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`text-cyan-400 ${className}`}
      aria-hidden='true'
      {...props}
    >
      <path d='M7 10v12' />
      <path d='M7 10h2.6l2.1-5.8c.3-.8 1-1.3 1.8-1.3 1.2 0 2.1 1.1 1.8 2.3L14.2 10h5.6a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3Z' />
    </svg>
  );
}
