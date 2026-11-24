"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#0c0d0e]/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.7)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          href="#home" 
          className="group flex items-center gap-2 text-lg font-bold tracking-tight text-white transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-[#3ecf8e] flex items-center justify-center text-slate-950 font-black text-xs shadow-[0_0_15px_rgba(62,207,142,0.4)] group-hover:scale-105 transition-transform">
            AB
          </div>
          <span className="font-bold">
            Abhishek<span className="text-[#3ecf8e]">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors py-1 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3ecf8e] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5 pl-4 border-l border-zinc-800">
            <a
              href="https://drive.google.com/file/d/1HiZnJVf3M5dSZyjbvdgHacD8X5eltfjF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-white glass-card border border-zinc-700/80 hover:border-[#3ecf8e]/40 transition-all flex items-center gap-1.5"
            >
              <Download size={13} className="text-[#3ecf8e]" />
              <span>Resume</span>
            </a>

            <Link
              href="#contact"
              className="px-4 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-[#3ecf8e] hover:bg-[#34b27b] shadow-[0_0_15px_rgba(62,207,142,0.3)] hover:scale-105 transition-all flex items-center gap-1"
            >
              <span>Hire Me</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </nav>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden p-2 rounded-lg glass-card text-zinc-300 hover:text-white border border-zinc-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0c0d0e]/95 backdrop-blur-2xl border-b border-zinc-800 shadow-2xl px-6 py-5 space-y-3"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-zinc-300 hover:text-[#3ecf8e] hover:bg-zinc-900/60 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
              <a
                href="https://drive.google.com/file/d/1HiZnJVf3M5dSZyjbvdgHacD8X5eltfjF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg text-center text-xs font-semibold text-zinc-200 glass-card border border-zinc-700/80 flex items-center justify-center gap-1.5"
              >
                <Download size={14} className="text-[#3ecf8e]" />
                <span>Resume</span>
              </a>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg text-center text-xs font-bold text-slate-950 bg-[#3ecf8e] flex items-center justify-center gap-1.5"
              >
                <span>Let's Connect</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
