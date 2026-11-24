"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { 
  Github, 
  MapPin, 
  Cpu, 
  Layers, 
  ArrowUpRight,
  Sparkles,
  Zap
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "mobile" | "iot" | "all";
  desc: string;
  features: string[];
  tags: string[];
  github: string;
  badge: string;
  statsTag: string;
}

const projects: Project[] = [
  {
    id: "ride-wave",
    title: "Ride-Wave",
    subtitle: "On-Demand Ride Hailing App",
    category: "mobile",
    desc: "Production cross-platform taxi booking app with real-time GPS tracking, polyline routing, dynamic fare estimates, and Razorpay checkout.",
    features: ["Live GPS Driver Tracking", "Google Places Autocomplete", "Razorpay Payment Gateway"],
    tags: ["Flutter", "Firebase", "Google Maps SDK", "Razorpay"],
    github: "https://github.com/abhy2003/Ride-Wave",
    badge: "Flagship Mobile",
    statsTag: "< 80ms Latency",
  },
  {
    id: "smart-guard",
    title: "Smart-Guard IoT",
    subtitle: "Hardware Remote Lock System",
    category: "iot",
    desc: "End-to-end smart home security app interfacing Flutter with Raspberry Pi over authenticated MQTT channels to actuate door solenoids & sensors.",
    features: ["Sub-second GPIO Actuation", "Biometric Auth Security", "Real-time Telemetry & Logs"],
    tags: ["Flutter", "Raspberry Pi", "MQTT", "Python", "IoT"],
    github: "https://github.com/abhy2003/Smart-Guard",
    badge: "IoT & Hardware",
    statsTag: "350ms Trigger",
  },
  {
    id: "todo-app",
    title: "TaskFlow Pro",
    subtitle: "Offline-First Productivity Suite",
    category: "mobile",
    desc: "Offline-first task management application engineered with Hive local key-value persistence and automatic bi-directional sync to Cloud Firestore.",
    features: ["Zero-Latency Hive DB Cache", "Auto Firestore Sync", "Category & Priority Matrix"],
    tags: ["Flutter", "Hive DB", "Firestore", "Riverpod"],
    github: "https://github.com/abhy2003/Todo-App",
    badge: "Offline-First",
    statsTag: "100% Offline Cache",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "mobile" | "iot">("all");

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="py-20 relative z-10 bg-[#090a0d]/60 border-y border-zinc-800/60">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          badge="Featured Work"
          title="Engineered Mobile Products"
          subtitle="Production-grade mobile apps and IoT hardware systems designed with architectural rigor, smooth animations, and clean code."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Projects" },
            { id: "mobile", label: "Mobile Apps" },
            { id: "iot", label: "IoT & Hardware" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                filter === item.id
                  ? "bg-[#3ecf8e] text-slate-950 font-bold shadow-[0_0_15px_rgba(62,207,142,0.3)]"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Compact 3-Column Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl glass-card border border-zinc-800/80 hover:border-[#3ecf8e]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-[0_12px_35px_-10px_rgba(62,207,142,0.18)]"
              >
                {/* Visual Header / Micro Preview Mockup */}
                <div className="p-4 bg-gradient-to-b from-zinc-850/60 to-zinc-900/40 border-b border-zinc-800/80 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#3ecf8e] bg-[#3ecf8e]/10 border border-[#3ecf8e]/25">
                      <Sparkles size={11} />
                      {project.badge}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-300 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800">
                      {project.statsTag}
                    </span>
                  </div>

                  {/* Micro App Interface Simulation */}
                  <div className="rounded-xl bg-[#09090b] border border-zinc-800 p-3 space-y-2">
                    {project.id === "ride-wave" && (
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <MapPin size={15} className="text-[#3ecf8e]" />
                          <span className="font-semibold text-white text-[11px]">Live Navigation</span>
                        </div>
                        <span className="text-[10px] text-[#3ecf8e] font-mono font-bold">GPS Active</span>
                      </div>
                    )}

                    {project.id === "smart-guard" && (
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Cpu size={15} className="text-[#3ecf8e]" />
                          <span className="font-semibold text-white text-[11px]">RPi4 Gateway</span>
                        </div>
                        <span className="text-[10px] text-[#3ecf8e] font-mono font-bold">SECURED</span>
                      </div>
                    )}

                    {project.id === "todo-app" && (
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Layers size={15} className="text-[#3ecf8e]" />
                          <span className="font-semibold text-white text-[11px]">Hive DB Cache</span>
                        </div>
                        <span className="text-[10px] text-[#3ecf8e] font-mono font-bold">SYNCED</span>
                      </div>
                    )}

                    <div className="text-[10px] text-zinc-400 flex items-center justify-between pt-1 border-t border-zinc-800/70">
                      <span>Flutter 3.x UI</span>
                      <span className="text-[#3ecf8e] font-medium">60 FPS</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#3ecf8e] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-400 mb-2">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {project.desc}
                    </p>
                  </div>

                  {/* Concise Bullet Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-zinc-300">
                        <Zap size={11} className="text-[#3ecf8e] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium text-[#3ecf8e] bg-[#3ecf8e]/10 border border-[#3ecf8e]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Links */}
                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Github size={14} />
                      <span>Source Code</span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#3ecf8e]/10 hover:bg-[#3ecf8e]/20 text-[#3ecf8e] transition-all border border-[#3ecf8e]/30 flex items-center gap-1 text-[11px] font-semibold"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
