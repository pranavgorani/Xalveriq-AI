"use client";

import { MessageSquareText } from "lucide-react";

export function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/919823092587?text=${encodeURIComponent(
    "Hello Xalveriq, I would like to discuss interior design for my flat in Pune."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-3.5 py-2.5 rounded-[4px] bg-white border border-border hover:border-ink text-ink shadow-soft transition-all duration-200"
      aria-label="Chat with Xalveriq on WhatsApp"
    >
      <div className="w-6 h-6 rounded-[2px] bg-[#25D366] flex items-center justify-center text-white">
        <MessageSquareText className="w-3.5 h-3.5 fill-white text-white" />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[10px] text-text-muted font-sans uppercase tracking-wider">
          Pune Studio
        </span>
        <span className="text-xs font-medium text-ink">
          WhatsApp Us
        </span>
      </div>
    </a>
  );
}
