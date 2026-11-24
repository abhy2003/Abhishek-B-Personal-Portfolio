"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { 
  Github, 
  ExternalLink, 
  MapPin, 
  Cpu, 
  CheckCircle, 
  ShieldCheck, 
  Radio, 
  Layers, 
  CreditCard, 
  Activity,
  ArrowUpRight,
  Smartphone,
  Sparkles
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
  gradient: string;
  metrics: { label: string; value: string }[];
  accentColor: string;
}

const projects: Project[] = [
  {
    id: "ride-wave",
    title: "Ride-Wave",
    subtitle: "On-Demand Ride Hailing & Navigation App",
    category: "mobile",
    desc: "A production-grade ride-sharing mobile application modeled after Uber. Implemented real-time GPS vehicle tracking with Google Maps, polyline routing, dynamic fare estimates, and integrated Razorpay checkout.",
    features: [
      "Real-time driver location tracking with smooth polyline route animation",
      "Google Places autocomplete & dynamic geofencing",
      "Seamless payment processing via Razorpay gateway",
      "Firebase Cloud Messaging (FCM) instant ride notifications",
    ],
    tags: ["Flutter", "Firebase", "Google Maps SDK", "Razorpay", "BLoC Architecture"],
    github: "https://github.com/abhy2003/Ride-Wave",
    badge: "Flagship Mobile App",
    gradient: "from-sky-500/20 via-blue-600/10 to-indigo-600/20",
    accentColor: "sky",
    metrics: [
      { label: "State Latency", value: "< 80ms" },
      { label: "Platform", value: "iOS & Android" },
      { label: "Sync Engine", value: "Cloud Firestore" },
    ],
  },
  {
    id: "smart-guard",
    title: "Smart-Guard IoT",
    subtitle: "Hardware-Connected Remote Smart Lock System",
    category: "iot",
    desc: "An end-to-end IoT home security ecosystem. A Flutter mobile client communicates directly with a Raspberry Pi micro-controller over authenticated MQTT channels to actuate door solenoids, monitor intrusion sensors, and send emergency alerts.",
    features: [
      "Sub-second remote door lock/unlock trigger via Raspberry Pi GPIO",
      "Biometric fingerprint & Face-ID mobile authentication gate",
      "Real-time sensor telemetry and intrusion detection logs",
      "Offline local fallback mode over local network socket connection",
    ],
    tags: ["Flutter", "Raspberry Pi", "IoT & GPIO", "MQTT Protocol", "Firebase", "Python"],
    github: "https://github.com/abhy2003/Smart-Guard",
    badge: "IoT & Hardware Integration",
    gradient: "from-emerald-500/20 via-teal-600/10 to-cyan-600/20",
    accentColor: "emerald",
    metrics: [
      { label: "Trigger Response", value: "350ms" },
      { label: "Hardware", value: "Raspberry Pi 4" },
      { label: "Security", value: "Biometric Auth" },
    ],
  },
  {
    id: "todo-app",
    title: "TaskFlow Pro",
    subtitle: "Offline-First Enterprise Productivity Suite",
    category: "mobile",
    desc: "A high-performance task and milestone manager engineered with an offline-first architecture. Utilizes Hive local key-value persistence with automated bi-directional synchronization to Cloud Firestore upon network reconnection.",
    features: [
      "Instant zero-latency UI updates backed by Hive local cache",
      "Conflict-free background synchronization with Cloud Firestore",
      "Category tagging, priority matrices, and deadline countdown reminders",
      "Comprehensive analytical productivity reports and streak charts",
    ],
    tags: ["Flutter", "Hive DB", "Firebase Auth", "Firestore", "Riverpod", "Clean Architecture"],
    github: "https://github.com/abhy2003/Todo-App",
    badge: "Offline-First Mobile",
    gradient: "from-purple-500/20 via-violet-600/10 to-indigo-600/20",
    accentColor: "purple",
    metrics: [
      { label: "Offline Cache", value: "100% Offline" },
      { label: "DB Engine", value: "Hive & Firestore" },
      { label: "State", value: "Riverpod" },
    ],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "mobile" | "iot">("all");

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-950/40 border-y border-slate-800/60">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          badge="Featured Portfolio"
          title="Engineered Products & Applications"
          subtitle="Real-world mobile apps and IoT hardware systems designed with architectural rigor, smooth animations, and bulletproof reliability."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-3 mb-16">
          {[
            { id: "all", label: "All Case Studies" },
            { id: "mobile", label: "Mobile Apps (Flutter)" },
            { id: "iot", label: "IoT & Hardware" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === item.id
                  ? "bg-sky-400 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.35)]"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Projects Showcase List */}
        <div className="space-y-16">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl glass-card border border-slate-800/80 overflow-hidden hover:border-sky-500/40 transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(56,189,248,0.15)] group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
                    
                    {/* Visual UI Preview Container (Simulated High-Tech Mobile View) */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className={`relative rounded-3xl p-6 bg-gradient-to-br ${project.gradient} border border-slate-700/50 overflow-hidden shadow-2xl`}>
                        {/* Ambient glow inside card */}
                        <div className="absolute top-0 right-0 w-44 h-44 bg-white/5 rounded-full blur-2xl" />

                        {/* Interactive UI Mockup Representation */}
                        <div className="relative rounded-2xl bg-[#090d16] border border-slate-800 p-5 space-y-4 shadow-xl">
                          
                          {/* Mini Header bar */}
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="text-[11px] font-mono text-slate-400 font-medium">
                              {project.title.toLowerCase()}.dart
                            </span>
                          </div>

                          {/* Dynamic Content Preview based on project */}
                          {project.id === "ride-wave" && (
                            <div className="space-y-3">
                              <div className="p-3 rounded-xl bg-slate-900/90 border border-sky-500/30 flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                  <MapPin size={18} className="text-sky-400" />
                                  <div>
                                    <p className="text-xs font-bold text-white">Live Route Active</p>
                                    <p className="text-[10px] text-slate-400">Driver Arriving • 4 mins away</p>
                                  </div>
                                </div>
                                <span className="px-2 py-1 rounded bg-sky-500/20 text-sky-400 text-[10px] font-bold">
                                  GPS 60 FPS
                                </span>
                              </div>

                              <div className="h-24 rounded-xl bg-slate-950/90 border border-slate-800 p-3 relative flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                                <div className="relative z-10 text-center">
                                  <span className="text-xs font-semibold text-slate-300">Google Maps Navigation Layer</span>
                                  <div className="mt-1 flex items-center justify-center gap-2 text-[11px] text-sky-400">
                                    <span>Fare: ₹240</span>
                                    <span>•</span>
                                    <span className="text-emerald-400">Razorpay Secured</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {project.id === "smart-guard" && (
                            <div className="space-y-3">
                              <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                  <Cpu size={18} className="text-emerald-400" />
                                  <div>
                                    <p className="text-xs font-bold text-white">Raspberry Pi Telemetry</p>
                                    <p className="text-[10px] text-slate-400">Hardware Gateway: Online</p>
                                  </div>
                                </div>
                                <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                                  MQTT Sub
                                </span>
                              </div>

                              <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <ShieldCheck size={18} className="text-sky-400" />
                                  <span className="text-xs font-bold text-slate-200">Main Door Bolt</span>
                                </div>
                                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                                  SECURED (LOCKED)
                                </span>
                              </div>
                            </div>
                          )}

                          {project.id === "todo-app" && (
                            <div className="space-y-3">
                              <div className="p-3 rounded-xl bg-slate-900/90 border border-purple-500/30 flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                  <Layers size={18} className="text-purple-400" />
                                  <div>
                                    <p className="text-xs font-bold text-white">Hive Local Database</p>
                                    <p className="text-[10px] text-slate-400">0ms Offline Cache Active</p>
                                  </div>
                                </div>
                                <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-400 text-[10px] font-bold">
                                  Synced
                                </span>
                              </div>

                              <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-slate-300 font-medium line-through opacity-60">Implement Firebase Auth</span>
                                  <span className="text-[10px] text-emerald-400 font-bold">DONE</span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-slate-200 font-medium">Design Responsive UI Screens</span>
                                  <span className="text-[10px] text-amber-400 font-bold">IN PROGRESS</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Technical Spec footer inside card */}
                          <div className="flex items-center justify-between pt-2 text-[11px] text-slate-400 font-mono">
                            <span>Status: Production-Ready</span>
                            <span className="text-sky-400">Flutter 3.x</span>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"} space-y-6`}>
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20">
                          <Sparkles size={13} />
                          <span>{project.badge}</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-sky-400 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-sm font-semibold text-slate-300">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                        {project.desc}
                      </p>

                      {/* Feature checkmarks */}
                      <div className="space-y-2.5 pt-2">
                        {project.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle size={16} className="text-sky-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Metrics Row */}
                      <div className="grid grid-cols-3 gap-3 pt-3">
                        {project.metrics.map((metric, mIndex) => (
                          <div key={mIndex} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                            <div className="text-xs sm:text-sm font-bold text-white">{metric.value}</div>
                            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-3 py-1 rounded-lg text-xs font-semibold text-sky-300 bg-sky-950/40 border border-sky-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-sky-500/40 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 group/btn"
                        >
                          <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                          <span>Inspect GitHub Code</span>
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-400 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5"
                        >
                          <span>Architecture & Docs</span>
                          <ArrowUpRight size={15} />
                        </a>
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
