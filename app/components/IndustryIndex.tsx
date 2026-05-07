"use client";

import React from 'react';
import { ArrowUpRight, Play, Database } from 'lucide-react';

const h2oCategories = [
  { title: "Valve Boxes", tag: "Infrastructure", img: "/assets/data/industry/VALVE BOXES/6 IN.2 - Copy.png" },
  { title: "Curb/Service Boxes", tag: "Utility", img: "/assets/data/industry/CURB BOXES/1.2.5 - Copy.png" },
  { title: "Valves", tag: "Control Systems", img: "/assets/data/industry/VALVES/valve.5.png" },
  { title: "Cleanouts", tag: "Drainage", img: "/assets/data/industry/CLEANOUTS/1802.1 - Copy.png" },
  { title: "Custom Valve Boxes", tag: "Bespoke", img: "/assets/data/industry/CUSTOME VALVE BOXES/FLORINDA 1.1.1 - Copy - Copy.png" },
  { title: "Water Works Tools", tag: "Tools", img: "/assets/data/industry/VL - 8B.21.png" },
  { title: "Risers/Extensions", tag: "Adjustments", img: "/assets/data/industry/VL - 8B.21.png" },
  { title: "Special Application", tag: "Engineering", img: "/assets/data/industry/SPECIAL APPLICATIONS/key.3 - Copy.png" },
  { title: "Gas Products", tag: "Energy", img: "/assets/data/industry/GAS PROODUCT/MONITERING WELL STATION.12 - Copy.png" },
  { title: "Flanges", tag: "Connection", img: "/assets/data/industry/VL - 8B.21.png" },
  { title: "Meter Boxes", tag: "Measurement", img: "/assets/meter boxes/6.svg" },
  { title: "Three Piece Valve Boxes", tag: "Assembly", img: "/assets/data/industry/THREE PIS VALVE BOXES/4 valve box.7 - Copy.jpg" },
];

export const IndustryIndex = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="w-full mx-auto px-6 lg:px-12">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24 border-b-2 border-slate-100 pb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-[3px] bg-[#1B79EE]" />
              <span className="text-[12px] font-black uppercase tracking-[0.5em] text-slate-400">Product Index</span>
            </div>
            <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none text-[#004aad]">
              Technical <span className="text-slate-400">Inventory</span>
            </h3>
          </div>
          <div className="flex items-center gap-4 text-slate-400 pb-2">
            <Database className="w-7 h-7" />
            <span className="text-[14px] font-bold uppercase tracking-widest">12 Core Segments</span>
          </div>
        </div>

        {/* --- SYMMETRICAL 2-COLUMN GRID --- */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-14">
          {h2oCategories.map((cat, index) => (
            <div 
              key={index} 
              className="group flex flex-col sm:flex-row gap-10 p-10 border border-slate-100 bg-slate-50/40 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
            >
              {/* LARGE BASE VISUAL - Increased from w-44 to w-56 */}
              <div className="w-full sm:w-56 h-56 bg-white border border-slate-100 flex items-center justify-center shrink-0 relative overflow-hidden">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 p-4" 
                />
                
                {/* Visual indicator for categories with Video assets */}
                <div className="absolute bottom-3 right-3">
                   <div className="w-12 h-12 rounded-full bg-[#004aad]/10 backdrop-blur-md flex items-center justify-center text-[#004aad] group-hover:bg-[#1B79EE] group-hover:text-white transition-all shadow-lg">
                      <Play className="w-5 h-5 fill-current" />
                   </div>
                </div>
              </div>

              {/* CONTENT BLOCK - Increased text sizes */}
              <div className="flex flex-col justify-between flex-grow py-2">
                <div className="space-y-4">
                  <span className="text-[11px] font-black text-[#1B79EE] uppercase tracking-[0.4em]">
                    {cat.tag}
                  </span>
                  <h4 className="text-3xl font-black uppercase tracking-tight text-[#004aad] italic leading-tight group-hover:text-[#1B79EE] transition-colors">
                    {cat.title}
                  </h4>
                  <p className="text-[13px] font-semibold text-slate-500 uppercase tracking-widest leading-relaxed">
                    Full Technical Specifications <br /> and Engineering Data Available
                  </p>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-6">
                   <button className="text-[12px] font-black text-[#004aad] uppercase tracking-[0.3em] flex items-center gap-3 hover:gap-5 transition-all">
                      Open Catalog <ArrowUpRight className="w-5 h-5 stroke-[3px]" />
                   </button>
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">
                     Asset: H2O-{index + 101}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- ENHANCED BULK ACTIONS --- */}
        <div className="mt-28 p-16 bg-[#004aad] flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl shadow-[#004aad]/30">
          <div className="text-white space-y-4 text-center lg:text-left">
            <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">Download Full Archive</h4>
            <p className="text-white/70 text-[12px] font-bold uppercase tracking-[0.4em]">2,500+ Parts • 2026 Comprehensive PDF Repository</p>
          </div>
          <button className="px-16 py-8 bg-white text-[#004aad] text-[13px] font-black uppercase tracking-[0.5em] hover:bg-[#1B79EE] hover:text-white transition-all shadow-xl">
            Download Index (48.2 MB)
          </button>
        </div>

      </div>
    </section>
  );
};