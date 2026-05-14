"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute -left-1/4 top-[-10%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.55),transparent_65%)] blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, 10, 0], scale: [1, 1.05, 1.02, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 top-[15%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.45),transparent_68%)] blur-3xl"
        animate={{ x: [0, -50, 20, 0], y: [0, -25, 15, 0], scale: [1, 1.08, 1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[10%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.35),transparent_70%)] blur-3xl"
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.2),rgba(2,6,23,0.92))]" />
    </div>
  );
}
