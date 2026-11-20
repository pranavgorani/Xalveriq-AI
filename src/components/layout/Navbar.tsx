"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "AI Studio", href: "/studio", badge: "AI" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[#E4DCCF] shadow-[0_4px_24px_rgba(22,22,29,0.06)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#6D4AFF] via-[#14A8D6] to-[#B08A57] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-display font-bold text-lg text-[#16161D] tracking-widest">
                  X
                </span>
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#14A8D6] animate-ping" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#14A8D6]" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xl tracking-[0.2em] text-[#16161D]">
                  XALVERIQ
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#8E6835] font-semibold">
                Pune • Architectural AI
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/85 border border-[#E4DCCF] rounded-full px-4 py-1.5 backdrop-blur-md shadow-[0_2px_12px_rgba(22,22,29,0.04)]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#16161D] bg-[#F1EBE1] font-semibold shadow-xs"
                      : "text-[#5E5A55] hover:text-[#16161D] hover:bg-[#FAF7F2]"
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-gradient-to-r from-[#6D4AFF] to-[#14A8D6] text-white leading-none shadow-xs">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/studio"
              className="text-xs font-medium text-[#5E5A55] hover:text-[#16161D] px-3.5 py-2 rounded-full transition-colors flex items-center gap-1.5 hover:bg-white border border-transparent hover:border-[#E4DCCF]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B08A57]" />
              <span>AI Redesign</span>
            </Link>

            <Link
              href="/contact"
              className="relative group overflow-hidden rounded-full p-[1.5px] font-medium text-xs shadow-[0_6px_20px_rgba(109,74,255,0.2)] hover:shadow-[0_8px_25px_rgba(109,74,255,0.3)] transition-all"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#6D4AFF] via-[#14A8D6] to-[#B08A57] transition-all duration-300 group-hover:opacity-95" />
              <span className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#16161D] transition-colors duration-200 group-hover:bg-[#FAF7F2]">
                <span className="font-semibold">Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6D4AFF] group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/studio"
              className="px-2.5 py-1.5 text-[11px] font-semibold rounded-full bg-white border border-[#E4DCCF] text-[#6D4AFF] flex items-center gap-1 shadow-xs"
            >
              <Sparkles className="w-3 h-3 text-[#6D4AFF]" />
              <span>AI</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-[#E4DCCF] text-[#16161D] hover:bg-[#F1EBE1] transition-colors shadow-xs"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-[#E4DCCF] px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[#F1EBE1] text-[#16161D] font-semibold"
                    : "text-[#5E5A55] hover:bg-[#FAF7F2] hover:text-[#16161D]"
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-gradient-to-r from-[#6D4AFF] to-[#14A8D6] text-white">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#E4DCCF] flex flex-col gap-2.5">
              <Link
                href="/studio"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white border border-[#E4DCCF] text-[#16161D] text-xs font-semibold shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#B08A57]" />
                <span>Launch AI Studio</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#6D4AFF] to-[#14A8D6] text-white text-xs font-semibold shadow-[0_6px_20px_rgba(109,74,255,0.25)]"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
