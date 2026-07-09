import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogContent, formatBlogDate } from "@/src/components/BlogContent";
import { FadeIn } from "@/src/components/FadeIn";
import { blogs, getBlogBySlug } from "@/src/data/blogs";
import { siteConfig } from "@/src/lib/site";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${siteConfig.name}`,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const morePosts = blogs
    .filter((item) => item.id !== post.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <main className="flex flex-1 flex-col">
      <article>
        <header className="relative overflow-hidden border-b border-border/70">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(56,189,248,0.14),transparent_55%)]"
          />
          <div className="relative mx-auto max-w-3xl px-4 pt-14 pb-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-14">
            <FadeIn>
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-sm text-muted"
              >
                <Link href="/" className="transition-colors hover:text-accent">
                  Home
                </Link>
                <span aria-hidden>/</span>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-accent"
                >
                  Blog
                </Link>
                <span aria-hidden>/</span>
                <span className="truncate text-foreground">{post.title}</span>
              </nav>
            </FadeIn>

            <FadeIn delayMs={70}>
              <p className="mt-8 font-display text-sm font-semibold tracking-[0.18em] text-accent uppercase">
                Insights
              </p>
              <h1 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl sm:leading-[1.08]">
                {post.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {post.excerpt}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/70 pt-6 text-sm text-muted">
                <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                {post.author ? (
                  <>
                    <span aria-hidden className="text-border">
                      ·
                    </span>
                    <span>{post.author}</span>
                  </>
                ) : null}
              </div>
            </FadeIn>
          </div>
        </header>

        <FadeIn delayMs={100}>
          <div
            aria-hidden
            className="mx-auto mt-8 h-48 max-w-4xl overflow-hidden rounded-[1.5rem] border border-border/80 bg-gradient-to-br from-accent/12 via-slate-100 to-accent-light sm:mt-10 sm:h-64"
          >
            <div className="flex h-full items-end p-6">
              <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
                Cover · {post.slug}
              </span>
            </div>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <FadeIn>
            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:tracking-[-0.03em] prose-headings:text-foreground prose-p:text-foreground/85 prose-li:text-foreground/85 prose-strong:text-foreground prose-a:text-accent hover:prose-a:text-accent-hover">
              <BlogContent content={post.content} />
            </div>
          </FadeIn>

          <FadeIn delayMs={80}>
            <div className="card-surface mt-14 flex flex-col gap-4 rounded-[1.5rem] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <p className="font-display text-lg font-semibold tracking-[-0.03em] text-foreground">
                  Want something built for your team?
                </p>
                <p className="mt-1 text-sm text-muted">
                  Tell us about your product goals—we’ll respond with a clear next step.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-primary h-11 shrink-0"
              >
                Book a consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </article>

      {morePosts.length > 0 ? (
        <section className="border-t border-border/70 bg-surface/30 py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-foreground">
                Keep reading
              </h2>
            </FadeIn>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {morePosts.map((item, index) => (
                <FadeIn key={item.id} delayMs={index * 70}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="card-surface group flex h-full flex-col rounded-[1.35rem] p-5 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-accent/25"
                  >
                    <time
                      dateTime={item.date}
                      className="text-xs font-medium tracking-wide text-muted uppercase"
                    >
                      {formatBlogDate(item.date)}
                    </time>
                    <h3 className="mt-3 font-display text-base font-semibold tracking-[-0.02em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                      {item.excerpt}
                    </p>
                    <span className="mt-4 text-sm font-medium text-foreground transition-opacity group-hover:opacity-70">
                      Read article →
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
