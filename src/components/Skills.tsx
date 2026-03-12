"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { Smartphone, Flame, Cpu, MapPin, Database, CreditCard } from "lucide-react";

const skills = [
    {
        title: "Flutter",
        desc: "Cross-platform development for Android & iOS with single codebase.",
        icon: <Smartphone size={40} className="text-[#42A5F5] group-hover:scale-110 transition-transform duration-300" />,
    },
    {
        title: "Firebase",
        desc: "Auth, Firestore, Cloud Functions tailored for scalable apps.",
        icon: <Flame size={40} className="text-orange-500 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
        title: "IoT Integration",
        desc: "Smart Home solutions using Raspberry Pi & Flutter (Smart-Guard).",
        icon: <Cpu size={40} className="text-purple-500 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
        title: "Google Services",
        desc: "Google Maps, Places API, and Phone Auth integration.",
        icon: <MapPin size={40} className="text-red-500 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
        title: "Database",
        desc: "Experience with SQFlite, Hive, MySQL and Cloud Firestore.",
        icon: <Database size={40} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
        title: "Payment Gateways",
        desc: "Seamless integration of Razorpay and other payment processors.",
        icon: <CreditCard size={40} className="text-green-500 group-hover:scale-110 transition-transform duration-300" />,
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <SectionHeading title="My Expertise" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group flex flex-col items-center text-center p-8 rounded-2xl glass hover:border-[#42A5F5]/50 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(66,165,245,0.15)]"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-medium mb-2 text-white group-hover:text-[#42A5F5] transition-colors">{skill.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-normal p-1">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
