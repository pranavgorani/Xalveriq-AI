"use client";

import { useState } from "react";
import { CheckCircle2, MessageSquare, Send } from "lucide-react";
import { PUNE_LOCALITIES } from "@/data/puneLocalities";
import { SITE_DATA } from "@/content/site";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    locality: "Baner",
    scope: "Full-Home Interior",
    budget: "₹18L – ₹30L",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          bhk: formData.scope,
          budgetRange: formData.budget,
          timeline: "Flexible",
        }),
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 sm:p-10 bg-white border border-border rounded-[4px]">
      {submitted ? (
        <div className="py-8 space-y-4 text-center">
          <div className="w-12 h-12 rounded-full bg-paper-alt border border-border flex items-center justify-center text-terracotta mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-serif font-normal text-ink">
            Thank you for reaching out.
          </h3>
          <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed">
            One of our Pune design team members will review your flat details and get in touch within one business day.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/919823092587?text=${encodeURIComponent(
                `Hello Xalveriq, I just sent an inquiry for my ${formData.scope} in ${formData.locality}. Can we connect?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terracotta text-xs py-2.5 px-5 rounded-[4px]"
            >
              Continue on WhatsApp Now
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-outline text-xs py-2.5 px-5 rounded-[4px]"
            >
              Submit another query
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <span className="plan-note">Initial Consultation</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-ink">
              Tell us about your flat.
            </h2>
            <p className="text-xs text-text-muted">
              Fill in these 6 details and we will schedule an initial site or studio meeting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 1. Name */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-ink">1. Your Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Vikram Patil"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="studio-input"
              />
            </div>

            {/* 2. Phone */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-ink">2. Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                placeholder="e.g. +91 98230 12345"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="studio-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 3. Area in Pune */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-ink">3. Area in Pune *</label>
              <select
                value={formData.locality}
                onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                className="studio-input bg-white"
              >
                {PUNE_LOCALITIES.map((loc) => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name} ({loc.zone})
                  </option>
                ))}
              </select>
            </div>

            {/* 4. What you want done */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-ink">4. Scope / What You Need *</label>
              <select
                value={formData.scope}
                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                className="studio-input bg-white"
              >
                <option value="Full-Home Interior (Turnkey)">Full-Home Interior (Turnkey)</option>
                <option value="Modular Kitchen Only">Modular Kitchen Only</option>
                <option value="Wardrobes & Custom Storage">Wardrobes & Custom Storage</option>
                <option value="Commercial / Studio Office">Commercial / Studio Office</option>
                <option value="Renovation & Civil Alterations">Renovation & Civil Alterations</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* 5. Rough Budget */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-ink">5. Rough Budget Guidance</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="studio-input bg-white"
              >
                <option value="Under ₹15 Lakhs">Under ₹15 Lakhs</option>
                <option value="₹15L – ₹25L">₹15L – ₹25L (Standard 2 & 3 BHK)</option>
                <option value="₹25L – ₹40L">₹25L – ₹40L (Comprehensive 3 & 4 BHK)</option>
                <option value="Above ₹40 Lakhs">Above ₹40 Lakhs (Penthouse / Villa)</option>
                <option value="Unsure / Need Advice">Unsure / Need Advice</option>
              </select>
            </div>

            {/* 6. Notes about flat */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-ink">
                6. Details about your flat (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Mention apartment society name, key handover status, or particular storage priorities..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="studio-input resize-none"
              />
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-terracotta w-full sm:w-auto text-xs py-3 px-6 rounded-[4px]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
            </button>

            <a
              href={`https://wa.me/919823092587`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-text-muted hover:text-ink inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Prefer WhatsApp? Chat directly</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
