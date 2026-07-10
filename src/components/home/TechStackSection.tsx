import { FadeIn } from "@/src/components/FadeIn";
import { TechStackIcon } from "@/src/components/icons/TechStackIcon";
import { techStackGroupIds, techStackGroups, type TechStackName } from "@/src/data/tech-stack";
import { defaultLocale, getDictionary } from "@/src/lib/i18n";

interface TechStackSectionProps {
  dict?: ReturnType<typeof getDictionary>;
}

export function TechStackSection({ dict = getDictionary(defaultLocale) }: TechStackSectionProps) {
  return (
    <section className="border-y border-border/70 bg-surface/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-muted uppercase">
              {dict.home.techEyebrow}
            </p>
            <h2 className="mt-3 bg-gradient-to-r from-accent via-accent-hover to-foreground bg-clip-text font-display text-xl font-semibold tracking-[-0.03em] text-transparent sm:text-2xl">
              {dict.home.techTitle}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-8 space-y-3.5 sm:mt-10 sm:space-y-4">
          {techStackGroupIds.map((groupId, groupIndex) => {
            const items = techStackGroups[groupId];

            return (
              <FadeIn key={groupId} delayMs={groupIndex * 50}>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-start sm:gap-x-3 md:grid-cols-[10.5rem_minmax(0,1fr)] lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-x-4">
                  <h3 className="text-left font-display text-[0.62rem] font-semibold tracking-[0.12em] text-muted uppercase sm:pt-1.5 sm:leading-tight md:text-[0.68rem]">
                    {dict.home.techGroups[groupId]}
                  </h3>
                  <div className="flex min-w-0 flex-wrap items-center justify-start gap-2">
                    {items.map((name) => (
                      <div
                        key={`${groupId}-${name}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1.5 ring-1 ring-border/60"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                          <TechStackIcon name={name as TechStackName} className="h-[1.125rem] w-[1.125rem]" />
                        </span>
                        <span className="whitespace-nowrap text-[0.7rem] leading-none font-medium text-foreground/85 sm:text-xs">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
