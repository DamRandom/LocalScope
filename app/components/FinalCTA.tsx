// components/FinalCTA.tsx
"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative px-6 py-32 max-w-6xl mx-auto">
      {/* Card container */}
      <div className="relative overflow-hidden bg-[#F8FAFC] border border-slate-200 shadow-[0_20px_40px_-20px_rgba(2,6,23,0.25)]">
        {/* Subtle texture */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/60 via-transparent to-slate-100/40" />

        {/* Ambient lights (same logic as Hero) */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#38BDF8]/25 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#1E3A8A]/20 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative px-8 py-24 md:px-16 text-center max-w-3xl mx-auto"
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center mb-6 border border-[#1E3A8A]/20 bg-[#1E3A8A]/5 px-3 py-1 text-xs font-medium text-[#1E3A8A]">
            LocalScope
          </span>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#020617] mb-6">
            Empieza a encontrar
            <br className="hidden md:block" />
            negocios reales hoy
          </h2>

          {/* Supporting text */}
          <p className="text-lg text-slate-600 mb-10">
            Datos claros, oportunidades locales y contacto directo.
            Sin fricción. Sin ruido.
          </p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="px-10 py-4 bg-[#38BDF8] text-white font-medium shadow-lg shadow-[#38BDF8]/30 hover:bg-[#38BDF8]/90 transition"
          >
            Iniciar búsqueda
          </motion.button>

          {/* Micro copy */}
          <div className="mt-6 text-sm text-slate-500">
            Sin registro · Resultados inmediatos
          </div>
        </motion.div>
      </div>
    </section>
  );
}
