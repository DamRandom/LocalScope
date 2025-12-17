// components/Hero.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const hints = [
  "Barberías · 5 km · sin web",
  "Salones · teléfono disponible",
  "Restaurantes · oportunidades locales",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % hints.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-6 pt-24 pb-36 max-w-6xl mx-auto">
      {/* Card container */}
      <div className="relative overflow-hidden  bg-[#F8FAFC] border border-slate-200 shadow-[0_20px_40px_-20px_rgba(2,6,23,0.25)]">
        {/* Subtle texture / light gradient */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/60 via-transparent to-slate-100/40" />

        {/* Ambient motion */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96  bg-[#38BDF8]/25 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-32 w-md h-112  bg-[#1E3A8A]/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative px-8 py-24 md:px-16 max-w-3xl"
        >
          <span className="inline-flex items-center mb-5  border border-[#1E3A8A]/20 bg-[#1E3A8A]/5 px-3 py-1 text-xs font-medium text-[#1E3A8A]">
            LocalScope · Herramienta de exploración local
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#020617] mb-4">
            Encuentra negocios locales sin presencia web
          </h1>

          {/* Dynamic hint */}
          <div className="h-6 mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={hints[index]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="block text-sm text-slate-500"
              >
                {hints[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="text-lg md:text-xl text-slate-600 mb-10">
            Explora negocios por ubicación y categoría, filtra por presencia web
            y accede a datos de contacto públicos en minutos.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3  bg-[#38BDF8] text-white font-medium shadow-lg shadow-[#38BDF8]/30 hover:bg-[#38BDF8]/90 transition"
            >
              Empezar búsqueda
            </motion.button>

            <span className="text-sm text-slate-500">
              Sin registro · Resultados inmediatos
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
