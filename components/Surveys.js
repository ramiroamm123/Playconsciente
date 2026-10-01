"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  PieChart,
  Pie,
  Legend,
} from "recharts";
import SectionHeading from "@/components/ui/SectionHeading";
import Callout from "@/components/ui/Callout";

const DEEP = "#0B2545";
const OCEAN = "#145DA0";
const SKY = "#4CA6E8";
const STEEL = "#3D5A80";
const POWDER = "#8FC7EF";

const BLUES = [OCEAN, SKY, STEEL, POWDER, DEEP];

const ageData = [
  { name: "10 a 12 años", value: 46.6 },
  { name: "8 a 10 años", value: 23.3 },
  { name: "4 a 6 años", value: 16.7 },
  { name: "6 a 8 años", value: 13.3 },
];

const frequencyData = [
  { name: "Todos los días", value: 33.3 },
  { name: "Varias veces / semana", value: 33.3 },
  { name: "Una vez / semana", value: 13.3 },
  { name: "Rara vez", value: 10 },
  { name: "Nunca", value: 10 },
];

const topGames = [
  { name: "Roblox", value: 73.3 },
  { name: "Minecraft", value: 63.3 },
  { name: "Free Fire", value: 56.7 },
  { name: "Fortnite", value: 40 },
  { name: "Clash Royale", value: 36.7 },
  { name: "Brawl Stars", value: 33.3 },
];

const feelingsData = [
  { name: "Emocionado/a", value: 36.7 },
  { name: "Relajado/a", value: 20 },
  { name: "Feliz", value: 16.7 },
  { name: "Ansioso/a", value: 16.7 },
  { name: "Enojado/a", value: 6.7 },
  { name: "Triste", value: 3.3 },
];

const employmentAge = [
  { name: "Trabaja actualmente", value: 74 },
  { name: "30 a 40 años", value: 54 },
  { name: "20 a 30 años", value: 22 },
  { name: "+50 años", value: 18 },
];

const difficultyData = [
  { name: "Le cuesta dejar de jugar", value: 66 },
  { name: "No le cuesta", value: 34 },
];

const rulesData = [
  { name: "Sí", value: 77.6 },
  { name: "No", value: 22.4 },
];

const effectData = [
  { name: "Neutro", value: 66 },
  { name: "Negativo", value: 26 },
  { name: "Positivo", value: 8 },
];

function ChartCard({ title, note, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className={`rounded-2xl border-2 border-deep bg-paper p-5 ${className}`}
    >
      <h3 className="font-display text-base font-semibold text-deep sm:text-lg">
        {title}
      </h3>
      {note && (
        <p className="mt-1 font-body text-xs text-deep/60 sm:text-sm">{note}</p>
      )}
      <div className="mt-4">{children}</div>
    </motion.div>
  );
}

function tooltipStyle() {
  return {
    contentStyle: {
      background: DEEP,
      border: "none",
      borderRadius: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "#EAF4FC",
    },
    labelStyle: { color: "#EAF4FC" },
    itemStyle: { color: "#EAF4FC" },
    cursor: { fill: "rgba(11,37,69,0.06)" },
  };
}

function StatTile({ value, label }) {
  return (
    <div className="rounded-2xl border-2 border-deep bg-sky-light p-4 text-center">
      <p className="font-display text-2xl font-bold text-ocean-dark sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-deep/60">
        {label}
      </p>
    </div>
  );
}

export default function Surveys() {
  return (
    <section id="encuestas" className="bg-mist px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="04"
          eyebrow="Lo que descubrimos"
          title="Nuestras encuestas: el problema real detrás de la pantalla"
          description="Aplicamos un diseño mixto, con encuestas estructuradas a 30 niños y niñas y a 50 padres, madres o cuidadores del Colegio Jerusalem, para comparar directamente cómo juegan los niños y qué tanto saben sus familias sobre ese juego."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 rounded-2xl border-2 border-deep bg-paper p-6 sm:p-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-wider text-ocean-dark">
            Antes de los datos: así hicimos la investigación
          </p>
          <p className="mt-2 mb-5 font-body text-sm leading-relaxed text-deep/75 sm:text-base">
            Sabemos que estos términos suenan técnicos, así que te los
            explicamos uno por uno, en corto, para que sepas exactamente de
            dónde salen las cifras que vas a ver a continuación.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-mist p-4">
              <p className="font-display text-sm font-semibold text-deep">
                Enfoque mixto
              </p>
              <p className="mt-1 font-body text-sm leading-relaxed text-deep/80">
                Combinamos datos cuantitativos (para medir tiempos y
                frecuencias de juego con números) y cualitativos (para
                entender percepciones y experiencias), integrando ambos en
                un mismo análisis.
              </p>
            </div>
            <div className="rounded-xl bg-mist p-4">
              <p className="font-display text-sm font-semibold text-deep">
                Investigación no experimental, descriptiva, correlacional y
                aplicativa
              </p>
              <p className="mt-1 font-body text-sm leading-relaxed text-deep/80">
                No experimental: observamos el comportamiento tal como
                ocurre en el día a día, sin manipular nada. Descriptiva:
                detallamos hábitos y conductas. Correlacional: buscamos si
                hay relación entre el uso de videojuegos y ciertas
                conductas, sin que eso signifique causa y efecto.
                Aplicativa: no nos quedamos solo describiendo, sino que
                entregamos una herramienta práctica de acompañamiento.
              </p>
            </div>
            <div className="rounded-xl bg-mist p-4">
              <p className="font-display text-sm font-semibold text-deep">
                Diseño no experimental de corte transversal
              </p>
              <p className="mt-1 font-body text-sm leading-relaxed text-deep/80">
                Esto significa que observamos la realidad tal como ocurre
                en el día a día, en un momento específico, sin alterar el
                entorno de los niños ni hacerles seguimiento a lo largo del
                tiempo.
              </p>
            </div>
          </div>
          <p className="mt-5 font-body text-sm leading-relaxed text-deep/70">
            Usamos un <strong>muestreo por conveniencia</strong> (Otzen y
            Manterola, 2017): seleccionamos a las familias disponibles y
            accesibles de nuestro propio colegio. Esto quiere decir que
            estos resultados reflejan con precisión la realidad de las
            familias del Colegio Jerusalem — no son una estadística general
            de internet, sino un retrato de nuestra propia comunidad.
          </p>
        </motion.div>

        <p className="mb-6 font-mono text-[11px] uppercase tracking-wider text-deep/50">
          Lo que nos contaron los niños (n = 30)
        </p>
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <StatTile value="83.3%" label="Juega videojuegos hoy" />
          <StatTile value="63.3%" label="Son niños" />
          <StatTile value="36.7%" label="Son niñas" />
        </div>

        <div className="mb-14 grid gap-5 lg:grid-cols-2">
          <ChartCard title="¿Con qué frecuencia juegan?" note="Distribución de hábitos de juego reportados">
            <ResponsiveContainer width="100%" height={230}>
              <BarChart data={frequencyData} layout="vertical" margin={{ left: 10, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(11,37,69,0.1)" horizontal={false} />
                <XAxis type="number" unit="%" tick={{ fontSize: 11, fill: DEEP }} axisLine={false} tickLine={false} />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={140}
                  tick={{ fontSize: 11, fill: DEEP }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip {...tooltipStyle()} formatter={(v) => `${v}%`} />
                <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={20}>
                  {frequencyData.map((_, i) => (
                    <Cell key={i} fill={BLUES[i % BLUES.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Títulos más jugados" note="Roblox y Free Fire lideran, junto a Minecraft">
            <div className="flex flex-col gap-3">
              {topGames.map((g, i) => (
                <div key={g.name}>
                  <div className="mb-1 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-deep/70">
                    <span>
                      #{i + 1} {g.name}
                    </span>
                    <span>{g.value}%</span>
                  </div>
                  <div className="h-3.5 w-full overflow-hidden rounded-full bg-mist">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${g.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: i < 2 ? OCEAN : BLUES[i % BLUES.length] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>

          <ChartCard title="Edades de la muestra">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={ageData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
                  {ageData.map((_, i) => (
                    <Cell key={i} fill={BLUES[i % BLUES.length]} />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  height={40}
                  formatter={(value) => (
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: DEEP }}>{value}</span>
                  )}
                />
                <Tooltip {...tooltipStyle()} formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="¿Cómo se sienten al jugar?">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={feelingsData} margin={{ left: -20, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(11,37,69,0.1)" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 9, fill: DEEP }} axisLine={false} tickLine={false} interval={0} angle={-20} textAnchor="end" height={50} />
                <YAxis unit="%" tick={{ fontSize: 10, fill: DEEP }} axisLine={false} tickLine={false} />
                <Tooltip {...tooltipStyle()} formatter={(v) => `${v}%`} />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={28}>
                  {feelingsData.map((_, i) => (
                    <Cell key={i} fill={BLUES[i % BLUES.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <p className="mb-6 font-mono text-[11px] uppercase tracking-wider text-deep/50">
          Lo que nos contaron los padres, madres y cuidadores (n = 50)
        </p>
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <StatTile value="74%" label="Trabaja actualmente" />
          <StatTile value="80%" label="Supervisa el contenido" />
          <StatTile value="66%" label="Percibe un efecto neutro" />
        </div>

        <div className="mb-10 grid gap-5 lg:grid-cols-2">
          <ChartCard
            title="Perfil del acudiente: trabajo y edad"
            note="La mayoría de los cuidadores tiene entre 30 y 40 años y trabaja de forma activa"
          >
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={employmentAge} margin={{ left: -10, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(11,37,69,0.1)" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: DEEP }} axisLine={false} tickLine={false} />
                <YAxis unit="%" tick={{ fontSize: 11, fill: DEEP }} axisLine={false} tickLine={false} />
                <Tooltip {...tooltipStyle()} formatter={(v) => `${v}%`} />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={45}>
                  {employmentAge.map((_, i) => (
                    <Cell key={i} fill={BLUES[i % BLUES.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="¿Le cuesta a su hijo dejar de jugar cuando se le pide?">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={difficultyData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
                  <Cell fill={OCEAN} />
                  <Cell fill={POWDER} />
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  height={30}
                  formatter={(value) => (
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: DEEP }}>{value}</span>
                  )}
                />
                <Tooltip {...tooltipStyle()} formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="¿Existen reglas de horario en casa?">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={rulesData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
                  <Cell fill={OCEAN} />
                  <Cell fill={POWDER} />
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  height={30}
                  formatter={(value) => (
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: DEEP }}>{value}</span>
                  )}
                />
                <Tooltip {...tooltipStyle()} formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="¿Qué efecto le atribuyen a los videojuegos?" note="46% cree que sí desarrollan habilidades positivas; 54% lo duda">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={effectData} margin={{ left: -10, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(11,37,69,0.1)" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: DEEP }} axisLine={false} tickLine={false} />
                <YAxis unit="%" tick={{ fontSize: 11, fill: DEEP }} axisLine={false} tickLine={false} />
                <Tooltip {...tooltipStyle()} formatter={(v) => `${v}%`} />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={50}>
                  {effectData.map((_, i) => (
                    <Cell key={i} fill={BLUES[i % BLUES.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <Callout variant="caution" label="Nuestra conclusión crítica">
          Aquí está el corazón del problema que encontramos: los niños del
          Colegio Jerusalem juegan con mucha frecuencia y a títulos con
          interacción social abierta —como Roblox y Free Fire—, mientras que
          la mayoría de sus cuidadores trabaja de forma activa y, aunque
          intenta supervisar, reconoce en un 66% que sus hijos tienen
          dificultad para dejar de jugar y percibe el efecto de los
          videojuegos como algo mayormente <strong>neutro</strong>, no
          positivo. Esa combinación —niños muy conectados y familias con poco
          tiempo y poca información específica sobre lo que juegan sus
          hijos— es, más que los videojuegos en sí, la verdadera
          desconexión que <strong>PlayConsciente</strong> busca cerrar.
        </Callout>
      </div>
    </section>
  );
}
