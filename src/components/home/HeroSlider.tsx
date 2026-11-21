"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Clock, Compass, Sparkles } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = SITE_DATA.heroSlides;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(nextSlide, 6500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  const active = slides[currentSlide];

  return (
    <section
      className="relative w-full h-screen min-h-[640px] max-h-[960px] overflow-hidden bg-[#0F0E0D] text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Cinematic Interior Design Hero Showcase"
    >
      {/* Background Images with Crossfade & Ken Burns Zoom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full overflow-hidden">
            <motion.div
              initial={{ scale: 1.0 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: 7, ease: "linear" }}
              className="w-full h-full relative"
            >
              <Image
                src={active.image}
                alt={active.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </div>

          {/* Cinematic Dark Gradient Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-20 pb-24">
        <div className="max-w-3xl space-y-6">
          {/* Tagline / Category Pill */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`tag-${active.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs tracking-wider uppercase font-medium text-bronze-light"
            >
              <span className="w-2 h-2 rounded-full bg-bronze animate-pulse" />
              <span>{active.roomTag}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80">Nashik & Regional Estates</span>
            </motion.div>
          </AnimatePresence>

          {/* Animated Headline Reveal */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${active.id}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-white drop-shadow-md"
            >
              {active.title}
            </motion.h1>
          </AnimatePresence>

          {/* Subheadline */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${active.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg lg:text-xl text-white/85 font-sans leading-relaxed max-w-2xl drop-shadow"
            >
              {active.subtitle}
            </motion.p>
          </AnimatePresence>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-bronze text-sm sm:text-base py-3.5 px-7 rounded-lg shadow-luxury"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline-light text-sm sm:text-base py-3.5 px-7 rounded-lg"
            >
              <span>Explore Our Work</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Bottom Stat Strip */}
      <div className="absolute bottom-6 left-0 right-0 z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-auto bg-black/60 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 sm:px-6 sm:py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-white/90">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-bronze" />
              <span className="font-medium">45-Day Delivery Guarantee</span>
            </div>
            <div className="hidden sm:block h-3.5 w-px bg-white/20" />

            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-bronze" />
              <span className="font-medium">AI Spatial Design</span>
            </div>
            <div className="hidden sm:block h-3.5 w-px bg-white/20" />

            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-bronze" />
              <span className="font-medium">Bespoke Luxury Architecture</span>
            </div>
            <div className="hidden sm:block h-3.5 w-px bg-white/20" />

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-bronze" />
              <span className="font-medium">10-Year Turnkey Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators (Pills with Active Animation) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-20 z-20 flex items-center gap-2 sm:gap-3">
        {slides.map((s, idx) => {
          const isActive = idx === currentSlide;
          return (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full h-1.5 focus:outline-none ${
                isActive ? "w-8 sm:w-10 bg-bronze" : "w-2.5 sm:w-3 bg-white/35 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}: ${s.roomTag}`}
            />
          );
        })}
      </div>
    </section>
  );
}
