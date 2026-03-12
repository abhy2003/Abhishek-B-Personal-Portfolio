"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
        >
            <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center lg:text-left space-y-8"
                >
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-white/10 shadow-[0_0_15px_rgba(66,165,245,0.1)]">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-300">
                            Available for opportunities
                        </span>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-xl md:text-2xl font-medium text-[#42A5F5]">
                            Hi, I'm
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                            Abhishek B
                        </h1>
                        <div className="text-2xl md:text-4xl font-medium text-gray-300 h-[50px] md:h-[60px]">
                            <Typewriter
                                words={[
                                    "Mobile App Developer",
                                    "Flutter Developer",
                                    "IoT Enthusiast",
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </div>
                    </div>

                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                        Passionate Mobile App Developer from India. Expert in building beautiful,
                        cross-platform applications using <span className="text-gray-200 font-medium">Flutter & Firebase</span>. Experienced in IoT
                        integrations and <span className="text-gray-200 font-medium">Google Cloud services</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                        <a
                            href="https://drive.google.com/file/d/1HiZnJVf3M5dSZyjbvdgHacD8X5eltfjF/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#42A5F5] to-[#0D47A1] text-white rounded-full font-medium text-base shadow-[0_4px_15px_rgba(66,165,245,0.3)] hover:shadow-[0_4px_20px_rgba(66,165,245,0.5)] transform hover:scale-105 transition-all"
                        >
                            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                            View Resume
                        </a>
                        <Link
                            href="#projects"
                            className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-transparent border border-[#42A5F5]/30 hover:border-[#42A5F5] hover:bg-[#42A5F5]/10 text-white rounded-full font-medium text-base transform hover:scale-105 transition-all"
                        >
                            View Projects
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 border-t border-white/10 mt-6 w-fit mx-auto lg:mx-0 pr-10">
                        {[
                            { icon: <Linkedin size={26} />, href: "https://www.linkedin.com/in/abhishek-b-1a2b13276/" },
                            { icon: <Github size={26} />, href: "https://github.com/abhy2003" },
                            { icon: <Mail size={26} />, href: "mailto:bijuabhishek530@gmail.com" },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[26px] h-[26px]">
                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                                    </svg>
                                ),
                                href: "https://discordapp.com/users/abhishek_b"
                            }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -5, color: "#42A5F5" }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-400 hover:text-white transition-colors drop-shadow-md"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex justify-center lg:justify-end py-6"
                >
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
                        <div className="absolute inset-0 bg-[#42A5F5]/30 rounded-full blur-[50px] group-hover:blur-[80px] group-hover:bg-[#42A5F5]/40 transition-all duration-500"></div>

                        <motion.div
                            animate={{ y: [-15, 15, -15] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="relative w-full h-full rounded-full border-[6px] border-[#0D47A1]/40 overflow-hidden shadow-[0_0_40px_rgba(66,165,245,0.4)] z-10"
                        >
                            <Image
                                src="/profile.jpg"
                                alt="Abhishek B"
                                fill
                                className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                priority
                            />
                        </motion.div>

                        {/* Orbiting Elements (simulated via positioned animations) */}
                        <motion.div
                            animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                            className="absolute -top-6 -left-6 z-20 glass p-4 rounded-xl shadow-xl flex items-center justify-center border border-white/20"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="#42A5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="m20.61 5.39-4.22-4a2 2 0 0 0-2.78 0l-4.22 4a2 2 0 0 0 0 2.83l4.22 4a2 2 0 0 0 2.78 0l4.22-4a2 2 0 0 0 0-2.83Z"></path><path d="m3.39 18.61 4.22 4a2 2 0 0 0 2.78 0l4.22-4a2 2 0 0 0 0-2.83l-4.22-4a2 2 0 0 0-2.78 0l-4.22 4a2 2 0 0 0 0 2.83Z"></path><path d="m14 10-4 4"></path></svg>
                        </motion.div>

                        <motion.div
                            animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                            className="absolute bottom-4 -right-8 z-20 glass p-4 rounded-xl shadow-xl flex items-center justify-center border border-white/20"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="#FFCA28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><ellipse cx="12" cy="12" rx="3" ry="3"></ellipse><path d="M19.07 4.93a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hidden lg:flex"
            >
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 opacity-50">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </motion.div>
        </section>
    );
}
