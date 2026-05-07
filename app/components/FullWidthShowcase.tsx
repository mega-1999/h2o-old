'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const SHOWCASE_VIDEOS = [
  {
    id: 1,
    url: "/assets/videos/102284_Drops of water falling onto water and splashing_By_Via_Films_Artlist_HD.mp4",
    overline: "Pure Innovation",
    title: "Protecting Every Drop",
    description: "Advanced filtration systems designed to secure municipal water integrity for future generations.",
  },
  {
    id: 2,
    url: "/assets/videos/139719_Large wave crashing in the ocean _By_Olivier_Sautet_Artlist_HD.mp4",
    overline: "Marine Logistics",
    title: "Ocean Scale Engineering",
    description: "Heavy-duty industrial castings built to withstand the most corrosive salt-water environments on earth.",
  },
  {
    id: 3,
    url: "/assets/videos/6007754_Tube Wave Wild Nature Water_By_Olivier_Sautet_Artlist_HD.mp4",
    overline: "Data Infrastructure",
    title: "Powering Global Data",
    description: "Precision-engineered cooling and drainage solutions for the world's most advanced data centers.",
  },
  {
    id: 4,
    url: "/assets/videos/6478104_Big Waves Crashing Surfer Leg_By_Spencer_Frost_Artlist_HD.mp4",
    overline: "Sustainable Future",
    title: "Global Supply Chain",
    description: "Integrating smart technology with traditional water-works to revolutionize global fluid logistics.",
  }
];

export const FullWidthShowcase = () => {
  return (
    <section className="w-full bg-white">
      {SHOWCASE_VIDEOS.map((item) => (
        <div key={item.id} className="relative h-screen w-full overflow-hidden border-b border-white/10">
          
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#004aad]/40 z-10" /> {/* Dark Blue Overlay */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover grayscale brightness-200"
            >
              <source src={item.url} type="video/mp4" />
            </video>
          </div>

          {/* Content Overlay */}
          <div className="relative z-20 h-full w-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1B79EE] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">
                  {item.overline}
                </span>
              </div>

              {/* Tagline */}
              <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic text-white leading-[0.85]">
                {item.title.split(' ').slice(0, -1).join(' ')} <br />
                <span className="text-[#1B79EE]">{item.title.split(' ').pop()}</span>
              </h2>

              {/* Description in Slate Gray (Lighter shade for dark bg) */}
              <p className="text-slate-200 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                {item.description}
              </p>

              {/* Call to Action */}
              <div className="pt-6">
                <Button className="bg-[#004aad] hover:bg-[#1B79EE] text-white font-black px-8 py-6 rounded-none text-sm uppercase tracking-[0.2em] transition-all shadow-[4px_4px_0px_rgba(27,121,238,0.2)] border-none">
                  Explore Solution <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </div>

            </div>
          </div>

          {/* Bottom Side Detail */}
          <div className="absolute bottom-10 right-10 z-20 hidden md:block">
            <div className="flex flex-col items-end opacity-40">
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white">Project ID</span>
              <span className="text-xl font-black text-white italic">00{item.id}—2026</span>
            </div>
          </div>

        </div>
      ))}
    </section>
  );
};