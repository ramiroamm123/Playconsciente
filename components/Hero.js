"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="scanline relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-mist px-4 pb-16 pt-32 sm:px-6"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {["💙", "🎮", "🕹️", "👨‍👩‍👧‍👦", "🛡️"].map((icon, i) => (
          <motion.span
            key={icon}
            className="absolute select-none text-4xl opacity-[0.12] sm:text-6xl"
            style={{
              top: `${12 + i * 16}%`,
              left: i % 2 === 0 ? `${6 + i * 4}%` : undefined,
              right: i % 2 !== 0 ? `${6 + i * 3}%` : undefined,
            }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          >
            {icon}
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        {/* Columna izquierda: texto */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-deep bg-paper px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider"
          >
            <span className="h-2 w-2 animate-blink rounded-full bg-ocean" />
            Colegio Jerusalem · Barranquilla · 2025-2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance font-display text-4xl font-bold leading-[1.05] text-deep sm:text-6xl md:text-7xl"
          >
            Nosotros somos{" "}
            <span className="text-ocean">PlayConsciente</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-2xl text-balance font-body text-lg leading-relaxed text-deep/75 sm:text-xl"
          >
            Un espacio pensado para acompañarte, no para asustarte. Aquí vas a
            encontrar, con calma y evidencia real de nuestro colegio, cómo los
            videojuegos están presentes en la vida de tu hijo o hija — y cómo
            convertir ese tiempo de pantalla en una oportunidad para
            acercarnos más como familia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <span className="rounded-full border-2 border-deep bg-ocean px-4 py-2 font-mono text-xs uppercase tracking-wider text-paper">
              30 niños encuestados
            </span>
            <span className="rounded-full border-2 border-deep bg-paper px-4 py-2 font-mono text-xs uppercase tracking-wider text-deep">
              50 padres y cuidadores
            </span>
            <span className="rounded-full border-2 border-deep bg-sky-light px-4 py-2 font-mono text-xs uppercase tracking-wider text-deep">
              4 a 12 años
            </span>
          </motion.div>
        </div>

        {/* Columna derecha: logo protagonista */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto flex justify-center lg:mx-0 lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-56 w-56 items-center justify-center rounded-full border-2 border-deep bg-paper p-4 shadow-card sm:h-72 sm:w-72 lg:h-80 lg:w-80"
          >
            <Image
              src="/assets/images/logo-playconsciente.png"
              alt="Logo de PlayConsciente: una familia formando un corazón alrededor de un control de videojuegos"
              width={320}
              height={320}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative mx-auto mt-14 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-deep/50"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
        Descubre de qué se trata
      </motion.div>
    </section>
  );
}
