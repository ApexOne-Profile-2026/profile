import { FadeIn } from "@/src/components/FadeIn";
import { defaultLocale, getDictionary } from "@/src/lib/i18n";

const techStack = [
  { name: "React", caption: "Interfaces", mark: (<svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden><circle cx="12" cy="12" r="2.1" fill="currentColor" /><g fill="none" stroke="currentColor" strokeWidth="1.2"><ellipse cx="12" cy="12" rx="10" ry="4.2" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" /></g></svg>) },
  { name: "Next.js", caption: "App Router", mark: (<svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M9.2 7.5h1.7l4.5 7.2V7.5H17v9h-1.7L10.8 9.3V16.5H9.2v-9z" fill="white" /></svg>) },
  { name: "Node.js", caption: "APIs", mark: (<svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden><path fill="currentColor" d="M12 2.4 4.8 6.5v11l7.2 4.1 7.2-4.1v-11L12 2.4zm0 1.8 5.5 3.1v7.4L12 17.8l-5.5-3.1V7.3L12 4.2z" /><path fill="currentColor" d="M11.1 8.2h1.8c1.5 0 2.5.8 2.5 2.1 0 1-.5 1.6-1.3 1.9l1.5 2.6h-1.8l-1.3-2.3h-.5v2.3H11.1V8.2zm1.7 2.8c.5 0 .8-.3.8-.7s-.3-.7-.8-.7h-.8v1.4h.8z" /></svg>) },
  { name: "Tailwind", caption: "Design system", mark: (<svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden><path fill="currentColor" d="M12 6c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.4-1.5.7.2 1.3.7 1.9 1.3C13.4 11 14.7 12 17 12c2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.3-.7-1.9-1.3C15.6 7 14.3 6 12 6zM7 12c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.4-1.5.7.2 1.3.7 1.9 1.3C8.4 17 9.7 18 12 18c2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.3-.7-1.9-1.3C10.6 13 9.3 12 7 12z" /></svg>) },
  { name: "AWS", caption: "Cloud", mark: (<svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden><path fill="currentColor" d="M6.8 14.2c0 .3.3.4.6.2 1.9-1.2 4.4-1.9 7-1.9 1.5 0 3 .3 4.4.8.4.1.7-.1.5-.5C17.7 9.7 14.2 7 10.1 7 7.8 7 5.8 7.8 4.3 9.1c-.2.2-.1.5.1.6l2.2 1.4c.2.1.5.1.6-.1.7-.6 1.7-1 2.9-1 1.7 0 3.2.8 3.9 2-.9-.2-1.8-.3-2.8-.3-2.1 0-4 .5-5.4 1.3-.4.2-.6.7-.6 1.2z" /><path fill="currentColor" d="M18.4 15.3c-.2-.2-.6-.1-.8.1-.4.5-1 .8-1.4 1-.2.1-.2.3 0 .4 1.3.4 2.5.3 3.4-.1.3-.1.3-.4.1-.6-.4-.4-1-.6-1.3-.8z" /></svg>) },
] as const;

interface TechStackSectionProps { dict?: ReturnType<typeof getDictionary>; }

export function TechStackSection({ dict = getDictionary(defaultLocale) }: TechStackSectionProps) {
  return (
    <section className="border-y border-border/70 bg-surface/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-muted uppercase">{dict.home.techEyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">{dict.home.techTitle}</h2>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {techStack.map((tech, index) => (
            <FadeIn key={tech.name} delayMs={index * 70} as="div">
              <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border/80 bg-background/80 px-4 py-6 text-center shadow-[0_1px_0_rgba(15,23,42,0.02)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_18px_40px_-28px_rgba(16,76,104,0.18)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white transition-transform duration-300 group-hover:scale-105">{tech.mark}</span>
                <div>
                  <p className="font-display text-sm font-semibold tracking-[-0.02em] text-foreground">{tech.name}</p>
                  <p className="mt-0.5 text-xs text-muted">{tech.caption}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
