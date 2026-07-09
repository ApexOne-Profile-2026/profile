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
      className={`group inline-flex items-center gap-0.5 ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/brand/apex-logo.png"
        alt=""
        width={88}
        height={88}
        className="h-10 w-10 shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:h-11 sm:w-11"
        priority
        unoptimized
      />
      {showWordmark ? (
        <span className="-ml-1 font-display text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl">
          pex<span className="text-accent">One</span>
        </span>
      ) : null}
    </Link>
  );
}
