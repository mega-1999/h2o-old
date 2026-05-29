"use client";

import React from 'react';

export const Doctrine = () => {
  return (
    <section className="relative w-full py-24 z-20 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Main Industrial Container */}
        <div className="relative border-y-4 border-[#1B79EE] bg-[#004aad]/95 backdrop-blur-xl p-8 md:p-16 shadow-[0_0_50px_rgba(27,121,238,0.25)]">
          
        

          {/* Core Content Layout */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: The Anchor */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#1B79EE]/30 pb-6 lg:pb-0 lg:pr-8">
              <p className="text-xs uppercase tracking-[0.6em] font-black text-[#1B79EE] mb-2">
                Our Foundation
              </p>
              <h4 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-white leading-none">
                OUR<br />DOCTRINE<span className="text-[#1B79EE]">.</span>
              </h4>
            </div>

            {/* Right Column: The Relentless Stacking of Innovation */}
            <div className="lg:col-span-8 flex flex-col space-y-4">
              
              {/* Row 1 */}
              <div className="flex items-baseline gap-6 group">
                <span className="text-xs font-mono text-[#1B79EE] font-bold">01 //</span>
                <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight text-white group-hover:text-[#1B79EE] transition-colors duration-200">
                  INNOVATIONS
                </h3>
              </div>

              {/* Row 2 */}
              <div className="flex items-baseline gap-6 border-y border-[#1B79EE]/20 py-4 group">
                <span className="text-xs font-mono text-[#1B79EE] font-bold">02 //</span>
                <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tight text-white/90 group-hover:text-[#1B79EE] transition-colors duration-200">
                  MORE INNOVATIONS
                </h3>
              </div>

              {/* Row 3 - Maximum Impact Statement */}
              <div className="flex items-baseline gap-6 pt-2 group">
                <span className="text-xs font-mono text-[#1B79EE] font-bold">03 //</span>
                <h3 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#1B79EE] drop-shadow-[0_4px_12px_rgba(27,121,238,0.3)]">
                  NOTHING BUT INNOVATIONS<span className="text-[#1B79EE]">.</span>
                </h3>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};