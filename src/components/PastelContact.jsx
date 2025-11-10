import React from 'react';
import { Mail, Instagram, Linkedin, Behance } from 'lucide-react';

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

export default function PastelContact() {
  return (
    <section className="relative w-full py-16" style={{ background: 'linear-gradient(180deg, #CDECE1 0%, #FEE9D7 100%)', color: COLORS.charcoal }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl bg-white/70 p-8 shadow-sm md:p-12" style={{ border: '1px solid rgba(0,0,0,0.06)', backdropFilter: 'blur(8px)' }}>
          <h3 className="text-2xl md:text-3xl" style={{ color: COLORS.lavender, fontWeight: 800 }}>and that’s a wrap.</h3>
          <p className="mt-2 max-w-2xl" style={{ color: COLORS.taupe }}>Thanks for scrolling — hope my visuals made you smile. Let’s create something heartfelt and memorable.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-full px-5 py-3" style={{ background: COLORS.blush, color: '#2b2b2b' }}>
              <Mail className="h-4 w-4" /> you@example.com
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full px-4 py-2" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full px-4 py-2" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full px-4 py-2" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.06)' }}>
              <Behance className="h-4 w-4" /> Behance
            </a>
          </div>
          <div className="mt-6 text-xs" style={{ color: COLORS.taupe }}>© {new Date().getFullYear()} Your Name — crafted with React, Tailwind & Spline</div>
        </div>
      </div>
    </section>
  );
}
