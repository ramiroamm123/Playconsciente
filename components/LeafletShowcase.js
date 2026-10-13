"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

/*
  ====== RUTAS DE LAS IMÁGENES ======
  Si quieres cambiar una imagen, reemplaza el archivo en
  public/assets/images/ conservando el mismo nombre, o cambia la ruta
  "src" de abajo para que apunte al archivo nuevo.
*/
const leafletPages = [
  {
    src: "/assets/images/folleto/folleto-1.jpg",
    label: "Exterior: portada, dato clave y código QR",
    alt: "Exterior del tríptico PlayConsciente: dato de la investigación, código QR a la plataforma web y portada con el logo",
  },
  {
    src: "/assets/images/folleto/folleto-2.jpg",
    label: "Interior: pautas de prevención, seguridad y beneficios",
    alt: "Interior del tríptico PlayConsciente: pautas de prevención en casa, tipos de juegos y seguridad, y beneficios del juego",
  },
];

const deliveryPhotos = Array.from({ length: 9 }, (_, i) => ({
  src: `/assets/images/entrega/entrega-0${i + 1}.jpg`,
  label: `Entrega de folletos, foto ${i + 1} de 9`,
  alt: `Integrante del equipo entregando folletos a familias del Colegio Jerusalem (foto ${i + 1} de 9)`,
}));

const groups = { folleto: leafletPages, entrega: deliveryPhotos };

const panelVariants = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.18,
    },
  },
  exit: { opacity: 0, height: 0, transition: { duration: 0.35 } },
};

const blockVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
};

function Lightbox({ group, index, onClose, onNav }) {
  const items = groups[group];
  const item = items[index];

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    }
    window.addEventListener("keydown", onKey);
    if (window.__lenis) window.__lenis.stop();
    return () => {
      window.removeEventListener("keydown", onKey);
      if (window.__lenis) window.__lenis.start();
    };
  }, [onClose, onNav]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.label}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[9000] flex items-center justify-center bg-deep/90 p-4 backdrop-blur-sm"
    >
      <button
        onClick={onClose}
        data-cursor="hover"
        data-cursor-label="Cerrar"
        aria-label="Cerrar imagen ampliada"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-paper bg-deep font-display text-xl text-paper"
      >
        ×
      </button>

      {items.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNav(-1);
            }}
            data-cursor="hover"
            data-cursor-label="Anterior"
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-paper bg-deep font-display text-lg text-paper sm:left-6"
          >
            ←
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNav(1);
            }}
            data-cursor="hover"
            data-cursor-label="Siguiente"
            aria-label="Imagen siguiente"
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-paper bg-deep font-display text-lg text-paper sm:right-6"
          >
            →
          </button>
        </>
      )}

      <motion.div
        key={`${group}-${index}`}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative h-[78vh] w-full max-w-5xl"
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </motion.div>

      <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-deep px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-paper">
        {item.label}
      </p>
    </motion.div>
  );
}

export default function LeafletShowcase({ onClose }) {
  const [lightbox, setLightbox] = useState(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const navLightbox = useCallback((dir) => {
    setLightbox((s) => {
      if (!s) return s;
      const len = groups[s.group].length;
      return { ...s, index: (s.index + dir + len) % len };
    });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        variants={panelVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="overflow-hidden"
      >
        <div className="space-y-12 px-1 pb-2 pt-8">
          {/* SUBSECCIÓN A */}
          <motion.div variants={blockVariants}>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-deep bg-ocean font-display text-sm font-bold text-paper">
                A
              </span>
              <h3 className="font-display text-xl font-semibold text-deep sm:text-2xl">
                Diseño del folleto
              </h3>
            </div>
            <p className="mb-6 max-w-3xl font-body text-sm leading-relaxed text-deep/75 sm:text-base">
              Un tríptico pensado para leerse en pocos minutos: por fuera,
              un dato de nuestra investigación y un código QR que lleva
              directo a esta plataforma; por dentro, pautas de prevención en
              casa, seguridad y los beneficios del juego. Toca cualquier
              página para verla en grande.
            </p>

            <motion.div
              variants={gridVariants}
              className="grid gap-5 md:grid-cols-2"
            >
              {leafletPages.map((page, i) => (
                <motion.figure
                  key={page.src}
                  variants={tileVariants}
                  className="m-0"
                >
                  <motion.button
                    whileHover={{ y: -4 }}
                    onClick={() => setLightbox({ group: "folleto", index: i })}
                    data-cursor="hover"
                    data-cursor-label="Ampliar"
                    aria-label={`Ampliar: ${page.label}`}
                    className="block w-full overflow-hidden rounded-2xl border-2 border-deep bg-paper shadow-card"
                  >
                    <Image
                      src={page.src}
                      alt={page.alt}
                      width={1989}
                      height={1407}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="h-auto w-full"
                    />
                  </motion.button>
                  <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-wider text-deep/60">
                    {page.label}
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </motion.div>

          {/* SUBSECCIÓN B */}
          <motion.div variants={blockVariants}>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-deep bg-ocean font-display text-sm font-bold text-paper">
                B
              </span>
              <h3 className="font-display text-xl font-semibold text-deep sm:text-2xl">
                Impacto en nuestra comunidad
              </h3>
            </div>

            <div className="mb-6 rounded-2xl border-2 border-deep bg-sky-light p-5 sm:p-6">
              <p className="font-body text-base leading-relaxed text-deep/90 sm:text-lg">
                Nuestro equipo entregó estos folletos informativos durante la
                reunión de entrega de informes del Colegio Jerusalem, el
                pasado viernes 2 de octubre, entre las 5:30 p.m. y las 6:00
                p.m., impactando directamente a las familias de los cursos
                desde primero hasta sexto grado.
              </p>
            </div>

            <motion.div
              variants={gridVariants}
              className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3"
            >
              {deliveryPhotos.map((photo, i) => (
                <motion.button
                  key={photo.src}
                  variants={tileVariants}
                  whileHover={{ y: -4 }}
                  onClick={() => setLightbox({ group: "entrega", index: i })}
                  data-cursor="hover"
                  data-cursor-label="Ampliar"
                  aria-label={`Ampliar ${photo.label}`}
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-deep bg-mist"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover object-[50%_35%] transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-deep/85 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-paper">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={blockVariants} className="flex justify-center">
            <button
              onClick={onClose}
              data-cursor="hover"
              data-cursor-label="Ocultar"
              className="rounded-full border-2 border-deep bg-paper px-5 py-2 font-mono text-[11px] uppercase tracking-wider text-deep transition-colors hover:bg-sky-light"
            >
              Ocultar folletos −
            </button>
          </motion.div>
        </div>
      </motion.div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {lightbox && (
              <Lightbox
                group={lightbox.group}
                index={lightbox.index}
                onClose={closeLightbox}
                onNav={navLightbox}
              />
            )}
          </AnimatePresence>,
          document.body
        )}
    </MotionConfig>
  );
}
