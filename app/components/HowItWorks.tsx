// components/HowItWorks.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    title: "Elige la ubicación",
    description:
      "Selecciona la ciudad o zona donde quieres buscar oportunidades.",
    placeholder: "Screenshot · Ubicación",
  },
  {
    title: "Define la distancia",
    description:
      "Ajusta el radio de búsqueda para encontrar negocios cercanos.",
    placeholder: "Screenshot · Distancia",
  },
  {
    title: "Elige el tipo de negocio",
    description:
      "Filtra por categoría: barberías, salones, restaurantes y más.",
    placeholder: "Screenshot · Categoría",
  },
  {
    title: "Haz clic en buscar",
    description:
      "Obtén resultados relevantes con datos de contacto disponibles.",
    placeholder: "Screenshot · Resultados",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 py-32 max-w-6xl mx-auto bg-[#F8FAFC]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-2xl mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#020617] mb-4">
          Cómo funciona
        </h2>
        <p className="text-lg text-[#020617]/70">
          Un proceso claro, diseñado para encontrar oportunidades reales.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-20 items-start">
        {/* Steps list */}
        <div className="space-y-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`flex gap-6 cursor-pointer group transition-opacity ${
                active === i ? "opacity-100" : "opacity-50"
              }`}
            >
              {/* Big number */}
              <div className="flex-shrink-0 leading-none">
                <span className="block text-5xl md:text-6xl font-semibold text-[#1E3A8A]/25 group-hover:text-[#1E3A8A]/50 transition-colors">
                  {i + 1}
                </span>
              </div>

              {/* Text */}
              <div className="max-w-md">
                <h3 className="text-xl font-semibold text-[#020617] mb-1 group-hover:text-[#1E3A8A] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#020617]/65 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Preview panel */}
        <div className="relative">
          <div className="sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative aspect-video border border-[#020617]/10 bg-[#F8FAFC]
                           shadow-[0_35px_70px_-30px_rgba(15,23,42,0.45)]
                           overflow-hidden"
              >
                {/* Accent texture */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_65%)]" />

                {/* Subtle depth layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />

                {/* Placeholder */}
                <div className="relative h-full flex items-center justify-center">
                  <span className="text-sm text-[#020617]/40">
                    {steps[active].placeholder}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
