import { siteConfig } from "@/src/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://apexonemm.tech/#organization",
        name: siteConfig.name,
        url: "https://apexonemm.tech",
        logo: "https://apexonemm.tech/brand/apexone-logo.png",
        email: siteConfig.email,
        telephone: [...siteConfig.phones],
        sameAs: [siteConfig.facebook],
        description:
          "ApexOne builds modern software products and digital solutions for businesses in Myanmar and beyond.",
        areaServed: {
          "@type": "Country",
          name: "Myanmar",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://apexonemm.tech/#website",
        url: "https://apexonemm.tech",
        name: siteConfig.name,
        description: siteConfig.tagline,
        publisher: {
          "@id": "https://apexonemm.tech/#organization",
        },
        inLanguage: ["en", "my"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
