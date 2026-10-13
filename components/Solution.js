"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import PreventionFlashcards from "@/components/PreventionFlashcards";
import LeafletShowcase from "@/components/LeafletShowcase";

const actions = [
  {
    id: "folletos",
    icon: "📄",
    title: "Folletos informativos en el colegio",
    text: "Entregamos folletos dirigidos a padres y maestros del Colegio Jerusalem, con los hallazgos de esta investigación traducidos en herramientas prácticas y fáciles de consultar en casa.",
    expandable: true,
  },
  {
    id: "web",
    icon: "🌐",
    title: "Esta plataforma web",
    text: "Un espacio de consulta permanente —el que estás viendo ahora mismo— donde reunimos los resultados de la investigación, el sustento científico y legal, y las recomendaciones prácticas, para que puedas volver a consultarlas cuando las necesites.",
  },
];

export default function Solution() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      const el = panelRef.current;
      if (!el) return;
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -100 });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 250);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <section id="solucion" className="bg-paper px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="05"
          eyebrow="Nuestra razón de ser"
          title="Por qué creamos PlayConsciente"
          description="La desconexión que encontramos en nuestras encuestas —niños muy conectados a sus juegos y familias con poca información puntual sobre ellos— no se resuelve con más prohibiciones, sino con más acompañamiento. PlayConsciente nació precisamente como la respuesta directa a ese hallazgo."
        />

        <p className="mb-6 font-mono text-[11px] uppercase tracking-wider text-deep/50">
          Nuestras acciones
        </p>

        <div className="mb-14">
          <div className="grid gap-5 sm:grid-cols-2">
            {actions.map((a, i) => {
              const content = (
                <>
                  <span className="text-3xl">{a.icon}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold">
                    {a.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-paper/90 sm:text-base">
                    {a.text}
                  </p>
                  {a.expandable && (
                    <span className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-paper bg-paper px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-ocean-dark">
                      {open ? "Ocultar folletos" : "Ver los folletos"}
                      <motion.span
                        animate={{ rotate: open ? 45 : 0 }}
                        className="font-display text-base leading-none"
                      >
                        +
                      </motion.span>
                    </span>
                  )}
                </>
              );

              const common = {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-60px" },
                transition: { duration: 0.45, delay: i * 0.1 },
                className:
                  "rounded-2xl border-2 border-deep bg-ocean p-6 text-left text-paper",
              };

              return a.expandable ? (
                <motion.button
                  key={a.id}
                  {...common}
                  onClick={() => setOpen((o) => !o)}
                  aria-expanded={open}
                  aria-controls="folletos-panel"
                  data-cursor="hover"
                  data-cursor-label={open ? "Ocultar" : "Ver folletos"}
                  className={`${common.className} w-full`}
                >
                  {content}
                </motion.button>
              ) : (
                <motion.div key={a.id} {...common}>
                  {content}
                </motion.div>
              );
            })}
          </div>

          <div id="folletos-panel" ref={panelRef}>
            <AnimatePresence initial={false}>
              {open && <LeafletShowcase onClose={() => setOpen(false)} />}
            </AnimatePresence>
          </div>
        </div>

        <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-deep/50">
          Nuestros tips de prevención
        </p>
        <p className="mb-6 max-w-2xl font-body text-sm leading-relaxed text-deep/70 sm:text-base">
          Reunimos aquí, por categorías, todas las recomendaciones prácticas
          que salieron de esta investigación. Toca cada tarjeta para
          voltearla y ver el tip completo.
        </p>

        <PreventionFlashcards />
      </div>
    </section>
  );
}
