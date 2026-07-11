import Image from "next/image";

import { FadeIn } from "@/src/components/FadeIn";
import { clientCompanies } from "@/src/data/client-companies";
import { defaultLocale, getDictionary } from "@/src/lib/i18n";

interface ClientsSectionProps {
  dict?: ReturnType<typeof getDictionary>;
}

export function ClientsSection({ dict = getDictionary(defaultLocale) }: ClientsSectionProps) {
  return (
    <section className="border-t border-border/70 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-muted uppercase">
              {dict.home.clientsEyebrow}
            </p>
            <h2 className="mt-3 bg-gradient-to-r from-accent via-accent-hover to-foreground bg-clip-text font-display text-xl font-semibold tracking-[-0.03em] text-transparent sm:text-2xl">
              {dict.home.clientsTitle}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-8 flex flex-nowrap justify-between gap-3 overflow-x-auto pb-1 sm:mt-10 sm:gap-4 sm:overflow-visible sm:pb-0 lg:gap-5">
          {clientCompanies.map((client, index) => (
            <FadeIn key={client.id} delayMs={index * 40} className="w-[6.75rem] shrink-0 sm:w-auto sm:flex-1">
              <div className="flex flex-col items-center text-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full bg-[linear-gradient(180deg,#f8fafc_0%,#eef4f8_100%)] ring-1 ring-border/60 sm:h-28 sm:w-28 lg:h-32 lg:w-32">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 line-clamp-2 min-h-[2.4rem] max-w-[7.5rem] text-[0.75rem] leading-snug font-medium text-foreground/85 sm:max-w-none sm:min-h-[2.5rem] sm:text-[0.8rem] lg:text-[0.85rem]">
                  {client.name}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
