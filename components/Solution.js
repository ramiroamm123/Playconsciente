"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import PreventionFlashcards from "@/components/PreventionFlashcards";

const actions = [
  {
    icon: "📄",
    title: "Folletos informativos en el colegio",
    text: "Entregamos folletos dirigidos a padres y maestros del Colegio Jerusalem, con los hallazgos de esta investigación traducidos en herramientas prácticas y fáciles de consultar en casa.",
  },
  {
    icon: "🌐",
    title: "Esta plataforma web",
    text: "Un espacio de consulta permanente —el que estás viendo ahora mismo— donde reunimos los resultados de la investigación, el sustento científico y legal, y las recomendaciones prácticas, para que puedas volver a consultarlas cuando las necesites.",
  },
];

export default function Solution() {
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
        <div className="mb-14 grid gap-5 sm:grid-cols-2">
          {actions.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl border-2 border-deep bg-ocean p-6 text-paper"
            >
              <span className="text-3xl">{a.icon}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">
                {a.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-paper/90 sm:text-base">
                {a.text}
              </p>
            </motion.div>
          ))}
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
