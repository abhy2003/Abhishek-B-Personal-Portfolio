"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { 
  Download, 
  ArrowRight, 
  Smartphone, 
  Flame, 
  Cpu, 
  Sparkles, 
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[78vh] flex items-center pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#3ecf8e]/30 shadow-[0_0_15px_rgba(62,207,142,0.15)] cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ecf8e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ecf8e]"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-300">
                Available for Mobile Projects & Freelance Roles
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#3ecf8e] flex items-center justify-center lg:justify-start gap-2">
                <Sparkles size={15} className="text-[#3ecf8e]" />
                <span>Mobile App Developer & Systems Engineer</span>
              </div>

              {/* Crisp Solid Pure White Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="text-white">Abhishek B</span>
              </h1>

              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-200 h-[40px] sm:h-[48px] flex items-center justify-center lg:justify-start">
                <span className="mr-2.5 text-zinc-400">Crafting</span>
                <span className="text-[#3ecf8e] border-b-2 border-[#3ecf8e]/40 pb-0.5">
                  <Typewriter
                    words={[
                      "High-Performance Flutter Apps",
                      "Cross-Platform iOS & Android",
                      "Smart IoT Mobile Solutions",
                      "Clean Architecture Codebases",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="▍"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={2000}
                  />
                </span>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specialized in engineering fluid, responsive, and reliable cross-platform mobile apps 
              using <span className="text-zinc-100 font-semibold">Flutter & Dart</span>. Experienced in 
              cloud architectures with <span className="text-zinc-200 font-medium">Firebase</span> and 
              connecting physical hardware via <span className="text-[#3ecf8e] font-medium">Raspberry Pi & IoT</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <Link
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-[#3ecf8e] hover:bg-[#34b27b] shadow-[0_0_20px_rgba(62,207,142,0.35)] hover:shadow-[0_0_30px_rgba(62,207,142,0.5)] transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="https://drive.google.com/file/d/1HiZnJVf3M5dSZyjbvdgHacD8X5eltfjF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-xs sm:text-sm text-zinc-200 glass-card hover:bg-zinc-800/80 border border-zinc-700/60 hover:border-[#3ecf8e]/40 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <Download size={16} className="text-[#3ecf8e] group-hover:translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </a>

              <Link
                href="#contact"
                className="w-full sm:w-auto px-5 py-3 rounded-full font-semibold text-xs sm:text-sm text-zinc-300 hover:text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Contact</span>
              </Link>
            </div>

            {/* Social handles & Quick Badges */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Connect:</span>
                {[
                  { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/abhishek-b-1a2b13276/", label: "LinkedIn" },
                  { icon: <Github size={16} />, href: "https://github.com/abhy2003", label: "GitHub" },
                  { icon: <Mail size={16} />, href: "mailto:bijuabhishek530@gmail.com", label: "Email" },
                ].map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#3ecf8e] hover:border-[#3ecf8e]/40 hover:bg-zinc-800 transition-colors shadow-sm"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900/60 px-3 py-1 rounded-full border border-zinc-800">
                <CheckCircle2 size={13} className="text-[#3ecf8e]" />
                <span>Verified Mobile Engineer • India</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Compact, Sleek Phone Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3ecf8e]/12 rounded-full blur-[70px] pointer-events-none" />

            <div className="relative w-full max-w-[310px]">
              
              {/* Compact phone frame */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-[36px] p-2.5 bg-gradient-to-b from-zinc-750/40 via-zinc-800/40 to-zinc-900/80 border border-zinc-700/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              >
                
                {/* Phone screen inner */}
                <div className="relative rounded-[28px] overflow-hidden bg-[#0e0f12] border border-zinc-800/90 p-4 space-y-3.5">
                  
                  {/* Status Bar simulation */}
                  <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono pb-1.5 border-b border-zinc-800/60">
                    <span className="font-semibold text-zinc-300">9:41 AM</span>
                    <div className="w-12 h-2.5 bg-zinc-800 rounded-full mx-auto" />
                    <div className="flex items-center gap-1 text-[#3ecf8e]">
                      <Zap size={10} />
                      <span className="text-[9px]">100%</span>
                    </div>
                  </div>

                  {/* Profile Card Header inside phone */}
                  <div className="relative group">
                    <div className="relative h-48 w-full rounded-xl overflow-hidden border border-zinc-700/60">
                      <Image
                        src="/profile.jpg"
                        alt="Abhishek B - Flutter Developer"
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f12] via-[#0e0f12]/30 to-transparent" />
                      
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#3ecf8e] text-slate-950 mb-0.5">
                          Flutter Architect
                        </span>
                        <h3 className="text-base font-bold text-white">Abhishek B</h3>
                        <p className="text-[11px] text-zinc-300 flex items-center gap-1">
                          <span>📍 India</span>
                          <span>•</span>
                          <span className="text-[#3ecf8e] font-medium">Available</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Compact Feature Badges */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center gap-2">
                      <div className="p-1.5 rounded-md bg-[#3ecf8e]/10 text-[#3ecf8e]">
                        <Smartphone size={14} />
                      </div>
                      <div className="text-left">
                        <p className="text-[9px] text-zinc-400 font-medium">Framework</p>
                        <p className="text-[11px] font-bold text-white">Flutter & Dart</p>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center gap-2">
                      <div className="p-1.5 rounded-md bg-zinc-800 text-zinc-300">
                        <Flame size={14} />
                      </div>
                      <div className="text-left">
                        <p className="text-[9px] text-zinc-400 font-medium">Backend</p>
                        <p className="text-[11px] font-bold text-white">Firebase Suite</p>
                      </div>
                    </div>
                  </div>

                  {/* Compact Live Status Strip */}
                  <div className="p-2.5 rounded-lg bg-[#3ecf8e]/5 border border-[#3ecf8e]/20 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e] animate-ping" />
                      <span className="text-[11px] font-semibold text-zinc-200">Ride-Wave & Smart-Guard</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#3ecf8e] font-bold">Online</span>
                  </div>

                </div>
              </motion.div>

              {/* Floating Badge 1 - Top Left */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 sm:-left-5 glass-card p-2.5 rounded-xl shadow-lg border border-[#3ecf8e]/30 flex items-center gap-2.5 z-20 backdrop-blur-xl"
              >
                <div className="p-1.5 rounded-lg bg-[#3ecf8e]/15 text-[#3ecf8e]">
                  <Smartphone size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">Android & iOS</div>
                  <div className="text-[9px] text-zinc-400">Single Codebase UI</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Right */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
                className="absolute -bottom-3 -right-3 sm:-right-4 glass-card p-2.5 rounded-xl shadow-lg border border-zinc-700/80 flex items-center gap-2.5 z-20 backdrop-blur-xl"
              >
                <div className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300">
                  <Cpu size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">IoT Hardware</div>
                  <div className="text-[9px] text-zinc-400">Raspberry Pi Smart Lock</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
