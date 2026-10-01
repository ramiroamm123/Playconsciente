"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { chapters } from "@/lib/chapters";

export default function ProgressRail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });
  const [activeId, setActiveId] = useState(chapters[0].id);

  useEffect(() => {
    const observers = [];
    chapters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(c.id);
        },
        { rootMargin: "-45% 0px -45% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function goTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -24 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:flex">
      <div className="flex items-stretch gap-3">
        <div className="relative w-[3px] rounded-full bg-deep/15">
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 top-0 h-full w-full rounded-full bg-ocean"
          />
        </div>
        <ul className="flex flex-col justify-between gap-4 py-1">
          {chapters.map((c) => (
            <li key={c.id}>
              <button
                data-cursor="hover"
                data-cursor-label={c.label}
                onClick={() => goTo(c.id)}
                className="group flex items-center gap-2"
                aria-label={`Ir a ${c.label}`}
              >
                <span
                  className={`h-2 w-2 rounded-full border transition-all ${
                    activeId === c.id
                      ? "scale-125 border-ocean bg-ocean"
                      : "border-deep/30 bg-transparent group-hover:border-deep/60"
                  }`}
                />
                <span
                  className={`font-mono text-[10px] uppercase tracking-wider transition-opacity ${
                    activeId === c.id ? "opacity-100 text-deep" : "opacity-0 group-hover:opacity-60"
                  }`}
                >
                  {c.number}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
