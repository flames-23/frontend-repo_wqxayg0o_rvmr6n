import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const COLORS = {
  cream: '#FFF8F2',
  charcoal: '#4A4A4A',
  taupe: '#7C6E65',
  lavender: '#CBB4E8',
  blush: '#F4C6C6',
  mint: '#CDECE1',
  cornflower: '#BFD7ED',
};

export default function TimelineStory() {
  return (
    <section className="relative w-full py-20 md:py-28" style={{ backgroundColor: COLORS.cream, color: COLORS.charcoal }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-2">
          <Sparkles className="h-5 w-5" color={COLORS.lavender} />
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: COLORS.charcoal }}>Story & Timeline</h2>
        </div>
        <div className="relative grid gap-8 md:grid-cols-2">
          <div className="relative rounded-2xl bg-white/70 p-6 shadow-sm" style={{ border: '1px dashed '+COLORS.cornflower }}>
            <div className="h-56 w-full rounded-xl bg-gradient-to-br from-[#BFD7ED]/40 to-[#CDECE1]/40" />
            <p className="mt-4 text-sm" style={{ color: COLORS.taupe }}>
              From early doodles to present-day design — always curious, always crafting.
            </p>
          </div>
          <div className="relative rounded-2xl bg-white/70 p-6 shadow-sm" style={{ border: '1px dashed '+COLORS.cornflower }}>
            <div className="h-56 w-full rounded-xl bg-gradient-to-br from-[#F4C6C6]/40 to-[#CBB4E8]/40" />
            <p className="mt-4 text-sm" style={{ color: COLORS.taupe }}>
              Today I blend brand, motion, and interactive visuals to tell feel‑good stories.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 h-0.5 w-full max-w-3xl" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${COLORS.cornflower}, ${COLORS.cornflower} 8px, transparent 8px, transparent 16px)` }} />
        <p className="mx-auto mt-6 max-w-3xl text-center" style={{ color: COLORS.taupe }}>
          A dotted line connects where I started to where I am — learning, experimenting, and refining along the way.
        </p>
      </div>
    </section>
  );
}
