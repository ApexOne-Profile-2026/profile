"use client";

import { useMemo, useState, type FormEvent } from "react";

import { products } from "@/src/data/products";
import { siteConfig } from "@/src/lib/site";

interface ContactFormProps {
  initialProduct?: string;
  initialIntent?: string;
}

const intents = [
  { value: "general", label: "General inquiry" },
  { value: "demo", label: "Request a demo" },
  { value: "consultation", label: "Book a consultation" },
  { value: "partnership", label: "Partnership" },
] as const;

export function ContactForm({
  initialProduct = "",
  initialIntent = "general",
}: ContactFormProps) {
  const matchedProduct = useMemo(
    () => products.find((product) => product.slug === initialProduct),
    [initialProduct],
  );

  const defaultIntent = intents.some((intent) => intent.value === initialIntent)
    ? initialIntent
    : "general";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [productSlug, setProductSlug] = useState(matchedProduct?.slug ?? "");
  const [intent, setIntent] = useState(defaultIntent);
  const [message, setMessage] = useState(
    matchedProduct && defaultIntent === "demo"
      ? `I'd like a live demo of ${matchedProduct.title}.`
      : "",
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-[1.5rem] border border-border/80 bg-surface p-8 text-center sm:p-10">
        <p className="font-display text-sm font-semibold tracking-[0.18em] text-accent uppercase">
          Message received
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-foreground">
          Thanks{name ? `, ${name.split(" ")[0]}` : ""}. We’ll be in touch.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Your inquiry is noted. For a faster reply, you can also reach us at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-foreground underline-offset-2 hover:underline"
          >
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
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-muted/70 focus:border-accent/40 focus:ring-4 focus:ring-accent/10";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.5rem] border border-border/80 bg-surface p-6 shadow-[0_1px_0_rgba(15,23,42,0.03)] sm:p-8"
      noValidate
    >
      {matchedProduct && intent === "demo" ? (
        <div className="mb-6 rounded-2xl border border-accent/20 bg-accent-light/80 px-4 py-3 text-sm text-accent">
          Demo request for{" "}
          <span className="font-semibold">{matchedProduct.title}</span>. We’ll
          tailor the walkthrough to your workflow.
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Full name
          <input
            required
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={fieldClass}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>

        <label className="block text-sm font-medium text-foreground">
          Work email
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={fieldClass}
            placeholder="you@company.com"
            autoComplete="email"
          />
        </label>

        <label className="block text-sm font-medium text-foreground sm:col-span-2">
          Company
          <input
            name="company"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className={fieldClass}
            placeholder="Company or organization"
            autoComplete="organization"
          />
        </label>

        <label className="block text-sm font-medium text-foreground">
          Interest
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

        <label className="block text-sm font-medium text-foreground">
          Product
          <select
            name="product"
            value={productSlug}
            onChange={(event) => setProductSlug(event.target.value)}
            className={fieldClass}
          >
            <option value="">Not sure yet</option>
            {products.map((product) => (
              <option key={product.id} value={product.slug}>
                {product.title}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-foreground sm:col-span-2">
          How can we help?
          <textarea
            required
            name="message"
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={`${fieldClass} resize-y`}
            placeholder="Tell us about your goals, timeline, or the demo you’d like."
          />
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted">
          By submitting, you agree we may reply by email about your inquiry.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
