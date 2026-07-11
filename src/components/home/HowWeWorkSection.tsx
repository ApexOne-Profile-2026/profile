import { FadeIn } from "@/src/components/FadeIn";
import { defaultLocale, getDictionary } from "@/src/lib/i18n";

const stepKeys = ["discovery", "design", "build", "launch"] as const;

interface HowWeWorkSectionProps {
  dict?: ReturnType<typeof getDictionary>;
}

export function HowWeWorkSection({
  dict = getDictionary(defaultLocale),
}: HowWeWorkSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-surface px-6 py-10 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.28)] sm:px-8 sm:py-12 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center rounded-full border border-border/70 bg-accent/5 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.22em] text-accent uppercase">
                {dict.home.howWeWorkEyebrow}
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl">
                {dict.home.howWeWorkTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {dict.home.howWeWorkDescription}
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stepKeys.map((key, index) => {
                const step = dict.home.howWeWorkSteps[key];

                return (
                  <FadeIn key={key} delayMs={80 + index * 70} as="article">
                    <article className="flex h-full flex-col rounded-[1.35rem] border border-border/80 bg-background p-5 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.28)] sm:p-6">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-display text-xs font-semibold tracking-wide text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.03em] text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
