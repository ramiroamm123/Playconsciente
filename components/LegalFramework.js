"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    number: "I",
    law: "Constitución Política de Colombia, Artículo 44",
    text: "Reconoce los derechos de los niños como fundamentales y prevalentes sobre los derechos de los demás, incluyendo el derecho a la salud, a la integridad física, a la educación y a la recreación. Este principio de prevalencia constituye el fundamento constitucional que justifica la protección de los menores frente a contenidos inadecuados en entornos digitales, incluidos los videojuegos.",
  },
  {
    number: "II",
    law: "Ley 1098 de 2006 — Código de la Infancia y la Adolescencia",
    text: "Establece que los niños, niñas y adolescentes son sujetos titulares de derechos, y que el Estado, la familia y la sociedad tienen la obligación conjunta de garantizar su desarrollo integral y su protección frente a cualquier riesgo, disposición extensiva a los entornos digitales contemporáneos.",
  },
  {
    number: "III",
    law: "Ley 1801 de 2016 — Código Nacional de Policía y Convivencia",
    text: "A nivel local, en el Distrito de Barranquilla, esta norma regula el acceso de menores de edad a establecimientos comerciales de videojuegos y dispone medidas para la protección de su integridad dentro de dichos espacios.",
  },
  {
    number: "IV",
    law: 'Ley 1581 de 2012 — Régimen General de Protección de Datos Personales (Habeas Data)',
    text: 'Obliga a las plataformas y desarrolladores de videojuegos —particularmente aquellos que operan bajo el modelo "Free to Play"— a garantizar el manejo adecuado de la información personal de los menores de edad y a contar con el consentimiento explícito de sus padres o representantes legales frente a la recopilación de datos con fines comerciales.',
  },
  {
    number: "V",
    law: "Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC) — Estrategia CiberPaz",
    text: "Programa nacional de sensibilización y alfabetización digital orientado al uso seguro de las Tecnologías de la Información y la Comunicación, con cobertura documentada en más de ochocientos municipios del país, y que respalda iniciativas institucionales como la presente.",
  },
];

export default function LegalFramework() {
  return (
    <section id="legal" className="bg-paper px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          number="07"
          eyebrow="Marco legal"
          title="Fundamento normativo del proyecto"
          description="El presente apartado expone, de forma estrictamente formal, el conjunto de disposiciones constitucionales, legales y de política pública que sustentan la protección de los menores de edad frente al uso de videojuegos en Colombia."
        />

        <div className="divide-y-2 divide-deep/10 rounded-2xl border-2 border-deep bg-mist">
          {items.map((it) => (
            <motion.div
              key={it.law}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="flex gap-5 p-6 sm:p-7"
            >
              <span className="chapter-number shrink-0 font-display text-2xl font-bold sm:text-3xl">
                {it.number}
              </span>
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-deep sm:text-base">
                  {it.law}
                </p>
                <p className="mt-2 font-body text-sm leading-relaxed text-deep/85 sm:text-base">
                  {it.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="mt-6 border-2 border-deep bg-deep p-6 text-mist sm:p-7"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-wide">
            Advertencia legal — Mecanismos de recompensa aleatoria (&ldquo;Loot Boxes&rdquo;)
          </p>
          <p className="mt-2 font-body text-sm leading-relaxed text-mist/90 sm:text-base">
            En Colombia no existe, a la fecha, una regulación específica que
            clasifique los mecanismos de recompensa aleatoria dentro de los
            videojuegos (&ldquo;loot boxes&rdquo;) como una modalidad de apuesta, a
            diferencia de lo dispuesto en jurisdicciones como Austria o los
            Países Bajos. La Superintendencia de Industria y Comercio (SIC),
            autoridad nacional en materia de protección al consumidor, ha
            señalado que dichas transacciones se rigen, por defecto, bajo el
            Estatuto del Consumidor (Ley 1480 de 2011), sin un tratamiento
            jurídico diferenciado. En consecuencia, se recomienda a los
            padres, madres y cuidadores ejercer especial vigilancia sobre las
            compras integradas dentro de los videojuegos utilizados por los
            menores a su cargo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
