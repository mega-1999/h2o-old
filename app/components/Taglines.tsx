"use client";

import React from 'react';

export const Taglines = () => {
  const lines = [
    {
      num: "01",
      title: "Every drop precious...",
      desc: "Optimizing industrial water consumption with absolute precision systems."
    },
    {
      num: "02",
      title: "Tsunami of inventions...",
      desc: "Deploying next-generation filtration and sustainable hydrodynamic patents."
    },
    {
      num: "03",
      title: "Protecting the future of water...",
      desc: "Securing scalable ecological infrastructure for generations to come."
    }
  ];

  return (
    <section className="relative w-full py-20 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Solid High-Contrast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lines.map((item, index) => (
            <div 
              key={index} 
              className="relative p-8 rounded-2xl bg-[#004aad]/90 border-2 border-[#1B79EE] shadow-[0_0_30px_rgba(27,121,238,0.2)] backdrop-blur-md flex flex-col justify-between min-h-[280px]"
            >
              {/* Corner Tech Brackets for High-Vis Industrial Look */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#1B79EE]"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#1B79EE]"></div>

              {/* Phase Header */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-black tracking-[0.2em] text-[#1B79EE] uppercase">
                  PHASE // {item.num}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#1B79EE] animate-pulse"></span>
              </div>

              {/* Tagline Title - Pure White, High Visibility */}
              <h3 className="my-6 text-3xl font-black uppercase italic tracking-tight text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {item.title}
              </h3>

              {/* Description - High Contrast Light Gray */}
              <p className="text-gray-100 text-sm font-medium tracking-wide leading-relaxed">
                {item.desc}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};