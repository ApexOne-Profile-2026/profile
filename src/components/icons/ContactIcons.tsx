import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const iconClass = "h-4 w-4";

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={iconClass} aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7.2 12 12.6l8-5.4M5.2 18h13.6c.7 0 1.2-.5 1.2-1.2V7.2c0-.7-.5-1.2-1.2-1.2H5.2c-.7 0-1.2.5-1.2 1.2v9.6c0 .7.5 1.2 1.2 1.2Z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={iconClass} aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.8 4.4c.3-.7 1-.9 1.6-.6l2.2 1.1c.6.3.8 1 .5 1.6l-.9 1.8c.9 1.8 2.4 3.3 4.2 4.2l1.8-.9c.6-.3 1.3-.1 1.6.5l1.1 2.2c.3.6.1 1.3-.6 1.6l-1.7.8c-1 .5-2.2.2-3.2-.5-2.4-1.7-4.4-3.7-6.1-6.1-.7-1-.9-2.2-.5-3.2l.8-1.7Z" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={iconClass} aria-hidden {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <path strokeLinecap="round" d="M3.75 12h16.5M12 3.75c2.5 2.7 2.5 14.8 0 16.5M12 3.75c-2.5 2.7-2.5 14.8 0 16.5" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={iconClass} aria-hidden {...props}>
      <circle cx="12" cy="8" r="3.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 19.5c.8-3 2.9-4.5 6.5-4.5s5.7 1.5 6.5 4.5" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={iconClass} aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 20V8.5L12 5l7 3.5V20M9.5 20v-4h5v4" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={iconClass} aria-hidden {...props}>
      <circle cx="12" cy="12" r="7.25" />
      <circle cx="12" cy="12" r="3.25" />
      <path strokeLinecap="round" d="M12 4.75V3M12 21v-1.75M4.75 12H3M21 12h-1.75" />
    </svg>
  );
}

export function PackageIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={iconClass} aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 4 7.2v9.6L12 21l8-4.2V7.2L12 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m12 12 8-4.8M12 12v9M12 12 4 7.2" />
    </svg>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={iconClass} aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 6.5h14a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H9.8L5 19.5V8a1.5 1.5 0 0 1 1.5-1.5Z" />
    </svg>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4" aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 14-7-3 14-3-5-6-2Z" />
    </svg>
  );
}

export function DirectLinesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 10.5h7M8.5 13.5h4.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 5.5h11c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

export function FormIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 4.5h8c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-11c0-1.1.9-2 2-2Z" />
      <path strokeLinecap="round" d="M9 9.5h6M9 13h6M9 16.5h3.5" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden {...props}>
      <path d="M9.101 23.691v-9.192H6.127v-3.889h2.974v-2.846c0-3.025 1.864-4.671 4.571-4.671 1.303 0 2.418.095 2.743.138v3.18l-1.88.001c-1.474 0-1.759.7-1.759 1.724v2.274h3.583l-.465 3.889h-3.118v9.192H9.101z" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-8 w-8" aria-hidden {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.2 12.1 2.2 2.2 5.1-5.1" />
    </svg>
  );
}

export function ContactIconBadge({
  children,
  size = "md",
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "lg"
      ? "h-11 w-11 rounded-2xl"
      : size === "sm"
        ? "h-7 w-7 rounded-lg"
        : "h-10 w-10 rounded-xl";

  return (
    <span
      className={`flex shrink-0 items-center justify-center bg-accent/10 text-accent ${sizeClass}`}
      aria-hidden
    >
      {children}
    </span>
  );
}
