"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Droplets, Settings, ShieldCheck, Zap, Ruler, Hammer, Waves, Gauge, Layers, FlaskConical, Construction } from 'lucide-react';

const h2oSegments = [
    { title: "Valve Boxes", icon: <Box />, tag: "Infrastructure" },
    { title: "Curb/Service Boxes", icon: <Construction />, tag: "Utility" },
    { title: "Valves", icon: <Settings />, tag: "Control" },
    { title: "Cleanouts", icon: <Droplets />, tag: "Drainage" },
    { title: "Custom Solutions", icon: <Hammer />, tag: "Bespoke" },
    { title: "Water Works Tools", icon: <Zap />, tag: "Engineering" },
    { title: "Risers/Extensions", icon: <Layers />, tag: "Hardware" },
    { title: "Special Application", icon: <FlaskConical />, tag: "Technical" },
    { title: "Gas Products", icon: <Gauge />, tag: "Energy" },
    { title: "Flanges", icon: <ShieldCheck />, tag: "Couplings" },
    { title: "Meter Boxes", icon: <Ruler />, tag: "Metering" },
    { title: "3-Piece Systems", icon: <Waves />, tag: "Assembly" },
];

export const IndustrialGrid = () => {
    return (
        <section className="py-6 bg-white overflow-hidden">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- HEADER --- */}
                <div className="mb-32 space-y-6">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[14px] font-black uppercase tracking-[0.6em] text-[#1B79EE]"
                    >
                        Technical Directory
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-[#004aad] italic leading-[0.85]"
                    >
                        Product <span className="text-slate-400">Architecture</span>
                    </motion.h2>
                </div>

                {/* --- 12 BOX GRID --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {h2oSegments.map((segment, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative h-[320px] bg-white border border-slate-100 p-12 flex flex-col justify-between overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(27,121,238,0.15)] transition-all"
                        >
                            {/* Subtle Blue Glow Accent */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#1B79EE]/5 rounded-full blur-[80px] group-hover:bg-[#1B79EE]/10 transition-all duration-700" />

                            <div className="space-y-8 relative z-10">
                                <div className="text-slate-400 group-hover:text-[#1B79EE] transition-colors duration-500 transform group-hover:scale-110 origin-left">
                                    {React.cloneElement(segment.icon as React.ReactElement<any>, {
                                        size: 44,  
                                        strokeWidth: 1.2  
                                    })}
                                </div>
                                <div>
                                    <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#1B79EE] mb-3">
                                        {segment.tag}
                                    </p>
                                    <h4 className="text-3xl font-black uppercase tracking-tight text-[#004aad] leading-tight italic">
                                        {segment.title}
                                    </h4>
                                </div>
                            </div>

                            <div className="relative z-10 flex items-center justify-between pt-6 border-t border-slate-50">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    H2O-SYS-0{index + 1}
                                </span>
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#1B79EE] transition-all duration-500">
                                    <svg className="w-5 h-5 text-slate-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};