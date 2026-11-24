"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { 
  Smartphone, 
  Cloud, 
  Cpu, 
  Gauge, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  Sparkles,
  GitPullRequest,
  Rocket
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Cross-Platform Mobile Apps",
    badge: "Core Service",
    desc: "Complete mobile app development for iOS and Android using Flutter with 60 FPS transitions, responsive UI, and native performance.",
    icon: Smartphone,
    deliverables: [
      "Single codebase for iOS & Android",
      "BLoC / Riverpod state architecture",
      "Native sensor & camera integration",
    ],
  },
  {
    title: "Firebase Cloud & APIs",
    badge: "BaaS & Backend",
    desc: "Seamless cloud integration covering Authentication, Cloud Firestore real-time data sync, Cloud Functions, and REST API connectivity.",
    icon: Cloud,
    deliverables: [
      "Phone, Google & Email Auth",
      "Real-time Firestore listeners",
      "FCM background notifications",
    ],
  },
  {
    title: "IoT Hardware & Mobile Solutions",
    badge: "Hardware & IoT",
    desc: "Connecting mobile smartphones with Raspberry Pi and hardware sensors via authenticated MQTT telemetry and socket protocols.",
    icon: Cpu,
    deliverables: [
      "Raspberry Pi GPIO triggers",
      "MQTT sub-second telemetry",
      "Biometric security gates",
    ],
  },
  {
    title: "Performance & Refactoring",
    badge: "Optimization",
    desc: "Eliminating dropped frames, profiling memory leaks, migrating legacy setState code to BLoC, and shrinking production APK sizes.",
    icon: Gauge,
    deliverables: [
      "Flutter DevTools FPS profiling",
      "Offline-first Hive caching",
      "Play Store release packaging",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "Mapping flows, state pattern selection, and API specifications.",
    icon: Layers,
  },
  {
    step: "02",
    title: "UI Engineering",
    desc: "Pixel-perfect Flutter widgets with fluid 60 FPS animations.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Backend Sync",
    desc: "Integrating Firebase, REST APIs, and local offline cache.",
    icon: GitPullRequest,
  },
  {
    step: "04",
    title: "Store Launch",
    desc: "Testing, memory profiling, and Google Play deployment.",
    icon: Rocket,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          badge="Services & Execution"
          title="What I Bring to Your Team"
          subtitle="From initial architecture to production launch, I build high-grade mobile applications and IoT interfaces."
        />

        {/* Compact 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-5 sm:p-6 rounded-2xl glass-card border border-zinc-800/80 hover:border-[#3ecf8e]/40 transition-all flex flex-col justify-between group shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(62,207,142,0.18)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#3ecf8e]/10 text-[#3ecf8e] border border-[#3ecf8e]/20 group-hover:scale-110 transition-transform duration-200">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#3ecf8e] bg-[#3ecf8e]/10 px-2.5 py-0.5 rounded-full border border-[#3ecf8e]/25">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#3ecf8e] transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-4">
                    {service.desc}
                  </p>

                  {/* Compact Deliverables */}
                  <div className="space-y-1.5 pt-3 border-t border-zinc-800/80">
                    {service.deliverables.map((item, dIndex) => (
                      <div key={dIndex} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 size={13} className="text-[#3ecf8e] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-3">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3ecf8e] hover:text-white transition-colors"
                  >
                    <span>Discuss project requirements</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compact 4-Phase Process */}
        <div className="pt-8 border-t border-zinc-800/80">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3ecf8e] bg-[#3ecf8e]/10 px-2.5 py-0.5 rounded-full border border-[#3ecf8e]/20">
              Execution Process
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
              4-Step Development Lifecycle
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.step}
                  className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-black text-zinc-700 group-hover:text-[#3ecf8e]/40 transition-colors">
                      {step.step}
                    </span>
                    <div className="p-1.5 rounded-lg bg-zinc-800/80 text-[#3ecf8e] border border-zinc-700/60">
                      <StepIcon size={14} />
                    </div>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-normal">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
