"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Eye, ShieldCheck, GraduationCap, ExternalLink, Sparkles, Target, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";

const productData = [
  {
    id: "aspiraksi",
    title: "AspirAksi",
    desc: "Sistem penjaringan aspirasi triwulanan yang interaktif untuk mengawal suara Warga Departemen Teknik Elektro.",
    icon: MessageSquare,
    color: "blue",
    link: "https://wa.me/6285213695654",
    target: "Warga DTE IKM UI, Internal MPM FTUI Fraksi Elektro",
    bg: "from-blue-500/20 to-transparent",
    border: "border-blue-500/50",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    teknis: [
      "Membuat publikasi mengenai teknis dan pelaksanaan penjaringan aspirasi",
      "Melakukan interaksi secara langsung dengan Warga Departemen Teknik Elektro"
    ],
    params: [
      "Terlaksananya publikasi mengenai pelaksanaan AspirAksi setiap Triwulan",
      "Terlaksananya AspirAksi minimal 1 kali setiap Triwulan",
      "Terpublikasinya hasil AspirAksi beserta dokumentasi pada Instagram sebanyak 1 kali setiap Triwulan"
    ]
  },
  {
    id: "fraksight",
    title: "FrakSight",
    desc: "Kanal publikasi strategis untuk transparansi informasi legislatif dan peningkatan engagement warga di media sosial.",
    icon: Eye,
    color: "purple",
    link: "https://instagram.com/mpmftuiektro",
    target: "MPM FTUI, IME FTUI, Fraksi Elektro",
    bg: "from-purple-500/20 to-transparent",
    border: "border-purple-500/50",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    teknis: [
      "Melakukan publikasi informasi mengenai MPM FTUI and/atau IKM UI melalui Instagram",
      "Melakukan publikasi luring bersamaan dengan AspirAksi"
    ],
    params: [
      "Terpublikasinya informasi melalui Instagram minimal 3 kali setiap Triwulan",
      "Meningkatnya engagement rate Instagram sebanyak 25% selama kepengurusan",
      "Terpublikasinya konten kolaborasi bersama IME FTUI 2026 minimal 1 kali setiap Triwulan",
    ]
  },
  {
    id: "frakzip",
    title: "FrakZIP",
    desc: "Pusat arsip digital terpadu yang memuat seluruh Ketetapan, dokumen resmi, and database Fraksi Elektro 2026.",
    icon: ShieldCheck,
    color: "cyan",
    link: "https://drive.google.com/drive/folders/1x25CIo0VwHPzBSRx7QrsR_3virMq2WTK",
    target: "MPM FTUI Fraksi Elektro",
    bg: "from-cyan-500/20 to-transparent",
    border: "border-cyan-500/50",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.3)]",
    teknis: [
      "Membuat folder Google Drive yang terpusat",
      "Membungkus link folder Google Drive untuk dipublikasikan pada Instagram"
    ],
    params: [
      "Terbentuknya folder Google Drive arsip and inventaris pada Triwulan 1",
      "Terpublikasinya FrakZIP pada Triwulan 1",
      "Terarsipnya seluruh Ketetapan selama masa kepengurusan"
    ]
  },
  {
    id: "frakschool",
    title: "FrakSchool",
    desc: "Platform pencerdasan legislatif and kurikulum kaderisasi staf untuk regenerasi garda legislatif masa depan.",
    icon: GraduationCap,
    color: "yellow",
    link: "#",
    target: "Warga DTE IKM UI, Internal MPM FTUI Fraksi Elektro",
    bg: "from-yellow-500/20 to-transparent",
    border: "border-yellow-500/50",
    glow: "shadow-[0_0_30px_rgba(250,204,21,0.3)]",
    teknis: [
      "Membuat materi pencerdasan mengenai MPM FTUI",
      "Mengadakan Open House untuk menjaring Angkatan 2025 sebagai staf",
      "Mencari and mewadahi Bakal Calon Anggota MPM FTUI Fraksi Elektro",
      "Membuat group chat seluruh Anggota beserta Bakal Calon Anggota sebagai penjagaan kaderisasi"
    ],
    params: [
      "Terlaksananya penanaman kurikulum kaderisasi kepada staf minimal 2 kali",
      "Dihasilkannya minimal 70% staf secara kumulatif yang memahami materi",
      "Terdapat minimal 2 staf yang lanjut mencalonkan diri sebagai Anggota selanjutnya"
    ]
  },
];

interface ProductShowcaseProps {
  isTeaser?: boolean;
}

export default function ProductShowcase({ isTeaser = false }: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState(productData[0].id);
  const activeProduct = productData.find(p => p.id === activeTab)!;

  return (
    <section className={`bg-background relative overflow-hidden ${isTeaser ? "py-24" : "py-32"}`} id="produk">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col ${isTeaser ? "items-center text-center" : "lg:flex-row items-end justify-between"} mb-20 gap-12`}>
          <div className={`${isTeaser ? "max-w-4xl" : "max-w-4xl"}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`flex items-center space-x-3 text-primary mb-6 ${isTeaser ? "justify-center" : ""}`}
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-black tracking-[0.4em] text-[10px] uppercase text-slate-400 dark:text-slate-500">Strategic Infrastructure</span>
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className={`text-5xl ${isTeaser ? "md:text-9xl" : "md:text-8xl"} font-black text-slate-950 dark:text-white tracking-tighter leading-[0.8]`}
            >
              Produk <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 italic">Fraksi</span>
            </motion.h2>
          </div>
          {!isTeaser && (
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-sm leading-relaxed font-bold border-l-4 border-primary pl-8"
            >
              Empat pilar program kerja strategis untuk mewujudkan transparansi dan kemajuan Departemen Teknik Elektro.
            </motion.p>
          )}
          {isTeaser && (
            <div className="mt-8">
              <Link href="/profrak">
                <button className="px-10 h-16 bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 rounded-[1.5rem] font-black tracking-widest uppercase text-xs flex items-center space-x-3 hover:bg-primary transition-all shadow-xl hover:-translate-y-1 group">
                  <span>Lihat Seluruh Program Kerja</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Side Nav */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {productData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-6 p-6 rounded-[2rem] transition-all duration-500 text-left ${
                  activeTab === item.id 
                    ? `bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 shadow-2xl shadow-slate-200 dark:shadow-none` 
                    : "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-500 ${
                  activeTab === item.id 
                    ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white border-white dark:border-slate-700 rotate-12' 
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-400 dark:text-slate-500 group-hover:rotate-12'
                }`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-xl font-black tracking-tight ${activeTab === item.id ? "text-white dark:text-slate-950" : "text-slate-950 dark:text-white"}`}>{item.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className={`p-10 md:p-14 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100/50 dark:shadow-none relative overflow-hidden h-full flex flex-col justify-between ${isTeaser ? "min-h-[400px]" : ""}`}
              >
                <div className="relative z-10">
                  <div className="flex flex-wrap gap-3 items-center mb-10">
                    <span className="text-[9px] bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl">
                      Objek: {activeProduct.target}
                    </span>
                    {!isTeaser && (
                      <Link href={activeProduct.link} target={activeProduct.link.startsWith("http") ? "_blank" : "_self"} className="text-[9px] bg-white dark:bg-slate-800 text-slate-950 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center shadow-sm">
                        Pelajari Detail <ExternalLink className="ml-2 w-3 h-3" />
                      </Link>
                    )}
                  </div>
                  
                  <h3 className={`font-black text-slate-950 dark:text-white mb-6 tracking-tighter ${isTeaser ? "text-5xl" : "text-4xl md:text-6xl"}`}>
                    {activeProduct.title}
                  </h3>
                  <p className={`text-slate-500 dark:text-slate-400 font-bold leading-relaxed italic ${isTeaser ? "text-xl md:text-2xl" : "text-lg md:text-2xl mb-14"}`}>
                    {activeProduct.desc}
                  </p>
                  
                  {!isTeaser && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14">
                      <div className="space-y-6 p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50">
                        <div className="flex items-center space-x-3 text-slate-950 dark:text-white">
                          <Activity className="w-5 h-5 text-primary" />
                          <h4 className="font-black tracking-widest uppercase text-[10px]">Teknis Pelaksanaan</h4>
                        </div>
                         <ul className="space-y-4">
                          {activeProduct.teknis.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-slate-600 dark:text-slate-400 font-bold text-sm leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-6 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center space-x-3 text-slate-950 dark:text-white">
                          <Target className="w-5 h-5 text-blue-500" />
                          <h4 className="font-black tracking-widest uppercase text-[10px]">Parameter Keberhasilan</h4>
                        </div>
                        <ul className="space-y-4">
                          {activeProduct.params.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-slate-600 dark:text-slate-400 font-bold text-sm leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0 shadow-sm" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  {isTeaser && (
                    <div className="mt-12 flex justify-start">
                      <Link href="/profrak">
                        <button className="text-[10px] font-black text-primary uppercase tracking-widest flex items-center group">
                          Tampilkan Seluruh Parameter
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
