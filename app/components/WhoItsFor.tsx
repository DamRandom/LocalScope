// components/WhoItsFor.tsx
"use client";

import { motion } from "framer-motion";

const profiles = [
  {
    title: "Freelancers",
    text: "Captan clientes locales sin prospectar manualmente.",
  },
  {
    title: "Agencias pequeñas",
    text: "Generan leads constantes sin aumentar estructura.",
  },
  {
    title: "Diseñadores web",
    text: "Encuentran negocios que aún necesitan presencia online.",
  },
  {
    title: "Consultores digitales",
    text: "Trabajan con datos reales, no con suposiciones.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="px-6 py-32 max-w-6xl mx-auto bg-[#F8FAFC]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mb-20 max-w-xl"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-[#020617] mb-4">
          Para quién es
        </h2>
        <p className="text-lg text-[#020617]/70">
          Pensado para perfiles que trabajan con negocios locales.
        </p>
      </motion.div>

      {/* Horizontal layout */}
      <div className="grid md:grid-cols-4 gap-12">
        {profiles.map((profile, i) => (
          <motion.div
            key={profile.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: i * 0.05,
            }}
            className="group"
          >
            {/* Title */}
            <h3 className="text-lg font-semibold text-[#1E3A8A] mb-3 group-hover:text-[#0F172A] transition-colors">
              {profile.title}
            </h3>

            {/* Divider */}
            <div className="w-10 h-px bg-[#1E3A8A]/30 mb-4 group-hover:w-16 transition-all" />

            {/* Text */}
            <p className="text-[#020617]/75 leading-relaxed">
              {profile.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
