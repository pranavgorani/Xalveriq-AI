"use client";

import { useState } from "react";
import { CheckCircle2, MessageSquare, Send, ArrowRight, ShieldCheck } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Nashik",
    propertyType: "3 BHK",
    designScope: "Full Home Interior",
    estimatedBudget: "₹15,00,000 – ₹25,00,000",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [leadRef, setLeadRef] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage("");
  };

  const validatePhone = (phoneStr: string) => {
    const digits = phoneStr.replace(/[\s\-\+\(\)]/g, "").slice(-10);
    return /^[6-9]\d{9}$/.test(digits);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!validatePhone(formData.phone)) {
      setErrorMessage("Please enter a valid 10-digit Indian mobile number (e.g. 98230 XXXXX).");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok || result.error) {
        throw new Error(result.error || "Failed to submit request.");
      }

      setLeadRef(result.leadId || `XLV-${Date.now().toString().slice(-6)}`);
      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit. Please chat with us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Xalveriq Studio, I would like to book an initial design consultation.\n\nName: ${formData.name || "Homeowner"}\nLocation: ${formData.city}\nProperty: ${formData.propertyType}\nScope: ${formData.designScope}\nEstimated Budget: ${formData.estimatedBudget}\nNotes: ${formData.details || "Looking forward to speaking with your senior architect."}`
  );

  return (
    <div className="p-8 sm:p-10 bg-white border border-[#E0D7C9] rounded-2xl shadow-card">
      {submitted ? (
        <div className="py-8 space-y-5 text-center">
          <div className="w-14 h-14 rounded-full bg-bronze/10 border-2 border-bronze text-bronze flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7 text-bronze" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-bronze font-semibold">
              Reference ID: {leadRef}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#18181B]">
              Consultation Scheduled
            </h3>
            <p className="text-sm text-[#645F58] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#18181B]">{formData.name}</strong>. Our senior architectural lead will review your {formData.propertyType} in {formData.city} and contact you within 4 business hours.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${SITE_DATA.contact.whatsapp}?text=${encodeURIComponent(
                `Hi Xalveriq, I just booked a consultation (Ref: ${leadRef}) for my ${formData.propertyType} in ${formData.city}. Sending floor plan.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bronze text-xs py-3 px-5 rounded-lg inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Share Floor Plan on WhatsApp Now</span>
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-outline text-xs py-3 px-5 rounded-lg"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-[#ECE5DA] pb-4">
            <span className="text-xs font-semibold text-bronze uppercase tracking-widest block mb-1">
              INITIAL CONSULTATION
            </span>
            <h3 className="font-serif text-2xl text-[#18181B]">
              Tell Us About Your Dream Home.
            </h3>
            <p className="text-xs text-[#645F58] mt-1">
              Share a few details about your property and requirements. Our design team will contact you to schedule your consultation.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            {/* 1. Full Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-[#18181B]">
                Full Name <span className="text-bronze">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full h-12 px-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] placeholder:text-[#9C958B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze"
              />
            </div>

            {/* 2. Mobile / WhatsApp Number */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-[#18181B]">
                Mobile / WhatsApp Number <span className="text-bronze">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full h-12 px-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] placeholder:text-[#9C958B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze"
              />
            </div>

            {/* 3. Email Address */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-[#18181B]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full h-12 px-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] placeholder:text-[#9C958B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze"
              />
            </div>

            {/* 4. City / Location */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-[#18181B]">
                City / Location <span className="text-bronze">*</span>
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze"
              >
                <option value="Nashik">Nashik</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* 5. Property Type */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-[#18181B]">
                Property Type <span className="text-bronze">*</span>
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze"
              >
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
                <option value="4 BHK">4 BHK</option>
                <option value="Villa">Villa</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Commercial Property">Commercial Property</option>
              </select>
            </div>

            {/* 6. Design Scope */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-[#18181B]">
                Design Scope <span className="text-bronze">*</span>
              </label>
              <select
                name="designScope"
                value={formData.designScope}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze"
              >
                <option value="Full Home Interior">Full Home Interior</option>
                <option value="Modular Kitchen">Modular Kitchen</option>
                <option value="Living Room">Living Room</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Renovation & Turnkey">Renovation & Turnkey</option>
                <option value="Complete Interior + Civil Work">Complete Interior + Civil Work</option>
              </select>
            </div>

            {/* 7. Estimated Budget */}
            <div className="sm:col-span-2 space-y-1.5">
              <label className="block text-xs font-semibold text-[#18181B]">
                Estimated Budget <span className="text-bronze">*</span>
              </label>
              <select
                name="estimatedBudget"
                value={formData.estimatedBudget}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze"
              >
                <option value="Under ₹5,00,000">Under ₹5,00,000</option>
                <option value="₹5,00,000 – ₹10,00,000">₹5,00,000 – ₹10,00,000</option>
                <option value="₹10,00,000 – ₹15,00,000">₹10,00,000 – ₹15,00,000</option>
                <option value="₹15,00,000 – ₹25,00,000">₹15,00,000 – ₹25,00,000</option>
                <option value="₹25,00,000 – ₹40,00,000">₹25,00,000 – ₹40,00,000</option>
                <option value="₹40,00,000 – ₹75,00,000">₹40,00,000 – ₹75,00,000</option>
                <option value="Above ₹75,00,000">Above ₹75,00,000</option>
              </select>
            </div>
          </div>

          {/* 8. Project Details Textarea */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-[#18181B]">
              Project Details <span className="text-xs font-normal text-[#645F58]">(Optional)</span>
            </label>
            <textarea
              name="details"
              rows={4}
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us about your apartment, society name, handover status, preferred design, or special requirements."
              className="w-full p-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] placeholder:text-[#9C958B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze resize-y min-h-[110px]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-bronze py-4 rounded-lg font-semibold text-sm tracking-wide flex items-center justify-center gap-2 shadow-card cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? (
              <span>Scheduling Consultation...</span>
            ) : (
              <>
                <span>BOOK MY FREE CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Privacy Note */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#645F58] text-center pt-1">
            <ShieldCheck className="w-4 h-4 text-bronze flex-shrink-0" />
            <span>Your information is secure and will only be used to contact you regarding your project.</span>
          </div>
        </form>
      )}
    </div>
  );
}
