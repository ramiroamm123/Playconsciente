"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const specifics = [
  {
    icon: "🔍",
    title: "Entender los riesgos, sin alarmarnos",
    text: "Investigar qué tanto influyen los videojuegos en cosas como la impulsividad, la atención o el manejo de las emociones, siempre en relación con el tiempo de juego y el tipo de contenido — no como una sentencia, sino como un punto de partida para actuar a tiempo.",
  },
  {
    icon: "🌱",
    title: "Reconocer también lo positivo",
    text: "Identificar los beneficios que ciertos videojuegos aportan en la infancia: memoria, lógica, coordinación, trabajo en equipo y comunicación. Los videojuegos también pueden ser una herramienta a favor del desarrollo de tu hijo o hija.",
  },
  {
    icon: "🧭",
    title: "Proponer un camino práctico",
    text: "Convertir lo aprendido en lineamientos preventivos claros, presentados a través de folletos dirigidos a padres y maestros, y de esta misma página web, para acompañar un uso consciente y equilibrado de los videojuegos, sin necesidad de prohibir ni de perseguir a nadie.",
  },
];

export default function Objectives() {
  return (
    <section id="finalidad" className="bg-mist px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="02"
          eyebrow="Nuestra finalidad"
          title="Buscamos equilibrio, no un veredicto"
          description="Nuestro propósito no es decirte que apagues la consola. Es ayudarte a entender qué está pasando cuando tu hijo o hija juega, para que puedas acompañarlo desde la calma y no desde el miedo."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-2xl border-2 border-deep bg-paper p-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-wider text-ocean-dark">
            Nuestro objetivo general
          </p>
          <p className="mt-2 text-balance font-body text-base leading-relaxed text-deep sm:text-lg">
            Analizar los efectos conductuales y psicológicos del uso de
            videojuegos en niños de 4 a 12 años del Colegio Jerusalem,
            identificando riesgos frente al uso excesivo o inadecuado, sin
            dejar de reconocer los beneficios cognitivos, emocionales y
            sociales que aparecen cuando el uso es moderado, supervisado y
            acorde a la etapa de desarrollo de cada niño.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-3">
          {specifics.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              data-cursor="hover"
              data-cursor-label="Leer"
              className="rounded-2xl border-2 border-deep bg-paper p-5 shadow-card"
            >
              <span className="text-3xl">{s.icon}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-deep">
                {s.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-deep/75">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
