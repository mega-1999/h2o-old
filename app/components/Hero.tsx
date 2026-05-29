"use client";

import Image from 'next/image';
import React from 'react';

interface HeroProps {
  videoSrc: string;
  gifSrc: string;
}

export const Hero = ({ videoSrc, gifSrc }: HeroProps) => {
  return (
    <main className="relative pt-48 flex flex-col items-center justify-center min-h-screen mx-auto px-4 sm:px-6 lg:px-8">

      {/* 1. BACKGROUND VIDEO (Tinted for better contrast) */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Blue Overlay to pop the Blue UI */}
        <div className="absolute inset-0 bg-[#004aad]/40 z-10" /> 
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none brightness-100"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* 2. CENTER ASSET - CLEAN BLUE FOCUS */}
      {/* <div className="relative">
         
        <div className="absolute -inset-4 bg-[#1B79EE]/20 rounded-[2.5rem] blur-2xl animate-pulse"></div>
         
        <div className="relative border-2 border-[#1B79EE] bg-transparent p-1 rounded-[2rem] shadow-[0_0_50px_rgba(27,121,238,0.3)] overflow-hidden max-w-[600px]">
           
          <div className="absolute top-4 left-6 z-30">
            <span className="text-[8px] uppercase tracking-[0.5em] font-black text-[#1B79EE] bg-white/10 px-2 py-1 backdrop-blur-md">
              H2O System Focus
            </span>
          </div>
 
          <Image
            height={400}
            width={800}
            src={gifSrc}
            alt="H2O Industry Content"
            className="w-full h-auto rounded-[1.8rem] object-cover"
            priority
          />
        </div>
 
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-white/50"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-white/50"></div>
      </div> */}
 
      <div className="mt-16 text-center space-y-6 max-w-4xl">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none text-white drop-shadow-2xl">
          Saving Our <span className="text-[#1B79EE]">Oceans</span>
        </h2>
        
        <div className="flex items-center justify-center gap-6">
          <div className="h-[2px] w-16 bg-[#1B79EE]"></div>
          <p className="text-white text-[11px] uppercase tracking-[1em] font-black italic">
            Industrial Water Innovation
          </p>
          <div className="h-[2px] w-16 bg-[#1B79EE]"></div>
        </div>
      </div>

    </main>
  );
};