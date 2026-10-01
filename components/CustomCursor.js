"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    function handleMove(e) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    }
    function handleDown() {
      setIsPressed(true);
    }
    function handleUp() {
      setIsPressed(false);
    }
    function handleOver(e) {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setIsHovering(true);
        setLabel(target.getAttribute("data-cursor-label") || "");
      } else {
        setIsHovering(false);
        setLabel("");
      }
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [mouseX, mouseY, visible]);

  return (
    <motion.div
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: visible ? 1 : 0 }}
    >
      {/* PlayConsciente mark: heart cradling a controller */}
      <motion.div
        animate={{
          scale: isPressed ? 0.82 : isHovering ? 1.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative flex items-center justify-center"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 27C16 27 3 19.5 3 11.2C3 6.7 6.6 3.5 10.6 3.5C13 3.5 15 4.7 16 6.4C17 4.7 19 3.5 21.4 3.5C25.4 3.5 29 6.7 29 11.2C29 19.5 16 27 16 27Z"
            fill={isHovering ? "#145DA0" : "#0B2545"}
            stroke="#FFFFFF"
            strokeWidth="1.4"
          />
          <rect
            x="10.5"
            y="13.5"
            width="11"
            height="6.5"
            rx="3"
            fill="#FFFFFF"
          />
          <rect x="12.7" y="15.5" width="0.9" height="2.6" fill="#0B2545" />
          <rect x="11.5" y="16.4" width="2.6" height="0.9" fill="#0B2545" />
          <circle cx="18.2" cy="15.6" r="0.8" fill="#0B2545" />
          <circle cx="19.7" cy="17.2" r="0.8" fill="#0B2545" />
        </svg>
      </motion.div>

      {label && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-deep px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-mist"
        >
          {label}
        </motion.span>
      )}
    </motion.div>
  );
}
