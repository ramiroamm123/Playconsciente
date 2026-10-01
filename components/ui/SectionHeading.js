"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-3"
      >
        <span className="chapter-number font-display text-5xl font-bold sm:text-6xl">
          {number}
        </span>
        <span className="h-px flex-1 max-w-[60px] bg-deep/30" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-deep/60">
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-balance font-display text-3xl font-semibold leading-tight text-deep sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-balance font-body text-base leading-relaxed text-deep/75 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
