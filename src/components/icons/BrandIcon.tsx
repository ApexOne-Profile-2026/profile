interface BrandIconProps {
  path: string;
  hex: string;
  title: string;
  className?: string;
}

export function BrandIcon({ path, hex, title, className = "h-4 w-4" }: BrandIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={title}
    >
      <path d={path} fill={`#${hex}`} />
    </svg>
  );
}
