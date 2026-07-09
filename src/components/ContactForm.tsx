"use client";

import { useMemo, useState, type FormEvent } from "react";
import { CheckCircle2, Mail } from "lucide-react";

import { products } from "@/src/data/products";
import { defaultLocale, getDictionary } from "@/src/lib/i18n";
import { siteConfig } from "@/src/lib/site";

interface ContactFormProps {
  initialProduct?: string;
  initialIntent?: string;
  dict?: ReturnType<typeof getDictionary>;
}

type Track = "flagship" | "custom";

const contactProductOptions = [
  "Real Estate Platform",
  "School management platform",
  "POS Point of Sales",
  "HR Application",
  "Car Showroom Platform",
  "Restaurant Software",
  "E-commerce Software",
] as const;

export function ContactForm({
  initialProduct = "",
  initialIntent = "general",
  dict = getDictionary(defaultLocale),
}: ContactFormProps) {
  const matchedProduct = useMemo(
    () => products.find((product) => product.slug === initialProduct),
    [initialProduct],
  );
  const intents = [
    { value: "general", label: dict.pages.contact.form.intents.general },
    { value: "demo", label: dict.pages.contact.form.intents.demo },
    { value: "consultation", label: dict.pages.contact.form.intents.consultation },
    { value: "partnership", label: dict.pages.contact.form.intents.partnership },
  ] as const;
  const defaultIntent = intents.some((intent) => intent.value === initialIntent)
    ? initialIntent
    : "general";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [productSlug, setProductSlug] = useState(matchedProduct?.title ?? "");
  const [intent, setIntent] = useState(defaultIntent);
  const [track, setTrack] = useState<Track>(matchedProduct ? "flagship" : "custom");
  const [message, setMessage] = useState(
    matchedProduct && defaultIntent === "demo"
      ? `I'd like a live demo of ${matchedProduct.title}.`
      : "",
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-[1.5rem] border border-border/80 bg-surface p-8 text-center shadow-[0_24px_70px_-44px_rgba(15,23,42,0.18)] sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-accent/10 text-accent">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <p className="mt-5 font-display text-sm font-semibold tracking-[0.18em] text-accent uppercase">
          {dict.pages.contact.form.successEyebrow}
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-foreground">
          {name ? `Thanks, ${name.split(" ")[0]}. ` : ""}
          {dict.pages.contact.form.successTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          {dict.pages.contact.form.successDescription}{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-1.5 font-medium text-foreground underline-offset-2 hover:underline"
          >
            <Mail className="h-3.5 w-3.5" />
            {siteConfig.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
          className="btn-secondary mt-8 h-11"
        >
          {dict.pages.contact.form.sendAnother}
        </button>
      </div>
    );
  }

  const fieldClass =
    "mt-0 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-muted focus:border-accent/40 focus:ring-4 focus:ring-accent/10";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.5rem] border border-border/80 bg-surface/95 p-6 shadow-[0_24px_70px_-44px_rgba(15,23,42,0.18)] sm:p-8"
      noValidate
    >
      <div className="mb-6 border-b border-border/70 pb-6">
        <h2 className="font-display text-lg font-semibold tracking-[-0.03em] text-foreground">
          {dict.pages.contact.formTitle}
        </h2>
      </div>

      {matchedProduct && intent === "demo" ? (
        <div className="mb-6 rounded-2xl border border-accent/20 bg-accent-light/80 px-4 py-3 text-sm text-accent">
          {dict.pages.contact.form.demoBanner}{" "}
          <span className="font-semibold">{matchedProduct.title}</span>. {dict.pages.contact.form.demoBannerTail}
        </div>
      ) : null}

      <div className="mb-6">
        <p className="mb-3 text-sm font-medium text-foreground">{dict.pages.contact.form.trackLabel}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              value: "flagship" as const,
              label: dict.pages.contact.form.tracks.flagship,
            },
            {
              value: "custom" as const,
              label: dict.pages.contact.form.tracks.custom,
            },
          ].map(({ value, label }) => {
            const active = track === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => {
                  setTrack(value);
                  if (value === "custom") {
                    setProductSlug("");
                  }
                }}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition ${
                  active
                    ? "border-accent/40 bg-accent-light text-foreground shadow-[0_0_0_1px_rgba(16,76,104,0.08)]"
                    : "border-border bg-background text-muted hover:border-accent/20 hover:bg-surface-elevated/60"
                }`}
              >
                <span className="text-sm font-medium">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-foreground">{dict.pages.contact.form.name}</span>
          <input
            required
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={fieldClass}
            placeholder={dict.pages.contact.form.placeholderName}
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-foreground">{dict.pages.contact.form.email}</span>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={fieldClass}
            placeholder={dict.pages.contact.form.placeholderEmail}
            autoComplete="email"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-foreground">{dict.pages.contact.form.company}</span>
          <input
            name="company"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className={fieldClass}
            placeholder={dict.pages.contact.form.placeholderCompany}
            autoComplete="organization"
          />
        </label>
        <label className={track === "custom" ? "block sm:col-span-2" : "block"}>
          <span className="mb-2 block text-sm font-medium text-foreground">{dict.pages.contact.form.interest}</span>
          <select
            name="intent"
            value={intent}
            onChange={(event) => setIntent(event.target.value)}
            className={fieldClass}
          >
            {intents.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        {track === "flagship" ? (
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-foreground">{dict.pages.contact.form.product}</span>
            <select
              name="product"
              value={productSlug}
              onChange={(event) => setProductSlug(event.target.value)}
              className={fieldClass}
            >
              <option value="">{dict.pages.contact.form.unknownProduct}</option>
              {contactProductOptions.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </label>
        ) : null}
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-foreground">{dict.pages.contact.form.message}</span>
          <textarea
            required
            name="message"
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={`${fieldClass} resize-y`}
            placeholder={dict.pages.contact.form.placeholderMessage}
          />
        </label>
      </div>

      <div className="mt-9 flex justify-end">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary shadow-[0_12px_28px_-18px_rgba(16,76,104,0.55)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? dict.pages.contact.form.sending : dict.pages.contact.form.send}
        </button>
      </div>
    </form>
  );
}
