"use client";

import Image from "next/image";

const team = [
  "Hannah Pimienta",
  "Ivana Felizzola",
  "Jaime Gonzalez",
  "Maria Paula Vadon",
  "Ramiro Martinez",
  "Sebastián Ríos",
];

export default function Footer() {
  return (
    <footer className="bg-deep px-4 py-16 text-mist sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="flex items-center gap-2 font-display text-lg font-semibold">
              <Image
                src="/assets/images/logo-playconsciente.png"
                alt="Logo de PlayConsciente"
                width={24}
                height={24}
                className="rounded-full"
              />
              PlayConsciente
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-mist/70">
              Un proyecto de investigación del Colegio Jerusalem, Barranquilla
              / Colombia — 2025-2026, para acompañar a las familias en el uso
              consciente de los videojuegos.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-mist/50">
              Equipo investigador
            </p>
            <ul className="mt-2 font-body text-sm leading-relaxed text-mist/85">
              {team.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-mist/50">
              Asesora
            </p>
            <p className="mt-2 font-body text-sm text-mist/85">
              Lic. Eliana Mejía
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-wider text-mist/40">
              Este micrositio traduce, con fines divulgativos, los hallazgos
              del Trabajo de Grado 11 del equipo.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-mist/15 pt-6 font-mono text-[10px] uppercase tracking-wider text-mist/40">
          © 2026 · PlayConsciente · Colegio Jerusalem · Barranquilla, Colombia
        </div>
      </div>
    </footer>
  );
}
