"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award,
  Sparkles
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
    institution: "Independent Contracting & Client Projects",
    location: "Remote / India",
    period: "2023 – Present",
    badge: "Current Work",
    description: "Architecting and developing cross-platform mobile applications for startups and independent clients with focus on clean state management and hardware integrations.",
    highlights: [
      "Engineered full-stack Flutter solutions integrated with Firebase Authentication, Firestore, and Cloud Functions",
      "Built IoT mobile interfaces connecting Raspberry Pi hardware with sub-second MQTT communication",
      "Integrated secure payments via Razorpay and interactive mapping with Google Maps SDK",
      "Maintained 60 FPS UI performance through rigorous profiling and widget tree optimization",
    ],
  },
  {
    type: "education",
    role: "Bachelor of Computer Applications (BCA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    location: "India",
    period: "2025 – Present",
    badge: "Undergraduate Degree",
    description: "Advancing knowledge in software engineering, database design, advanced algorithms, and cloud computing principles through structured distance education.",
    highlights: [
      "Specialization in object-oriented software engineering and modern database systems",
      "Balancing real-world freelance engineering with advanced theoretical coursework",
    ],
  },
  {
    type: "education",
    role: "Diploma in Computer Engineering",
    institution: "Department of Technical Education",
    location: "India",
    period: "2021 – 2024",
    badge: "Engineering Diploma",
    description: "Comprehensive foundational engineering curriculum emphasizing low-level programming, microprocessors, operating systems, and computer network architectures.",
    highlights: [
      "Hands-on embedded systems programming, C/C++, and hardware interfacing",
      "Data structures, algorithms, and relational database management (SQL)",
      "Capstone graduation project focusing on embedded systems & mobile integration",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10 bg-slate-950/40 border-t border-slate-800/60">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <SectionHeading
          badge="Career & Credentials"
          title="Experience & Education"
          subtitle="A continuous trajectory of technical problem-solving, hands-on client delivery, and computer science foundations."
        />

        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-12">
          {timelineData.map((item, index) => {
            const isWork = item.type === "experience";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline node dot */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full border-4 border-[#030712] ${
                  isWork ? "bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.6)]" : "bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.6)]"
                }`} />

                {/* Card */}
                <div className="p-7 sm:p-9 rounded-3xl glass-card border border-slate-800/80 hover:border-sky-500/40 transition-all duration-300 hover:shadow-[0_15px_40px_-15px_rgba(56,189,248,0.12)] space-y-5">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${
                        isWork ? "bg-sky-500/10 text-sky-400 border border-sky-500/20" : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                      }`}>
                        {isWork ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {isWork ? "Professional Experience" : "Academic Education"}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                          {item.role}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 flex items-center gap-1.5">
                        <Calendar size={13} />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Institution & Location */}
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 font-medium">
                    <span className="text-slate-300 font-semibold">{item.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-slate-500" />
                      {item.location}
                    </span>
                    <span>•</span>
                    <span className="text-sky-400 font-semibold bg-sky-950/40 px-2 py-0.5 rounded border border-sky-500/20">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {item.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
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
