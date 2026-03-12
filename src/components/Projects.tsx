"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Ride-Wave",
        desc: "Uber-like taxi booking app. Features real-time tracking, secure payments, and driver matching.",
        tags: ["Flutter", "Firebase", "Google Maps"],
        github: "https://github.com/abhy2003/Ride-Wave",
        gradient: "from-[#FF512F] to-[#DD2476]", // Color-1 alternative
        icon: "🚕"
    },
    {
        title: "Smart-Guard",
        desc: "IoT-based smart lock system. Controls door locks remotely using Raspberry Pi and Flutter app.",
        tags: ["Flutter", "IoT", "Raspberry Pi"],
        github: "https://github.com/abhy2003/Smart-Guard",
        gradient: "from-[#11998e] to-[#38ef7d]", // Color-2 alternative
        icon: "🛡️"
    },
    {
        title: "Todo-App",
        desc: "Advanced task manager with Firebase Auth/Database. Create, edit, and filter tasks efficiently.",
        tags: ["Flutter", "Firebase", "Auth"],
        github: "https://github.com/abhy2003/Todo-App",
        gradient: "from-[#8E2DE2] to-[#4A00E0]", // Color-3 alternative
        icon: "📋"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative z-10 bg-black/40">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeading title="Featured Projects" />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 shadow-2xl transition duration-500 hover:border-[#42A5F5]/40 hover:-translate-y-2"
                        >
                            {/* Project Image Placeholder / Top visual */}
                            <div className={`h-52 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                <span className="text-6xl drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500">{project.icon}</span>
                            </div>

                            {/* Project Content */}
                            <div className="p-8 flex flex-col flex-1 z-10 bg-zinc-900">
                                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2 group-hover:text-[#42A5F5] transition-colors"><span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">▹ </span>{project.title}</h3>
                                <p className="text-sm text-gray-400 font-normal leading-relaxed mb-6 flex-1">
                                    {project.desc}
                                </p>

                                {/* Tech Pills */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-semibold text-[#42A5F5] bg-[#42A5F5]/10 rounded-full border border-[#42A5F5]/20 backdrop-blur-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer Links */}
                                <div className="border-t border-white/10 pt-6 flex items-center justify-between">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-400 hover:text-white font-medium transition-colors"
                                    >
                                        <Github size={20} />
                                        <span>View Code</span>
                                    </a>

                                    {/* Subtle hover icon for view project */}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#42A5F5] group-hover:text-white transition-all duration-300 hover:scale-110"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
