"use client";

import React from 'react';
import { Layers, Ship, Droplets, HardHat } from 'lucide-react';
import Image from 'next/image';

const segments = [
  {
    title: "Underground Infrastructure",
    description: "Advanced solutions for urban and industrial water management, including septic tanks and handholes.",
    icon: (props: any) => <Layers {...props} />, // Changed to accept props
    items: ["Septic Systems", "Manholes & Handholes", "Catch Basins", "Custom Valve Boxes"],
    image: "/assets/data/4 valve box.4.jpg.jpeg"
  },
  {
    title: "Marine Engineering",
    description: "High-grade marine castings and infrastructure components designed for durability in harsh saltwater.",
    icon: (props: any) => <Ship {...props} />, // Changed to accept props
    items: ["Marine Castings", "Mooring Bollards", "Anchorage Systems", "Dock Infrastructure"],
    image: "/assets/data/marin/marine casting bollards.1004.jpg.jpeg"
  },
  {
    title: "Water Management",
    description: "Integrated systems for B2B energy and power sectors, focusing on automated workflows.",
    icon: (props: any) => <Droplets {...props} />, // Changed to accept props
    items: ["Chemical Dosing", "Filtration Systems", "Pump & Vacuum", "Real-time Analytics"],
    image: "/assets/data/3.4.png"
  },
  {
    title: "Industrial Components",
    description: "Precision-engineered pipe fittings and plumbing products for oil, gas, and power facilities.",
    icon: (props: any) => <HardHat {...props} />, // Changed to accept props
    items: ["Pipe Fittings", "Industrial Valves", "Alloy Castings", "Custom Fittings"],
    image: "/assets/data/austin.2.png"
  }
];

export const IndustrySegments = () => {
  return (
    <section id="solutions" className="bg-white relative overflow-hidden">
      {/* Subtle Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-slate-100"></div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1B79EE] animate-pulse" />
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Core Competencies</h2>
            </div>
            <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic text-[#004aad] leading-[0.9]">
              Integrated <span className="text-[#1B79EE]">Industrial</span> <br /> Ecosystems
            </h3>
          </div>
          <p className="max-w-md text-slate-500 text-sm md:text-base font-medium leading-relaxed mb-2 uppercase tracking-wide">
            H2O Industries provides end-to-end solutions for complex water management and marine infrastructure requirements globally.
          </p>
        </div>

        {/* Segment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment) => (
            <div
              key={segment.title}
              // Added transition group here
              className="group relative bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-[#1B79EE]/10 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.4] transition-opacity duration-700">
                <Image src={segment.image} alt="" fill className="w-full h-full object-cover" />
              </div>

              <div className="relative z-10 space-y-10">

                {/* 🛠️ MODIFIED ICON CONTAINER */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm 
                  /* HOVER STATES */
                  group-hover:bg-[#1B79EE] group-hover:border-[#1B79EE] 
                  transition-all duration-500">

                  {/* Icon with White color on group-hover */}
                  {segment.icon({ className: "w-6 h-6 text-[#1B79EE] group-hover:text-white transition-colors duration-300" })}
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-black uppercase tracking-tight text-[#004aad] italic">
                    {segment.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {segment.description}
                  </p>
                </div>

                {/* List Items in Slate Gray */}
                <ul className="space-y-4 pt-8 border-t border-slate-200">
                  {segment.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#1B79EE] transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#1B79EE] transition-colors"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};