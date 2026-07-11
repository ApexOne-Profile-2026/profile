import { Globe, Mail, Phone } from "lucide-react";

import { FacebookIcon } from "@/src/components/icons/ContactIcons";
import { type Locale, getDictionary } from "@/src/lib/i18n";
import { siteConfig } from "@/src/lib/site";

interface ContactDirectLinesProps {
  locale?: Locale;
  dict?: ReturnType<typeof getDictionary>;
}

export function ContactDirectLines({
  locale = "en",
  dict = getDictionary(locale),
}: ContactDirectLinesProps) {
  const items = [
    {
      label: dict.pages.contact.email,
      icon: Mail,
      iconClassName: "bg-sky-100 text-sky-700",
      content: (
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          {siteConfig.email}
        </a>
      ),
    },
    {
      label: dict.pages.contact.phone,
      icon: Phone,
      iconClassName: "bg-emerald-100 text-emerald-700",
      content: (
        <ul className="space-y-1.5">
          {siteConfig.phones.map((phone) => (
            <li key={phone}>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                {phone}
              </a>
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: dict.pages.contact.facebook,
      icon: FacebookIcon,
      iconClassName: "bg-blue-100 text-blue-700",
      content: (
        <a
          href={siteConfig.facebook}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          apexonesolution
        </a>
      ),
    },
    {
      label: dict.pages.contact.domain,
      icon: Globe,
      iconClassName: "bg-violet-100 text-violet-700",
      content: <p className="text-sm font-medium text-foreground">{siteConfig.domain}</p>,
    },
  ] as const;

  return (
    <aside className="space-y-6">
      <div>
        <div className="inline-flex items-center rounded-full border border-border/70 bg-surface/80 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.22em] text-accent/80 uppercase">
          {dict.pages.contact.introEyebrow}
        </div>
        <h2 className="mt-3 max-w-lg bg-gradient-to-r from-accent via-accent-hover to-foreground bg-clip-text font-display text-xl font-semibold tracking-[-0.03em] text-transparent sm:text-2xl">
          {dict.pages.contact.introTitle}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
          {dict.pages.contact.introDescription}
        </p>
      </div>

      <div className="space-y-3.5">
        {items.map(({ label, icon: Icon, iconClassName, content }) => (
          <div key={label} className="rounded-[1.25rem] border border-border/80 bg-surface/90 p-4 shadow-[0_16px_50px_-40px_rgba(15,23,42,0.22)]">
            <div className="flex items-start gap-4">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClassName}`}>
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.72rem] font-semibold tracking-[0.2em] text-muted uppercase">
                  {label}
                </p>
                <div className="mt-2">{content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
