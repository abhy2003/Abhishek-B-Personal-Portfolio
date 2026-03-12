"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gradient tracking-tight"
        >
            {title}
        </motion.h2>
    );
}
