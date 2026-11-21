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
} from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function FinalConversion() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Nashik",
    propertyType: "3BHK Apartment",
    budgetRange: "₹18L – ₹30L",
    requirement: "Full-Home Interior Design",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Please provide your name and phone number so we can reach you.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Xalveriq Team, I would like to book a free design consultation.\n\nName: ${formData.name || "Homeowner"}\nCity: ${formData.city}\nProperty: ${formData.propertyType}\nBudget: ${formData.budgetRange}\nRequirement: ${formData.requirement}`
  );

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-[#0F0E0D] text-white overflow-hidden border-t border-white/10"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-bronze/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-bronze/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bronze/15 border border-bronze/30 text-xs font-semibold text-bronze uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Begin Your 45-Day Journey</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight tracking-tight">
                Turn Your Empty Handover Into a Sanctuary.
              </h2>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                Book a free design consultation with Xalveriq and receive a personalized 3D spatial concept for your home.
              </p>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${SITE_DATA.contact.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-[#25D366] text-[#0F0E0D] font-semibold text-sm hover:bg-[#20ba59] transition-all shadow-luxury hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Quick Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Studio Contact Information */}
            <div className="space-y-4 pt-6 border-t border-white/10 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-bronze flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Nashik Flagship Studio:</span>
                  <span className="text-white/60">{SITE_DATA.contact.studios[0].address}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-bronze flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white mr-2">Direct Studio Phone:</span>
                  <a
                    href={`tel:${SITE_DATA.contact.phone.replace(/\s+/g, "")}`}
                    className="text-bronze hover:underline"
                  >
                    {SITE_DATA.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-bronze flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white mr-2">Consultation Hours:</span>
                  <span className="text-white/60">{SITE_DATA.contact.workingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#161514] border border-white/15 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-bronze/20 border-2 border-bronze text-bronze flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-white">
                      Consultation Request Received
                    </h3>

                    <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-medium">{formData.name}</span>. Our senior architectural lead in Nashik will review your requirements and contact you within 4 business hours.
                    </p>

                    <div className="pt-4">
                      <a
                        href={`https://wa.me/${SITE_DATA.contact.whatsapp}?text=${encodeURIComponent(
                          `Hi Xalveriq, I just requested a consultation for my ${formData.propertyType} in ${formData.city}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-bronze text-xs py-3 px-6 rounded-lg inline-flex items-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send Floor Plan on WhatsApp Now</span>
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="border-b border-white/10 pb-4">
                      <h3 className="font-serif text-xl sm:text-2xl text-white">
                        Book Free Design Consultation
                      </h3>
                      <p className="text-xs text-white/60 mt-1">
                        Receive preliminary 3D spatial layout & itemized budget guidance.
                      </p>
                    </div>

                    {error && (
                      <div className="p-3 rounded-lg bg-red-900/40 border border-red-500/50 text-xs text-red-200">
                        {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-white/80">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Anand Kulkarni"
                          className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white text-sm focus:outline-none focus:border-bronze transition-colors placeholder:text-white/30"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-white/80">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98230 XXXXX"
                          className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white text-sm focus:outline-none focus:border-bronze transition-colors placeholder:text-white/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-white/80">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="anand@example.com"
                          className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white text-sm focus:outline-none focus:border-bronze transition-colors placeholder:text-white/30"
                        />
                      </div>

                      {/* City */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-white/80">
                          City / Region
                        </label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[#1D1C1B] border border-white/20 text-white text-sm focus:outline-none focus:border-bronze transition-colors"
                        >
                          <option value="Nashik">Nashik (Gangapur Rd, Anandwalli, etc.)</option>
                          <option value="Mumbai">Mumbai & Suburbs</option>
                          <option value="Pune">Pune & PCMC</option>
                          <option value="Shirdi / Dhule">Shirdi / Dhule / North MH</option>
                          <option value="Other">Other City</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Property Type */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-white/80">
                          Property Type
                        </label>
                        <select
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[#1D1C1B] border border-white/20 text-white text-sm focus:outline-none focus:border-bronze transition-colors"
                        >
                          <option value="2BHK Apartment">2 BHK Apartment</option>
                          <option value="3BHK Apartment">3 BHK Apartment</option>
                          <option value="4BHK / Penthouse">4 BHK / Penthouse</option>
                          <option value="Independent Villa">Independent Villa / Bungalow</option>
                          <option value="Commercial Office">Boutique Office / Studio</option>
                        </select>
                      </div>

                      {/* Budget Range */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-white/80">
                          Estimated Budget
                        </label>
                        <select
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[#1D1C1B] border border-white/20 text-white text-sm focus:outline-none focus:border-bronze transition-colors"
                        >
                          <option value="₹10L – ₹18L">₹10L – ₹18L</option>
                          <option value="₹18L – ₹30L">₹18L – ₹30L (Most Popular)</option>
                          <option value="₹30L – ₹50L">₹30L – ₹50L</option>
                          <option value="₹50L+">₹50L+ (Luxury Estate)</option>
                        </select>
                      </div>
                    </div>

                    {/* Scope / Requirement */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-white/80">
                        Design Scope
                      </label>
                      <select
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#1D1C1B] border border-white/20 text-white text-sm focus:outline-none focus:border-bronze transition-colors"
                      >
                        <option value="Full-Home Interior Design">Full-Home Interior Design (Turnkey)</option>
                        <option value="Modular Kitchens & Pantries">Modular Kitchen & Dining</option>
                        <option value="Wardrobes & Custom Dressing">Wardrobes & Storage Suites</option>
                        <option value="Living & Dining Spaces">Living & Entertaining Lounge</option>
                        <option value="Renovation & Civil Overhaul">Renovation & Civil Overhaul</option>
                      </select>
                    </div>

                    {/* Message / Floor Plan Notes */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-white/80">
                        Project Notes / Handover Status
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="e.g. Taking possession in Serene Meadows next month, have builder CAD drawing..."
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white text-sm focus:outline-none focus:border-bronze transition-colors placeholder:text-white/30 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-bronze py-4 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-luxury cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Book Free Design Consultation</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="text-[11px] text-center text-white/50 pt-1">
                      🔒 Your information is private. Zero sales spam or endless cold calls.
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
