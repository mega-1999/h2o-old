import { Hero } from "./components/Hero";
import SustainableEngineering from "./components/sustainable-engineering";
import { Navbar } from "./components/Navbar";
import { Resources } from "./components/Resources";
import { Heros } from "./Hero";
import ComprehensivePavingRisersMapped from "./components/CombinedRiserSolutions";
import { FullWidthShowcase } from "./components/FullWidthShowcase";
import { IndustrySegments } from "./components/IndustrySegments";
import AboutCompany from "./components/AboutCompany";
import { InfrastructureFeatures } from "./components/InfrastructureFeatures";
import { ProductGrid } from "./components/ProductGrid";
import { Resourcess } from "./components/Resourcess";
import { IndustryIndex } from "./components/IndustryIndex";
import { UltimateCurbBox } from "./components/UltimateCurbBox";
import { IndustrialGrid } from "./components/IndustrialGrid";
import { FullScreenGif } from "./components/FullScreenGif";
import { TechnicalShowcase } from "./components/TechnicalShowcase";
import { ArchStyleCurbBox } from "./components/ArchStyleCurbBox";
import { TrailerModal } from "./components/TrailerModal";
import { H2OProductExplorer } from "./components/H2OProductExplorer";
import { Taglines } from "./components/Taglines";


export default function Home() {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      <Hero
        videoSrc="/assets/videos/102284_Drops of water falling onto water and splashing_By_Via_Films_Artlist_HD.mp4"
        gifSrc="/assets/umbrella_preview.gif"
      />
      <Taglines />
      <TrailerModal videoSrc="/assets/videos/102284_Drops of water falling onto water and splashing_By_Via_Films_Artlist_HD.mp4" />
      <UltimateCurbBox />
      <TechnicalShowcase
        videoSrc="/assets/hero_background.mp4"
      />
      <FullScreenGif gifSrc="/assets/umbrella_preview.gif" />
      <IndustrialGrid />
      {/* <Resourcess/> */}
      <SustainableEngineering />
      <ComprehensivePavingRisersMapped />
      <Resources />
      <ArchStyleCurbBox />
      <FullWidthShowcase />
      <IndustrySegments />
      <Heros />
      <AboutCompany />
      <IndustryIndex />
      {/* <ProductGrid/> */}
      {/* FULL WIDTH FIXED BOTTOM TYPE */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-[#004aad]/90 backdrop-blur-md border-t border-white/10">

        {/* CENTERED CONTENT - MAX-W-5XL */}
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          {/* Left Side */}
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1B79EE] animate-pulse"></div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
              H2O Industries <span className="text-white/20 mx-2">|</span> 2026
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-8">
            <p className="text-[#1B79EE] text-[10px] font-black uppercase tracking-[0.4em]">
              Secure Data Archive
            </p>
            <div className="hidden md:block h-3 w-px bg-white/20"></div>
            <p className="hidden md:block text-[9px] text-white/50 uppercase tracking-widest">
              Global Compliance
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}