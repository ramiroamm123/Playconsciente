"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhatIsSection() {
  return (
    <section id="que-es" className="bg-paper px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          number="01"
          eyebrow="¿Qué es PlayConsciente?"
          title="Un proyecto que nace del propio colegio de tu hijo o hija"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-5 font-body text-base leading-relaxed text-deep/85 sm:text-lg"
        >
          <p>
            <strong>PlayConsciente</strong> es un proyecto de investigación
            desarrollado por estudiantes de grado 11 del{" "}
            <strong>Colegio Jerusalem</strong>, en Barranquilla, durante el
            periodo 2025-2026. Nació de una pregunta muy sencilla, la misma
            que muchos papás y mamás se hacen en casa:{" "}
            <em>¿los videojuegos le están haciendo daño a mi hijo o hija?</em>
          </p>
          <p>
            En lugar de quedarnos con una intuición o con lo que se dice por
            ahí, decidimos ir directamente a la fuente: encuestamos a{" "}
            <strong>30 niños y niñas entre 4 y 12 años</strong> y a{" "}
            <strong>50 padres, madres y cuidadores</strong> de nuestra propia
            comunidad educativa, para entender —con datos reales del
            Colegio Jerusalem— cómo los videojuegos influyen en la conducta
            de nuestros niños.
          </p>
          <p>
            El resultado de ese trabajo es esta plataforma: una guía pensada
            para servir de acompañamiento a las familias, sin demonizar los
            videojuegos ni idealizarlos. Nuestro punto de partida es simple:
            los videojuegos no son buenos ni malos por sí mismos; lo que
            realmente marca la diferencia es{" "}
            <strong>cómo, cuánto y con quién</strong> se juega.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
