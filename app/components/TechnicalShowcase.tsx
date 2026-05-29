"use client";

import React, { useState, useRef, useEffect } from 'react'; // Added useRef and useEffect
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, FileText, Database } from 'lucide-react';

const slides = [
  { id: 1, src: "/assets/data/sampling station/Sampling Station H20.695.png", label: "Interior View" },
  { id: 2, src: "/assets/data/sampling station/Sampling Station H20.696.png", label: "Side Profile" },
  { id: 3, src: "/assets/data/sampling station/Sampling Station H20.697.png", label: "Closed Unit" },
  { id: 4, src: "/assets/data/sampling station/Sampling Station H20.698.png", label: "Front Detail" },
];

export const TechnicalShowcase = ({ videoSrc }: { videoSrc: string }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null); // Reference for the video element

  // Manually trigger play to bypass browser autoplay blocks
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay was prevented:", error);
      });
    }
  }, [videoSrc]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* --- 1. TOP VIDEO PLAYER (Full HD Aspect) --- */}
        <div className="relative group mb-12 border-[1px] border-slate-100 shadow-2xl">
          <div className="aspect-video w-full bg-slate-900 relative overflow-hidden">
             <video 
               ref={videoRef} // Attached the ref here
               autoPlay 
               loop 
               muted 
               playsInline 
               className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
             >
               <source src={videoSrc} type="video/mp4" />
               Your browser does not support the video tag.
             </video>

             {/* Industrial Overlay UI */}
             <div className="absolute inset-0 p-10 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start">
                   <div className="flex items-center gap-4 bg-[#004aad]/80 backdrop-blur-md px-6 py-3 border-l-4 border-[#1B79EE]">
                      <Play className="w-5 h-5 text-white fill-current" />
                      <span className="text-white text-[12px] font-black uppercase tracking-[0.4em]">Live Simulation Node</span>
                   </div>
                   <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                      1080P • H2O-VIS-ALPHA
                   </div>
                </div>

                <div className="space-y-2">
                   <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none drop-shadow-2xl">
                     Water <span className="text-[#1B79EE]">Sampling</span> Station
                   </h2>
                </div>
             </div>
          </div>
        </div>

        {/* --- 2. BOTTOM SLIDE GALLERY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Active Slide Viewer */}
          <div className="lg:col-span-8 relative aspect-[4/3] bg-slate-50 border border-slate-100 overflow-hidden">
             <AnimatePresence mode="wait">
               <motion.img
                 key={activeSlide}
                 src={slides[activeSlide].src}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="w-full h-full object-contain p-12 mix-blend-multiply"
               />
             </AnimatePresence>
             
             {/* Slide Controls */}
             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 pointer-events-auto">
                <button onClick={prevSlide} className="p-4 bg-white border text-[#1B79EE] border-slate-200 hover:bg-[#1B79EE] hover:text-white transition-all shadow-xl">
                   <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2">
                   {slides.map((_, i) => (
                      <div key={i} className={`h-1 transition-all ${i === activeSlide ? 'w-12 bg-[#1B79EE]' : 'w-4 bg-slate-200'}`} />
                   ))}
                </div>
                <button onClick={nextSlide} className="p-4 bg-white text-[#1B79EE] border border-slate-200 hover:bg-[#1B79EE] hover:text-white transition-all shadow-xl">
                   <ChevronRight className="w-6 h-6" />
                </button>
             </div>
          </div>

          {/* Technical Info & Thumbnails */}
          <div className="lg:col-span-4 space-y-10">
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <Database className="w-5 h-5 text-[#1B79EE]" />
                   <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Technical Specs</span>
                </div>
                <h4 className="text-4xl font-black uppercase tracking-tight text-[#004aad] italic leading-tight">
                  Component <br /> <span className="text-[#1B79EE]">Breakdown</span>
                </h4>
             </div>

             {/* Vertical Thumbnail List */}
             <div className="space-y-4">
                {slides.map((slide, index) => (
                   <button 
                     key={slide.id}
                     onClick={() => setActiveSlide(index)}
                     className={`w-full flex items-center gap-6 p-4 border transition-all ${
                       index === activeSlide ? 'border-[#1B79EE] bg-slate-50 shadow-lg' : 'border-slate-100 hover:border-slate-200'
                     }`}
                   >
                      <div className="w-20 h-14 bg-white border border-slate-100 flex items-center justify-center p-2 shrink-0">
                         <img src={slide.src} alt={slide.label} className="w-full h-full object-contain" />
                      </div>
                      <div className="text-left">
                         <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest leading-none">Angle 0{index + 1}</p>
                         <p className="text-sm font-black text-[#004aad] uppercase italic mt-1 leading-tight">{slide.label}</p>
                      </div>
                   </button>
                ))}
             </div>

             <button className="w-full bg-[#004aad] text-white py-6 text-[11px] font-black uppercase tracking-[0.5em] hover:bg-[#1B79EE] transition-all flex items-center justify-center gap-4 shadow-xl">
                Download Technical PDF <FileText className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};