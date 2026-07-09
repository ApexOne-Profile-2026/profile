import type { Metadata } from "next";

import { ContactForm } from "@/src/components/ContactForm";
import { FadeIn } from "@/src/components/FadeIn";
import { PageHero } from "@/src/components/PageHero";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation or request a product demo with ApexOne. We’re ready to talk through your next build.",
  alternates: { canonical: "/contact" },
};

interface ContactPageProps {
  searchParams: Promise<{
    product?: string;
    intent?: string;
  }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const product = typeof params.product === "string" ? params.product : "";
  const intent = typeof params.intent === "string" ? params.intent : "general";

  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Contact"
        title="Let’s build the next chapter of your product."
        description="Tell us what you’re aiming for—demo, consultation, or a custom build. We’ll reply with a clear next step."
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-8 lg:pb-20">
          <FadeIn>
            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              <div>
                <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground">
                  Direct lines
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li>
                    <span className="block text-xs font-medium tracking-wide text-muted uppercase">
                      Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 inline-flex font-medium text-foreground transition-opacity hover:opacity-70"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs font-medium tracking-wide text-muted uppercase">
                      Domain
                    </span>
                    <p className="mt-1 font-medium text-foreground">
                      {siteConfig.domain}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="card-surface rounded-[1.35rem] p-5">
                <p className="font-display text-sm font-semibold tracking-[-0.02em] text-foreground">
                  What happens next
                </p>
                <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                  <li className="flex gap-3">
                    <span className="font-display font-semibold text-foreground">
                      01
                    </span>
                    We review your note within one business day.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-display font-semibold text-foreground">
                      02
                    </span>
                    We propose a short call or live product walkthrough.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-display font-semibold text-foreground">
                      03
                    </span>
                    You get a clear scope path—no vague decks.
                  </li>
                </ol>
              </div>
            </aside>
          </FadeIn>

          <FadeIn delayMs={90}>
            <ContactForm initialProduct={product} initialIntent={intent} />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
