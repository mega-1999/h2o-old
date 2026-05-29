"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/lib/data";

const logos = [
    { src: "/assets/footer_logo/peg.jpeg", alt: "Partner 01" },
    { src: "/assets/footer_logo/precasteng.jpeg", alt: "Partner 02" },
    { src: "/assets/footer_logo/pxchange.jpeg", alt: "Partner 03" },
    { src: "/assets/footer_logo/totaltech.jpeg", alt: "Partner 04" },
    { src: "/assets/footer_logo/trench-unlimited.jpeg", alt: "Partner 05" },
];
const socialLinks = [
    { icon: FaFacebook, href: "#" },
    { icon: BsTwitter, href: "#" },
    { icon: FaYoutube, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
];
export default function ExtraordinaryFooter() {
    return (

        <footer className="relative w-full bg-[#004aad] text-white border-t-2 border-slate-100 overflow-hidden select-none">

            {/* 32-INCH FULL WIDTH CONTAINER */}
            <div className="w-full px-10 md:px-20 py-16">
                <div className="w-full bg-[#004aad] text-white pb-10 overflow-hidden">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                        {/* 1. LEFT: LOGO + ABOUT */}
                        <div className="lg:col-span-3 flex flex-col items-center lg:items-start space-y-8">
                            {/* BIG LOGO CONTAINER: White Background, Rounded, Increased Size */}
                            <div className="bg-white p-4 rounded-md shadow-sm w-full max-w-[280px] flex items-center justify-center">
                                <Image
                                    src="/assets/H2O LOGO PNG.png"
                                    alt="h2O industries"
                                    width={150} // Increased width for "Big Logo"
                                    height={70}
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <p className="text-white/80 font-medium text-sm leading-relaxed text-center lg:text-left max-w-xs">
                                <strong className="text-white">H2O Industries</strong> is a advanced filtration technology for global industrial transformation
                            </p>
                        </div>

                        {/* 2. MIDDLE: HEADLINE + MARQUEE (Spans 6 Columns) */}
                        <div className="lg:col-span-6 flex flex-col items-center lg:border-x border-slate-100 px-0 lg:px-10">

                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 text-center">
                                Our Group Dedicated to H2O Industries
                            </h3>

                            <div className="relative w-full h-24 flex items-center justify-center">
                                <motion.div className="flex items-center justify-center gap-4 h-full">
                                    {logos.map((logo, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-center shrink-0"
                                        >
                                            {/* FIXED WHITE CONTAINER: Same size for every logo */}
                                            <div className="relative w-20 h-12 bg-white rounded-xl flex items-center justify-center  p-1 shadow-sm cursor-pointer hover:scale-110 transition-transform duration-300">
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={logo.src}
                                                        alt={logo.alt}
                                                        fill
                                                        className="object-contain p-1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* 3. RIGHT: SOCIAL ICONS */}
                        <div className="lg:col-span-3 flex items-center justify-center lg:justify-end">
                            {/* flex-row ensures they stay in one line */}
                            <div className="flex flex-row gap-3">
                                {socialLinks.map((social, i) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={i}
                                            href={social.href}
                                            // Same lift effect as the logos
                                            whileHover={{ y: -4 }}
                                            className="group relative"
                                        >
                                            {/* FIXED CIRCLE: 
                        - Same size as logos (w-12 h-12)
                        - White background
                        - Hover effect turns it PEG Bright Blue
                    */}
                                            <div className="w-12 h-12 bg-white   flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-[#1B79EE]">
                                                <Icon className="w-5 h-5 text-[#004aad] group-hover:text-white transition-colors duration-300" />
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-1 border-b mb-4 border-slate-100 pb-12 ">
                    {footerData.map((section, idx) => (
                        <div key={idx} className="flex flex-col gap-6">
                            <h3 className="text-white text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#1B79EE]" />
                                {section.title}
                            </h3>

                            <ul className="flex flex-col gap-3">
                                {section.links.map((link, i) => (
                                    <motion.li
                                        key={i}
                                        whileHover={{ x: 5 }}
                                        className="group flex items-center gap-2 cursor-pointer"
                                    >
                                        <Plus className="w-3 h-3 text-white opacity-40 group-hover:opacity-100 group-hover:rotate-90 transition-all" />
                                        <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider group-hover:text-white transition-colors">
                                            {link}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* BOTTOM BAR: LEGAL & STATUS */}
                <div className=" flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="font-mono text-[9px] text-white/80 font-bold tracking-widest flex items-center gap-8   ">
                        <span>© 2026 H2O INDUSTRIES</span>
                        <span className="hidden md:block w-[1px] h-3 bg-slate-200" />
                        <span className="hover:text-white cursor-pointer transition-colors uppercase">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors uppercase">Terms of Service</span>
                    </div>

                </div>

            </div>

        </footer>
    );
}
const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
    <Link
        href="#"
        className="p-2 border border-white/40 hover:border-white hover:bg-white/10 transition-all text-white"
    >
        {icon}
    </Link>
);