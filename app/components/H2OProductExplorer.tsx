"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ArrowLeft, 
  Search, 
  Layers, 
  Box, 
  ExternalLink, 
  ShoppingCart, 
  Info,
  Filter,
  LayoutGrid,
  List as ListIcon,
  Settings2,
  Package,
  X,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import h2oDataV2 from './h2o_data_v2.json';

// --- Types ---
interface ProductItem {
  name: string;
  id: string;
  price: string;
  imgSrc: string;
}

interface Subcategory {
  name: string;
  imgSrc: string;
  items: ProductItem[];
}

interface Category {
  category: string;
  imgSrc: string;
  subcategories: Subcategory[];
}

// --- Constants ---
const THEME = {
  primary: '#004aad',
  secondary: '#1B79EE',
  accent: '#00A3FF',
  navy: '#004aad',
  slate: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    400: '#94A3B8',
    600: '#475569',
    800: '#334155'
  }
};

export const H2OProductExplorer = () => {
  // Navigation State
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<Subcategory | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Breadcrumb Helpers
  const goBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  const resetNav = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSearchTerm("");
  };

  const data = h2oDataV2 as Category[];

  // Filter Logic
  const filteredCategories = useMemo(() => {
    if (selectedCategory || selectedSubcategory) return [];
    return data.filter(c => 
      c.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, selectedCategory, selectedSubcategory, data]);

  const filteredSubcategories = useMemo(() => {
    if (!selectedCategory || selectedSubcategory) return [];
    return selectedCategory.subcategories.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  const filteredItems = useMemo(() => {
    if (!selectedSubcategory) return [];
    return selectedSubcategory.items.filter(i => 
      i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      i.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, selectedSubcategory]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    },
    hover: { 
      y: -10, 
      boxShadow: "0 25px 50px -12px rgba(0, 74, 173, 0.15)",
      transition: { duration: 0.3 }
    }
  } as const;

  return (
    <section className="w-full min-h-screen bg-[#FDFDFF] py-20 px-4 md:px-8 lg:px-16 font-sans selection:bg-[#004aad] selection:text-white relative overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#004aad]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-[#00A3FF]/5 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
      </div>

      <div className="max-w-[1600px] mx-auto space-y-16">
        
        {/* --- DYNAMIC HEADER --- */}
        <div className="relative z-20 space-y-12">
          
          {/* Breadcrumbs 2.0 */}
          <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
            <button 
              onClick={resetNav}
              className="flex items-center gap-2 group"
            >
              <div className={`p-2 rounded-lg transition-all ${!selectedCategory ? 'bg-[#004aad] text-white shadow-lg' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600'}`}>
                <Package className="w-4 h-4" />
              </div>
              <span className={`text-[11px] font-black uppercase tracking-widest transition-colors ${!selectedCategory ? 'text-[#004aad]' : 'text-slate-400'}`}>Catalog</span>
            </button>
            
            {selectedCategory && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-slate-300" />
                <button 
                  onClick={() => setSelectedSubcategory(null)}
                  className={`flex items-center gap-2 group ${!selectedSubcategory ? 'text-[#004aad]' : 'text-slate-400'}`}
                >
                  <span className="text-[11px] font-black uppercase tracking-widest">{selectedCategory.category}</span>
                </button>
              </motion.div>
            )}

            {selectedSubcategory && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-slate-300" />
                <span className="text-[11px] font-black uppercase tracking-widest text-[#004aad] bg-[#004aad]/5 px-3 py-1.5 rounded-full ring-1 ring-[#004aad]/10">
                  {selectedSubcategory.name}
                </span>
              </motion.div>
            )}
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={selectedSubcategory?.name || selectedCategory?.category || "root"}
              >
                <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-[#004aad] italic leading-[0.85] filter drop-shadow-sm">
                  {selectedSubcategory ? selectedSubcategory.name : (selectedCategory ? selectedCategory.category : (
                    <>Technical <br/> Components</>
                  ))}
                </h2>

              </motion.div>
              <p className="text-slate-500 text-lg font-medium max-w-xl leading-relaxed">
                {selectedSubcategory 
                  ? `Precision engineered components for ${selectedSubcategory.name}. ANSI/AWWA C800 compliant.` 
                  : "Explore our comprehensive library of municipal and industrial water control solutions."}
              </p>
            </div>

            {/* Precision Search Console */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-96 group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-slate-300 group-focus-within:text-[#00A3FF] transition-colors" />
                </div>
                <Input 
                  placeholder="SEARCH BY MODEL, ID, OR SPEC..."
                  className="w-full h-16 pl-14 pr-6 bg-white border-2 border-slate-100 rounded-2xl text-xs font-black uppercase tracking-widest focus-visible:ring-[#00A3FF] focus-visible:border-transparent transition-all shadow-sm group-hover:shadow-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-slate-50 text-slate-400 text-[10px] font-bold">
                  CMD+K
                </div>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`h-16 px-6 rounded-2xl border-2 transition-all gap-3 ${isFilterOpen ? 'bg-[#004aad] border-[#004aad] text-white' : 'bg-white border-slate-100 text-slate-600 hover:border-slate-200'}`}
              >
                <Settings2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* --- MAIN EXPLORER AREA --- */}
        <AnimatePresence mode="wait">
          
          {/* ROOT VIEW: Technical Categories */}
          {!selectedCategory && (
            <motion.div 
              key="root-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 pt-8"
            >
              {filteredCategories.map((cat, idx) => (
                <motion.div
                  key={cat.category}
                  variants={cardVariants}
                  whileHover="hover"
                  onClick={() => { setSelectedCategory(cat); setSearchTerm(""); }}
                  className="group relative h-[480px] rounded-[32px] overflow-hidden cursor-pointer bg-white"
                >
                  <img 
                    src={cat.imgSrc} 
                    alt={cat.category} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004aad] via-[#004aad]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Category Details Card (Glass) */}
                  <div className="absolute bottom-6 left-6 right-6 p-8 rounded-[24px] bg-white/10 backdrop-blur-md border border-white/20 transition-all group-hover:bg-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-px bg-[#00A3FF]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00A3FF]">
                        {(cat.subcategories || []).length} SERIES
                      </span>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white italic leading-none mb-6">
                      {cat.category}
                    </h3>
                    <div className="flex justify-between items-center overflow-hidden">
                      <div className="flex flex-col gap-1 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest">Engineering Standard</span>
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">ANSI / AWWA C800</span>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                        <ChevronRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* CATEGORY VIEW: Series & Sub-groups */}
          {selectedCategory && !selectedSubcategory && (
            <motion.div 
              key="category-view"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {filteredSubcategories.map((sub, idx) => (
                <motion.div
                  key={sub.name}
                  variants={cardVariants}
                  whileHover={{ scale: 1.01, x: 10 }}
                  onClick={() => { setSelectedSubcategory(sub); setSearchTerm(""); }}
                  className="flex items-center gap-10 bg-white p-10 rounded-[40px] border border-slate-100 cursor-pointer group shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <Settings2 className="w-32 h-32 rotate-12" />
                  </div>
                  
                  <div className="w-40 h-40 flex-shrink-0 bg-slate-50 rounded-[32px] p-8 flex items-center justify-center group-hover:bg-white transition-colors relative z-10">
                    <img src={sub.imgSrc} alt={sub.name} className="w-full h-full object-contain mix-blend-multiply" />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center border border-slate-50">
                      <Plus className="w-4 h-4 text-[#004aad]" />
                    </div>
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#00A3FF]/10 text-[#00A3FF] text-[9px] font-black uppercase tracking-widest">
                        {(sub.items || []).length} MODELS
                      </span>
                      <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">ISO 9001:2015</span>
                    </div>
                    <h4 className="text-3xl font-black uppercase tracking-tighter text-[#004aad] italic group-hover:text-[#1B79EE] transition-colors leading-tight">
                      {sub.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium tracking-wide max-w-sm">
                      Industrial grade {selectedCategory.category.toLowerCase()} solution for high-pressure municipal applications.
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* COMPONENT VIEW: Precision Models */}
          {selectedSubcategory && (
            <motion.div 
              key="item-explorer"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-10"
            >
              {/* Control Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-8 bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl">
                  <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={`rounded-lg px-4 gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#004aad]' : 'text-slate-400'}`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" /> Grid
                  </Button>
                  <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={`rounded-lg px-4 gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-[#004aad]' : 'text-slate-400'}`}
                  >
                    <ListIcon className="w-3.5 h-3.5" /> Detailed
                  </Button>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Live Availability</span>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-4 py-2 rounded-full">
                    {filteredItems.length} Match(es) Found
                  </p>
                </div>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                  {filteredItems.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      variants={cardVariants}
                      whileHover={{ y: -10 }}
                      className="bg-white border-2 border-slate-50 rounded-[32px] p-8 space-y-8 group transition-all hover:border-[#00A3FF]/30 hover:shadow-2xl hover:shadow-blue-900/5 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50/50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                      
                      <div className="aspect-square bg-white rounded-2xl flex items-center justify-center relative z-10">
                        <img 
                          src={item.imgSrc} 
                          alt={item.name} 
                          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
                        />
                      </div>

                      <div className="space-y-6 relative z-10">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black text-[#00A3FF] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-lg">ID: {item.id}</span>
                            <div className="flex gap-1">
                              {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-slate-200" />)}
                            </div>
                          </div>
                          <h5 className="text-xl font-black uppercase tracking-tighter text-[#004aad] italic leading-tight min-h-[3.5rem] line-clamp-2">
                            {item.name}
                          </h5>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                          <div className="flex flex-col">
                            <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">List Price</span>
                            <span className="text-2xl font-black text-[#004aad] tracking-tighter">{item.price || "TBD"}</span>
                          </div>
                          <Button className="w-14 h-14 bg-[#004aad] hover:bg-[#00A3FF] rounded-2xl shadow-lg transition-all active:scale-95">
                            <Plus className="w-6 h-6 text-white" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden"
                >
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-100">
                        <th className="p-8 text-[11px] font-black uppercase tracking-widest text-slate-400">Technical Model</th>
                        <th className="p-8 text-[11px] font-black uppercase tracking-widest text-slate-400">Inventory ID</th>
                        <th className="p-8 text-[11px] font-black uppercase tracking-widest text-slate-400">Price Unit</th>
                        <th className="p-8 text-right"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {filteredItems.map((item) => (
                        <tr key={item.id} className="group hover:bg-slate-50/80 transition-colors">
                          <td className="p-8">
                            <div className="flex items-center gap-8">
                              <div className="w-20 h-20 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                                <img src={item.imgSrc} alt={item.name} className="w-full h-full object-contain" />
                              </div>
                              <div className="flex flex-col gap-1">
                                <span className="text-lg font-black uppercase tracking-tight text-[#004aad] italic leading-none">{item.name}</span>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">A.Y. McDonald Series Standard</span>
                              </div>
                            </div>
                          </td>
                          <td className="p-8">
                            <span className="px-4 py-2 rounded-xl bg-slate-100 text-[11px] font-black text-[#00A3FF] tracking-widest">{item.id}</span>
                          </td>
                          <td className="p-8">
                            <span className="text-lg font-black text-[#004aad] tracking-tighter">{item.price || "TBD"}</span>
                          </td>
                          <td className="p-8 text-right">
                            <Button variant="outline" className="rounded-xl border-2 border-slate-100 h-12 px-6 gap-2 text-[10px] font-black uppercase tracking-widest hover:bg-[#004aad] hover:text-white transition-all">
                              Technical Data <ExternalLink className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </motion.div>
          )}

        </AnimatePresence>

        {/* --- REFINED EMPTY STATE --- */}
        {((!selectedCategory && filteredCategories.length === 0) || 
          (selectedCategory && !selectedSubcategory && filteredSubcategories.length === 0) ||
          (selectedSubcategory && filteredItems.length === 0)) && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-40 flex flex-col items-center justify-center space-y-10 bg-white rounded-[48px] border-2 border-dashed border-slate-100 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />
            <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center relative">
              <Box className="w-12 h-12 text-slate-200" />
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200 animate-[spin_20s_linear_infinite]" />
            </div>
            <div className="text-center space-y-4 relative z-10">
              <h4 className="text-4xl font-black uppercase tracking-tighter text-[#004aad] italic">No Matching Components</h4>
              <p className="text-xs font-bold text-slate-400 tracking-[0.3em] uppercase max-w-sm mx-auto leading-loose">
                Our technical search engine couldn't find a match for your current filters.
              </p>
            </div>
            <Button 
              onClick={() => setSearchTerm("")} 
              className="h-14 px-12 bg-[#004aad] hover:bg-[#00A3FF] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 transition-all"
            >
              Reset Technical Filters
            </Button>
          </motion.div>
        )}

      </div>
    </section>
  );
};
