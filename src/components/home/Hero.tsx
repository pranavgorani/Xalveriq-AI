"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";
import { AntigravityRoom } from "../3d/AntigravityRoom";
import { MagneticButton } from "../motion/MagneticButton";

function AnimatedCounter({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-[#FAF7F2]">
      {/* 1. Full-Bleed Cinematic Background with Natural Light Architectural Imagery */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
        <div className="relative w-full h-full transform scale-105 animate-[pulse_14s_ease-in-out_infinite] opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80"
            alt="Xalveriq Luxury Pune Penthouse Architecture in Warm Natural Light"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Ivory gradient veil for crisp typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/95 to-[#FAF7F2]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-[#FAF7F2]/70" />
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Vision & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Localized Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E4DCCF] shadow-xs backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#14A8D6] animate-ping" />
              <span className="text-[11px] font-semibold tracking-wide text-[#16161D] uppercase">
                Pune&apos;s Premier AI Interior Architecture
              </span>
              <span className="text-[10px] text-[#8E6835] font-bold tracking-wider uppercase border-l border-[#E4DCCF] pl-2">
                45-Day Handover
              </span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#16161D] leading-[1.08]">
              Spaces, <br />
              <span className="text-ai-gradient">Intelligently</span>{" "}
              <span className="text-gold-gradient">Designed.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-[#5E5A55] max-w-xl leading-relaxed font-normal">
              Experience the weightless elegance of <strong className="text-[#16161D] font-semibold">Antigravity Architecture</strong>. We transform raw builder flats across Pune into bespoke, AI-optimized luxury residences with German factory precision joinery and zero execution delays.
            </p>

            {/* Micro-Trust Highlights */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#5E5A55] pt-1">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#8E6835]" />
                <span className="font-medium">45-Day Handover Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#6D4AFF]" />
                <span className="font-medium">10-Year Flat Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#14A8D6]" />
                <span className="font-medium">Koregaon Park • Baner • Kharadi</span>
              </div>
            </div>

            {/* Action Buttons with AI Orb & Magnetic Styling */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <MagneticButton strength={0.2}>
                <Link
                  href="/studio"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full btn-primary-gradient text-xs tracking-wider uppercase font-semibold"
                >
                  {/* Animated Pulsating AI Gradient Orb */}
                  <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#B08A57] via-[#6D4AFF] to-[#14A8D6] animate-spin opacity-90 blur-[1px]" />
                    <span className="relative w-3.5 h-3.5 rounded-full bg-white shadow-xs flex items-center justify-center">
                      <Sparkles className="w-2.5 h-2.5 text-[#6D4AFF]" />
                    </span>
                  </div>

                  <span>Design My Space with AI</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.15}>
                <Link
                  href="/contact"
                  className="btn-secondary-light inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-xs tracking-wider uppercase font-semibold"
                >
                  <span>Book Free Consultation</span>
                </Link>
              </MagneticButton>
            </div>

            {/* Animated Stat Counters */}
            <div className="pt-6 border-t border-[#E4DCCF] grid grid-cols-3 gap-4 max-w-lg">
              <div className="space-y-0.5">
                <p className="text-2xl sm:text-3xl font-bold font-display text-[#16161D]">
                  <AnimatedCounter target={450} suffix="+" />
                </p>
                <p className="text-[11px] text-[#5E5A55] font-medium">Homes Delivered</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-2xl sm:text-3xl font-bold font-display text-[#8E6835]">
                  <AnimatedCounter target={98.6} suffix="%" decimals={1} />
                </p>
                <p className="text-[11px] text-[#5E5A55] font-medium">On-Time Rate</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-2xl sm:text-3xl font-bold font-display text-[#0F85AA]">
                  <AnimatedCounter target={12} suffix="+ Yrs" />
                </p>
                <p className="text-[11px] text-[#5E5A55] font-medium">Pune Heritage</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Antigravity Room Canvas */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Ambient Pastel Backing Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-[#6D4AFF]/15 to-[#B08A57]/15 blur-3xl pointer-events-none" />

            <div className="relative w-full aspect-square max-w-[480px] rounded-3xl overflow-hidden bg-white/75 backdrop-blur-xl border border-[#E4DCCF] shadow-[0_16px_50px_rgba(22,22,29,0.08)] p-2">
              <AntigravityRoom />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
