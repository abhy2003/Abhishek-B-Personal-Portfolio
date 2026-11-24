"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveBackground() {
  const [isMounted, setIsMounted] = useState(false);

  // Mouse coordinate values
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth spring physics for primary cursor spotlight
  const springX = useSpring(mouseX, { damping: 28, stiffness: 140 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 140 });

  // Secondary trailing light orb with slightly more inertia/lag for 3D depth
  const trailX = useSpring(mouseX, { damping: 38, stiffness: 65 });
  const trailY = useSpring(mouseY, { damping: 38, stiffness: 65 });

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      {/* Dynamic Cursor Spotlight that follows the mouse */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-[#3ecf8e]/12 blur-[130px]"
      />

      {/* Secondary Trailing Glow for Organic Fluidity */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[350px] h-[350px] rounded-full bg-[#24b47e]/10 blur-[100px]"
      />

      {/* Floating Ambient Glow Orbs for Atmospheric Depth */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#3ecf8e]/6 rounded-full blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#3ecf8e]/5 rounded-full blur-[150px]"
      />

      {/* Subtle Floating Micro-Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
            opacity: 0.2,
          }}
          animate={{
            y: ["-20px", "20px", "-20px"],
            x: ["-15px", "15px", "-15px"],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#3ecf8e]/40 blur-[1px]"
        />
      ))}
    </div>
  );
}
