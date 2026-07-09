import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";

import { siteConfig } from "@/src/lib/site";

import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: "ApexOne builds modern software products and digital solutions. apexonemm.tech",
  metadataBase: new URL("https://apexonemm.tech"),
  icons: {
    icon: "/brand/apexone-logo.png",
    apple: "/brand/apexone-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full bg-[#fbfcfe] antialiased`}>
      <body className="flex min-h-full flex-col bg-[#fbfcfe] text-[#0b1220]">{children}</body>
    </html>
  );
}
