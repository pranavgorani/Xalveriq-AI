"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/faq";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Timeline", "Cost & Budget", "Materials", "Process & AI", "Pune Real Estate"];

  const filteredFaqs = selectedCategory === "All"
    ? FAQS
    : FAQS.filter((f) => f.category === selectedCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-28 bg-[#F1EBE1] overflow-hidden border-t border-[#E4DCCF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DCCF] text-[#8E6835] text-xs font-bold uppercase tracking-wider shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#B08A57]" />
            <span>Clarity & Commitments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#16161D] tracking-tight">
            Frequently Asked <span className="text-gold-gradient">Questions.</span>
          </h2>
          <p className="text-sm text-[#5E5A55] font-normal">
            Everything you need to know about timelines, warranties, Pune society permissions, and our AI design process.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "btn-primary-gradient shadow-md"
                  : "bg-white/90 text-[#5E5A55] border border-[#E4DCCF] hover:text-[#16161D] hover:bg-white shadow-xs"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E4DCCF] bg-white/95 overflow-hidden transition-all duration-200 hover:border-[#B08A57]/60 shadow-[0_4px_16px_rgba(22,22,29,0.03)]"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#16161D]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#B08A57] text-white" : "bg-[#FAF7F2] border border-[#E4DCCF] text-[#16161D]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#5E5A55] leading-relaxed font-normal border-t border-[#E4DCCF] pt-4">
                    <p>{faq.answer}</p>
                    <div className="mt-3.5 inline-block text-[10px] uppercase tracking-wider font-mono font-bold px-2.5 py-1 rounded bg-[#FAF7F2] border border-[#E4DCCF] text-[#8E6835]">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
