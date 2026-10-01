"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "tiempo",
    label: "Tiempo y rutinas",
    cards: [
      {
        title: "Pantallas después de las tareas",
        text: "El tiempo de juego se habilita únicamente cuando el niño ya cumplió sus tareas escolares y responsabilidades del hogar.",
      },
      {
        title: "Un límite diario razonable",
        text: "Para niños de 4 a 12 años, se recomienda un máximo de 1 a 1.5 horas diarias en días de colegio, evitando sesiones largas y seguidas.",
      },
      {
        title: "Cero pantallas antes de dormir",
        text: "Apaga consolas y dispositivos 1 hora antes de acostarse. La luz azul interfiere con la melatonina y altera el descanso infantil.",
      },
      {
        title: "Días de desconexión",
        text: "Promueve al menos 1 o 2 días a la semana completamente libres de videojuegos, para diversificar el ocio con deporte, lectura o aire libre.",
      },
    ],
  },
  {
    id: "emocional",
    label: "Acompañamiento emocional",
    cards: [
      {
        title: "Avisa antes de que se acabe el tiempo",
        text: 'Avísale 10 y 5 minutos antes de que termine su turno ("te quedan 5 minutos para guardar la partida"), así evitas pataletas de última hora.',
      },
      {
        title: "Observa cómo reacciona al jugar",
        text: "Si el niño muestra ira excesiva, frustración o gritos constantes al jugar o perder, es señal de que necesita una pausa o de revisar el tipo de juego.",
        highlight: true,
        highlightLabel: "El poder del co-playing",
      },
      {
        title: "Juega con él de vez en cuando",
        text: "Sentarte a jugar o simplemente preguntarle de qué trata el juego transforma una actividad solitaria en un vínculo familiar real.",
        highlight: true,
        highlightLabel: "El poder del co-playing",
      },
    ],
  },
  {
    id: "digital",
    label: "Seguridad digital",
    cards: [
      {
        title: "Activa el control parental",
        text: "Configura límites de tiempo, restricción de compras y bloqueo de contenido inapropiado desde las opciones de cada consola o dispositivo (PlayStation, Xbox, Nintendo, Google Family Link).",
      },
      {
        title: "El reto de los celulares y tabletas",
        text: "Supervisar hoy es más difícil que antes: los niños ya no solo juegan en consolas, sino en celulares y tabletas que llevan a todas partes y usan casi sin control de horario.",
        highlight: true,
        highlightLabel: "Reto actual",
      },
      {
        title: "No todas las plataformas son iguales",
        text: "Juegos como Roblox o Free Fire suelen tener chats de voz y texto más abiertos con desconocidos que consolas como Nintendo Switch — ahí vale la pena reforzar la supervisión.",
        highlight: true,
        highlightLabel: "Reto actual",
      },
      {
        title: "Protege sus datos personales",
        text: "Enséñale a nunca compartir su nombre completo, edad, colegio, dirección ni fotos con otros jugadores en línea.",
      },
    ],
  },
  {
    id: "contenido",
    label: "Contenido y salud física",
    cards: [
      {
        title: "Revisa la clasificación ESRB / PEGI",
        text: "Funciona como la etiqueta nutricional de los videojuegos: revisa siempre la edad recomendada antes de comprar o descargar un juego.",
        highlight: true,
        highlightLabel: "Clave",
      },
      {
        title: "La consola en un espacio común",
        text: "Mantener las pantallas en la sala, en lugar del cuarto, facilita una supervisión natural y no invasiva.",
      },
      {
        title: "La regla 20-20-20",
        text: "Cada 20 minutos de juego, haz una pausa para mirar algo a 20 pies (6 metros) de distancia durante 20 segundos, y así descansar la vista.",
      },
      {
        title: "Postura y distancia",
        text: "Que jueguen sentados, con la espalda apoyada y los pies firmes, manteniendo entre 1.5 y 2 metros de distancia de las pantallas grandes.",
      },
    ],
  },
  {
    id: "familia",
    label: "En familia",
    cards: [
      {
        title: "Habla con interés genuino",
        text: "Pregúntale qué juega, qué le gusta y quién es su personaje favorito. Compartir ese interés abre la puerta a una conversación sin juicios.",
      },
      {
        title: "Sé alguien de confianza",
        text: "Que tu hijo te vea como la persona a la que puede contarle un problema —del juego, del colegio o de sus amigos— y no solo quien pone las reglas.",
      },
      {
        title: "Construye acuerdos, no solo prohibiciones",
        text: "Define horarios y responsabilidades junto con él, explicando el motivo de cada acuerdo, en lugar de imponerlo sin más.",
      },
      {
        title: "No culpes automáticamente a los videojuegos",
        text: "Si baja el rendimiento escolar, escucha primero y busca junto a tu hijo la causa real, sin relacionarla de inmediato con el tiempo de juego.",
      },
      {
        title: "Busca equilibrio, no solo reducir horas",
        text: "La meta no es simplemente jugar menos, sino que el juego no desplace el estudio, el descanso, el ejercicio o el tiempo en familia.",
      },
      {
        title: "Enseña autonomía progresiva",
        text: "En vez de controlar cada decisión, ayúdalo poco a poco a reconocer cuándo debe parar y cumplir con sus demás responsabilidades.",
      },
      {
        title: "Escucha antes de corregir",
        text: "Cuando surja un problema relacionado con los videojuegos, conversa primero para entender qué pasó antes de aplicar una consecuencia.",
      },
      {
        title: "Reconoce sus logros",
        text: "Valora tanto sus avances académicos como sus esfuerzos en otras áreas — eso fortalece su confianza y motivación.",
      },
      {
        title: "Cada niño es distinto",
        text: "No todos reaccionan igual frente a los videojuegos. Observa las necesidades y el comportamiento particular de tu hijo, sin aplicar una receta única.",
      },
      {
        title: "Habla también con el colegio",
        text: "Mantener comunicación constante con los profesores ayuda a detectar a tiempo cambios en el rendimiento o el comportamiento.",
      },
    ],
  },
];

function FlashCard({ card, index }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, delay: (index % 6) * 0.04 }}
      className="h-44 [perspective:1200px]"
    >
      <button
        onClick={() => setFlipped((f) => !f)}
        data-cursor="hover"
        data-cursor-label={flipped ? "Volver" : "Ver tip"}
        className="relative h-full w-full text-left"
        style={{ transformStyle: "preserve-3d" }}
        aria-label={`Ver recomendación: ${card.title}`}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className={`absolute inset-0 flex flex-col justify-between rounded-2xl border-2 p-4 ${
              card.highlight
                ? "border-ocean bg-sky-light"
                : "border-deep bg-paper"
            }`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <div>
              {card.highlight && (
                <span className="mb-2 inline-flex items-center rounded-full bg-ocean px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-paper">
                  {card.highlightLabel || "Destacado"}
                </span>
              )}
              <h4 className="font-display text-base font-semibold leading-snug text-deep">
                {card.title}
              </h4>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-ocean-dark">
              Tocar para ver el tip →
            </span>
          </div>
          <div
            className="absolute inset-0 flex flex-col justify-between rounded-2xl border-2 border-deep bg-deep p-4 text-mist"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <p className="font-body text-sm leading-relaxed">{card.text}</p>
            <span className="font-mono text-[10px] uppercase tracking-wider text-sky">
              {card.title}
            </span>
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
}

export default function PreventionFlashcards() {
  const [active, setActive] = useState(categories[0].id);
  const activeCategory = categories.find((c) => c.id === active);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            data-cursor="hover"
            data-cursor-label={c.label}
            className={`rounded-full border-2 border-deep px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors ${
              active === c.id
                ? "bg-deep text-paper"
                : "bg-paper text-deep hover:bg-sky-light"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {activeCategory.cards.map((card, i) => (
            <FlashCard key={card.title} card={card} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
