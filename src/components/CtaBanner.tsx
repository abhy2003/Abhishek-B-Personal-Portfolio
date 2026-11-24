"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Smartphone, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-8 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl p-6 sm:p-10 overflow-hidden border border-[#3ecf8e]/30 bg-gradient-to-r from-[#3ecf8e]/10 via-zinc-900/90 to-zinc-900/90 shadow-[0_15px_45px_-15px_rgba(62,207,142,0.2)] text-center max-w-4xl mx-auto"
        >
          {/* Subtle Ambient lights */}
          <div className="absolute top-0 right-1/4 w-52 h-52 bg-[#3ecf8e]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-[#3ecf8e] bg-[#3ecf8e]/10 border border-[#3ecf8e]/25">
              <Sparkles size={12} />
              <span>Let's Build Together</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight max-w-xl mx-auto leading-tight">
              Have an Idea for a Mobile Application?
            </h3>

            <p className="text-zinc-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              From building MVPs and converting Figma designs to optimizing your existing Flutter app, I provide rapid, high-caliber engineering.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="#contact"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-[#3ecf8e] hover:bg-[#34b27b] shadow-[0_0_20px_rgba(62,207,142,0.35)] hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Start a Discussion</span>
                <ArrowRight size={15} />
              </Link>

              <a
                href="mailto:bijuabhishek530@gmail.com"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm text-white glass-card hover:bg-zinc-800/80 border border-zinc-700/80 hover:border-[#3ecf8e]/40 transition-all flex items-center justify-center gap-2"
              >
                <span>bijuabhishek530@gmail.com</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-5 text-[11px] text-zinc-400 border-t border-zinc-800/80 mt-4">
              <span className="flex items-center gap-1">
                <Zap size={12} className="text-[#3ecf8e]" /> 60 FPS Native UI
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck size={12} className="text-[#3ecf8e]" /> Clean Architecture
              </span>
              <span className="flex items-center gap-1">
                <Smartphone size={12} className="text-[#3ecf8e]" /> iOS & Android
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
