"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MESSAGES = [
  "Analyzing your digital profile…",
  "Cross-checking workflows and constraints…",
  "Mapping signals to Google surface areas…",
  "Scoring fit across cloud, workspace, and media…",
  "Composing recommendations you can act on…",
];

export function AIThinkingLoader({ className }: { className?: string }) {
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const id = window.setInterval(() => setI((v) => (v + 1) % MESSAGES.length), 2800);
    return () => window.clearInterval(id);
  }, []);

  const msg = MESSAGES[i] ?? MESSAGES[0];

  useEffect(() => {
    setTyped("");
    let frame = 0;
    const chars = msg.split("");
    const tick = () => {
      frame += 1;
      setTyped(chars.slice(0, frame).join(""));
      if (frame < chars.length) {
        window.requestAnimationFrame(() => {
          window.setTimeout(tick, 18 + Math.random() * 22);
        });
      }
    };
    tick();
  }, [msg]);

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-xl flex-col items-center rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-12 text-center backdrop-blur-2xl",
        className,
      )}
    >
      <div className="relative h-20 w-20">
        <motion.span
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-fuchsia-500 opacity-70 blur-xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="absolute inset-[3px] rounded-full border border-white/10 bg-zinc-950/60 backdrop-blur"
          style={{ maskImage: "radial-gradient(transparent 45%, black 46%)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="absolute inset-2 rounded-full bg-gradient-to-br from-indigo-400/40 to-fuchsia-500/30"
          animate={{ opacity: [0.5, 1, 0.6] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <p className="mt-8 min-h-[3rem] text-balance text-sm font-medium text-zinc-200 sm:text-base">
        {typed}
        <motion.span
          className="ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-white/70"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 0.9, repeat: Infinity }}
          aria-hidden
        />
      </p>
      <p className="mt-3 text-xs text-zinc-500">Powered by Groq · llama-3.1-8b-instant</p>
    </div>
  );
}
