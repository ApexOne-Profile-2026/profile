import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/src/lib/site";

interface ApexOneLogoProps {
  className?: string;
  onClick?: () => void;
  showWordmark?: boolean;
}

export function ApexOneLogo({
  className = "",
  onClick,
  showWordmark = true,
}: ApexOneLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="relative h-9 w-9 overflow-hidden rounded-full shadow-[0_0_0_1px_rgba(15,23,42,0.08)] transition-transform duration-300 group-hover:scale-[1.04] sm:h-10 sm:w-10">
        <Image
          src="/brand/apexone-logo.png"
          alt=""
          width={80}
          height={80}
          className="h-full w-full object-cover"
          priority
        />
      </span>
      {showWordmark ? (
        <span className="font-display text-[1.05rem] font-semibold tracking-[-0.03em] text-foreground">
          Apex<span className="text-foreground/55">One</span>
        </span>
      ) : null}
    </Link>
  );
}
