"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles, Download } from "lucide-react";
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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#030712]/80 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          href="#home" 
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white transition-opacity"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-sm shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:scale-105 transition-transform">
            AB
          </div>
          <span className="font-bold">
            Abhishek<span className="text-sky-400">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors py-1 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
            <a
              href="https://drive.google.com/file/d/1HiZnJVf3M5dSZyjbvdgHacD8X5eltfjF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-xs font-semibold text-slate-300 hover:text-white glass-card border border-slate-700/80 hover:border-sky-500/40 transition-all flex items-center gap-1.5"
            >
              <Download size={13} className="text-sky-400" />
              <span>Resume</span>
            </a>

            <Link
              href="#contact"
              className="px-5 py-2 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-blue-400 hover:opacity-95 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-105 transition-all flex items-center gap-1.5"
            >
              <span>Hire Me</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </nav>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden p-2 rounded-xl glass-card text-slate-300 hover:text-white border border-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#070b14]/95 backdrop-blur-2xl border-b border-slate-800 shadow-2xl px-6 py-6 space-y-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-base font-semibold text-slate-300 hover:text-sky-400 hover:bg-slate-900/60 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <a
                href="https://drive.google.com/file/d/1HiZnJVf3M5dSZyjbvdgHacD8X5eltfjF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-center text-sm font-semibold text-slate-200 glass-card border border-slate-700/80 flex items-center justify-center gap-2"
              >
                <Download size={16} className="text-sky-400" />
                <span>Download Resume</span>
              </a>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-center text-sm font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-blue-400 shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center justify-center gap-2"
              >
                <span>Let's Connect</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
