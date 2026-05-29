import React from 'react';

export default function SustainableEngineering() {
  // Brand Colors
  const lightBlue = "#1B79EE";
  const darkBlue = "#004aad";

  return (
    <div className="relative min-h-screen w-full bg-white text-[#004aad] overflow-x-hidden pt-20">

      {/* MISSION SECTION */}
      <section className="relative py-32  overflow-hidden bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

            <div className="space-y-10 relative z-10">
              {/* Badge - Using Slate for text to look more industrial/official */}
              <div className="inline-flex items-center gap-4 px-5 py-2 bg-slate-50 border border-slate-200 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1B79EE] animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Mission: Saving Our Oceans</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic text-[#004aad]">
                Engineering a <br />
                <span className="text-[#1B79EE] underline decoration-slate-100 underline-offset-[16px]">Sustainable</span> Future
              </h2>

              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-xl">
                <p>
                  At H2O Industries, we believe that industrial excellence and environmental stewardship go hand-in-hand. With over 15 years of field experience, we specialize in underground water management systems that prevent contamination and optimize resource usage.
                </p>
                <p>
                  Our commitment extends from the depths of municipal infrastructure to the challenges of global marine logistics. We don't just build components; we engineer the lifelines of modern industry.
                </p>
              </div>

              {/* Stats Section - High contrast for Ben */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <p className="text-5xl font-black text-[#004aad] tracking-tighter">15+</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1B79EE] mt-2 italic">Years Experience</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-[#004aad] tracking-tighter">2500+</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1B79EE] mt-2 italic">Custom Parts</p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Image Container - Using Slate border for a technical look */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50 aspect-[4/5] bg-slate-50">
                <img
                  src="/assets/data/austin.2.png"
                  alt="Industrial Excellence"
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
                />
              </div>

              {/* Decorative Glows - Very subtle Slate/Blue mix */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-slate-100/50 rounded-full blur-[100px] -z-10"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#1B79EE]/5 rounded-full blur-[100px] -z-10"></div>

              {/* Floating Card - Clean White/Slate mix */}
              <div className="absolute -bottom-10 -right-4 bg-white border border-slate-100 p-10 rounded-[2rem] z-20 max-w-[320px] shadow-2xl shadow-slate-200/60">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1B79EE] mb-4">Certified Quality</p>
                <p className="text-sm font-bold text-slate-600 leading-relaxed italic">
                  "Every component that leaves our facility is a testament to our obsession with precision and environmental integrity."
                </p>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              {/* Image Container - Using Slate border for a technical look */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50 aspect-[4/5] bg-slate-50">
                <img
                  src="/assets/data/austin.2.png"
                  alt="Industrial Excellence"
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
                />
              </div>

              {/* Decorative Glows - Very subtle Slate/Blue mix */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-slate-100/50 rounded-full blur-[100px] -z-10"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#1B79EE]/5 rounded-full blur-[100px] -z-10"></div>

              {/* Floating Card - Clean White/Slate mix */}
              <div className="absolute -bottom-10 -right-4 bg-white border border-slate-100 p-10 rounded-[2rem] z-20 max-w-[320px] shadow-2xl shadow-slate-200/60">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1B79EE] mb-4">Certified Quality</p>
                <p className="text-sm font-bold text-slate-600 leading-relaxed italic">
                  "Every component that leaves our facility is a testament to our obsession with precision and environmental integrity."
                </p>
              </div>
            </div>
            <div className="space-y-10 relative z-10">
              {/* Badge - Using Slate for text to look more industrial/official */}
              <div className="inline-flex items-center gap-4 px-5 py-2 bg-slate-50 border border-slate-200 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1B79EE] animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Mission: Saving Our Oceans</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic text-[#004aad]">
                Engineering a <br />
                <span className="text-[#1B79EE] underline decoration-slate-100 underline-offset-[16px]">Sustainable</span> Future
              </h2>

              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-xl">
                <p>
                  At H2O Industries, we believe that industrial excellence and environmental stewardship go hand-in-hand. With over 15 years of field experience, we specialize in underground water management systems that prevent contamination and optimize resource usage.
                </p>
                <p>
                  Our commitment extends from the depths of municipal infrastructure to the challenges of global marine logistics. We don't just build components; we engineer the lifelines of modern industry.
                </p>
              </div>

              {/* Stats Section - High contrast for Ben */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <p className="text-5xl font-black text-[#004aad] tracking-tighter">15+</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1B79EE] mt-2 italic">Years Experience</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-[#004aad] tracking-tighter">2500+</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1B79EE] mt-2 italic">Custom Parts</p>
                </div>
              </div>
            </div>



          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

            <div className="space-y-10 relative z-10">
              {/* Badge - Using Slate for text to look more industrial/official */}
              <div className="inline-flex items-center gap-4 px-5 py-2 bg-slate-50 border border-slate-200 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1B79EE] animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Mission: Saving Our Oceans</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic text-[#004aad]">
                Engineering a <br />
                <span className="text-[#1B79EE] underline decoration-slate-100 underline-offset-[16px]">Sustainable</span> Future
              </h2>

              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-xl">
                <p>
                  At H2O Industries, we believe that industrial excellence and environmental stewardship go hand-in-hand. With over 15 years of field experience, we specialize in underground water management systems that prevent contamination and optimize resource usage.
                </p>
                <p>
                  Our commitment extends from the depths of municipal infrastructure to the challenges of global marine logistics. We don't just build components; we engineer the lifelines of modern industry.
                </p>
              </div>

              {/* Stats Section - High contrast for Ben */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <p className="text-5xl font-black text-[#004aad] tracking-tighter">15+</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1B79EE] mt-2 italic">Years Experience</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-[#004aad] tracking-tighter">2500+</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1B79EE] mt-2 italic">Custom Parts</p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Image Container - Using Slate border for a technical look */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50 aspect-[4/5] bg-slate-50">
                <img
                  src="/assets/data/austin.2.png"
                  alt="Industrial Excellence"
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
                />
              </div>

              {/* Decorative Glows - Very subtle Slate/Blue mix */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-slate-100/50 rounded-full blur-[100px] -z-10"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#1B79EE]/5 rounded-full blur-[100px] -z-10"></div>

              {/* Floating Card - Clean White/Slate mix */}
              <div className="absolute -bottom-10 -right-4 bg-white border border-slate-100 p-10 rounded-[2rem] z-20 max-w-[320px] shadow-2xl shadow-slate-200/60">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1B79EE] mb-4">Certified Quality</p>
                <p className="text-sm font-bold text-slate-600 leading-relaxed italic">
                  "Every component that leaves our facility is a testament to our obsession with precision and environmental integrity."
                </p>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              {/* Image Container - Using Slate border for a technical look */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50 aspect-[4/5] bg-slate-50">
                <img
                  src="/assets/data/austin.2.png"
                  alt="Industrial Excellence"
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
                />
              </div>

              {/* Decorative Glows - Very subtle Slate/Blue mix */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-slate-100/50 rounded-full blur-[100px] -z-10"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#1B79EE]/5 rounded-full blur-[100px] -z-10"></div>

              {/* Floating Card - Clean White/Slate mix */}
              <div className="absolute -bottom-10 -right-4 bg-white border border-slate-100 p-10 rounded-[2rem] z-20 max-w-[320px] shadow-2xl shadow-slate-200/60">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1B79EE] mb-4">Certified Quality</p>
                <p className="text-sm font-bold text-slate-600 leading-relaxed italic">
                  "Every component that leaves our facility is a testament to our obsession with precision and environmental integrity."
                </p>
              </div>
            </div>
            <div className="space-y-10 relative z-10">
              {/* Badge - Using Slate for text to look more industrial/official */}
              <div className="inline-flex items-center gap-4 px-5 py-2 bg-slate-50 border border-slate-200 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1B79EE] animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Mission: Saving Our Oceans</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic text-[#004aad]">
                Engineering a <br />
                <span className="text-[#1B79EE] underline decoration-slate-100 underline-offset-[16px]">Sustainable</span> Future
              </h2>

              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed max-w-xl">
                <p>
                  At H2O Industries, we believe that industrial excellence and environmental stewardship go hand-in-hand. With over 15 years of field experience, we specialize in underground water management systems that prevent contamination and optimize resource usage.
                </p>
                <p>
                  Our commitment extends from the depths of municipal infrastructure to the challenges of global marine logistics. We don't just build components; we engineer the lifelines of modern industry.
                </p>
              </div>

              {/* Stats Section - High contrast for Ben */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <p className="text-5xl font-black text-[#004aad] tracking-tighter">15+</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1B79EE] mt-2 italic">Years Experience</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-[#004aad] tracking-tighter">2500+</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1B79EE] mt-2 italic">Custom Parts</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* FULL WIDTH FIXED BOTTOM BAR - Using Dark Blue for authority */}
      <div className="fixed bottom-0 left-0 w-full z-[90] bg-[#004aad]/95 backdrop-blur-md border-t border-white/10 py-4">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8  flex justify-between items-center text-[9px] font-black uppercase tracking-[0.4em] text-white/50">
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-white">Systems Operational</span>
          </div>
          <div className="hidden md:flex gap-12">
            <span>Global Data v2.4</span>
            <span className="text-[#1B79EE]">Secure Encryption</span>
          </div>
          <div className="text-white italic tracking-widest">
            Saving Our Oceans
          </div>
        </div>
      </div>

    </div>
  );
}