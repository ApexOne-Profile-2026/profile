import Link from "next/link";

import { ApexOneLogo } from "@/src/components/ApexOneLogo";
import { type Locale, localizeHref, getDictionary } from "@/src/lib/i18n";
import { footerCompanyItems, footerLegalItems, siteConfig } from "@/src/lib/site";

interface FooterProps {
  locale: Locale;
  dict: ReturnType<typeof getDictionary>;
}

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-border/80 bg-[linear-gradient(180deg,rgba(248,250,252,0.9)_0%,rgba(255,255,255,1)_45%)]">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-12 lg:px-8 lg:py-16">
        <div className="max-w-sm space-y-4">
          <ApexOneLogo />
          <p className="text-sm leading-relaxed text-muted">{dict.footer.description}</p>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex text-sm font-medium text-foreground transition-opacity hover:opacity-70">
            {siteConfig.email}
          </a>
          <ul className="space-y-1">
            {siteConfig.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="inline-flex text-sm font-medium text-foreground transition-opacity hover:opacity-70"
                >
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold tracking-[-0.02em] text-foreground">{dict.footer.explore}</p>
          <ul className="mt-4 space-y-2.5">
            {footerCompanyItems.map((item) => (
              <li key={item.href}>
                <Link href={localizeHref(locale, item.href)} className="text-sm text-muted transition-colors hover:text-foreground">
                  {dict.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold tracking-[-0.02em] text-foreground">{dict.footer.company}</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href={localizeHref(locale, "/")} className="text-sm text-muted transition-colors hover:text-foreground">
                {dict.footer.about}
              </Link>
            </li>
            {footerLegalItems.map((item) => (
              <li key={item.href}>
                <Link href={localizeHref(locale, item.href)} className="text-sm text-muted transition-colors hover:text-foreground">
                  {dict.footer[item.key]}
                </Link>
              </li>
            ))}
            <li>
              <span className="text-sm text-muted">{siteConfig.domain}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {year} {siteConfig.name}. {dict.footer.rights}</p>
          <p className="tracking-wide">{dict.footer.built}</p>
        </div>
      </div>
    </footer>
  );
}
