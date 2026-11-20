"use client";

import { useState } from "react";
import { CheckCircle2, Sparkles, Flame, PhoneCall } from "lucide-react";
import { PUNE_LOCALITIES } from "@/data/puneLocalities";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bhk: "3 BHK",
    budgetRange: "₹25L - ₹35L (Signature Luxury)",
    timeline: "Immediate (Next 30 days)",
    locality: "Baner",
    notes: "",
    whatsappConsent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    score?: "Hot" | "Warm" | "Cold";
    leadId?: string;
    message?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setSubmissionResult(data);
    } catch (err) {
      setSubmissionResult({
        score: "Warm",
        message: "Thank you! Your request has been queued. We will call you shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative rounded-3xl bg-white/95 border border-[#E4DCCF] p-6 sm:p-10 backdrop-blur-2xl shadow-[0_16px_50px_rgba(22,22,29,0.07)]">
      {submissionResult ? (
        <div className="text-center py-10 space-y-5 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            {submissionResult.score === "Hot" && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 text-xs font-bold">
                <Flame className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
                <span>Priority Consultation Unlocked (Hot Lead Tag)</span>
              </div>
            )}
            <h3 className="text-2xl font-bold text-[#16161D]">
              Consultation Scheduled!
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5A55] font-normal leading-relaxed">
              {submissionResult.message}
            </p>
            {submissionResult.leadId && (
              <p className="text-[11px] font-mono text-[#8E6835] font-semibold">
                Reference ID: {submissionResult.leadId}
              </p>
            )}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/919823092587?text=${encodeURIComponent(
                `Hi Xalveriq, I just booked a consultation for my ${formData.bhk} in ${formData.locality} (Ref: ${submissionResult.leadId || "New Booking"}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs transition-transform hover:scale-105 shadow-sm"
            >
              Continue on WhatsApp Now
            </a>
            <button
              onClick={() => setSubmissionResult(null)}
              className="px-6 py-3 rounded-full btn-secondary-light text-xs font-semibold"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4DCCF] text-[#8E6835] text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B08A57]" />
              <span>Direct Architect Booking</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#16161D]">
              Book Your Free Spatial Consultation
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5A55] font-normal">
              Visit our Koregaon Park or Baner studio, or request an in-person site visit anywhere in Pune.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#16161D]">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Vikram Patil"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E4DCCF] text-xs text-[#16161D] placeholder-[#5E5A55]/60 focus:outline-none focus:border-[#6D4AFF]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#16161D]">WhatsApp Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="e.g. +91 98230 12345"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E4DCCF] text-xs text-[#16161D] placeholder-[#5E5A55]/60 focus:outline-none focus:border-[#6D4AFF]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#16161D]">Apartment Configuration</label>
              <select
                value={formData.bhk}
                onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E4DCCF] text-xs text-[#16161D] focus:outline-none focus:border-[#6D4AFF]"
              >
                {["1 BHK", "2 BHK", "2.5 BHK", "3 BHK", "4 BHK Duplex", "Penthouse / Luxury Villa"].map((bhk) => (
                  <option key={bhk} value={bhk} className="bg-white text-[#16161D]">
                    {bhk}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#16161D]">Pune Neighborhood / Society</label>
              <select
                value={formData.locality}
                onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E4DCCF] text-xs text-[#16161D] focus:outline-none focus:border-[#6D4AFF]"
              >
                {PUNE_LOCALITIES.map((loc) => (
                  <option key={loc.id} value={loc.name} className="bg-white text-[#16161D]">
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#16161D]">Estimated Budget Range</label>
              <select
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E4DCCF] text-xs text-[#16161D] focus:outline-none focus:border-[#6D4AFF]"
              >
                {[
                  "₹15L - ₹25L (Essential Elegance)",
                  "₹25L - ₹40L (Signature Luxury)",
                  "₹40L - ₹65L (Haute Architectural)",
                  "₹65L+ (Ultra-Luxury Penthouse)",
                ].map((b) => (
                  <option key={b} value={b} className="bg-white text-[#16161D]">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#16161D]">Possession / Start Timeline</label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E4DCCF] text-xs text-[#16161D] focus:outline-none focus:border-[#6D4AFF]"
              >
                {[
                  "Immediate (Next 30 days)",
                  "1 - 2 Months",
                  "3 - 6 Months",
                  "Currently Exploring Designs",
                ].map((t) => (
                  <option key={t} value={t} className="bg-white text-[#16161D]">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#16161D]">Special Notes or Society Name (Optional)</label>
            <textarea
              rows={2}
              placeholder="e.g. Panchshil Towers Tower C 14th floor, possession in 20 days. Need Italian marble and modular kitchen."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E4DCCF] text-xs text-[#16161D] placeholder-[#5E5A55]/60 focus:outline-none focus:border-[#6D4AFF]"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="whatsappConsent"
              checked={formData.whatsappConsent}
              onChange={(e) => setFormData({ ...formData, whatsappConsent: e.target.checked })}
              className="w-4 h-4 rounded bg-[#FAF7F2] border-[#E4DCCF] accent-[#B08A57]"
            />
            <label htmlFor="whatsappConsent" className="text-xs text-[#5E5A55]">
              Send 3D concepts, floor plan previews, and BOQ updates to my WhatsApp
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-full btn-primary-gradient text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Scheduling Consultation...</span>
            ) : (
              <>
                <PhoneCall className="w-4 h-4" />
                <span>Confirm My Free Architectural Consultation</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
