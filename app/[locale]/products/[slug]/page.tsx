import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FadeIn } from "@/src/components/FadeIn";
import { getLocalizedProduct, getProductBySlug, products } from "@/src/data/products";
import { getDictionary, isLocale, localizeHref, type Locale } from "@/src/lib/i18n";
import { siteConfig } from "@/src/lib/site";

export function generateStaticParams() {
  return ["en", "mm"].flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const activeLocale = isLocale(locale) ? (locale as Locale) : "en";
  const dict = getDictionary(activeLocale);
  const product = getProductBySlug(slug);
  if (!product) return { title: dict.pages.productDetail.notFound };

  const localized = getLocalizedProduct(product, activeLocale);
  return {
    title: localized.title,
    description: localized.description,
    alternates: { canonical: `/${activeLocale}/products/${product.slug}` },
    openGraph: {
      title: `${localized.title} | ${siteConfig.name}`,
      description: localized.description,
      url: `/${activeLocale}/products/${product.slug}`,
      type: "website",
      images: [{ url: product.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${localized.title} | ${siteConfig.name}`,
      description: localized.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const localized = getLocalizedProduct(product, locale as Locale);

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.14),transparent_55%)]" />

        <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-14 sm:px-6 sm:pt-14 lg:px-8 lg:pb-16">
          <FadeIn>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted">
              <Link href={localizeHref(locale as Locale, "/")} className="transition-colors hover:text-accent">
                {dict.pages.productDetail.breadcrumbHome}
              </Link>
              <span aria-hidden>/</span>
              <Link href={localizeHref(locale as Locale, "/products")} className="transition-colors hover:text-accent">
                {dict.pages.productDetail.breadcrumbProducts}
              </Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">{localized.title}</span>
            </nav>
          </FadeIn>

          <FadeIn delayMs={60} className="mt-8">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-accent uppercase">
              {dict.pages.productDetail.eyebrow}
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
              {localized.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {localized.description}
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
            <FadeIn delayMs={90} className="h-full lg:col-span-4">
              <div className="card-surface h-full rounded-[1.5rem] p-6 sm:p-7">
                <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground">
                  {dict.pages.productDetail.keyFeatures}
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {localized.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85 sm:text-[0.95rem]"
                    >
                      <span
                        aria-hidden
                        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
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
              </div>
            </FadeIn>

            <FadeIn delayMs={120} className="h-full lg:col-span-8">
              <div className="h-full overflow-hidden rounded-[1.5rem] border border-border/80 bg-surface shadow-[0_24px_70px_-40px_rgba(15,23,42,0.28)] sm:rounded-[1.75rem]">
                <div className="relative h-full min-h-72 w-full overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef4f8_100%)] sm:min-h-80 lg:min-h-96">
                  <Image
                    src={localized.image}
                    alt={localized.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delayMs={150} className="mt-10">
            <div className="card-surface rounded-[1.5rem] p-6 sm:p-7">
              <h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground">
                {dict.pages.productDetail.overview}
              </h2>
              <div className="mt-6 whitespace-pre-line text-sm leading-relaxed text-foreground/85 sm:text-[0.95rem] sm:leading-7">
                {localized.longDescription}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
