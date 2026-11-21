"use client";

import { MessageSquareText } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${SITE_DATA.contact.whatsapp}?text=${encodeURIComponent(
    "Hello Xalveriq Studio, I would like to book a free interior design consultation for my home in Nashik."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-white border border-[#E0D7C9] hover:border-bronze text-[#18181B] shadow-luxury transition-all duration-300 hover:scale-105 group"
      aria-label="Chat with Xalveriq on WhatsApp"
    >
      <div className="relative w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm">
        <MessageSquareText className="w-4 h-4 fill-white text-white" />
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-bronze border-2 border-white pulse-badge" />
      </div>

      <div className="flex flex-col text-left">
        <span className="text-[10px] text-bronze font-sans uppercase font-semibold tracking-wider">
          Nashik Studio
        </span>
        <span className="text-xs font-semibold text-[#18181B] group-hover:text-bronze transition-colors">
          WhatsApp Us
        </span>
      </div>
    </a>
  );
}
