"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link href="#home" className="text-2xl font-bold tracking-tight text-white hover:opacity-80 transition">
                    Abhishek<span className="text-[#42A5F5]">.dev</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-gray-300 hover:text-[#42A5F5] font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#42A5F5] to-[#0D47A1] text-white font-semibold transform hover:scale-105 transition-all shadow-lg hover:shadow-[#42A5F5]/30"
                    >
                        Contact Me
                    </Link>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-zinc-900 border-b border-white/10 shadow-xl md:hidden flex flex-col items-center py-6 gap-6"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg text-gray-300 hover:text-[#42A5F5] font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#42A5F5] to-[#0D47A1] text-white font-bold tracking-wide mt-2 shadow-[0_0_15px_rgba(66,165,245,0.4)]"
                        >
                            Contact Me
                        </Link>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
