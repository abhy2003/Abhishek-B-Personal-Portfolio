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
    badge: "Most Requested",
    desc: "Complete end-to-end mobile app engineering for iOS and Android using Flutter. Pixel-perfect translation of Figma designs, smooth 60 FPS transitions, and native device performance.",
    icon: Smartphone,
    color: "from-sky-500/20 to-blue-500/10 text-sky-400 border-sky-500/30",
    deliverables: [
      "Single codebase for iOS & Android",
      "BLoC / Riverpod state architecture",
      "Native device sensor & camera access",
      "Adaptive layouts for all phone screens",
    ],
  },
  {
    title: "Firebase & Cloud Architecture",
    badge: "Cloud BaaS",
    desc: "Seamless cloud integration covering Authentication, Cloud Firestore real-time data sync, Cloud Storage, Push Notifications, and backend API connectivity.",
    icon: Cloud,
    color: "from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30",
    deliverables: [
      "Phone, Google & Email Authentication",
      "Firestore real-time listeners & rules",
      "FCM background push notifications",
      "REST API integration with Dio & interceptors",
    ],
  },
  {
    title: "IoT Hardware & Mobile Solutions",
    badge: "Specialized",
    desc: "Bridging physical microcontrollers with mobile smartphones. Direct experience interfacing Raspberry Pi, sensors, relays, and servo locks via MQTT and custom protocols.",
    icon: Cpu,
    color: "from-purple-500/20 to-violet-500/10 text-purple-400 border-purple-500/30",
    deliverables: [
      "Raspberry Pi GPIO mobile triggers",
      "MQTT real-time publish/subscribe telemetry",
      "Biometric security gate validation",
      "Hardware status monitoring dashboards",
    ],
  },
  {
    title: "Performance Audits & Refactoring",
    badge: "Optimization",
    desc: "Upgrading existing Flutter applications to modern architecture standards. Eliminating junk frames, optimizing widget rebuilds, and securing production builds.",
    icon: Gauge,
    color: "from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30",
    deliverables: [
      "Flutter DevTools memory & FPS profiling",
      "Migration from setState to BLoC/Cubit",
      "Offline-first Hive caching integration",
      "Play Store release prep & APK shrinkage",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    desc: "Analyzing user flows, defining data models, selecting the state management pattern, and mapping API endpoints.",
    icon: Layers,
  },
  {
    step: "02",
    title: "Component & UI Engineering",
    desc: "Building atomic Flutter widgets with fluid animations, dark/light themes, and responsive design systems.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Backend & Hardware Sync",
    desc: "Connecting Firebase, REST APIs, local SQLite/Hive persistence, and IoT communication protocols.",
    icon: GitPullRequest,
  },
  {
    step: "04",
    title: "Testing & Store Launch",
    desc: "Unit testing, memory profiling, release bundle optimization, and guiding deployment to app stores.",
    icon: Rocket,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          badge="Specialized Services"
          title="What I Bring to Your Product"
          subtitle="From initial concept and architectural design to production store release, I provide complete engineering solutions for mobile and IoT products."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 hover:shadow-[0_15px_40px_-15px_rgba(56,189,248,0.18)] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${service.color} border group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={28} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/40 px-3 py-1 rounded-full border border-sky-500/30">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal mb-6">
                    {service.desc}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Key Deliverables:</p>
                    {service.deliverables.map((item, dIndex) => (
                      <div key={dIndex} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-sky-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 group-hover:text-sky-300 transition-colors"
                  >
                    <span>Discuss this service</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Development Workflow / How I Work */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
              Execution Strategy
            </span>
            <h3 className="text-3xl font-extrabold text-white mt-3">
              How I Build Production Apps
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              A systematic 4-phase process that turns ideas into reliable, scalable mobile products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative hover:border-slate-700 transition-all group"
                >
                  <div className="text-3xl font-black text-slate-800 group-hover:text-sky-500/30 transition-colors mb-4">
                    {step.step}
                  </div>
                  <div className="p-3 w-fit rounded-xl bg-slate-800/80 text-sky-400 mb-4 border border-slate-700/60">
                    <StepIcon size={20} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
