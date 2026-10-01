"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { chapters } from "@/lib/chapters";

function goTo(id, close) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -24 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
  close && close();
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border-2 border-deep bg-mist/90 px-4 py-2.5 shadow-hud backdrop-blur">
        <button
          data-cursor="hover"
          data-cursor-label="Inicio"
          onClick={() => goTo("inicio")}
          className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight sm:text-base"
        >
          <Image
            src="/assets/images/logo-playconsciente.png"
            alt="Logo de PlayConsciente"
            width={26}
            height={26}
            className="rounded-full"
          />
          PlayConsciente
        </button>

        <nav className="hidden items-center gap-5 md:flex">
          {chapters.map((c) => (
            <button
              key={c.id}
              data-cursor="hover"
              data-cursor-label={c.label}
              onClick={() => goTo(c.id)}
              className="font-mono text-[11px] uppercase tracking-wider text-deep/70 transition-colors hover:text-ocean"
            >
              {c.number}. {c.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1 rounded-full border-2 border-deep px-3 py-1 font-mono text-[11px] uppercase tracking-wider md:hidden"
          aria-label="Abrir menú"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border-2 border-deep bg-mist shadow-hud md:hidden"
          >
            <ul className="flex flex-col divide-y-2 divide-deep/10 p-2">
              {chapters.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => goTo(c.id, () => setOpen(false))}
                    className="w-full py-2.5 text-left font-mono text-xs uppercase tracking-wider text-deep/80"
                  >
                    {c.number}. {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
