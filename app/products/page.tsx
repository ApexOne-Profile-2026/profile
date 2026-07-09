import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/src/components/FadeIn";
import { PageHero } from "@/src/components/PageHero";
import { products } from "@/src/data/products";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore ApexOne platforms—POS, Real Estate, and Student Platform—built for real operations.",
  alternates: { canonical: "/products" },
};

const accents = [
  "from-accent/20 via-accent/5 to-transparent",
  "from-accent/15 via-accent/5 to-transparent",
  "from-accent-secondary/15 via-accent/5 to-transparent",
] as const;

export default function ProductsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Products"
        title="Platforms designed for real operations."
        description="Three product lines for retail, property, and education—fast to adopt, clear to run, and built to last."
      >
        <Link
          href="/contact?intent=consultation"
          className="btn-primary h-11 px-6"
        >
          Talk through your use case
        </Link>
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {products.map((product, index) => (
              <FadeIn key={product.id} delayMs={index * 80} as="article">
                <article className="card-surface group flex h-full flex-col overflow-hidden rounded-[1.5rem] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_28px_60px_-36px_rgba(15,23,42,0.35)]">
                  <div
                    className={`relative h-40 overflow-hidden bg-gradient-to-br ${accents[index % accents.length]}`}
                  >
                    <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_35%)]" />
                    <div className="absolute right-4 bottom-4 left-4">
                      <span className="inline-flex rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
                        0{index + 1} / product
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground">
                      {product.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {product.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {product.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <span
                            aria-hidden
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-col gap-2 sm:flex-row">
                      <Link
                        href={`/products/${product.slug}`}
                        className="btn-secondary h-11 flex-1 group-hover:border-accent/25 group-hover:"
                      >
                        View Details
                      </Link>
                      <Link
                        href={`/contact?product=${product.slug}&intent=demo`}
                        className="inline-flex h-11 items-center justify-center rounded-full px-4 text-sm font-medium text-muted transition-colors hover:text-accent"
                      >
                        Demo
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delayMs={200}>
            <div className="mt-14 rounded-[1.5rem] border border-border/80 bg-[linear-gradient(135deg,rgba(56,189,248,0.08),rgba(255,255,255,0.9))] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
              <div className="max-w-xl">
                <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground sm:text-2xl">
                  Need something more custom?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  We also design and build tailored platforms for teams with unique
                  workflows. Start a conversation with {siteConfig.name}.
                </p>
              </div>
              <Link
                href="/services"
                className="btn-primary mt-5 h-11 shrink-0 sm:mt-0"
              >
                Explore services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
