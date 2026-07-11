import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ClientsSection } from "@/src/components/home/ClientsSection";
import { HeroSection } from "@/src/components/home/HeroSection";
import { HowWeWorkSection } from "@/src/components/home/HowWeWorkSection";
import { ProductsSection } from "@/src/components/home/ProductsSection";
import { TechStackSection } from "@/src/components/home/TechStackSection";
// Temporary: hide Testimonials on home page
// import { TestimonialsSection } from "@/src/components/home/TestimonialsSection";
import { getHomeShareMetadata } from "@/src/lib/home-metadata";
import { getDictionary, isLocale, type Locale } from "@/src/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getHomeShareMetadata(`/${locale}`);
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <main className="flex flex-1 flex-col">
      <HeroSection locale={locale as Locale} dict={dict} />
      <ProductsSection locale={locale as Locale} dict={dict} />
      <ClientsSection dict={dict} />
      <TechStackSection dict={dict} />
      <HowWeWorkSection dict={dict} />
      {/* <TestimonialsSection dict={dict} /> */}
    </main>
  );
}
