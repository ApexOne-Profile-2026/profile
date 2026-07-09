import Link from "next/link";

import { FadeIn } from "@/src/components/FadeIn";
import { products } from "@/src/data/products";
import { defaultLocale, getDictionary, type Locale, localizeHref } from "@/src/lib/i18n";

const accents = [
  "from-accent/20 via-accent/5 to-transparent",
  "from-accent/15 via-accent/5 to-transparent",
  "from-accent-secondary/15 via-accent/5 to-transparent",
] as const;

interface ProductsSectionProps {
  locale?: Locale;
  dict?: ReturnType<typeof getDictionary>;
}

export function ProductsSection({ locale = defaultLocale, dict = getDictionary(defaultLocale) }: ProductsSectionProps) {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-semibold tracking-[0.18em] text-muted uppercase">
                {dict.home.productsEyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
                {dict.home.productsTitle}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                {dict.home.productsDescription}
              </p>
            </div>
            <Link href={localizeHref(locale, "/products")} className="inline-flex text-sm font-medium text-foreground transition-opacity hover:opacity-70">
              {dict.home.viewAllProducts} →
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {products.map((product, index) => (
            <FadeIn key={product.id} delayMs={index * 90} as="article">
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/80 bg-surface shadow-[0_1px_0_rgba(15,23,42,0.03)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_28px_60px_-36px_rgba(15,23,42,0.35)]">
                <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${accents[index % accents.length]}`}>
                  <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_35%),linear-gradient(135deg,transparent_40%,rgba(15,23,42,0.06)_100%)]" />
                  <div className="absolute right-4 bottom-4 left-4">
                    <span className="inline-flex rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
                      0{index + 1} / {dict.pages.products.cardBadge}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground">{product.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{product.description}</p>
                  <ul className="mt-5 space-y-2">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={localizeHref(locale, `/products/${product.slug}`)}
                    className="mt-7 inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground transition-[background-color,border-color,transform] duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-white active:scale-[0.98]"
                  >
                    {dict.home.viewDetails}
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
