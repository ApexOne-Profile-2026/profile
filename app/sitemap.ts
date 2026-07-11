import type { MetadataRoute } from "next";

import { blogs } from "@/src/data/blogs";
import { products } from "@/src/data/products";
import { locales } from "@/src/lib/i18n";

const baseUrl = "https://apexonemm.tech";

function localizedPaths(path: string) {
  const normalized = path === "/" ? "" : path;
  return [
    `${baseUrl}${normalized || "/"}`,
    ...locales.map((locale) => `${baseUrl}/${locale}${normalized}`),
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = ["/", "/products", "/services", "/contact", "/blog"];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.flatMap((path) =>
    localizedPaths(path).map((url) => ({
      url,
      lastModified: now,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path === "/products" || path === "/services" ? 0.9 : 0.7,
    })),
  );

  const productEntries: MetadataRoute.Sitemap = products.flatMap((product) =>
    localizedPaths(`/products/${product.slug}`).map((url) => ({
      url,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  );

  const blogEntries: MetadataRoute.Sitemap = blogs.flatMap((post) =>
    localizedPaths(`/blog/${post.slug}`).map((url) => ({
      url,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  );

  return [...staticEntries, ...productEntries, ...blogEntries];
}
