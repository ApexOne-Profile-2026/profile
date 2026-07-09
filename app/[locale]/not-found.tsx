import Link from "next/link";

import { defaultLocale, getDictionary } from "@/src/lib/i18n";

const dict = getDictionary(defaultLocale);

export default function NotFound() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(56,189,248,0.16),transparent_55%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <p className="font-display text-sm font-semibold tracking-[0.22em] text-accent uppercase">404</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">{dict.pages.notFound.title}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{dict.pages.notFound.description}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"><Link href="/en" className="btn-primary">{dict.pages.notFound.backHome}</Link><Link href="/en/products" className="btn-secondary">{dict.pages.notFound.browseProducts}</Link><Link href="/en/contact" className="inline-flex h-12 items-center justify-center rounded-full px-4 text-sm font-medium text-muted transition-colors hover:text-accent">{dict.pages.notFound.contact}</Link></div>
      </div>
    </main>
  );
}
