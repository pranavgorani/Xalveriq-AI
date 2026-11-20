"use client";

import { useEffect, useState } from "react";

export function FloatingDecor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
      {/* 1. Floating Minimalist Pendant Lamp (Top Right) */}
      <div className="absolute top-[14%] right-[5%] w-24 h-48 opacity-30 animate-[float_9s_ease-in-out_infinite] filter drop-shadow-[0_12px_24px_rgba(22,22,29,0.08)]">
        <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#B08A57]">
          <line x1="50" y1="0" x2="50" y2="120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M20 120 C20 120, 50 80, 80 120 Z" fill="currentColor" opacity="0.4" />
          <circle cx="50" cy="130" r="10" fill="#B08A57" opacity="0.8" />
        </svg>
      </div>

      {/* 2. Floating Cantilever Chair Silhouette (Mid-Left) */}
      <div className="absolute top-[42%] left-[3%] w-28 h-36 opacity-25 animate-[float_12s_ease-in-out_2s_infinite] filter drop-shadow-[0_16px_28px_rgba(22,22,29,0.09)]">
        <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#6D4AFF]">
          <path d="M30 40 L30 85 C30 95, 45 95, 55 95 L85 95 C95 95, 95 105, 95 115 L95 125 L35 125 C20 125, 20 85, 20 85 L20 40 Z" fill="currentColor" opacity="0.65" />
          <path d="M32 40 L75 40 C85 40, 88 50, 88 60 L88 85 L32 85 Z" fill="#14A8D6" opacity="0.3" />
        </svg>
      </div>

      {/* 3. Floating Modern Palm / Monstera Leaf (Lower Right) */}
      <div className="absolute top-[68%] right-[4%] w-32 h-44 opacity-25 animate-[float_14s_ease-in-out_4s_infinite] filter drop-shadow-[0_14px_24px_rgba(22,22,29,0.07)]">
        <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#14A8D6]">
          <path d="M60 150 Q60 80 110 30 C90 60 70 80 60 150 Z" fill="currentColor" opacity="0.5" />
          <path d="M60 150 Q50 90 10 50 C30 80 50 100 60 150 Z" fill="currentColor" opacity="0.35" />
          <path d="M60 150 Q60 50 70 10 C60 40 60 90 60 150 Z" fill="#B08A57" opacity="0.4" />
        </svg>
      </div>

      {/* 4. Weightless Geometric Prism / Dodecahedron (Bottom Left) */}
      <div className="absolute top-[84%] left-[6%] w-20 h-20 opacity-30 animate-[float_8s_ease-in-out_1s_infinite] filter drop-shadow-[0_12px_20px_rgba(22,22,29,0.08)]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#B08A57]">
          <polygon points="50,10 90,35 90,75 50,95 10,75 10,35" stroke="currentColor" strokeWidth="1.5" fill="rgba(176, 138, 87, 0.08)" />
          <line x1="50" y1="10" x2="50" y2="95" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <line x1="90" y1="35" x2="10" y2="75" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <line x1="10" y1="35" x2="90" y2="75" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>

      {/* 5. Soft Blurred Pastel Orbs (10-14% opacity) for Futuristic Spatial Depth */}
      <div className="absolute top-[18%] left-[10%] w-72 h-72 rounded-full bg-[#6D4AFF]/12 blur-[120px] animate-[floatOrb_14s_ease-in-out_infinite]" />
      <div className="absolute top-[52%] right-[8%] w-80 h-80 rounded-full bg-[#14A8D6]/12 blur-[130px] animate-[floatOrb_16s_ease-in-out_3s_infinite]" />
      <div className="absolute top-[80%] left-[25%] w-72 h-72 rounded-full bg-[#B08A57]/14 blur-[120px] animate-[floatOrb_18s_ease-in-out_5s_infinite]" />
    </div>
  );
}
