"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

const groups = [
  {
    icon: "🕹️",
    title: "¿Qué es, realmente, un videojuego?",
    content: (
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-mist p-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-ocean-dark">
            Según la ESA
          </p>
          <p className="mt-1 font-body text-sm leading-relaxed text-deep/85">
            La Entertainment Software Association los define como
            experiencias interactivas que combinan software, arte y lógica
            para crear entornos de entretenimiento.
          </p>
        </div>
        <div className="rounded-xl bg-mist p-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-ocean-dark">
            Según Zyda (2005)
          </p>
          <p className="mt-1 font-body text-sm leading-relaxed text-deep/85">
            Los describe como una "prueba mental, llevada a cabo frente a
            una computadora de acuerdo con ciertas reglas, cuyo fin es la
            diversión o esparcimiento".
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: "📜",
    title: "Un poco de historia: del pánico moral a la libertad de expresión",
    content: (
      <div className="space-y-4">
        <div className="rounded-xl bg-mist p-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-steel-dark">
            Años 70-90 · El "pánico moral"
          </p>
          <p className="mt-1 font-body text-sm leading-relaxed text-deep/85">
            Títulos como Death Race (1976) generaron las primeras protestas
            públicas. Se culpó a los videojuegos de fomentar agresividad y
            aislamiento, sin evidencia científica sólida que lo respaldara.
          </p>
        </div>
        <div className="rounded-xl bg-mist p-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-steel-dark">
            2011 · Caso Brown vs. Entertainment Merchants Association
          </p>
          <p className="mt-1 font-body text-sm leading-relaxed text-deep/85">
            La Corte Suprema de EE. UU. determinó que los videojuegos
            violentos están protegidos como libertad de expresión,
            comparándolos con cuentos o literatura clásica que también
            contienen violencia simbólica. Este fallo no eliminó la
            posibilidad de regular casos con daño específico a menores.
          </p>
        </div>
        <div className="rounded-xl bg-mist p-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-steel-dark">
            Hoy
          </p>
          <p className="mt-1 font-body text-sm leading-relaxed text-deep/85">
            La pregunta cambió: ya no se trata de si los videojuegos son
            "malos", sino de entender bajo qué condiciones son beneficiosos
            y bajo cuáles representan un riesgo real.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: "🧠",
    title: "Cómo aprende un niño mientras juega",
    content: (
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-mist p-4">
            <Badge>Piaget · 4 a 7 años</Badge>
            <p className="mt-2 font-display text-sm font-semibold text-deep">
              Representación simbólica
            </p>
            <p className="mt-1 font-body text-sm leading-relaxed text-deep/80">
              El niño imita lo que ve porque aún no distingue del todo la
              ficción de la realidad; el juego es su principal vía de
              aprendizaje.
            </p>
          </div>
          <div className="rounded-xl bg-mist p-4">
            <Badge>Piaget · 8 a 12 años</Badge>
            <p className="mt-2 font-display text-sm font-semibold text-deep">
              Operaciones concretas
            </p>
            <p className="mt-1 font-body text-sm leading-relaxed text-deep/80">
              Empieza a entender reglas y estrategias complejas, y ve el
              videojuego como un sistema separado de la realidad física.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-ocean p-4 text-paper">
          <Badge className="border-paper/40 bg-transparent text-paper">
            Bandura
          </Badge>
          <p className="mt-2 font-body text-sm leading-relaxed">
            Los videojuegos presentan personajes que son recompensados por
            sus acciones, lo que facilita el <strong>modelado</strong> de
            esas conductas en el niño, según la Teoría del Aprendizaje
            Social.
          </p>
        </div>
        <div className="rounded-xl bg-deep p-4 text-paper">
          <Badge className="border-paper/40 bg-transparent text-paper">
            Skinner
          </Badge>
          <p className="mt-2 font-body text-sm leading-relaxed">
            A esto se le llama <strong>Condicionamiento Operante</strong>:
            cada acción correcta se refuerza al instante con puntos, sonidos
            o avances visuales. Ese mecanismo, conocido como{" "}
            <strong>Bucle de Dopamina</strong>, es un motor de aprendizaje
            potente, pero si no se equilibra, puede reducir la tolerancia a
            la frustración en tareas de la vida real.
          </p>
        </div>
      </div>
    ),
  },
];

function AccordionGroup({ group, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="overflow-hidden rounded-2xl border-2 border-deep bg-paper"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        data-cursor="hover"
        data-cursor-label={open ? "Cerrar" : "Abrir"}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="flex items-center gap-3">
          <span className="text-2xl">{group.icon}</span>
          <span className="font-display text-base font-semibold text-deep sm:text-lg">
            {group.title}
          </span>
        </span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="font-display text-2xl text-ocean">
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="border-t-2 border-deep/10 px-5 py-4"
          >
            {group.content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const terms = [
  { term: "Bucle de Dopamina", author: "B.F. Skinner", def: "La liberación de dopamina refuerza que el niño repita una conducta específica dentro del juego." },
  { term: "FOMO", author: "P. McGinnis, 2004", def: "La ansiedad de sentir que otros están viviendo experiencias gratificantes de las que uno se está perdiendo." },
  { term: "Gamificación", author: "N. Pelling, 2002", def: "Usar dinámicas de juego (puntos, niveles, retos) en entornos que no son de juego, para generar compromiso." },
  { term: "Alfabetización Digital", author: "P. Gilster, 1997", def: "La capacidad de interactuar de forma crítica, ética y segura con las tecnologías de la información." },
  { term: "Economía de la Atención", author: "H. Simon, 1971", def: "Modelo que busca maximizar el tiempo de conexión de una persona mediante estímulos constantes." },
  { term: "Tercer Espacio", author: "R. Oldenburg, 1989", def: "Un entorno social virtual —que no es el hogar ni el colegio— donde el niño construye una identidad comunitaria." },
  { term: "Neuroplasticidad", author: "M. Merzenich", def: "La capacidad del cerebro para reorganizar sus conexiones frente a nuevos aprendizajes y estímulos digitales." },
  { term: "Resiliencia Digital", author: "Parent Zone", def: "La capacidad del niño para gestionar de forma saludable los riesgos y conflictos que surgen en línea." },
  { term: "Coordinación Visomotora", author: "J. Piaget", def: "La capacidad de sincronizar los movimientos del cuerpo con lo que se ve en la pantalla." },
];

function FlipCard({ item, index }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="h-40 [perspective:1200px]"
    >
      <button
        onClick={() => setFlipped((f) => !f)}
        data-cursor="hover"
        data-cursor-label={flipped ? "Volver" : "Definir"}
        className="relative h-full w-full text-left"
        style={{ transformStyle: "preserve-3d" }}
        aria-label={`Ver definición de ${item.term}`}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 flex flex-col justify-between rounded-2xl border-2 border-deep bg-mist p-4"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div>
              <Badge>{item.author}</Badge>
              <h4 className="mt-2 font-display text-base font-semibold leading-snug text-deep">
                {item.term}
              </h4>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-ocean-dark">
              Tocar para definir →
            </span>
          </div>
          <div
            className="absolute inset-0 flex flex-col justify-between rounded-2xl border-2 border-deep bg-deep p-4 text-mist"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <p className="font-body text-sm leading-relaxed">{item.def}</p>
            <span className="font-mono text-[10px] uppercase tracking-wider text-sky">
              {item.term}
            </span>
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
}

export default function TheorySupport() {
  return (
    <section id="teoria" className="bg-mist px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          number="06"
          eyebrow="Sustento teórico"
          title="La ciencia detrás del juego"
          description="No inventamos nada de esto: nos apoyamos en teorías y autores reconocidos del desarrollo infantil y la psicología para entender lo que observamos en nuestras propias encuestas."
        />

        <div className="mb-14 flex flex-col gap-4">
          {groups.map((g, i) => (
            <AccordionGroup key={g.title} group={g} index={i} />
          ))}
        </div>

        <p className="mb-6 font-mono text-[11px] uppercase tracking-wider text-deep/50">
          Glosario rápido para padres
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {terms.map((item, i) => (
            <FlipCard key={item.term} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
