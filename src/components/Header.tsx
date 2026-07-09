"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ApexOneLogo } from "@/src/components/ApexOneLogo";
import { navLinks } from "@/src/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300",
        "border-b backdrop-blur-xl backdrop-saturate-150",
        scrolled || open
          ? "border-border/80 bg-background/75 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
          : "border-transparent bg-background/55",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <ApexOneLogo onClick={() => setOpen(false)} />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                isActive(link.href)
                  ? "text-foreground"
                  : "text-muted hover:text-foreground",
              ].join(" ")}
            >
              {link.label}
              <span
                aria-hidden
                className={[
                  "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-foreground transition-transform duration-300",
                  isActive(link.href) ? "scale-x-100" : "scale-x-0",
                ].join(" ")}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="btn-primary h-10 px-5 text-sm">
            Talk to us
          </Link>
        </div>

        <button
          type="button"
          className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background/60 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span className="relative block h-3.5 w-4">
            <span
              className={[
                "absolute left-0 block h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ease-out",
                open ? "top-[6px] rotate-45" : "top-0",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[6px] block h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ease-out",
                open ? "translate-x-1 opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 block h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ease-out",
                open ? "top-[6px] -rotate-45" : "top-[12px]",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={[
          "overflow-hidden border-t transition-[max-height,opacity,border-color] duration-300 ease-out md:hidden",
          open
            ? "max-h-[28rem] border-border/80 opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0",
        ].join(" ")}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 bg-background/95 px-4 py-4 sm:px-6"
          aria-label="Mobile"
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
              className={[
                "rounded-xl px-4 py-3 text-base font-medium transition-all duration-300",
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                isActive(link.href)
                  ? "bg-foreground/[0.04] text-foreground"
                  : "text-muted hover:bg-foreground/[0.03] hover:text-foreground",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={[
              "btn-primary mt-2 h-11 w-full",
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
            ].join(" ")}
            style={{
              transitionDelay: open ? `${navLinks.length * 40}ms` : "0ms",
            }}
          >
            Talk to us
          </Link>
        </nav>
      </div>
    </header>
  );
}
