import Image from "next/image";
import { Sparkles, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";

export const metadata = {
  title: "Interior Design Journal & Inspiration | Xalveriq Pune",
  description:
    "Expert architectural insights on luxury interior trends, 2 & 3 BHK apartment space planning, material durability guides, and Vastu integration in Pune.",
};

export default function BlogPage() {
  return (
    <div className="relative pt-32 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DCCF] text-[#6D4AFF] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#14A8D6]" />
            <span>The Xalveriq Journal</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-[#16161D] tracking-tight">
            Spatial <span className="text-ai-gradient">Intelligence.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5E5A55] font-normal leading-relaxed">
            Architectural thought leadership, space planning case studies, and material science guides curated specifically for modern Pune living.
          </p>
        </div>

        {/* Featured First Article */}
        {BLOG_POSTS[0] && (
          <div className="rounded-3xl bg-white border border-[#E4DCCF] overflow-hidden shadow-sm hover:border-[#B08A57] transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative w-full aspect-[16/10] bg-[#F1EBE1]">
                {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
                <Image
                  src={BLOG_POSTS[0].coverImage}
                  alt={BLOG_POSTS[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 border border-[#E4DCCF] text-[10px] font-mono font-bold text-[#8E6835] backdrop-blur-md uppercase shadow-xs">
                  Featured Insight
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#5E5A55]">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#E4DCCF] text-[#6D4AFF] font-bold">
                    {BLOG_POSTS[0].category}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3 text-[#14A8D6]" /> {BLOG_POSTS[0].readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#16161D] leading-tight">
                  {BLOG_POSTS[0].title}
                </h2>

                <p className="text-xs sm:text-sm text-[#5E5A55] font-normal leading-relaxed">
                  {BLOG_POSTS[0].excerpt}
                </p>

                {/* Excerpt Paragraphs */}
                <div className="space-y-2 text-xs text-[#5E5A55] font-normal pt-2 border-t border-[#E4DCCF]">
                  <p>{BLOG_POSTS[0].content[0]}</p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E4DCCF] shadow-xs">
                    {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
                    <Image
                      src={BLOG_POSTS[0].author.avatar}
                      alt={BLOG_POSTS[0].author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#16161D]">{BLOG_POSTS[0].author.name}</h4>
                    <p className="text-[10px] text-[#8E6835] font-semibold">{BLOG_POSTS[0].author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <div
              key={post.slug}
              className="rounded-3xl bg-white border border-[#E4DCCF] hover:border-[#B08A57] p-6 transition-all duration-300 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-[#F1EBE1] border border-[#E4DCCF]">
                  {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-white/90 border border-[#E4DCCF] text-[10px] font-mono font-bold text-[#16161D] backdrop-blur-md shadow-xs">
                    {post.category}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#5E5A55] mb-2">
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3 h-3 text-[#8E6835]" /> {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3 text-[#14A8D6]" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#16161D] mb-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-[#5E5A55] font-normal leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="space-y-2 text-xs text-[#5E5A55] font-normal pt-3 border-t border-[#E4DCCF]">
                  <p className="line-clamp-3">{post.content[0]}</p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-6 border-t border-[#E4DCCF] mt-6">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#E4DCCF] shadow-xs">
                  {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#16161D]">{post.author.name}</h4>
                  <p className="text-[10px] text-[#8E6835] font-semibold">{post.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
