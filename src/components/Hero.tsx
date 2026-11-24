"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { 
  Download, 
  ArrowRight, 
  Smartphone, 
  Flame, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Cross-Platform Apps", value: "10+", detail: "iOS & Android" },
  { label: "Performance", value: "60 FPS", detail: "Optimized UI" },
  { label: "Architecture", value: "Clean/BLoC", detail: "Scalable codebase" },
  { label: "Cloud & IoT", value: "Firebase", detail: "Real-time sync" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-sky-500/20 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-300">
                Available for New Projects & Freelance Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="text-base sm:text-lg font-semibold tracking-wide uppercase text-sky-400 flex items-center justify-center lg:justify-start gap-2">
                <Sparkles size={18} className="text-sky-400 animate-spin-slow" />
                <span>Mobile App Developer & Engineer</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{" "}
                <span className="text-gradient">Abhishek B</span>
              </h1>

              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-200 h-[48px] sm:h-[56px] flex items-center justify-center lg:justify-start">
                <span className="mr-3 text-slate-400">Crafting</span>
                <span className="text-sky-400 border-b-2 border-sky-400/40 pb-0.5">
                  <Typewriter
                    words={[
                      "High-Performance Flutter Apps",
                      "Cross-Platform iOS & Android",
                      "Smart IoT Mobile Solutions",
                      "Scalable Firebase Architectures",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={35}
                    delaySpeed={2200}
                  />
                </span>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specialized in building seamless, responsive, and robust mobile applications 
              with <span className="text-slate-200 font-semibold">Flutter & Dart</span>. Experienced with 
              backend ecosystems like <span className="text-slate-200 font-semibold">Firebase</span>, 
              REST APIs, and bridging hardware sensors through <span className="text-slate-200 font-semibold">Raspberry Pi & IoT</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 hover:opacity-95 shadow-[0_4px_25px_rgba(56,189,248,0.35)] hover:shadow-[0_4px_30px_rgba(56,189,248,0.5)] transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <span>View Featured Projects</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://drive.google.com/file/d/1HiZnJVf3M5dSZyjbvdgHacD8X5eltfjF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-medium text-sm sm:text-base text-slate-200 glass-card hover:bg-slate-800/80 border border-slate-700/60 hover:border-sky-500/40 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <Download size={18} className="text-sky-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              <Link
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full font-medium text-sm sm:text-base text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Social handles & Quick Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mr-1">Connect:</span>
                {[
                  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/abhishek-b-1a2b13276/", label: "LinkedIn" },
                  { icon: <Github size={18} />, href: "https://github.com/abhy2003", label: "GitHub" },
                  { icon: <Mail size={18} />, href: "mailto:bijuabhishek530@gmail.com", label: "Email" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-slate-800 transition-all shadow-sm"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 px-3.5 py-1.5 rounded-full border border-slate-800">
                <CheckCircle2 size={14} className="text-sky-400" />
                <span>Verified Cross-Platform Developer</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Mobile & Profile Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-sky-500/20 via-blue-600/15 to-indigo-600/20 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative w-full max-w-[380px]">
              
              {/* Outer decorative phone-like mockup frame */}
              <div className="relative rounded-[42px] p-3 bg-gradient-to-b from-slate-700/40 via-slate-800/30 to-slate-900/60 border border-slate-700/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                
                {/* Phone screen inner */}
                <div className="relative rounded-[32px] overflow-hidden bg-[#0b1120] border border-slate-800/80 p-5 space-y-5">
                  
                  {/* Status Bar simulation */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pb-2 border-b border-slate-800/60">
                    <span className="font-semibold text-slate-300">9:41 AM</span>
                    <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto" />
                    <div className="flex items-center gap-1.5">
                      <Zap size={11} className="text-sky-400" />
                      <span>100%</span>
                    </div>
                  </div>

                  {/* Profile Card Header inside phone */}
                  <div className="relative group">
                    <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-slate-700/60">
                      <Image
                        src="/profile.jpg"
                        alt="Abhishek B - Flutter Developer"
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      
                      <div className="absolute bottom-3 left-3 right-3 text-left">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/90 text-slate-950 mb-1">
                          Flutter Architect
                        </span>
                        <h3 className="text-xl font-bold text-white">Abhishek B</h3>
                        <p className="text-xs text-slate-300 flex items-center gap-1">
                          <span>📍 India</span>
                          <span>•</span>
                          <span className="text-emerald-400 font-medium">Ready for deployment</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mini App Telemetry / Feature Highlights */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                        <Smartphone size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-slate-400 font-medium">Core Stack</p>
                        <p className="text-xs font-bold text-white">Flutter & Dart</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
                        <Flame size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-slate-400 font-medium">Cloud BaaS</p>
                        <p className="text-xs font-bold text-white">Firebase Suite</p>
                      </div>
                    </div>
                  </div>

                  {/* Live IoT / Architecture Pill */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-sky-950/40 to-indigo-950/40 border border-sky-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-semibold text-slate-200">Ride-Wave & Smart-Guard</span>
                    </div>
                    <span className="text-[11px] font-mono text-sky-400 font-semibold">Active</span>
                  </div>

                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-8 glass-card p-3 rounded-2xl shadow-xl border border-sky-500/30 flex items-center gap-3 z-20 backdrop-blur-xl"
              >
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                  <Smartphone size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Android & iOS</div>
                  <div className="text-[10px] text-slate-400">Single Codebase UI</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Right */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 glass-card p-3 rounded-2xl shadow-xl border border-indigo-500/30 flex items-center gap-3 z-20 backdrop-blur-xl"
              >
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Cpu size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">IoT & Hardware</div>
                  <div className="text-[10px] text-slate-400">Raspberry Pi Remote</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Stats Row Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-sky-500/30 transition-all text-center md:text-left group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-sky-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-300 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
