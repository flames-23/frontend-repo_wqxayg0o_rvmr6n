import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce',
    description: 'Next-gen storefront with 3D product views, server components, and edge caching.',
    tags: ['Next.js', 'Three.js', 'Stripe'],
    link: '#',
    repo: '#',
    gradient: 'from-emerald-300/20 to-cyan-300/20',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Streaming analytics with websockets, interactive charts, and dark mode.',
    tags: ['FastAPI', 'Postgres', 'WebSockets'],
    link: '#',
    repo: '#',
    gradient: 'from-indigo-300/20 to-violet-300/20',
  },
  {
    title: 'Creative Playground',
    description: 'A collection of micro-interactions, shaders, and motion experiments.',
    tags: ['Framer Motion', 'GLSL', 'R3F'],
    link: '#',
    repo: '#',
    gradient: 'from-rose-300/20 to-orange-300/20',
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="relative w-full bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ fontFamily: 'Mona Sans, Geist, Inter' }}>
              Selected Work
            </h2>
            <p className="mt-2 text-white/70">A snapshot of projects that blend design, code, and motion.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-sm hover:bg-white/10 md:inline-block">
            Get in touch
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
              <div className="relative">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/75">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.link} className="inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
