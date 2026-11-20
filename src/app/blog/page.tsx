import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";

export const metadata = {
  title: "Studio Journal & Notes | Xalveriq Pune",
  description:
    "Architectural notes, material guides, and space planning observations for apartment owners in Pune.",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="plan-note">Studio Journal</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-ink">
            Notes on spaces & materials.
          </h1>
          <p className="text-base text-text-muted leading-relaxed">
            Practical observations on cross-ventilation, plywood grades, modular kitchen layouts, and daylighting in Pune apartments.
          </p>
        </div>

        {/* Featured First Article */}
        {BLOG_POSTS[0] && (
          <article className="p-8 sm:p-12 bg-white border border-border rounded-[4px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] rounded-[4px] overflow-hidden border border-border bg-[#EFE9DF]">
                {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
                <Image
                  src={BLOG_POSTS[0].coverImage}
                  alt={BLOG_POSTS[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3 text-xs text-text-muted">
                  <span className="plan-note">{BLOG_POSTS[0].category}</span>
                  <span>•</span>
                  <span>{BLOG_POSTS[0].readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-normal text-ink">
                  {BLOG_POSTS[0].title}
                </h2>

                <p className="text-sm text-text-muted leading-relaxed">
                  {BLOG_POSTS[0].excerpt}
                </p>

                <div className="pt-2 text-xs text-text-muted border-t border-border/60">
                  <p>{BLOG_POSTS[0].content[0]}</p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-text-muted">
                  <span>By {BLOG_POSTS[0].author.name}</span>
                  <span className="plan-note">{BLOG_POSTS[0].date}</span>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <article
              key={post.slug}
              className="p-6 sm:p-8 bg-white border border-border rounded-[4px] space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] rounded-[2px] overflow-hidden border border-border bg-paper">
                  {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="flex items-center gap-3 text-xs text-text-muted">
                  <span className="plan-note">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-serif font-normal text-ink">
                  {post.title}
                </h3>

                <p className="text-xs text-text-muted leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs text-text-muted">
                <span>By {post.author.name}</span>
                <span className="plan-note">{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
