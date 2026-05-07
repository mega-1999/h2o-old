"use client";

import React from 'react';
import { Shield, Settings, Ruler, Download, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const UltimateCurbBox = () => {
    return (
        <section id="ultimate-curb-box" className="py-10 bg-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-2/5 h-full bg-slate-50 -z-10" />

            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- HEADER: Massive Industrial Typography --- */}
                <div className="max-w-5xl mb-28 space-y-8">
                    <div className="inline-flex items-center gap-6 px-6 py-3 bg-[#004aad] text-white rounded-none">
                        <Settings className="w-6 h-6 animate-spin-slow" />
                        <span className="text-[14px] font-black uppercase tracking-[0.6em]">Premium Series</span>
                    </div>
                    <h3 className="text-7xl md:text-9xl font-black uppercase tracking-tighter italic leading-[0.85] text-[#004aad]">
                        Ultimate <br /> <span className="text-[#1B79EE]">Curb Box</span>
                    </h3>
                    <p className="text-slate-500 text-xl md:text-3xl font-medium leading-tight italic max-w-3xl">
                        Precision-engineered for residential and commercial service lines, providing unmatched durability in high-traffic infrastructure.
                    </p>
                </div>

                {/* --- MAIN CONTENT: Balanced Symmetrical Split --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT: Technical Visual (Larger Scaling) */}
                    <div className="relative group">
                        <div className="absolute -inset-6 bg-[#1B79EE]/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative bg-white border-2 border-slate-100 p-16 shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                            <Image
                                width={300}
                                height={500}
                                src="/assets/data/industry/1.10.png"
                                alt="Ultimate Curb Box Technical"
                                className="w-full h-auto object-contain mix-blend-multiply"
                            />

                            <div className="absolute top-12 left-12 border-l-4 border-[#1B79EE] pl-6">
                                <p className="text-[12px] font-black text-slate-400 uppercase tracking-[0.4em]">Serial Range</p>
                                <p className="text-lg font-black text-[#004aad]">UCB-9000 SERIES</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Engineering Specs & Features */}
                    <div className="space-y-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            {/* Feature 1 */}
                            <div className="space-y-4">
                                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-[#1B79EE]">
                                    <Shield className="w-8 h-8" />
                                </div>
                                <h4 className="text-3xl font-black uppercase tracking-tight text-[#004aad] italic">Reinforced Base</h4>
                                <p className="text-lg text-slate-500 font-medium leading-relaxed">High-impact ductile iron construction prevents shifting in unstable soil conditions.</p>
                            </div>

                            {/* Feature 2 */}
                            <div className="space-y-4">
                                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-[#1B79EE]">
                                    <Ruler className="w-8 h-8" />
                                </div>
                                <h4 className="text-3xl font-black uppercase tracking-tight text-[#004aad] italic">Telescopic Sizing</h4>
                                <p className="text-lg text-slate-500 font-medium leading-relaxed">Adjustable heights ranging from 18" to 60" for various burial depths.</p>
                            </div>
                        </div>

                        {/* Sub-Technical Table: Scaled Up */}
                        <div className="bg-slate-50 border-2 border-slate-100 overflow-hidden shadow-lg">
                            <div className="px-10 py-6 bg-[#004aad] text-white flex justify-between items-center">
                                <span className="text-[14px] font-black uppercase tracking-[0.3em]">Material Specifications</span>
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <div className="p-10 space-y-6">
                                <div className="flex justify-between border-b border-slate-200 pb-4">
                                    <span className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">Casting Material</span>
                                    <span className="text-[14px] font-black text-[#004aad] uppercase">ASTM A48 Class 35B</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-200 pb-4">
                                    <span className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">Coating</span>
                                    <span className="text-[14px] font-black text-[#004aad] uppercase">Bituminous Asphalt</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">Load Rating</span>
                                    <span className="text-[14px] font-black text-[#004aad] uppercase">Heavy Duty Traffic Rated</span>
                                </div>
                            </div>
                        </div>

                        {/* Massive Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 pt-6">
                            <Button className="bg-[#004aad] hover:bg-[#1B79EE] text-white font-black px-8 py-6 rounded-none text-sm uppercase tracking-[0.2em] transition-all shadow-[4px_4px_0px_rgba(27,121,238,0.2)] border-none">
                                Download Specs <Download className="w-6 h-6" />
                            </Button>
                            <Button className="bg-white hover:bg-[#1B79EE] text-[#004aad] hover:text-white font-black px-8 py-6 rounded-none text-sm uppercase tracking-[0.2em] transition-all shadow-[4px_4px_0px_rgba(27,121,238,0.2)] border-none">
                                Request Quote <ArrowRight className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Detail Line */}
                <div className="mt-32 pt-12 border-t-2 border-slate-00 flex justify-between items-center">
                    <span className="text-[12px] font-black text-slate-500 uppercase tracking-[0.6em]">H2O Industries Engineering Division</span>
                    <span className="text-[14px] font-black text-[#1B79EE] uppercase tracking-[0.2em] italic">Precision in every pour.</span>
                </div>

            </div>
        </section>
    );
};