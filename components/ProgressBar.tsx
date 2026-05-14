"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ProgressBarProps = {
  value: number;
  className?: string;
};

export function ProgressBar({ value, className }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, Math.round(value * 100)));
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
        <span>Progress</span>
        <span className="tabular-nums text-zinc-400">{pct}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06] ring-1 ring-inset ring-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />
      </div>
    </div>
  );
}
