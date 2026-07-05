"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#workflow", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Scroll spy logic
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry and set it as active
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      // Trigger when the section reaches the top 40% of the viewport
      { rootMargin: "-30% 0px -70% 0px" } 
    );

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl border-b border-[#e8e4de] py-2 shadow-sm" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" aria-label="SS Construction Home" className="flex items-center group" onClick={() => setActiveSection("#home")}>
            <div className="relative flex items-center justify-center pl-3 sm:w-48 h-12 sm:h-14">
              <img 
                src="/logo.png" 
                alt="SS Construction Logo" 
                className="w-full h-full object-contain scale-[2] sm:scale-[2.1] mix-blend-multiply"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? scrolled
                        ? "text-[#C9A227] bg-[#1a1a2e]/[0.06]"
                        : "text-[#C9A227] bg-white/10"
                      : scrolled 
                        ? "text-[#6b7280] hover:text-[#1a1a2e] hover:bg-[#1a1a2e]/[0.04]" 
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled ? "text-[#1a1a2e] hover:bg-[#1a1a2e]/5" : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fcfbfe]/98 backdrop-blur-2xl border-t border-[#e8e4de]">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.href);
                    setIsOpen(false);
                  }}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all ${
                    isActive
                      ? "text-[#C9A227] bg-[#1a1a2e]/[0.06]"
                      : "text-[#6b7280] hover:text-[#1a1a2e] hover:bg-[#1a1a2e]/[0.04]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
