"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone, Sparkles } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: isHomePage ? "#services" : "/services" },
    { name: "Portfolio", href: isHomePage ? "#portfolio" : "/portfolio" },
    { name: "Process", href: isHomePage ? "#process" : "/#process" },
    { name: "AI Design", href: isHomePage ? "#ai-design" : "/studio" },
    { name: "Testimonials", href: isHomePage ? "#testimonials" : "/#testimonials" },
    { name: "FAQ", href: isHomePage ? "#faq" : "/#faq" },
    { name: "Contact", href: isHomePage ? "#contact" : "/contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#") && isHomePage) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isLightText = isHomePage && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E0D7C9] py-3.5 shadow-soft"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex flex-col focus:outline-none"
              onClick={() => handleNavClick("/")}
            >
              <div className="flex items-center gap-1.5">
                <span
                  className={`font-serif text-2xl tracking-[0.06em] font-normal transition-colors duration-200 ${
                    isLightText ? "text-white" : "text-[#18181B] group-hover:text-bronze"
                  }`}
                >
                  {SITE_DATA.name.toUpperCase()}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-bronze mb-1" />
              </div>
              <span
                className={`text-[9px] tracking-[0.16em] uppercase font-sans font-medium transition-colors duration-200 ${
                  isLightText ? "text-white/70" : "text-[#645F58]"
                }`}
              >
                Nashik • Luxury Architecture
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-[13px] font-medium tracking-wide transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze rounded ${
                      isLightText
                        ? "text-white/85 hover:text-white"
                        : isActive
                        ? "text-[#18181B] font-semibold"
                        : "text-[#645F58] hover:text-[#18181B]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-bronze rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action & Primary CTA */}
            <div className="hidden md:flex items-center gap-3.5">
              <Link
                href="/studio"
                className={`text-xs font-medium tracking-wide flex items-center gap-1.5 transition-colors py-2 px-3 rounded-md ${
                  isLightText
                    ? "text-white/90 hover:text-white bg-white/10 backdrop-blur-sm hover:bg-white/15"
                    : "text-[#645F58] hover:text-[#18181B] bg-ivory-100 hover:bg-ivory-200"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-bronze" />
                <span>AI Room Tool</span>
              </Link>

              <Link
                href={isHomePage ? "#contact" : "/contact"}
                onClick={() => handleNavClick("#contact")}
                className="btn-bronze text-xs py-2.5 px-5 rounded-md shadow-sm"
              >
                <span>Book Free Design Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href={isHomePage ? "#contact" : "/contact"}
                onClick={() => handleNavClick("#contact")}
                className="btn-bronze text-[11px] py-1.5 px-3 rounded"
              >
                Book Free
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2.5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-bronze ${
                  isLightText
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-white border border-[#E0D7C9] text-[#18181B] hover:bg-ivory-100"
                }`}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#FAF8F5] pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-bronze">
                Navigation
              </span>
              <div className="flex flex-col space-y-1 divide-y divide-[#ECE5DA]">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="py-3 text-lg font-serif text-[#18181B] hover:text-bronze flex items-center justify-between transition-colors min-h-[44px]"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-bronze/60" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E0D7C9] flex flex-col gap-3">
              <Link
                href="/studio"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-[#E0D7C9] rounded-lg text-sm font-medium text-[#18181B]"
              >
                <Sparkles className="w-4 h-4 text-bronze" />
                <span>Launch AI Room Studio</span>
              </Link>

              <Link
                href={isHomePage ? "#contact" : "/contact"}
                onClick={() => handleNavClick("#contact")}
                className="w-full btn-bronze py-3.5 text-center text-sm font-semibold rounded-lg justify-center shadow-md"
              >
                Book Free Design Consultation
              </Link>

              <div className="mt-2 text-center text-xs text-[#645F58]">
                <span>Nashik Flagship: </span>
                <a
                  href={`tel:${SITE_DATA.contact.phone.replace(/\s+/g, "")}`}
                  className="font-medium text-[#18181B] underline"
                >
                  {SITE_DATA.contact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
