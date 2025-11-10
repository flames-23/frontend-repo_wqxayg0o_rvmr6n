import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative w-full bg-black pb-16 pt-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-indigo-400/10 p-8 backdrop-blur-sm md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl" style={{ fontFamily: 'Mona Sans, Geist, Inter' }}>
                Let’s build something remarkable
              </h3>
              <p className="mt-2 max-w-xl text-white/75">
                Open to freelance, collaborations, and full‑time roles where craft and impact matter.
              </p>
            </div>
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
            >
              <Mail className="h-4 w-4" /> you@example.com
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>Crafted with React, Tailwind & Spline</p>
        </div>
      </div>
    </footer>
  );
}
