import type { ReactNode } from "react";

import { FadeIn } from "@/src/components/FadeIn";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-15%,rgba(56,189,248,0.14),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-14">
        <FadeIn>
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-accent uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl bg-gradient-to-r from-accent via-accent-hover to-foreground bg-clip-text font-display text-xl font-semibold tracking-[-0.03em] text-transparent sm:text-2xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
          {children ? <div className={description ? "mt-8" : "mt-6"}>{children}</div> : null}
        </FadeIn>
      </div>
    </section>
  );
}
