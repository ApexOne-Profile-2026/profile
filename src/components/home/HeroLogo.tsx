import Image from "next/image";

interface HeroLogoProps {
  className?: string;
  size?: "default" | "large";
}

export function HeroLogo({ className = "", size = "default" }: HeroLogoProps) {
  const dimensions =
    size === "large"
      ? "h-52 w-52 sm:h-60 sm:w-60 lg:h-72 lg:w-72"
      : "h-40 w-40 sm:h-32 sm:w-32";

  const imageSize = size === "large" ? 288 : 160;

  return (
    <div
      className={`relative flex items-center justify-center ${dimensions} ${className}`}
    >
      {/* Soft brand glow — works well with transparent PNG */}
      <div
        aria-hidden
        className="absolute inset-[12%] rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-[22%] rounded-full bg-accent/10 blur-2xl"
      />
      <Image
        src="/brand/apexone-logo.png"
        alt="ApexOne"
        width={imageSize}
        height={imageSize}
        className="relative h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(16,76,104,0.15)]"
        priority
        unoptimized
      />
    </div>
  );
}
