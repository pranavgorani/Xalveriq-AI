"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 border-t border-border bg-paper">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-12">
          <span className="plan-note">Questions & Answers</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-ink">
            Frequently asked questions.
          </h2>
          <p className="text-sm text-text-muted">
            Honest answers about our scope, timelines, pricing, and how we work in Pune.
          </p>
        </div>

        {/* 5 Questions Max */}
        <div className="divide-y divide-border border-y border-border">
          {SITE_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-start justify-between gap-6 group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-normal text-ink group-hover:text-terracotta transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-text-muted mt-1 shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-terracotta" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 text-sm text-text-muted leading-relaxed pr-8 animate-fadeIn">
                    <p>{faq.a}</p>
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
