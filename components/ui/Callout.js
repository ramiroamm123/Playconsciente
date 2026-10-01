"use client";

import { motion } from "framer-motion";

const variants = {
  caution: {
    bg: "bg-steel-light",
    border: "border-steel/40",
    tag: "bg-steel text-paper",
    icon: "🧭",
  },
  benefit: {
    bg: "bg-sky-light",
    border: "border-sky-dark/30",
    tag: "bg-ocean text-paper",
    icon: "💙",
  },
  info: {
    bg: "bg-powder/40",
    border: "border-ocean/25",
    tag: "bg-deep text-paper",
    icon: "🎮",
  },
};

export default function Callout({ variant = "info", label, children }) {
  const v = variants[variant];
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className={`rounded-2xl border ${v.border} ${v.bg} p-5`}
    >
      {label && (
        <span
          className={`mb-3 inline-flex items-center gap-1.5 rounded-full ${v.tag} px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider`}
        >
          {v.icon} {label}
        </span>
      )}
      <div className="font-body text-sm leading-relaxed text-deep/85 sm:text-base">
        {children}
      </div>
    </motion.div>
  );
}
