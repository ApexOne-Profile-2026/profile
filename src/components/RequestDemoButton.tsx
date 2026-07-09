"use client";

import Link from "next/link";

interface RequestDemoButtonProps {
  productTitle: string;
  productSlug: string;
  className?: string;
}

export function RequestDemoButton({
  productTitle,
  productSlug,
  className = "",
}: RequestDemoButtonProps) {
  const href = `/contact?product=${encodeURIComponent(productSlug)}&intent=demo`;

  return (
    <Link
      href={href}
      className={["btn-primary", className].filter(Boolean).join(" ")}
      aria-label={`Request a demo of ${productTitle}`}
    >
      Request Demo
    </Link>
  );
}
