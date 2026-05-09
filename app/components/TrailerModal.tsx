"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, ShieldCheck, Droplets, ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const TrailerModal = ({ videoSrc }: { videoSrc: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => console.log("Autoplay blocked"));
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-center">

      {/* --- 1. THE CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.8] contrast-125"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Subtle Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
      </div>

      {/* --- 2. THE MISSION CONTENT --- */}
      <div className="relative z-20 w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl space-y-10">

          {/* Mission Tag */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-4 bg-[#1B79EE] text-white px-6 py-2 shadow-2xl"
          >
            <ShieldCheck className="w-5 h-5" />
            <span className="text-[12px] font-black uppercase tracking-[0.5em]">Global Mission 2026</span>
          </motion.div>

          {/* Loud Typography */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter italic leading-[0.8] text-[#004aad] drop-shadow-2xl"
            >
              Protecting <br />
              <span className="text-white drop-shadow-[0_5px_15px_rgba(0,74,173,0.5)]">Precious</span> Water
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6"
            >
              <div className="h-[2px] w-24 bg-[#1B79EE]" />
              <p className="text-[#004aad] text-xl md:text-3xl font-black uppercase tracking-widest italic">
                New Product Trailer
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <Button className="bg-[#004aad] hover:bg-[#1B79EE] text-white font-black px-8 py-6 rounded-none text-sm uppercase tracking-[0.2em] transition-all shadow-[4px_4px_0px_rgba(27,121,238,0.2)] border-none">
              Watch Trailer <Download className="w-6 h-6" />
            </Button>
            {/* Loud Sound Indicator Visualizer */}
            <div className="flex items-center gap-4 px-6 py-3 border-2 border-[#004aad]/20 backdrop-blur-sm">
              <Volume2 className="w-6 h-6 text-[#1B79EE] animate-bounce" />
              <div className="flex gap-1 items-end h-6">
                {[0.4, 0.8, 0.5, 0.9, 0.6].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${h * 100}%`, `${(1 - h) * 100}%`, `${h * 100}%`] }}
                    transition={{ repeat: Infinity, duration: 1 + i * 0.2 }}
                    className="w-1 bg-[#1B79EE]"
                  />
                ))}
              </div>
              <span className="text-[10px] font-black uppercase text-[#004aad] tracking-widest ml-2">Audio Optimized</span>
            </div>
          </div>
 
        </div>
      </div>

      {/* --- 3. BOTTOM TAGLINE --- */}
      <div className="absolute bottom-16 right-16 z-20 text-right hidden lg:block">
        <p className="text-[#004aad] text-[12px] font-black uppercase tracking-[0.8em] opacity-40 mb-4">
          H2O Industries x Mega Foundries
        </p>
        <h4 className="text-4xl font-black text-[#1B79EE] uppercase italic tracking-tighter">
          Let's Protect <span className="text-[#004aad]">Precious Water</span>
        </h4>
      </div>

      {/* Apple-style scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-30">
        <div className="w-[1px] h-20 bg-[#004aad] animate-pulse" />
      </div>
    </section>
  );
};