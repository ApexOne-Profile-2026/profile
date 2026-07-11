import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";

import { OrganizationJsonLd } from "@/src/components/seo/OrganizationJsonLd";
import { siteConfig } from "@/src/lib/site";

import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-display", subsets: ["latin"] });

const siteTitle = `${siteConfig.name} | Software that transforms how businesses run.`;
const siteDescription =
  "From production-ready platforms to custom software development. We engineer high-quality digital tools designed to help your business grow.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteDescription,
  metadataBase: new URL("https://apexonemm.tech"),
  applicationName: siteConfig.name,
  keywords: [
    "ApexOne",
    "Apex One",
    "apex one myanmar",
    "ApexOne Myanmar",
    "apexonemm.tech",
    "software Myanmar",
    "apexone software Myanmar",
    "POS",
    "ApexOne POS",
    "Real Estate Myanmar",
    "ApexOne Real Estate Myanmar",
    "custom software",
    "web development",
    "mobile apps",
  ],
  authors: [{ name: siteConfig.name, url: "https://apexonemm.tech" }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      my: "/mm",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apexonemm.tech",
    siteName: siteConfig.name,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ApexOne logo",
      },
      {
        url: "/brand/apexone-logo.png",
        width: 500,
        height: 500,
        alt: "ApexOne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image", "/brand/apexone-logo.png"],
  },
  icons: {
    icon: "/brand/apexone-logo.png",
    apple: "/brand/apexone-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full bg-[#fbfcfe] antialiased`}>
      <body className="flex min-h-full flex-col bg-[#fbfcfe] text-[#0b1220]">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
