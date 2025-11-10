import React from 'react';
import { motion } from 'framer-motion';

export default function BioCTA() {
  return (
    <section className="relative w-full bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm md:p-12"
        >
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl" style={{ fontFamily: 'Mona Sans, Geist, Inter' }}>
            Code, design, and delightful details
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/75">
            I design and build end‑to‑end experiences: from product thinking and architecture to pixel‑perfect UI and smooth motion. I love pushing the web forward with performance‑minded, inclusive interfaces.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            {['React', 'TypeScript', 'FastAPI', 'Tailwind', 'Framer Motion', 'Three.js'].map((s) => (
              <span key={s} className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-white/80">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
