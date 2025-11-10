import React from 'react';
import { motion } from 'framer-motion';

const COLORS = {
  cream: '#FFF8F2',
  charcoal: '#4A4A4A',
  taupe: '#7C6E65',
  lavender: '#CBB4E8',
  blush: '#F4C6C6',
  mint: '#CDECE1',
  cornflower: '#BFD7ED',
  peach: '#FEE9D7',
};

const photos = [
  { id: 1, color: '#F4C6C6' },
  { id: 2, color: '#CDECE1' },
  { id: 3, color: '#BFD7ED' },
  { id: 4, color: '#FEE9D7' },
];

export default function VisualJourney() {
  return (
    <section className="relative w-full py-20 md:py-28" style={{ backgroundColor: COLORS.cream, color: COLORS.charcoal }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: COLORS.charcoal }}>Visual Journey</h2>
          <p className="mt-2 text-sm" style={{ color: COLORS.taupe }}>A glimpse of process and everyday creative life.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {photos.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}
            >
              <div className="h-56 w-full" style={{ backgroundColor: p.color, filter: 'saturate(0.8) brightness(1.05)' }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(transparent, rgba(255,255,255,0.6))' }} />
              <div className="absolute -left-3 -top-3 rounded bg-white px-2 py-1 text-xs" style={{ color: COLORS.taupe, border: '1px solid rgba(0,0,0,0.06)' }}>
                pastel tape
              </div>
              <div className="p-4 text-sm" style={{ color: COLORS.taupe }}>
                Small caption about what this moment means in the creative journey.
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
