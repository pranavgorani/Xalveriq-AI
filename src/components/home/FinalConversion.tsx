"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function FinalConversion() {
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

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      console.error("Submission error:", err);
      setErrorMessage(
        err.message || "Unable to send your request. Please try again or chat with us on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Xalveriq Studio, I would like to book an initial design consultation.\n\nName: ${formData.name || "Homeowner"}\nLocation: ${formData.city}\nProperty: ${formData.propertyType}\nScope: ${formData.designScope}\nEstimated Budget: ${formData.estimatedBudget}\nNotes: ${formData.details || "Looking forward to speaking with your senior architect."}`
  );

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] text-[#18181B] border-t border-[#E0D7C9] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-bronze mb-3">
            <span className="w-6 h-px bg-bronze" />
            <span>INITIAL CONSULTATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B] tracking-tight">
            Tell Us About Your Dream Home.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#645F58] leading-relaxed">
            Share a few details about your property and requirements. Our design team will contact you to schedule your consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form Container (Redesigned with generous breathing room & zero overlaps) */}
          <div className="lg:col-span-8 bg-white border border-[#E0D7C9] rounded-2xl p-6 sm:p-10 shadow-card">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-bronze/10 border-2 border-bronze text-bronze flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-bronze" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-bronze font-semibold">
                      Reference ID: {leadRef}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#18181B]">
                      Consultation Request Confirmed
                    </h3>
                    <p className="text-sm text-[#645F58] max-w-lg mx-auto leading-relaxed">
                      Thank you, <span className="text-[#18181B] font-semibold">{formData.name}</span>. Our senior architectural lead in Nashik has received your requirements for your <span className="text-[#18181B] font-semibold">{formData.propertyType}</span> in <span className="text-[#18181B] font-semibold">{formData.city}</span> and will contact you within 4 business hours to schedule your session.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={`https://wa.me/${SITE_DATA.contact.whatsapp}?text=${encodeURIComponent(
                        `Hi Xalveriq, I just booked a consultation (Ref: ${leadRef}) for my ${formData.propertyType} in ${formData.city}. Sending my floor plan.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-bronze text-xs py-3.5 px-6 rounded-lg inline-flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Share Floor Plan on WhatsApp Now</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-outline text-xs py-3.5 px-6 rounded-lg"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Two-Column Grid for Fields 1 to 7 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                    {/* 1. Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#18181B] tracking-wide">
                        Full Name <span className="text-bronze">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full h-12 px-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] placeholder:text-[#9C958B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze transition-all"
                      />
                    </div>

                    {/* 2. Mobile / WhatsApp */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#18181B] tracking-wide">
                        Mobile / WhatsApp Number <span className="text-bronze">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full h-12 px-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] placeholder:text-[#9C958B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze transition-all"
                      />
                    </div>

                    {/* 3. Email Address */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#18181B] tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full h-12 px-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] placeholder:text-[#9C958B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze transition-all"
                      />
                    </div>

                    {/* 4. City / Location */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#18181B] tracking-wide">
                        City / Location <span className="text-bronze">*</span>
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze transition-all"
                      >
                        <option value="Nashik">Nashik</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* 5. Property Type */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#18181B] tracking-wide">
                        Property Type <span className="text-bronze">*</span>
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze transition-all"
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
                      <label className="block text-xs font-semibold text-[#18181B] tracking-wide">
                        Design Scope <span className="text-bronze">*</span>
                      </label>
                      <select
                        name="designScope"
                        value={formData.designScope}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze transition-all"
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

                    {/* 7. Estimated Budget (Full-width on sm for clarity or 2nd column) */}
                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="block text-xs font-semibold text-[#18181B] tracking-wide">
                        Estimated Budget <span className="text-bronze">*</span>
                      </label>
                      <select
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze transition-all"
                      >
                        <option value="Under ₹5,00,000">Under ₹5,00,000</option>
                        <option value="₹5,00,000 – ₹10,00,000">₹5,00,000 – ₹10,00,000</option>
                        <option value="₹10,00,000 – ₹15,00,000">₹10,00,000 – ₹15,00,000</option>
                        <option value="₹15,00,000 – ₹25,00,000">₹15,00,000 – ₹25,00,000 (Recommended for 2-3 BHK)</option>
                        <option value="₹25,00,000 – ₹40,00,000">₹25,00,000 – ₹40,00,000 (Luxury Specification)</option>
                        <option value="₹40,00,000 – ₹75,00,000">₹40,00,000 – ₹75,00,000 (Villas & Penthouses)</option>
                        <option value="Above ₹75,00,000">Above ₹75,00,000 (High-End Architectural Estates)</option>
                      </select>
                    </div>
                  </div>

                  {/* 8. Project Details (Properly Sized Multiline Textarea) */}
                  <div className="space-y-1.5 pt-1">
                    <label className="block text-xs font-semibold text-[#18181B] tracking-wide">
                      Project Details <span className="text-xs font-normal text-[#645F58]">(Optional)</span>
                    </label>
                    <textarea
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Tell us about your apartment, society name, handover status, preferred design, or special requirements."
                      className="w-full p-4 rounded-lg bg-[#FCFAF7] border border-[#E0D7C9] text-sm text-[#18181B] placeholder:text-[#9C958B] focus:outline-none focus:ring-2 focus:ring-bronze/30 focus:border-bronze transition-all resize-y min-h-[110px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-bronze py-4 rounded-lg font-semibold text-sm tracking-wide flex items-center justify-center gap-2 shadow-luxury cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Validating and Scheduling...</span>
                      ) : (
                        <>
                          <span>BOOK MY FREE CONSULTATION</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy Note */}
                  <div className="flex items-center justify-center gap-2 text-xs text-[#645F58] text-center pt-1">
                    <ShieldCheck className="w-4 h-4 text-bronze flex-shrink-0" />
                    <span>Your information is secure and will only be used to contact you regarding your project.</span>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Consultation Benefits & Direct WhatsApp Handoff Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E0D7C9] shadow-soft space-y-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-bronze block">
                What to expect during consultation:
              </span>

              <ul className="space-y-3.5 text-xs sm:text-sm text-[#645F58]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-2 flex-shrink-0" />
                  <span>Review of your builder floor plan dimensions and sunlight angles.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-2 flex-shrink-0" />
                  <span>Discussion of storage requirements, kitchen layout, and materials.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-2 flex-shrink-0" />
                  <span>Preliminary 3D spatial layout suggestions and circulation ideas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-2 flex-shrink-0" />
                  <span>Transparent itemized BOQ estimate with fixed line-item pricing.</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#ECE5DA]">
                <a
                  href={`https://wa.me/${SITE_DATA.contact.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-lg bg-[#25D366] text-[#0F0E0D] font-semibold text-xs sm:text-sm hover:bg-[#20ba59] transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Prefer WhatsApp? Chat Directly</span>
                </a>
              </div>
            </div>

            {/* Quick Hours Badge */}
            <div className="p-5 rounded-xl bg-ivory-100 border border-[#E0D7C9] text-xs text-[#645F58] space-y-1.5">
              <div className="flex items-center gap-2 text-[#18181B] font-semibold">
                <Clock className="w-4 h-4 text-bronze" />
                <span>Consultation Timings</span>
              </div>
              <p>{SITE_DATA.contact.workingHours}</p>
              <p className="text-[11px] text-[#9C958B]">Home visits and digital video reviews conducted 6 days a week.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
