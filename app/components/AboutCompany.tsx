import { Button } from '@/components/ui/button'
import React from 'react'

const AboutCompany = () => {
    return (
        <div className='flex py-8 bg-white w-full mx-auto px-4 sm:px-6 lg:px-8'>
            <section className='flex flex-col gap-8'>
                <div>
                    <Button className="bg-[#004aad] hover:bg-[#1B79EE] text-white font-black px-8 py-6 rounded-none text-sm uppercase tracking-[0.2em] transition-all shadow-[4px_4px_0px_rgba(27,121,238,0.2)] border-none">
                        Latest Innovations
                    </Button>
                </div>
                <div>
                    <div className=" relative flex items-center overflow-hidden">
                        <video
                            src="/assets/videos/3. MJ-MJ 45 DEGREE.215.mp4"
                            autoPlay
                            loop
                            muted
                            preload="auto"
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase text-[#004aad]">
                        About Our Company
                    </h3>
                    <h4 className="text-xl font-black uppercase tracking-tight text-[#004aad] italic">
                        <h4 className="text-xl font-black uppercase tracking-tight text-[#004aad] italic">
                            What is H2O Industries?
                        </h4>
                    </h4>
                    <p className="text-sm text-justify text-slate-500 leading-relaxed font-medium">
                        H2O Industries CRM is a custom-built solution designed to simplify and enhance business interactions. Tailored for B2B companies in the energy, power generation, oil & gas, and water management sectors, our CRM empowers you to efficiently manage leads, track customer engagement, and build stronger relationships. With intuitive features like real-time analytics, automated workflows, and seamless integration into our platform, businesses can streamline their sales cycles and maximize growth. H2O Industries CRM ensures that every client interaction is organized, insightful, and actionable, allowing you to stay ahead in today's competitive market.


                    </p>
                </div>

                {/* List Items in Slate Gray */}
                <ul className="space-y-4 pt-8 border-t list-disc border-slate-200">
                    <li className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-slate-400 list-disc transition-colors">
                        Lead Management : Easily organize, track, and nurture leads for better conversions and growth.
                    </li>
                    <li className="flex items-center gap-3 text-[10px] font-bold  tracking-widest text-slate-400  transition-colors">
                        Automated Workflows : Save time with automatic processes that streamline sales and customer engagement.
                    </li>
                    <li className="flex items-center gap-3 text-[10px] font-bold  tracking-widest text-slate-400  transition-colors">
                        Real-Time Insights : Make data-driven decisions with instant access to customer interactions and analytics
                    </li>
                </ul>
            </section>
            <section className='flex flex-col gap-8'>
                <div>
                    <Button className="bg-[#004aad] hover:bg-[#1B79EE] text-white font-black px-8 py-6 rounded-none text-sm uppercase tracking-[0.2em] transition-all shadow-[4px_4px_0px_rgba(27,121,238,0.2)] border-none">
                        Latest Innovations
                    </Button>
                </div>
                <div>
                    <div className=" relative flex items-center overflow-hidden">
                        <video
                            src="/assets/videos/3. MJ-MJ 45 DEGREE.215.mp4"
                            autoPlay
                            loop
                            muted
                            preload="auto"
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutCompany
