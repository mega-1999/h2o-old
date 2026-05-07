'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowUpRight,
  ShieldCheck,
  Truck,
  Settings,
  Timer,
  MoveDiagonal,
  Grid,
  HardHat,
  Layers,
  Wrench,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const RISER_SECTIONS = [
  {
    id: "standard-municipal",
    theme: "light",
    overline: "Discover  H20",
    title: "Backflow Hub Explore our",
    highlightText: "H2O Industries",
    description: "innovative backflow prevention solutions that optimize safety, durability, and compliance worldwide.",
    video: "/assets/videos/102284_Drops of water falling onto water and splashing_By_Via_Films_Artlist_HD.mp4",
    features: [
      { icon: "ShieldCheck", title: "Latest Innovations", desc: "Rated for H-20 heavy traffic loads." },
      { icon: "Truck", title: "Water Works", desc: "Supplying municipal scale projects." }
    ],
    meta: [
      { label: "Material", value: "Ductile/Grey Iron ASTM A48" },
      { label: "Standard Sizes", value: "24\", 30\", and Custom Increments" }
    ],
    buttonText: "Request Specifications",
    buttonLink: "#specs"
  },
  {
    id: "expandable-risers",
    theme: "dark",
    overline: "Discover  H20",
    title: "Data Center Solutions",
    highlightText: "H2O Industries",
    description: "See how our water management solutions are helping cutting- edge data centers power the future.",
    video: "/assets/videos/139719_Large wave crashing in the ocean _By_Olivier_Sautet_Artlist_HD.mp4",

    features: [
      { icon: "Settings", title: "Latest Innovations", desc: "Expands outward to bite into the base frame permanently." },
      { icon: "Timer", title: "Pipe Fittings", desc: "Paving crews can lay asphalt immediately after installation." }
    ],
    meta: [],
    buttonText: "View Expandable Specs",
    buttonLink: "#expandable"
  },
  {
    id: "drainage-catch-basins",
    theme: "light",
    overline: "Discover  H20",
    title: "Data Center Solutions  ",
    highlightText: "H2O Industries",
    description: "See how our water management solutions are helping cutting- edge data centers power the future.",
    video: "/assets/videos/6007754_Tube Wave Wild Nature Water_By_Olivier_Sautet_Artlist_HD.mp4",
    features: [
      { icon: "Grid", title: "Latest Innovations", desc: "Fully enclosed or D-shape profiles for curb abutments." },
      { icon: "ShieldCheck", title: "Marine Castings", desc: "Engineered for flat grate elevation in highway shoulders." }
    ],
    meta: [
      { label: "Configurations", value: "Square, Rectangular, U-Shape" },
      { label: "Compatibility", value: "Matches DOT curb profiles" }
    ],
    buttonText: "Explore Drainage Risers",
    buttonLink: "#drainage"
  },
  {
    id: "sloped-tapered",
    theme: "light",
    overline: "Discover H20",
    title: "Data Center Solutions  ",
    highlightText: "H2O Industries",
    description: "See how our water management solutions are helping cutting- edge data centers power the future.",
    video: "/assets/videos/6478104_Big Waves Crashing Surfer Leg_By_Spencer_Frost_Artlist_HD.mp4",
    features: [
      { icon: "MoveDiagonal", title: "Latest Innovations", desc: "Custom sloped from 1% to 15%+ grades." },
      { icon: "ShieldCheck", title: "Plumbing Products", desc: "Ensures covers sit flush, preventing plow blade snags." }
    ],
    meta: [],
    buttonText: "Request Custom Fab",
    buttonLink: "#custom"
  }
];

const renderIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case "ShieldCheck": return <ShieldCheck className={className} />;
    case "Truck": return <Truck className={className} />;
    case "Settings": return <Settings className={className} />;
    case "Timer": return <Timer className={className} />;
    case "MoveDiagonal": return <MoveDiagonal className={className} />;
    case "Grid": return <Grid className={className} />;
    case "HardHat": return <HardHat className={className} />;
    case "Layers": return <Layers className={className} />;
    case "Wrench": return <Wrench className={className} />;
    default: return <CheckCircle2 className={className} />;
  }
};

export default function ComprehensivePavingRisersMapped() {
  return (
    <div className="w-full font-sans">
      {RISER_SECTIONS.map((section, index) => {
        // Updated to match your 'dark' theme value in the JSON
        const isDark = section.theme === 'white';
        const isVideoLeft = index % 2 === 0;

        return (
          <section
            key={section.id}
            className={`relative overflow-hidden min-h-screen flex items-center ${isDark ? 'bg-zinc-950 text-white' : 'bg-white text-slate-900 border-b border-gray-100'}`}
          >
            {isDark && (
              <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#004aad]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
            )}

            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* --- VIDEO COLUMN --- */}
                <div className={`w-full h-screen relative flex items-center overflow-hidden ${isVideoLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <video
                    src={section.video}
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* --- TEXT CONTENT COLUMN --- */}
                <div className={`space-y-8 py-12 ${isVideoLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-4">
                    <h4 className={`font-bold text-sm uppercase tracking-[0.2em] ${isDark ? 'text-zinc-400' : 'text-[#004aad]'}`}>
                      {section.overline}
                    </h4>
                    <h2 className="text-4xl md:text-5xl text-slate-600 font-black leading-tight">
                      {section.title} <br /> <span className="text-[#004aad]">{section.highlightText}</span>
                    </h2>
                    <p className={`text-lg ${isDark ? 'text-zinc-400' : 'text-slate-600'}`}>
                      {section.description}
                    </p>
                  </div>

                  {section.features && section.features.length > 0 && (
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 ${isDark ? 'border-t border-zinc-800' : ''}`}>
                      {section.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className={`h-10 w-10 shrink-0 rounded-lg flex items-center justify-center ${isDark ? 'bg-zinc-800' : 'bg-[#004aad] text-white'}`}>
                            {renderIcon(feat.icon, `w-6 h-6 text-white`)}
                          </div>
                          <div>
                            <h5 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{feat.title}</h5>
                            <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>{feat.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-4">
                    <Link href={section.buttonLink}>
                      <Button className="bg-[#004aad] hover:bg-[#1B79EE] text-white font-black px-8 py-6 rounded-none text-sm uppercase tracking-[0.2em] transition-all shadow-[4px_4px_0px_rgba(27,121,238,0.2)] border-none">
                        {section.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}