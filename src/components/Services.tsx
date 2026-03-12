"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { Smartphone, Code2, Network } from "lucide-react";

const services = [
    {
        title: "Mobile App Development",
        desc: "Building high-performance, native-like iOS and Android apps using Flutter.",
        icon: <Smartphone size={32} className="text-[#42A5F5]" />,
    },
    {
        title: "Backend Connectivity",
        desc: "Integrating complex backends, APIs, and databases (Firebase, MySQL) into mobile apps.",
        icon: <Code2 size={32} className="text-purple-400" />,
    },
    {
        title: "IoT Mobile Solutions",
        desc: "Connecting mobile applications with hardware (IoT) for smart home or industrial use cases.",
        icon: <Network size={32} className="text-green-400" />,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeading title="What I Do" />

                <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ scale: 1.02 }}
                            className="group flex flex-col md:flex-row items-center md:items-start gap-8 bg-zinc-900/50 p-8 rounded-2xl glass border border-white/5 hover:border-[#42A5F5]/40 transition-all shadow-lg hover:shadow-[0_10px_30px_rgba(66,165,245,0.1)]"
                        >
                            <div className="shrink-0 p-5 rounded-2xl bg-white/5 group-hover:bg-[#42A5F5]/10 border border-white/10 group-hover:border-[#42A5F5]/30 transition-colors flex items-center justify-center">
                                {service.icon}
                            </div>

                            <div className="text-center md:text-left flex-1 mt-2">
                                <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#42A5F5] transition-colors">{service.title}</h3>
                                <p className="text-sm text-gray-400 font-normal leading-relaxed">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
