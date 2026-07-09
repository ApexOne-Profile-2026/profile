import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FadeIn } from "@/src/components/FadeIn";
import { RequestDemoButton } from "@/src/components/RequestDemoButton";
import { getProductBySlug, products } from "@/src/data/products";
import { getDictionary, isLocale, localizeHref, type Locale } from "@/src/lib/i18n";
import { siteConfig } from "@/src/lib/site";

const accents = [
  "from-accent/25 via-accent/8 to-transparent",
  "from-accent/20 via-accent/8 to-transparent",
  "from-accent-secondary/20 via-accent/8 to-transparent",
] as const;

export function generateStaticParams() {
  return ["en", "mm"].flatMap((locale) => products.map((product) => ({ locale, slug: product.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const dict = getDictionary(isLocale(locale) ? (locale as Locale) : "en");
  const product = getProductBySlug(slug);
  if (!product) return { title: dict.pages.productDetail.notFound };
  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `/${isLocale(locale) ? locale : "en"}/products/${product.slug}` },
    openGraph: { title: `${product.title} | ${siteConfig.name}`, description: product.description, url: `/${isLocale(locale) ? locale : "en"}/products/${product.slug}`, type: "website" },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const index = products.findIndex((item) => item.id === product.id);
  const accent = accents[index >= 0 ? index % accents.length : 0];
  const related = products.filter((item) => item.id !== product.id).slice(0, 2);

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b border-border/70"><div aria-hidden className={`absolute inset-0 bg-gradient-to-br ${accent}`} /><div aria-hidden className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.7),transparent_30%),linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:auto,48px_48px,48px_48px]" /><div className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pb-20"><FadeIn><nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted"><Link href={localizeHref(locale as Locale, "/")} className="transition-colors hover:text-accent">{dict.pages.productDetail.breadcrumbHome}</Link><span aria-hidden>/</span><Link href={localizeHref(locale as Locale, "/products")} className="transition-colors hover:text-accent">{dict.pages.productDetail.breadcrumbProducts}</Link><span aria-hidden>/</span><span className="text-foreground">{product.title}</span></nav></FadeIn><div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"><div><FadeIn delayMs={60}><p className="font-display text-sm font-semibold tracking-[0.18em] text-accent uppercase">{dict.pages.productDetail.eyebrow}</p><h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">{product.title}</h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{product.description}</p></FadeIn><FadeIn delayMs={140}><div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"><RequestDemoButton productTitle={product.title} productSlug={product.slug} locale={locale as Locale} dict={dict} /><Link href={localizeHref(locale as Locale, "/contact")} className="btn-secondary">{dict.pages.productDetail.talkToSales}</Link></div></FadeIn></div><FadeIn delayMs={180}><div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-surface/80 p-6 shadow-[0_30px_80px_-48px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-7"><p className="text-xs font-medium tracking-wide text-muted uppercase">{dict.pages.productDetail.builtForOps}</p><p className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-foreground">{dict.pages.productDetail.ready}</p><p className="mt-3 text-sm leading-relaxed text-muted">{dict.pages.productDetail.readyDescription}</p><div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-background/80 p-4 ring-1 ring-inset ring-border/70"><p className="text-xs text-muted">{dict.pages.productDetail.featuresCount}</p><p className="mt-1 font-display text-2xl font-semibold tracking-[-0.03em]">{product.features.length}</p></div><div className="rounded-2xl bg-background/80 p-4 ring-1 ring-inset ring-border/70"><p className="text-xs text-muted">{dict.pages.productDetail.demoLabel}</p><p className="mt-1 font-display text-2xl font-semibold tracking-[-0.03em]">{dict.pages.productDetail.demoValue}</p></div></div></div></FadeIn></div></div></section>
      <section className="py-16 sm:py-20"><div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8"><FadeIn><div><h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">{dict.pages.productDetail.overview}</h2><p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{product.longDescription}</p></div></FadeIn><FadeIn delayMs={100}><div className="card-surface rounded-[1.5rem] p-6 sm:p-7"><h2 className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground">{dict.pages.productDetail.keyFeatures}</h2><ul className="mt-6 space-y-3.5">{product.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85 sm:text-[0.95rem]"><span aria-hidden className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"><svg viewBox="0 0 16 16" className="h-3 w-3" fill="none"><path d="M3.5 8.2 6.4 11l6.1-6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span>{feature}</span></li>)}</ul><div className="mt-8 border-t border-border/70 pt-6"><RequestDemoButton productTitle={product.title} productSlug={product.slug} locale={locale as Locale} dict={dict} className="w-full" /></div></div></FadeIn></div></section>
      {related.length > 0 ? <section className="border-t border-border/70 bg-surface/40 py-14 sm:py-16"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><FadeIn><h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-foreground">{dict.pages.productDetail.moreFromApex}</h2></FadeIn><div className="mt-8 grid gap-4 md:grid-cols-2">{related.map((item, relatedIndex) => <FadeIn key={item.id} delayMs={relatedIndex * 80}><Link href={localizeHref(locale as Locale, `/products/${item.slug}`)} className="group flex h-full flex-col rounded-[1.35rem] border border-border/80 bg-background p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_24px_50px_-36px_rgba(15,23,42,0.35)]"><h3 className="font-display text-lg font-semibold tracking-[-0.03em] text-foreground">{item.title}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p><span className="mt-5 text-sm font-medium text-foreground transition-opacity group-hover:opacity-70">{dict.pages.productDetail.viewDetails} →</span></Link></FadeIn>)}</div></div></section> : null}
    </main>
  );
}
