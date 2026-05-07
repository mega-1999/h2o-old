"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Construction, BoxSelect, Ruler, Download, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ArchStyleCurbBox = () => {
  return (
    <section id="arch-style-box" className="py-12 bg-white relative overflow-hidden">
      {/* Structural Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10" />
      
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER: Massive Industrial Typography --- */}
        <div className="max-w-5xl mb-32 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-6 px-6 py-3 bg-[#004aad] text-white rounded-none shadow-xl"
          >
            <Construction className="w-6 h-6" />
            <span className="text-[14px] font-black uppercase tracking-[0.6em]">Infrastructure Essentials</span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black uppercase tracking-tighter italic leading-[0.85] text-[#004aad]"
          >
            Arch Style <br /> <span className="text-[#1B79EE]">Service Boxes</span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xl md:text-3xl font-medium leading-tight italic max-w-4xl"
          >
            Engineered with a traditional arch-base design to securely straddle the service line and curb stop, ensuring stable vertical access for utility maintenance.
          </motion.p>
        </div>

        {/* --- MAIN CONTENT: Symmetrical Split --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: Technical Visual Display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-6 bg-[#1B79EE]/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative bg-white border-2 border-slate-100 p-20 shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
              
              {/* Asset Image Placeholder (Using 1.10.png logic) */}
              <div className="relative z-10 w-full aspect-[3/4] flex items-center justify-center bg-slate-50/50">
                 <img 
                   src="/assets/data/industry/1.10.png" 
                   alt="Arch Style Service Box" 
                   className="w-full h-full object-contain mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
                 />
              </div>
              
              {/* Metadata Labels */}
              <div className="absolute top-12 left-12 border-l-4 border-[#1B79EE] pl-6">
                <p className="text-[12px] font-black text-slate-400 uppercase tracking-[0.4em]">Base Pattern</p>
                <p className="text-lg font-black text-[#004aad]">ARCH-STYLE TYPE A</p>
              </div>

              <div className="absolute bottom-12 right-12 text-right">
                <BoxSelect className="w-10 h-10 text-[#1B79EE] ml-auto mb-2 opacity-20" />
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Standard Service Fitment</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Engineering Features */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {/* Feature 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-[#1B79EE]">
                  <Shield className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-black uppercase tracking-tight text-[#004aad] italic">Stable Straddle</h4>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">The wide arch base provides superior lateral stability, preventing the box from leaning or shifting away from the curb stop.</p>
              </motion.div>
              
              {/* Feature 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
              >
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-[#1B79EE]">
                  <Ruler className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-black uppercase tracking-tight text-[#004aad] italic">Variable Extension</h4>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">Compatible with multiple riser segments to meet exact finish grade requirements across varying burial depths.</p>
              </motion.div>
            </div>

            {/* Sub-Technical Specification Table */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-slate-50 border-2 border-slate-100 overflow-hidden shadow-lg"
            >
              <div className="px-10 py-6 bg-[#004aad] text-white flex justify-between items-center">
                <span className="text-[14px] font-black uppercase tracking-[0.3em]">Technical Dimensions</span>
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="p-10 space-y-6">
                <div className="flex justify-between border-b border-slate-200 pb-4">
                  <span className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">Standard Base Size</span>
                  <span className="text-[14px] font-black text-[#004aad] uppercase">1" thru 2" Arch Span</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-4">
                  <span className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">Upper Shaft Dia.</span>
                  <span className="text-[14px] font-black text-[#004aad] uppercase">2-1/2" Standard</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">Casting Quality</span>
                  <span className="text-[14px] font-black text-[#004aad] uppercase">ASTM A48 Class 35B</span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button className="bg-[#004aad] hover:bg-[#1B79EE] text-white font-black px-8 py-6 rounded-none text-sm uppercase tracking-[0.2em] transition-all shadow-[4px_4px_0px_rgba(27,121,238,0.2)] border-none">
                Download Catalog <Download className="w-6 h-6" />
              </Button>
              <Button className="bg-[#004aad] hover:bg-[#1B79EE] text-white font-black px-8 py-6 rounded-none text-sm uppercase tracking-[0.2em] transition-all shadow-[4px_4px_0px_rgba(27,121,238,0.2)] border-none">
                Request Specification <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Technical Detail */}
        <div className="mt-32 pt-12 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex gap-10">
              <span className="text-[12px] font-black text-slate-400 uppercase tracking-[0.6em]">Municipal Grade</span>
              <span className="text-[12px] font-black text-slate-400 uppercase tracking-[0.6em]">North American Standards</span>
           </div>
           <span className="text-[14px] font-black text-[#1B79EE] uppercase tracking-[0.2em] italic">Standardizing Water Access.</span>
        </div>

      </div>
    </section>
  );
};