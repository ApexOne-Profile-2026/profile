import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FadeIn } from "@/src/components/FadeIn";
import { PageHero } from "@/src/components/PageHero";
import { services } from "@/src/data/services";
import { getDictionary, isLocale, localizeHref, type Locale } from "@/src/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? (locale as Locale) : "en");
  return { title: dict.pages.services.title, description: dict.pages.services.heroDescription };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <main className="flex flex-1 flex-col">
      <PageHero eyebrow={dict.pages.services.title} title={dict.pages.services.heroTitle}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={`${localizeHref(locale as Locale, "/contact")}?intent=consultation`} className="btn-primary h-11 px-6">{dict.pages.services.consultation}</Link>
          <Link href={localizeHref(locale as Locale, "/products")} className="btn-secondary h-11">{dict.pages.services.seeProducts}</Link>
        </div>
      </PageHero>
      <section className="py-16 sm:py-20"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div className="grid gap-4 md:grid-cols-2">{services.map((service, index) => <FadeIn key={service.id} delayMs={index * 70} as="article"><article className="card-surface flex h-full flex-col rounded-[1.5rem] p-6 sm:p-7"><div className="flex items-center justify-between gap-4"><span className="font-display text-xs font-semibold tracking-[0.16em] text-muted uppercase">0{index + 1}</span><span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{dict.pages.services.badge}</span></div><h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-foreground">{service.title}</h2><p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">{service.description}</p><ul className="mt-6 space-y-2.5 border-t border-border/70 pt-5">{service.outcomes.map((outcome) => <li key={outcome} className="flex items-start gap-2.5 text-sm text-foreground/85"><span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span>{outcome}</span></li>)}</ul></article></FadeIn>)}</div><FadeIn delayMs={180}><div className="mt-14 overflow-hidden rounded-[1.75rem] border border-border/80 bg-accent px-7 py-9 text-white sm:px-10 sm:py-11"><div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-2xl"><p className="font-display text-sm font-semibold tracking-[0.18em] text-accent-secondary uppercase">{dict.pages.services.engagement}</p><h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{dict.pages.services.engagementTitle}</h2><p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">{dict.pages.services.engagementDescription}</p></div><Link href={`${localizeHref(locale as Locale, "/contact")}?intent=consultation`} className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-background px-7 text-sm font-medium text-foreground transition-[transform,opacity] hover:opacity-90 active:scale-[0.98]">{dict.pages.services.engagementCta}</Link></div></div></FadeIn></div></section>
    </main>
  );
}
