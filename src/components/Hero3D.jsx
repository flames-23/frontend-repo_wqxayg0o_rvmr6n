import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

// Pastel palette
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

export default function Hero3D() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" style={{ backgroundColor: COLORS.cream, color: COLORS.charcoal }}>
      {/* Spline cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/QblYNXAoH6zf7SHu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft pastel overlays to keep text readable, do not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FFF8F2] to-transparent" />

      {/* Decorative transparent shapes for scrapbook vibe */}
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-[40%] bg-[#CDECE1]/40 blur-2xl" />
      <div className="pointer-events-none absolute -right-24 top-36 h-80 w-80 rounded-[45%] bg-[#CBB4E8]/40 blur-2xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-28 md:gap-8 md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-widest"
          style={{ backgroundColor: 'rgba(255,255,255,0.6)', color: COLORS.taupe, border: '1px solid rgba(0,0,0,0.06)', backdropFilter: 'blur(6px)' }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: COLORS.mint }} />
          Hi! Since you’re new here…
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl leading-[0.98] tracking-tight"
          style={{ fontFamily: 'Mona Sans, Geist, Inter, system-ui', fontWeight: 800 }}
        >
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl" style={{ color: COLORS.lavender }}>Graphic Designer / Visual Storyteller</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl" style={{ color: COLORS.charcoal }}>
            Let me be your guide to my creative world.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-2xl text-lg md:text-xl"
          style={{ color: COLORS.taupe }}
        >
          Calm pastel sophistication meets playful scrapbook energy. I craft visual stories across brand, motion, and interactive experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
            style={{ backgroundColor: COLORS.lavender, color: '#2b2b2b' }}
          >
            Explore my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://github.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
            style={{ color: COLORS.charcoal, border: '1px solid rgba(0,0,0,0.08)', backgroundColor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(6px)' }}
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition"
            style={{ color: COLORS.charcoal, border: '1px solid rgba(0,0,0,0.08)', backgroundColor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(6px)' }}
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </motion.div>

        {/* Handwritten subtext vibe */}
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-2 inline-block text-base"
          style={{ color: COLORS.blush, fontFamily: 'Inter, system-ui', fontWeight: 500 }}
        >
          “Let’s take a little scroll through my creative world.”
        </motion.span>
      </div>
    </section>
  );
}
