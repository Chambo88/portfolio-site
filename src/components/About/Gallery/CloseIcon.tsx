interface IconProps {
  fillColor: string;
  size: number;
}

export default function CloseIcon({ fillColor, size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Bold"
      viewBox="0 -960 960 960"
      width={size}
      height={size}
      fill={fillColor}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      <circle cx="15.5" cy="7.5" r="2.5" />
    </svg>
  );
}
