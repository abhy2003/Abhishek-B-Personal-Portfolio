"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { Mail, MessageSquare, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        // Note: since it targets a hidden iframe, the page won't reload.
        // We just show the success message.
        setTimeout(() => setSubmitted(true), 500);
        setTimeout(() => setSubmitted(false), 5000); // Hide after 5 seconds
    };

    return (
        <section id="contact" className="py-24 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeading title="Get In Touch" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-10"
                    >
                        <div>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Talk</h3>
                            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-4">
                                Interested in my work or have a partnership idea? Reach out to me directly!
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: <Mail size={24} className="text-[#42A5F5]" />, label: "bijuabhishek530@gmail.com" },
                                { icon: <MessageSquare size={24} className="text-[#42A5F5]" />, label: "Discord: abhishek_b" },
                                { icon: <MapPin size={24} className="text-[#42A5F5]" />, label: "India" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-5 group glass p-5 rounded-2xl border border-white/5 hover:border-[#42A5F5]/30 transition-all bg-zinc-900 shadow-md">
                                    <div className="p-4 bg-white/5 rounded-full shadow-inner group-hover:scale-110 group-hover:bg-[#42A5F5]/10 transition-all">
                                        {item.icon}
                                    </div>
                                    <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#42A5F5]/20 to-[#0D47A1]/20 rounded-3xl blur-[40px] -z-10" />
                        <form
                            className="flex flex-col gap-6 glass p-8 md:p-12 rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl relative z-10"
                            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf1J8wQcxefqIQSXiAWtBYs56zJtg4g82XWLr5NO5FyYh0RPQ/formResponse"
                            method="POST"
                            target="hidden_iframe"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-400 uppercase tracking-widest pl-1">Name</label>
                                <input
                                    type="text"
                                    name="entry.1874968991"
                                    placeholder="John Doe"
                                    required
                                    className="bg-black/40 border border-white/10 focus:border-[#42A5F5] text-white p-4 rounded-xl outline-none transition-all focus:shadow-[0_0_15px_rgba(66,165,245,0.3)] hover:bg-black/60 font-light"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-400 uppercase tracking-widest pl-1">Email</label>
                                <input
                                    type="email"
                                    name="entry.1933337502"
                                    placeholder="john@example.com"
                                    required
                                    className="bg-black/40 border border-white/10 focus:border-[#42A5F5] text-white p-4 rounded-xl outline-none transition-all focus:shadow-[0_0_15px_rgba(66,165,245,0.3)] hover:bg-black/60 font-light"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-400 uppercase tracking-widest pl-1">Message</label>
                                <textarea
                                    name="entry.1922595339"
                                    rows={5}
                                    placeholder="Your message here..."
                                    required
                                    className="bg-black/40 border border-white/10 focus:border-[#42A5F5] text-white p-4 rounded-xl outline-none transition-all focus:shadow-[0_0_15px_rgba(66,165,245,0.3)] resize-none hover:bg-black/60 font-light"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 py-4 mt-4 bg-gradient-to-r from-[#42A5F5] to-[#0D47A1] text-white rounded-xl font-bold text-lg hover:shadow-[0_4px_20px_rgba(66,165,245,0.5)] transform hover:-translate-y-1 transition-all group overflow-hidden relative"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0"></div>
                            </button>
                        </form>

                        {/* Modal Overlay logic */}
                        <AnimatePresence>
                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute inset-0 z-50 flex items-center justify-center p-8 bg-zinc-950/90 backdrop-blur-sm rounded-3xl"
                                >
                                    <div className="text-center flex flex-col items-center gap-6 glass p-8 rounded-2xl border border-green-500/30">
                                        <CheckCircle size={64} className="text-green-400" />
                                        <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
                                        <p className="text-gray-400 max-w-sm">Thanks for reaching out. I'll get back to you shortly.</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }}></iframe>
        </section>
    );
}
