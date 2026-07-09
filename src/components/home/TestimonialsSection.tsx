import { FadeIn } from "@/src/components/FadeIn";
import { clients } from "@/src/data/clients";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden border-t border-border/70 bg-[linear-gradient(180deg,rgba(248,250,252,0.7)_0%,rgba(255,255,255,0.95)_100%)] py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-sky-300/15 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-muted uppercase">
              Testimonials
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
              What partners say after launch.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Real feedback from operators who use ApexOne products every day.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {clients.map((client, index) => (
            <FadeIn key={client.id} delayMs={index * 80} as="article">
              <figure className="flex h-full flex-col rounded-[1.5rem] border border-border/80 bg-surface/90 p-6 shadow-[0_1px_0_rgba(15,23,42,0.03)] sm:p-7">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground font-display text-sm font-semibold text-background"
                  >
                    {initials(client.name)}
                  </span>
                  <div className="min-w-0">
                    <figcaption className="truncate font-display text-sm font-semibold tracking-[-0.02em] text-foreground">
                      {client.name}
                    </figcaption>
                    <p className="truncate text-xs text-muted">
                      {client.role ? `${client.role} · ` : ""}
                      {client.company}
                    </p>
                  </div>
                </div>

                <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-foreground/85">
                  “{client.testimonial}”
                </blockquote>

                <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
                  <span className="text-xs font-medium tracking-wide text-muted uppercase">
                    {client.company}
                  </span>
                  <span
                    aria-hidden
                    className="font-display text-2xl leading-none text-sky-500/70"
                  >
                    ”
                  </span>
                </div>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
