// components/WhatYouGet.tsx
"use client";

import { motion } from "framer-motion";

const items = [
  "Nombre del negocio",
  "Dirección",
  "Teléfono disponible",
  "Presencia web",
  "Rating y reseñas",
];

export default function WhatYouGet() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* Label */}
        <div className="flex-shrink-0">
          <p className="text-sm uppercase tracking-widest text-[#1E3A8A]/70 mb-2">
            Incluye
          </p>
          <h3 className="text-2xl font-semibold text-[#020617] leading-tight">
            Datos clave<br />listos para usar
          </h3>
        </div>

        {/* Infinite strip */}
        <div className="relative flex-1 overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...items, ...items].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-3 text-lg text-[#020617]/80"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                {item}
              </span>
            ))}
          </motion.div>

          {/* Soft fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent" />
        </div>
      </div>
    </section>
  );
}
