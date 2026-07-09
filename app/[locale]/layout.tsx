import { notFound } from "next/navigation";

import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { getDictionary, isLocale, type Locale } from "@/src/lib/i18n";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "mm" }];
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <Header locale={locale as Locale} dict={dict} />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer locale={locale as Locale} dict={dict} />
    </>
  );
}
