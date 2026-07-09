import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { formatBlogDate } from "@/src/components/BlogContent";
import { FadeIn } from "@/src/components/FadeIn";
import { PageHero } from "@/src/components/PageHero";
import { blogs } from "@/src/data/blogs";
import { getDictionary, isLocale, localizeHref, type Locale } from "@/src/lib/i18n";

const coverAccents = [
  "from-accent/15 via-slate-100 to-accent-light",
  "from-accent/12 via-slate-100 to-accent-light",
  "from-accent-secondary/12 via-white to-accent-light",
] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? (locale as Locale) : "en");
  return { title: dict.pages.blog.title, description: dict.pages.blog.heroDescription };
}

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const posts = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="flex flex-1 flex-col">
      <PageHero eyebrow={dict.pages.blog.title} title={dict.pages.blog.heroTitle} description={dict.pages.blog.heroDescription} />
      <section className="py-16 sm:py-20"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{posts.map((post, index) => <FadeIn key={post.id} delayMs={index * 70} as="article"><article className="card-surface group flex h-full flex-col overflow-hidden rounded-[1.5rem] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_28px_60px_-36px_rgba(15,23,42,0.35)]"><Link href={localizeHref(locale as Locale, `/blog/${post.slug}`)} className="flex h-full flex-col"><div className={`relative h-40 bg-gradient-to-br ${coverAccents[index % coverAccents.length]}`}><div className="absolute inset-x-4 bottom-4"><time dateTime={post.date} className="inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-accent backdrop-blur-md">{formatBlogDate(post.date)}</time></div></div><div className="flex flex-1 flex-col p-6"><h2 className="font-display text-lg font-semibold tracking-[-0.03em] text-foreground">{post.title}</h2><p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p><div className="mt-6 flex items-center justify-between text-sm"><span className="text-muted">{post.author ?? "ApexOne"}</span><span className="font-medium text-foreground transition-opacity group-hover:opacity-70">{dict.pages.blog.read} →</span></div></div></Link></article></FadeIn>)}</div></div></section>
    </main>
  );
}
