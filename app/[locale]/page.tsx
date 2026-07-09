import { notFound } from "next/navigation";

import { HeroSection } from "@/src/components/home/HeroSection";
import { ProductsSection } from "@/src/components/home/ProductsSection";
import { TechStackSection } from "@/src/components/home/TechStackSection";
import { TestimonialsSection } from "@/src/components/home/TestimonialsSection";
import { getDictionary, isLocale, type Locale } from "@/src/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <main className="flex flex-1 flex-col">
      <HeroSection locale={locale as Locale} dict={dict} />
      <ProductsSection locale={locale as Locale} dict={dict} />
      <TechStackSection dict={dict} />
      <TestimonialsSection dict={dict} />
    </main>
  );
}
