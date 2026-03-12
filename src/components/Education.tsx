"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-24 relative z-10 bg-black/40">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <SectionHeading title="Education" />

                <div className="relative border-l-2 border-[#42A5F5]/30 ml-4 md:ml-0 md:pl-10 space-y-12">

                    {/* Education 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="relative pt-2 pl-6"
                    >
                        {/* Timeline dot */}
                        <span className="absolute -left-[11px] md:-left-[49px] top-6 h-4 w-4 rounded-full bg-zinc-900 border-2 border-[#42A5F5] shadow-[0_0_8px_rgba(66,165,245,0.4)]"></span>

                        <div className="glass p-8 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-[#42A5F5]/40 transition-colors shadow-lg hover:shadow-[0_10px_30px_rgba(66,165,245,0.1)] group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg text-[#42A5F5] group-hover:bg-[#42A5F5]/10 group-hover:scale-110 transition-all">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-[#42A5F5] transition-colors">Bachelor of Computer Applications (BCA)</h3>
                                        <h4 className="text-sm text-gray-400 font-medium">IGNOU — Distance Education</h4>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 text-sm font-medium text-gray-500 min-w-max">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} className="text-[#42A5F5]" />
                                        <span>2025 – Present</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative pt-2 pl-6"
                    >
                        {/* Timeline dot */}
                        <span className="absolute -left-[11px] md:-left-[49px] top-6 h-4 w-4 rounded-full bg-zinc-900 border-2 border-[#42A5F5] shadow-[0_0_8px_rgba(66,165,245,0.4)]"></span>

                        <div className="glass p-8 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-[#42A5F5]/40 transition-colors shadow-lg hover:shadow-[0_10px_30px_rgba(66,165,245,0.1)] group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/5 rounded-lg text-gray-400 group-hover:bg-[#42A5F5]/10 group-hover:text-[#42A5F5] group-hover:scale-110 transition-all">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-[#42A5F5] transition-colors">Diploma in Computer Engineering</h3>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 text-sm font-medium text-gray-500 min-w-max">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} className="text-[#42A5F5]" />
                                        <span>2021 – 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
