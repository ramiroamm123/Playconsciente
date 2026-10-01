"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const team = [
  { name: "Hannah Pimienta", role: "Investigadora" },
  { name: "Ivana Felizzola", role: "Investigadora" },
  { name: "Jaime Gonzalez", role: "Investigador" },
  { name: "Maria Paula Vadon", role: "Investigadora" },
  { name: "Ramiro Martinez", role: "Investigador" },
  { name: "Sebastián Ríos", role: "Investigador" },
];

function initials(name) {
  return name
    .split(" ")
    .filter((w) => w.length > 2 || /[A-ZÁÉÍÓÚ]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Team() {
  return (
    <section id="equipo" className="bg-paper px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="03"
          eyebrow="Sobre nosotros"
          title="El equipo detrás de PlayConsciente"
          description="Somos estudiantes de grado 11 del Colegio Jerusalem. Nos motiva la misma curiosidad que probablemente te trajo hasta aquí: entender mejor el mundo digital en el que crecen nuestros hermanos, primos y compañeros más pequeños."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
              data-cursor="hover"
              data-cursor-label="Investigador/a"
              className="flex items-center gap-4 rounded-2xl border-2 border-deep bg-mist p-5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-deep bg-ocean font-display text-lg font-bold text-paper">
                {initials(member.name)}
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-deep/50">
                  {member.role}
                </p>
                <p className="font-display text-base font-semibold text-deep">
                  {member.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-4 flex items-center gap-4 rounded-2xl border-2 border-deep bg-deep p-5 text-paper"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-paper bg-sky font-display text-lg font-bold text-deep">
            EM
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-paper/60">
              Asesora del proyecto
            </p>
            <p className="font-display text-base font-semibold">
              Lic. Eliana Mejía
            </p>
            <p className="font-body text-sm text-paper/80">
              Acompañamiento pedagógico y metodológico de la investigación.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
