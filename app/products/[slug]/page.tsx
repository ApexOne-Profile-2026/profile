import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FadeIn } from "@/src/components/FadeIn";
import { RequestDemoButton } from "@/src/components/RequestDemoButton";
import { getProductBySlug, products } from "@/src/data/products";
import { siteConfig } from "@/src/lib/site";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product not found",
    };
  }

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | ${siteConfig.name}`,
      description: product.description,
      url: `/products/${product.slug}`,
      type: "website",
      images: product.image ? [{ url: product.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | ${siteConfig.name}`,
      description: product.description,
      images: product.image ? [product.image] : undefined,
    },
  };
}

const accents = [
  "from-accent/25 via-accent/8 to-transparent",
  "from-accent/20 via-accent/8 to-transparent",
  "from-accent-secondary/20 via-accent/8 to-transparent",
] as const;

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const index = products.findIndex((item) => item.id === product.id);
  const accent = accents[index >= 0 ? index % accents.length : 0];
  const related = products.filter((item) => item.id !== product.id).slice(0, 2);

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b border-border/70">
        <div
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-br ${accent}`}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.7),transparent_30%),linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:auto,48px_48px,48px_48px]"
        />

        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pb-20">
          <FadeIn>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted">
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link
                href="/products"
                className="transition-colors hover:text-accent"
              >
                Products
              </Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">{product.title}</span>
            </nav>
          </FadeIn>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <FadeIn delayMs={60}>
                <p className="font-display text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                  ApexOne Product
                </p>
                <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
                  {product.title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                  {product.description}
                </p>
              </FadeIn>

              <FadeIn delayMs={140}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <RequestDemoButton
                    productTitle={product.title}
                    productSlug={product.slug}
                  />
                  <Link
                    href="/contact"
                    className="btn-secondary"
                  >
                    Talk to sales
                  </Link>
                </div>
              </FadeIn>
            </div>

            <FadeIn delayMs={180}>
              <div className="card-surface overflow-hidden rounded-[1.75rem] p-6 backdrop-blur-sm sm:p-7">
                <p className="text-xs font-medium tracking-wide text-muted uppercase">
                  Built for daily operations
                </p>
                <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-foreground">
                  Ready when your team is.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Request a live walkthrough tailored to your workflows—no generic
                  slide deck, just the product in context.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-background/80 p-4 ring-1 ring-inset ring-border/70">
                    <p className="text-xs text-muted">Features</p>
                    <p className="mt-1 font-display text-2xl font-semibold tracking-[-0.03em]">
                      {product.features.length}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-background/80 p-4 ring-1 ring-inset ring-border/70">
                    <p className="text-xs text-muted">Demo</p>
                    <p className="mt-1 font-display text-2xl font-semibold tracking-[-0.03em]">
                      Live
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8">
          <FadeIn>
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
                Overview
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {product.longDescription}
              </p>
            </div>
          </FadeIn>

          <FadeIn delayMs={100}>
            <div className="card-surface rounded-[1.5rem] p-6 sm:p-7">
              <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground">
                Key features
              </h2>
              <ul className="mt-6 space-y-3.5">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85 sm:text-[0.95rem]"
                  >
                    <span
                      aria-hidden
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
                    >
                      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                        <path
                          d="M3.5 8.2 6.4 11l6.1-6.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-border/70 pt-6">
                <RequestDemoButton
                  productTitle={product.title}
                  productSlug={product.slug}
                  className="w-full"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-border/70 bg-surface/30 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-foreground">
                More from ApexOne
              </h2>
            </FadeIn>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {related.map((item, relatedIndex) => (
                <FadeIn key={item.id} delayMs={relatedIndex * 80}>
                  <Link
                    href={`/products/${item.slug}`}
                    className="card-surface group flex h-full flex-col rounded-[1.35rem] p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_24px_50px_-36px_rgba(15,23,42,0.35)]"
                  >
                    <h3 className="font-display text-lg font-semibold tracking-[-0.03em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                    <span className="mt-5 text-sm font-medium text-foreground transition-opacity group-hover:opacity-70">
                      View details →
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
