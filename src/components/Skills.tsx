"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { 
  Smartphone, 
  Flame, 
  Cpu, 
  MapPin, 
  Database, 
  CreditCard, 
  Layers, 
  Radio, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  GitBranch,
  Workflow
} from "lucide-react";

type SkillCategory = "all" | "mobile" | "cloud" | "iot" | "data";

interface SkillItem {
  name: string;
  category: "mobile" | "cloud" | "iot" | "data";
  desc: string;
  icon: any;
  color: string;
  badge: string;
  level: string;
}

const skillsData: SkillItem[] = [
  {
    name: "Flutter Framework",
    category: "mobile",
    desc: "Production cross-platform mobile apps for iOS and Android with high performance and pixel-perfect UI.",
    icon: Smartphone,
    color: "from-sky-500/20 to-blue-500/10 text-sky-400 border-sky-500/30",
    badge: "Primary Core",
    level: "Advanced",
  },
  {
    name: "Dart Programming",
    category: "mobile",
    desc: "Asynchronous programming, Streams, null safety, OOP patterns, and clean maintainable coding conventions.",
    icon: Terminal,
    color: "from-blue-500/20 to-indigo-500/10 text-blue-400 border-blue-500/30",
    badge: "Core Language",
    level: "Advanced",
  },
  {
    name: "BLoC & State Architecture",
    category: "mobile",
    desc: "Scalable reactive state management using BLoC, Cubit, and Riverpod with predictable unidirectional data flows.",
    icon: Layers,
    color: "from-cyan-500/20 to-teal-500/10 text-cyan-400 border-cyan-500/30",
    badge: "Architecture",
    level: "Advanced",
  },
  {
    name: "Firebase Cloud Ecosystem",
    category: "cloud",
    desc: "Firebase Authentication, Cloud Firestore real-time sync, Cloud Functions, and Cloud Storage.",
    icon: Flame,
    color: "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30",
    badge: "Backend & BaaS",
    level: "Advanced",
  },
  {
    name: "IoT & Embedded Mobile",
    category: "iot",
    desc: "Interfacing Flutter with Raspberry Pi, GPIO pins, servo controls, and MQTT telemetry for smart devices.",
    icon: Cpu,
    color: "from-purple-500/20 to-violet-500/10 text-purple-400 border-purple-500/30",
    badge: "Hardware & IoT",
    level: "Specialized",
  },
  {
    name: "Google Maps & Places API",
    category: "mobile",
    desc: "Turn-by-turn routing, live geofencing, real-time driver tracking, markers, and custom map themes.",
    icon: MapPin,
    color: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30",
    badge: "Geo & Location",
    level: "Proficient",
  },
  {
    name: "Offline Storage (Hive & SQLite)",
    category: "data",
    desc: "Offline-first architectures using SQFlite, Hive key-value storage, and encrypted local persistence.",
    icon: Database,
    color: "from-indigo-500/20 to-blue-500/10 text-indigo-400 border-indigo-500/30",
    badge: "Database",
    level: "Proficient",
  },
  {
    name: "Payment Gateways (Razorpay)",
    category: "cloud",
    desc: "Secure checkout experiences, transaction verification, webhook integration, and invoice handling.",
    icon: CreditCard,
    color: "from-teal-500/20 to-emerald-500/10 text-teal-400 border-teal-500/30",
    badge: "Fintech & Payments",
    level: "Proficient",
  },
  {
    name: "Push Notifications & Real-Time",
    category: "cloud",
    desc: "FCM (Firebase Cloud Messaging), background message handlers, silent data pushes, and WebSockets.",
    icon: Radio,
    color: "from-rose-500/20 to-pink-500/10 text-rose-400 border-rose-500/30",
    badge: "Real-Time Comms",
    level: "Proficient",
  },
  {
    name: "REST APIs & JSON Parsing",
    category: "cloud",
    desc: "Robust HTTP client architectures with Dio/http, interceptors, retry logic, error handling, and model code-gen.",
    icon: Workflow,
    color: "from-sky-500/20 to-cyan-500/10 text-sky-400 border-sky-500/30",
    badge: "API Architecture",
    level: "Advanced",
  },
  {
    name: "Git, CI/CD & Play Store",
    category: "mobile",
    desc: "Version control with Git, feature branch workflows, GitHub Actions, and Android APK / App Bundle release packaging.",
    icon: GitBranch,
    color: "from-slate-500/20 to-zinc-500/10 text-slate-300 border-slate-500/30",
    badge: "DevOps & Tools",
    level: "Proficient",
  },
  {
    name: "Security & Clean Code",
    category: "mobile",
    desc: "Biometric authentication (Fingerprint / Face ID), secure token storage, obfuscation, and lint standards.",
    icon: ShieldCheck,
    color: "from-violet-500/20 to-purple-500/10 text-violet-400 border-violet-500/30",
    badge: "App Security",
    level: "Proficient",
  },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "mobile", label: "Mobile & Architecture" },
  { id: "cloud", label: "Cloud & APIs" },
  { id: "iot", label: "IoT & Hardware" },
  { id: "data", label: "Databases & Storage" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("all");

  const filteredSkills = skillsData.filter(
    (skill) => activeTab === "all" || skill.category === activeTab
  );

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          badge="Technical Arsenal"
          title="Engineered for Performance & Scale"
          subtitle="A comprehensive toolkit refined over years of building cross-platform mobile apps, cloud integrations, and IoT hardware interfaces."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as SkillCategory)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-sky-400 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="group relative p-6 rounded-2xl glass-card border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(56,189,248,0.15)] flex flex-col justify-between"
                >
                  {/* Card Header */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} border group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">
                          {skill.badge}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors mb-2">
                      {skill.name}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed font-normal">
                      {skill.desc}
                    </p>
                  </div>

                  {/* Card Bottom status */}
                  <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Proficiency</span>
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      {skill.level}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Architecture Standards Callout Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl glass-card border border-slate-800/80 bg-gradient-to-r from-slate-900/60 via-slate-900/90 to-sky-950/30 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Engineering Quality Guarantee</h4>
              <p className="text-xs sm:text-sm text-slate-400">Strict linting, Clean Architecture layer separation, memory leak profiling, and 60 FPS guaranteed animations.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 shrink-0">
            {["Clean Architecture", "Null-Safe Dart", "Modular Feature-First", "Offline Resilience"].map((item, i) => (
              <span key={i} className="text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 rounded-lg">
                ✓ {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
