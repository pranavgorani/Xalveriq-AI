"use client";

import { MessageSquareText } from "lucide-react";

export function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/919823092587?text=${encodeURIComponent(
    "Hi Xalveriq Team, I'm looking for luxury interior design in Pune. I'd like to share my floor plan for an initial consultation."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-white/95 hover:bg-white border border-[#E4DCCF] hover:border-[#25D366] text-[#16161D] shadow-[0_10px_35px_-5px_rgba(37,211,102,0.25)] backdrop-blur-xl transition-all duration-300 hover:scale-105"
      aria-label="Chat with Xalveriq on WhatsApp"
    >
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xs">
          <MessageSquareText className="w-4 h-4 fill-white text-white" />
        </div>
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
      </div>

      <div className="flex flex-col text-left pr-1">
        <span className="text-[10px] text-emerald-600 font-bold tracking-wider uppercase">
          Online • Pune Studio
        </span>
        <span className="text-xs font-bold text-[#16161D] group-hover:text-emerald-700 transition-colors">
          Chat on WhatsApp
        </span>
      </div>
    </a>
  );
}
