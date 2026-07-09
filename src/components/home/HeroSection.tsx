import Link from "next/link";

import { FadeIn } from "@/src/components/FadeIn";
import { HeroLogo } from "@/src/components/home/HeroLogo";
import { siteConfig } from "@/src/lib/site";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,252,254,0)_0%,rgba(251,252,254,0.85)_72%,rgba(251,252,254,1)_100%)]" />
        <div className="absolute top-24 right-[-12%] h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-[-8%] h-[22rem] w-[22rem] rounded-full bg-slate-900/5 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      </div>

      <div className="mx-auto flex min-h-[min(92vh,54rem)] max-w-6xl flex-col justify-center px-4 pt-16 pb-20 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <FadeIn>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start">
                <HeroLogo className="lg:hidden" />
                <p className="font-display text-sm font-semibold tracking-[0.22em] text-accent/80 uppercase">
                  {siteConfig.name}
                </p>
              </div>
            </FadeIn>

            <FadeIn delayMs={80}>
              <h1 className="mt-5 max-w-2xl bg-gradient-to-r from-accent via-accent-hover to-foreground bg-clip-text font-display text-[2rem] leading-[1.12] font-semibold tracking-[-0.04em] text-transparent sm:text-4xl sm:leading-[1.1] lg:text-[2.75rem] xl:text-5xl">
                Software that transforms how businesses run.
              </h1>
            </FadeIn>

            <FadeIn delayMs={160}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                From production-ready platforms to custom software development. We engineer high-quality digital tools designed to help your business grow.
              </p>
            </FadeIn>

            <FadeIn delayMs={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/products" className="btn-primary">
                  Explore Products
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Book a Consultation
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delayMs={120} className="hidden justify-center lg:flex">
            <HeroLogo size="large" />
          </FadeIn>
        </div>

        <FadeIn delayMs={340} className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-surface/80 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="ml-3 text-xs font-medium tracking-wide text-muted">
                apexonemm.tech — product console
              </span>
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-3 sm:p-6">
              {[
                {
                  label: "Checkout speed",
                  value: "2.1s",
                  tone: "from-accent/15 to-accent/5",
                },
                {
                  label: "Live outlets",
                  value: "48",
                  tone: "from-accent/12 to-accent/5",
                },
                {
                  label: "Ops clarity",
                  value: "96%",
                  tone: "from-accent-secondary/15 to-accent/5",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-2xl bg-gradient-to-br ${item.tone} p-4 ring-1 ring-inset ring-border/60`}
                >
                  <p className="text-xs font-medium tracking-wide text-muted uppercase">
                    {item.label}
                  </p>
                  <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
