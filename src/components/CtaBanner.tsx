"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Smartphone, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-12 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-sky-500/30 bg-gradient-to-r from-sky-950/60 via-slate-900 to-indigo-950/60 shadow-[0_20px_60px_-15px_rgba(56,189,248,0.2)] text-center max-w-5xl mx-auto"
        >
          {/* Ambient decorative lighting */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-sky-500/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20">
              <Sparkles size={14} />
              <span>Let's Build Together</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
              Have an Idea for a Mobile Application?
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Whether starting from scratch, translating Figma wireframes, or upgrading your existing Flutter app, I provide rapid, high-caliber engineering.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-sky-400 to-blue-400 hover:opacity-95 shadow-[0_4px_25px_rgba(56,189,248,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Start a Project Discussion</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href="mailto:bijuabhishek530@gmail.com"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white glass-card hover:bg-slate-800/80 border border-slate-700/80 hover:border-sky-500/40 transition-all flex items-center justify-center gap-2"
              >
                <span>bijuabhishek530@gmail.com</span>
              </a>
            </div>

            {/* Quick feature indicators */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/80 mt-8">
              <span className="flex items-center gap-1.5">
                <Zap size={14} className="text-sky-400" /> High-Speed 60 FPS
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" /> Clean Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <Smartphone size={14} className="text-indigo-400" /> Native iOS & Android
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
