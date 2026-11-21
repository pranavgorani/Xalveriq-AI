"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight, MapPin } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function TestimonialSlider() {
  const testimonials = SITE_DATA.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(next, 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, next]);

  // Mobile Touch handling
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const active = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E0D7C9] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-bronze mb-3">
            <span className="w-6 h-px bg-bronze" />
            <span>Verified Homeowner Stories</span>
            <span className="w-6 h-px bg-bronze" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B] tracking-tight">
            Words From Our Patrons
          </h2>

          <p className="mt-3 text-base text-[#645F58] leading-relaxed">
            Read how doctors, industrialists, advocates, and NRI families across Nashik experienced our 45-day architectural delivery.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[380px] sm:min-h-[320px] p-8 sm:p-12 rounded-3xl bg-white border border-[#E0D7C9] shadow-luxury flex flex-col justify-between">
            {/* Ambient Background Quote Glyph */}
            <Quote className="absolute right-8 bottom-8 w-24 h-24 text-ivory-200/80 -rotate-12 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 space-y-6"
              >
                {/* Star Rating & Location Pill */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1 text-bronze">
                    {[...Array(active.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-bronze text-bronze" />
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory-100 border border-[#E0D7C9] text-xs font-medium text-[#18181B]">
                    <MapPin className="w-3.5 h-3.5 text-bronze" />
                    <span>{active.location}</span>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="font-serif text-lg sm:text-2xl text-[#18181B] leading-relaxed font-normal italic">
                  “{active.quote}”
                </p>

                {/* Client Profile Lockup */}
                <div className="pt-4 border-t border-[#ECE5DA] flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-bronze bg-ivory-200">
                      <Image
                        src={active.image}
                        alt={active.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-medium text-[#18181B]">
                        {active.name}
                      </h4>
                      <p className="text-xs text-[#645F58]">
                        {active.role} • {active.projectType}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-[#9C958B]">
                    0{currentIndex + 1} / 0{testimonials.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-8 bg-bronze" : "w-2 bg-[#E0D7C9] hover:bg-[#18181B]"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#E0D7C9] bg-white hover:border-bronze text-[#18181B] flex items-center justify-center transition-all shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#E0D7C9] bg-white hover:border-bronze text-[#18181B] flex items-center justify-center transition-all shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CTA Banner After Testimonials */}
          <div className="mt-14 p-8 rounded-2xl bg-[#181716] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-luxury">
            <div className="text-center sm:text-left space-y-1">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
                Ready to experience the 45-day transformation?
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                Book a consultation with our principal architects in our Nashik studio.
              </p>
            </div>

            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-bronze text-xs py-3 px-6 rounded-lg whitespace-nowrap shadow-luxury"
            >
              <span>Book Your Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
