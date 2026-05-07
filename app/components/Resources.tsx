import React from 'react';
import { FileText, Download, ShieldCheck, Database, Layers } from 'lucide-react';
import { Button } from "@/components/ui/button";

const resourceData = [
  {
    title: "Technical Submittals",
    description: "Full engineering specifications and CAD drawings for catch basin filtration units.",
    icon: <Layers className="w-6 h-6" />,
    type: "PDF / DWG",
    tag: "Engineering"
  },
  {
    title: "Ocean Impact Report",
    description: "Annual data analysis on microplastic recovery and coastal water purity metrics.",
    icon: <Database className="w-6 h-6" />,
    type: "Interactive Data",
    tag: "Environment"
  },
  {
    title: "Safety Compliance",
    description: "OSHA and Global Industrial Safety standards for H2O filtration maintenance.",
    icon: <ShieldCheck className="w-6 h-6" />,
    type: "PDF",
    tag: "Compliance"
  },
  {
    title: "Innovation Whitepaper",
    description: "Exploring the future of hydrophobic membranes in industrial wastewater.",
    icon: <FileText className="w-6 h-6" />,
    type: "Case Study",
    tag: "Innovation"
  }
];

export const Resources = () => {
  return (
    <section className="bg-white  py-4">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Slate & Dark Blue */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-slate-50 rounded-full border border-slate-200">
               <div className="w-1.5 h-1.5 rounded-full bg-[#1B79EE]" />
               <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">Knowledge Base</h3>
            </div>
            <h2 className="text-[#004aad] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">
              H2O <span className="text-slate-200 group-hover:text-slate-300 transition-colors">Resources</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 text-sm font-medium leading-relaxed uppercase tracking-wider">
            Access secure technical documentation and industrial research for global water transformation.
          </p>
        </div>

        {/* Resource Grid - Using Grays for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {resourceData.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-50 border border-slate-100 p-10 rounded-[2rem] transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-white rounded-2xl text-[#1B79EE] shadow-sm border border-slate-100 group-hover:bg-[#1B79EE] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-200 px-4 py-1.5 rounded-full">
                  {item.tag}
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="text-[#004aad] text-2xl font-black uppercase tracking-tight italic">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                  Format: {item.type}
                </span>
                <Button variant="ghost" className="text-[#1B79EE] hover:bg-[#1B79EE] hover:text-white flex gap-3 items-center text-xs font-black uppercase tracking-widest px-6">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Area - Using Slate & Dark Blue */}
        <div className="mt-24 p-1 bg-slate-100 rounded-[3rem]">
          <div className="bg-white border-[8px] border-slate-50 rounded-[calc(3rem-4px)] py-16 px-10 text-center shadow-inner">
             <h3 className="text-[#004aad] text-3xl font-black uppercase tracking-widest italic mb-6">
               Need Specific Technical Data?
             </h3>
             <p className="text-slate-500 text-base mb-10 font-medium max-w-xl mx-auto">Request custom submittals for your specific industrial catch basin configuration and compliance requirements.</p>
             <Button className="bg-[#004aad] hover:bg-[#1B79EE] text-white font-black px-8 py-6 rounded-none text-sm uppercase tracking-[0.2em] transition-all shadow-[4px_4px_0px_rgba(27,121,238,0.2)] border-none">
               Contact Engineering
             </Button>
          </div>
        </div>

      </div>
    </section>
  );
};