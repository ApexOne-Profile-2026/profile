export const siteConfig = {
  name: "ApexOne",
  domain: "apexonemm.tech",
  email: "solution@apexonemm.tech",
  phones: ["+959 971238411", "+959943242548"] as const,
  facebook: "https://web.facebook.com/apexonesolution/",
  tagline: "Software that moves business forward.",
} as const;

export const navItems = [
  { key: "home", href: "/" },
  { key: "products", href: "/products" },
  { key: "services", href: "/services" },
  // Temporary: hide Blog from header
  // { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

export const footerCompanyItems = [
  { key: "products", href: "/products" },
  { key: "services", href: "/services" },
  // Temporary: hide Blog from footer
  // { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

export const footerLegalItems = [
  { key: "privacy", href: "/privacy" },
  { key: "terms", href: "/terms" },
] as const;
