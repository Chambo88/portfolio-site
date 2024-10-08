interface IconProps {
  fillColor: string;
  size: number;
}

export default function PictureIcon({ fillColor, size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Bold"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fillColor}
    >
      <path d="M19.5,0H4.5A4.505,4.505,0,0,0,0,4.5v15A4.505,4.505,0,0,0,4.5,24h15A4.505,4.505,0,0,0,24,19.5V4.5A4.505,4.505,0,0,0,19.5,0ZM4.5,3h15A1.5,1.5,0,0,1,21,4.5v15a1.492,1.492,0,0,1-.44,1.06l-8.732-8.732a4,4,0,0,0-5.656,0L3,15V4.5A1.5,1.5,0,0,1,4.5,3Z" />
      <circle cx="15.5" cy="7.5" r="2.5" />
    </svg>
  );
}
