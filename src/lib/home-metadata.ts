import type { Metadata } from "next";

import { siteConfig } from "@/src/lib/site";

const siteTitle = `${siteConfig.name} | Software that transforms how businesses run.`;
const siteDescription =
  "From production-ready platforms to custom software development. We engineer high-quality digital tools designed to help your business grow.";

const homeShareImage = {
  url: "/og-home",
  width: 1200,
  height: 630,
  alt: "ApexOne logo",
} as const;

/** Share metadata for `/`, `/en`, and `/mm` only. */
export function getHomeShareMetadata(url: string = "/"): Metadata {
  return {
    title: siteTitle,
    description: siteDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: siteTitle,
      description: siteDescription,
      images: [homeShareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [homeShareImage.url],
    },
  };
}
