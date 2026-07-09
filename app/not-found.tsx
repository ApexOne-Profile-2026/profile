import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: `The page you’re looking for doesn’t exist on ${siteConfig.domain}.`,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(56,189,248,0.16),transparent_55%)]"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <p className="font-display text-sm font-semibold tracking-[0.22em] text-sky-800/80 uppercase">
          404
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
          This page left the building.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          The link may be outdated, or the page hasn’t been published yet. Let’s
          get you back to something useful on {siteConfig.name}.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="btn-primary"
          >
            Back to home
          </Link>
          <Link
            href="/products"
            className="btn-secondary"
          >
            Browse products
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full px-4 text-sm font-medium text-muted transition-colors hover:text-sky-700"
          >
            Contact us
          </Link>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-3">
          {[
            { href: "/services", label: "Services", hint: "How we engage" },
            { href: "/blog", label: "Blog", hint: "Product insights" },
            { href: "/contact?intent=demo", label: "Request demo", hint: "See a walkthrough" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card-surface rounded-2xl px-5 py-4 transition-[border-color,transform] hover:-translate-y-0.5 hover:border-sky-200/80"
            >
              <p className="font-display text-sm font-semibold tracking-[-0.02em] text-foreground">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-muted">{item.hint}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
