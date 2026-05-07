"use client";

import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  videoSrc?: string;
  title?: string;
  subtitle?: string;
}

export const Heros = ({
  videoSrc = "/assets/data/marin/Marine_Cross_Bollard.18.mp4",
  title = "Pioneering Sustainable",
  subtitle = "Engineering precision water management and high-grade marine infrastructure for global energy sectors."
}: HeroProps) => {
  return (
    <main className="relative flex flex-col mt-72 p-6 items-center justify-center min-h-[90vh] md:min-h-screen px-6 overflow-hidden bg-[#004aad]">

      {/* 1. BACKGROUND LAYER (Video + Tints) */}
      <div className="absolute inset-0 z-0">
        {/* VIGNETTE OVERLAY: Darker at the top and bottom to protect Navbar and Bottom Bar visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 z-10" />

        {/* BLUE TINT: Ensures the video matches H2O branding */}
        <div className="absolute inset-0 bg-[#004aad]/30 z-10" />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.5] pointer-events-none scale-105"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* 2. TEXT CONTENT (Z-index 20 to stay on top) */}
      <div className="relative z-20 max-w-7xl w-full text-center space-y-12">

        <div className="space-y-6">
          {/* Top Badge */}
          <div className="flex items-center justify-center gap-4 animate-fade-in">
            <div className="h-[1px] w-12 bg-[#1B79EE]" />
            <span className="text-white text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] italic">
              Industrial Excellence <span className="text-[#1B79EE] px-2">|</span> Est. 2011
            </span>
            <div className="h-[1px] w-12 bg-[#1B79EE]" />
          </div>

          {/* Headline: Huge and Bold for Ben */}
          <h1 className="text-5xl md:text-[140px] font-black uppercase tracking-tighter leading-[0.85] text-white italic drop-shadow-2xl">
            {title} <br />
            <span className="text-[#1B79EE] drop-shadow-[0_0_50px_rgba(27,121,238,0.4)]">
              Oceans
            </span>
          </h1>
        </div>

        {/* Subtitle: Slate Gray tone for premium feel on dark background */}
        <p className="max-w-3xl mx-auto text-slate-200 text-lg md:text-2xl font-medium tracking-wide leading-relaxed">
          {subtitle}
        </p>

        {/* Action Buttons: Large and Heavy-Duty */}
        <div className="flex flex-wrap justify-center gap-6 pt-8">

          <Button className='bg-[#004aad] hover:bg-[#1B79EE] text-white font-black px-8 py-6 rounded-none text-sm uppercase tracking-[0.2em] transition-all shadow-[4px_4px_0px_rgba(27,121,238,0.2)] border-none'>
            Explore Solutions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></Button>
          <Button className="px-8 py-6 bg-white/5 backdrop-blur-xl text-white text-[12px] font-black uppercase tracking-[0.3em] rounded-none border border-white/20 hover:bg-white/10 transition-all flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#1B79EE]" />
            Technical Archive
          </Button>
        </div>
      </div>
      {/* 3. DECORATIVE SIDE TAG (Bottom Right) */}
      <div className="absolute bottom-24 right-12 hidden lg:block z-20">
        <div className="flex flex-col items-end border-r-2 border-[#1B79EE] pr-6 py-2 opacity-60">
          <span className="text-[10px] font-black text-white uppercase tracking-[0.5em]">System Status</span>
          <span className="text-xl font-black text-[#1B79EE] italic uppercase tracking-tighter">Operational</span>
        </div>
      </div>

      {/* 4. SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 z-20">
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#1B79EE] to-transparent" />
      </div>

    </main>
  );
};