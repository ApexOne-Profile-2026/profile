"use client";

import Link from "next/link";

import { defaultLocale, getDictionary, type Locale, localizeHref } from "@/src/lib/i18n";

interface RequestDemoButtonProps {
  productTitle: string;
  productSlug: string;
  locale?: Locale;
  dict?: ReturnType<typeof getDictionary>;
  className?: string;
}

export function RequestDemoButton({
  productTitle,
  productSlug,
  locale = defaultLocale,
  dict = getDictionary(defaultLocale),
  className = "",
}: RequestDemoButtonProps) {
  const href = `${localizeHref(locale, "/contact")}?product=${encodeURIComponent(productSlug)}&intent=demo`;

  return (
    <Link
      href={href}
      className={["btn-primary", className].filter(Boolean).join(" ")}
      aria-label={`${dict.pages.productDetail.requestDemo}: ${productTitle}`}
    >
      {dict.pages.productDetail.requestDemo}
    </Link>
  );
}
