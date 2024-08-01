interface IconProps {
  fillColor: string;
  size: number;
  className: string;
  style: React.CSSProperties;
}

export default function LeftIcon({
  fillColor,
  size,
  className,
  style,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Bold"
      viewBox="0 -960 960 960"
      width={size}
      height={size}
      fill={fillColor}
      className={className}
      style={style}
    >
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
      <circle cx="15.5" cy="7.5" r="2.5" />
    </svg>
  );
}
