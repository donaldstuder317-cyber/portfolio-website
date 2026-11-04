type IconProps = React.SVGProps<SVGSVGElement>;

export function DSIcon(props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='205 0 615 576'
      width='100%'
      height='100%'
      preserveAspectRatio='xMidYMid slice'
      {...props}
    >
      <image
        href='/images/DSIcon.jpg'
        width='1024'
        height='576'
        preserveAspectRatio='xMidYMid slice'
      />
    </svg>
  );
}
