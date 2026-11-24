"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-slate-800/80 bg-[#02050c] overflow-hidden">
      {/* Subtle top ambient line */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#home" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-xs shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                AB
              </div>
              <span>
                Abhishek<span className="text-sky-400">.dev</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Passionate Flutter & Cross-Platform Mobile Engineer building scalable, high-performance applications with Firebase, IoT, and Clean Architecture.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Hire & Contract Inquiries</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300">Navigation</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              {["Home", "Skills", "Projects", "Services", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300">Connect with Me</h5>
            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/abhishek-b-1a2b13276/", label: "LinkedIn" },
                { icon: <Github size={18} />, href: "https://github.com/abhy2003", label: "GitHub" },
                { icon: <Mail size={18} />, href: "mailto:bijuabhishek530@gmail.com", label: "Email" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-slate-800/80 transition-all shadow-sm"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <p className="text-xs text-slate-500">
              Direct Inquiries: <a href="mailto:bijuabhishek530@gmail.com" className="text-slate-400 hover:text-sky-400">bijuabhishek530@gmail.com</a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Abhishek B. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Crafted with Flutter mindset, Next.js & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all flex items-center gap-1"
              title="Scroll back to top"
            >
              <ArrowUp size={14} />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
