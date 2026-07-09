import type { Metadata } from "next";
import Link from "next/link";

import { formatBlogDate } from "@/src/components/BlogContent";
import { FadeIn } from "@/src/components/FadeIn";
import { PageHero } from "@/src/components/PageHero";
import { blogs } from "@/src/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights from ApexOne on POS, real estate platforms, education software, and product craft.",
  alternates: { canonical: "/blog" },
};

const coverAccents = [
  "from-sky-400/25 via-slate-100 to-cyan-300/20",
  "from-slate-700/20 via-slate-100 to-sky-200/30",
  "from-cyan-400/20 via-white to-sky-300/25",
] as const;

export default function BlogIndexPage() {
  const posts = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Blog"
        title="Notes on shipping software that operators trust."
        description="Practical writing on retail systems, property platforms, student software, and the craft behind durable products."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <FadeIn key={post.id} delayMs={index * 70} as="article">
                <article className="card-surface group flex h-full flex-col overflow-hidden rounded-[1.5rem] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-sky-200/80 hover:shadow-[0_28px_60px_-36px_rgba(15,23,42,0.35)]">
                  <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                    <div
                      className={`relative h-40 bg-gradient-to-br ${coverAccents[index % coverAccents.length]}`}
                    >
                      <div className="absolute inset-x-4 bottom-4">
                        <time
                          dateTime={post.date}
                          className="inline-flex rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-sky-700 backdrop-blur-md"
                        >
                          {formatBlogDate(post.date)}
                        </time>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-display text-lg font-semibold tracking-[-0.03em] text-foreground">
                        {post.title}
                      </h2>
                      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                        {post.excerpt}
                      </p>
                      <div className="mt-6 flex items-center justify-between text-sm">
                        <span className="text-muted">
                          {post.author ?? "ApexOne"}
                        </span>
                        <span className="font-medium text-foreground transition-opacity group-hover:opacity-70">
                          Read →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
