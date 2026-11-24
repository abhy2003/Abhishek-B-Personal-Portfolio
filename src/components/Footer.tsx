"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-zinc-800/80 bg-[#07080a] overflow-hidden">
      {/* Subtle top ambient line */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#3ecf8e]/40 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-zinc-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <Link href="#home" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white group">
              <div className="w-7 h-7 rounded-lg bg-[#3ecf8e] flex items-center justify-center text-slate-950 font-black text-xs shadow-[0_0_12px_rgba(62,207,142,0.3)]">
                AB
              </div>
              <span>
                Abhishek<span className="text-[#3ecf8e]">.dev</span>
              </span>
            </Link>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Flutter & Cross-Platform Mobile Engineer building scalable, high-performance applications with Firebase, IoT, and Clean Architecture.
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-[#3ecf8e] bg-[#3ecf8e]/10 border border-[#3ecf8e]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e] animate-ping" />
              <span>Available for Hire & Contract Roles</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">Navigation</h5>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              {["Home", "Skills", "Projects", "Services", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#3ecf8e] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">Connect</h5>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/abhishek-b-1a2b13276/", label: "LinkedIn" },
                { icon: <Github size={16} />, href: "https://github.com/abhy2003", label: "GitHub" },
                { icon: <Mail size={16} />, href: "mailto:bijuabhishek530@gmail.com", label: "Email" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#3ecf8e] hover:border-[#3ecf8e]/40 hover:bg-zinc-800 transition-all"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <p className="text-[11px] text-zinc-500">
              Direct Contact: <a href="mailto:bijuabhishek530@gmail.com" className="text-zinc-400 hover:text-[#3ecf8e]">bijuabhishek530@gmail.com</a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Abhishek B. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <span>Built with Next.js & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-all flex items-center gap-1 text-[10px]"
              title="Scroll back to top"
            >
              <ArrowUp size={12} />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
