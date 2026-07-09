import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactDirectLines } from "@/src/components/ContactDirectLines";
import { ContactForm } from "@/src/components/ContactForm";
import { FadeIn } from "@/src/components/FadeIn";
import { getDictionary, isLocale, type Locale } from "@/src/lib/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? (locale as Locale) : "en");
  return { title: dict.pages.contact.title, description: dict.pages.contact.heroDescription };
}

export default async function ContactPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ product?: string; intent?: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const query = await searchParams;
  const product = typeof query.product === "string" ? query.product : "";
  const intent = typeof query.intent === "string" ? query.intent : "general";

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative isolate overflow-hidden py-16 sm:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,252,254,0)_0%,rgba(251,252,254,0.85)_72%,rgba(251,252,254,1)_100%)]" />
          <div className="absolute top-24 right-[-12%] h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-[-8%] h-[22rem] w-[22rem] rounded-full bg-slate-900/5 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[4fr_8fr] lg:gap-12 lg:px-8">
          <FadeIn className="w-full self-start">
            <ContactDirectLines locale={locale as Locale} dict={dict} />
          </FadeIn>
          <FadeIn delayMs={90} className="w-full self-start">
            <ContactForm initialProduct={product} initialIntent={intent} dict={dict} />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
