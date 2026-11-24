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
  badge: string;
}

const skillsData: SkillItem[] = [
  {
    name: "Flutter Framework",
    category: "mobile",
    desc: "Single-codebase cross-platform mobile apps for iOS & Android with native 60 FPS performance.",
    icon: Smartphone,
    badge: "Core",
  },
  {
    name: "Dart Programming",
    category: "mobile",
    desc: "Async programming, Streams, null-safety, OOP patterns, and clean maintainable conventions.",
    icon: Terminal,
    badge: "Language",
  },
  {
    name: "BLoC & Riverpod",
    category: "mobile",
    desc: "Predictable unidirectional state management and testable Clean Architecture patterns.",
    icon: Layers,
    badge: "Architecture",
  },
  {
    name: "Firebase Suite",
    category: "cloud",
    desc: "Firebase Authentication, Cloud Firestore real-time sync, Cloud Functions, and Cloud Storage.",
    icon: Flame,
    badge: "BaaS",
  },
  {
    name: "IoT & Raspberry Pi",
    category: "iot",
    desc: "Interfacing Flutter with Raspberry Pi GPIO, servo motors, and MQTT telemetry communication.",
    icon: Cpu,
    badge: "Hardware",
  },
  {
    name: "Google Maps SDK",
    category: "mobile",
    desc: "Turn-by-turn routing, polyline animations, live geofencing, and Places autocomplete.",
    icon: MapPin,
    badge: "Location",
  },
  {
    name: "Offline DB (Hive & SQLite)",
    category: "data",
    desc: "Offline-first architectures using SQFlite, Hive key-value persistence, and fast local cache.",
    icon: Database,
    badge: "Storage",
  },
  {
    name: "Razorpay Payments",
    category: "cloud",
    desc: "Secure checkout experiences, transaction verification, webhooks, and invoice handling.",
    icon: CreditCard,
    badge: "Fintech",
  },
  {
    name: "Push Notifications",
    category: "cloud",
    desc: "FCM (Firebase Cloud Messaging), silent background notifications, and WebSockets.",
    icon: Radio,
    badge: "Real-Time",
  },
  {
    name: "REST APIs & Dio",
    category: "cloud",
    desc: "Robust HTTP client architectures with interceptors, token refresh, and retry logic.",
    icon: Workflow,
    badge: "APIs",
  },
  {
    name: "Git & App Deployment",
    category: "mobile",
    desc: "Version control workflows, GitHub Actions, and Android APK / App Bundle releases.",
    icon: GitBranch,
    badge: "DevOps",
  },
  {
    name: "Biometric & Security",
    category: "mobile",
    desc: "Fingerprint & Face ID authentication, secure local storage, and code obfuscation.",
    icon: ShieldCheck,
    badge: "Security",
  },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "mobile", label: "Mobile" },
  { id: "cloud", label: "Cloud & APIs" },
  { id: "iot", label: "IoT Hardware" },
  { id: "data", label: "Databases" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("all");

  const filteredSkills = skillsData.filter(
    (skill) => activeTab === "all" || skill.category === activeTab
  );

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          badge="Technical Skills"
          title="Core Technologies & Frameworks"
          subtitle="A battle-tested mobile development stack optimized for speed, maintainability, and clean architecture."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as SkillCategory)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeTab === cat.id
                  ? "bg-[#3ecf8e] text-slate-950 font-bold shadow-[0_0_15px_rgba(62,207,142,0.3)] scale-105"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Compact, Well-Proportioned Skills Matrix */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
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
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  whileHover={{ y: -4, borderColor: "rgba(62, 207, 142, 0.4)" }}
                  className="p-4 rounded-xl glass-card border border-zinc-800/80 transition-all flex flex-col justify-between group cursor-default shadow-sm hover:shadow-[0_8px_25px_-8px_rgba(62,207,142,0.18)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-[#3ecf8e]/10 text-[#3ecf8e] border border-[#3ecf8e]/20 group-hover:scale-110 transition-transform duration-200">
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#3ecf8e] bg-[#3ecf8e]/10 px-2 py-0.5 rounded border border-[#3ecf8e]/20">
                        {skill.badge}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white group-hover:text-[#3ecf8e] transition-colors mb-1">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {skill.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Compact Guarantee Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-10 p-4 rounded-2xl glass-card border border-zinc-800/80 bg-[#3ecf8e]/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
        >
          <div className="flex items-center gap-2.5">
            <Zap size={16} className="text-[#3ecf8e] shrink-0" />
            <span className="text-zinc-300 font-medium">
              Architecture Standard: <strong className="text-white">Clean Architecture + BLoC</strong> • 60 FPS Guaranteed Motion
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] text-[#3ecf8e]">
            <span className="bg-zinc-800/80 px-2.5 py-1 rounded-md border border-zinc-700/60">✓ Null-Safe</span>
            <span className="bg-zinc-800/80 px-2.5 py-1 rounded-md border border-zinc-700/60">✓ Offline Cache</span>
            <span className="bg-zinc-800/80 px-2.5 py-1 rounded-md border border-zinc-700/60">✓ Modular</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
