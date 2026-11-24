"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2
} from "lucide-react";

interface TimelineItem {
  type: "experience" | "education";
  role: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  badge: string;
}

const timelineData: TimelineItem[] = [
  {
    type: "experience",
    role: "Freelance Flutter & Mobile Systems Developer",
    institution: "Client Projects & Independent Contracts",
    location: "Remote / India",
    period: "2023 – Present",
    badge: "Current Role",
    description: "Developing cross-platform mobile apps for startups and clients with emphasis on BLoC state architecture, Firebase sync, and hardware integrations.",
    highlights: [
      "Built full-stack Flutter apps with Firebase Auth, Firestore, and Cloud Functions",
      "Engineered IoT mobile bridges over Raspberry Pi with sub-second MQTT communication",
      "Integrated Razorpay payment gateways and Google Maps live navigation tracking",
    ],
  },
  {
    type: "education",
    role: "Bachelor of Computer Applications (BCA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    location: "India",
    period: "2025 – Present",
    badge: "Undergraduate",
    description: "Deepening theoretical software engineering, system architecture, database design, and algorithmic problem-solving through distance education.",
    highlights: [
      "Specialization in object-oriented software engineering and modern database systems",
      "Combining professional client engineering with computer science coursework",
    ],
  },
  {
    type: "education",
    role: "Diploma in Computer Engineering",
    institution: "Department of Technical Education",
    location: "India",
    period: "2021 – 2024",
    badge: "Engineering Diploma",
    description: "Technical curriculum focused on microprocessors, embedded hardware systems, C/C++, networking, and relational databases.",
    highlights: [
      "Hardware programming and embedded sensor interfacing",
      "Graduation capstone: embedded hardware and mobile application prototype",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative z-10 bg-[#090a0d]/60 border-t border-zinc-800/60">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading
          badge="Background"
          title="Experience & Education"
          subtitle="A track record of technical delivery, mobile product development, and computer engineering foundations."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-800 ml-3 sm:ml-4 space-y-6">
          {timelineData.map((item, index) => {
            const isWork = item.type === "experience";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Compact Node Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-5 w-4 h-4 rounded-full border-3 border-[#0c0d0e] bg-[#3ecf8e] shadow-[0_0_10px_rgba(62,207,142,0.6)]" />

                {/* Compact Card */}
                <div className="p-5 sm:p-6 rounded-2xl glass-card border border-zinc-800/80 hover:border-[#3ecf8e]/40 transition-all space-y-3">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#3ecf8e]/10 text-[#3ecf8e] border border-[#3ecf8e]/20">
                        {isWork ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                          {isWork ? "Professional Experience" : "Academic Education"}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#3ecf8e] transition-colors">
                          {item.role}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#3ecf8e] flex items-center gap-1 self-start sm:self-auto">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                  </div>

                  {/* Institution line */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                    <span className="text-zinc-300 font-semibold">{item.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-zinc-500" />
                      {item.location}
                    </span>
                    <span>•</span>
                    <span className="text-[#3ecf8e] font-semibold bg-[#3ecf8e]/10 px-2 py-0.5 rounded text-[10px] border border-[#3ecf8e]/20">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-zinc-800/70">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 size={13} className="text-[#3ecf8e] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
