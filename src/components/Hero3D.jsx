import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 pt-28 md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/80 backdrop-blur-md"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Available for projects
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl font-[800] leading-[0.95] tracking-tight"
          style={{
            fontFamily: 'Mona Sans, Geist, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
          }}
        >
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Bold, creative code.</span>
          <br />
          <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            Stunning, interactive experiences.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-2xl text-lg text-white/80 md:text-xl"
        >
          I’m a creative developer crafting playful, modern interfaces with performance at heart. I bring ideas to life across web, 3D, and motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
          >
            Explore my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://github.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
