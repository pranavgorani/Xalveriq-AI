"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function CategorySlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const categories = SITE_DATA.roomCategories;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-bronze mb-3">
              <span className="w-6 h-px bg-bronze" />
              <span>Tailored Room Architecture</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B] tracking-tight">
              Design Your Space
            </h2>
            <p className="mt-3 text-base text-[#645F58] leading-relaxed">
              Explore bespoke architectural concepts across 10 specialized residential zones, engineered specifically for contemporary builder layouts.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-[#E0D7C9] bg-white text-[#18181B] hover:border-bronze hover:bg-ivory-100 flex items-center justify-center transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-bronze"
              aria-label="Scroll categories left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-[#E0D7C9] bg-white text-[#18181B] hover:border-bronze hover:bg-ivory-100 flex items-center justify-center transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-bronze"
              aria-label="Scroll categories right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Draggable Slider Container */}
      <div className="w-full">
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-6 lg:px-8 cursor-grab active:cursor-grabbing pb-6"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex-shrink-0 w-[82vw] sm:w-[45vw] md:w-[32vw] lg:w-[23.5vw] min-w-[260px] max-w-[340px] luxury-card overflow-hidden group flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-ivory-200">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 35vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#18181B] tracking-wide uppercase">
                  {cat.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#18181B] mb-2 group-hover:text-bronze transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#645F58] leading-relaxed line-clamp-3">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#ECE5DA] flex items-center justify-between">
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-bronze hover:text-bronze-dark tracking-wide uppercase"
                  >
                    <span>Explore Designs</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <span className="text-[11px] font-mono text-[#9C958B]">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
