"use client";

import { Target, Users, ShieldCheck, Zap, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface VisionMissionProps {
  isTeaser?: boolean;
}

export default function VisionMission({ isTeaser = false }: VisionMissionProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const missions = [
    {
      id: "m1",
      title: "Akselerasi Kolaborasi",
      desc: "Mengakselerasi kolaborasi dengan seluruh stakeholder untuk membangun pola kerja yang terintegrasi demi kemajuan Departemen Teknik Elektro.",
      icon: Users,
      color: "text-blue-400",
      bg: "bg-slate-950 border-slate-800",
      params: [
        "Terpublikasinya konten kolaborasi dengan IME FTUI 2026 setidaknya satu kali selama 1 Triwulan.",
        "Tersebarnya borang umpan balik untuk kinerja dari MPM FTUI Fraksi Elektro 2026 kepada BPH IME FTUI 2026 pada Triwulan 1 dan 3A.",
        "Terlaksanakannya rapat koordinasi dengan IME FTUI 2026 setidaknya tiga kali dalam 1 Triwulan."
      ]
    },
    {
      id: "m2",
      title: "Pengawasan & Legislasi",
      desc: "Menjalankan fungsi pengawasan dan legislasi secara progresif dan akuntabel agar kebijakan yang dihasilkan relevan dan tepat sasaran.",
      icon: ShieldCheck,
      color: "text-purple-400",
      bg: "bg-slate-950 border-slate-800",
      params: [
        "Dihadirinya minimal 70% program kerja IME FTUI 2026 yang mengundang warga oleh setidaknya satu orang anggota fraksi selama satu masa kepengurusan.",
        "Kehadiran staf MPM FTUI Fraksi Elektro pada Rapat Fraksi (yang dilibatkan) minimal 60% setiap Triwulan.",
        "Terwujudnya sistem pengarsipan terpadu yang memuat seluruh Ketetapan, Dokumen Fraksi Elektro, serta Formulir Pengaduan selama satu masa kepengurusan."
      ]
    },
    {
      id: "m3",
      title: "Garda Aspiratif",
      desc: "Memperjuangkan suara Warga Departemen Teknik Elektro secara aktif dan transparan agar setiap aspirasi dapat ditindaklanjuti secara nyata.",
      icon: Zap,
      color: "text-primary",
      bg: "bg-slate-950 border-slate-800",
      params: [
        "Terlaksananya penjaringan aspirasi (AspirAksi) minimal 1 kali setiap Triwulan.",
        "Terpublikasinya hasil AspirAksi yang diterima minimal 1 kali setiap Triwulan sebagai bentuk transparansi kepada warga.",
        "Tersedianya tautan aspirasi pada Instagram Fraksi Elektro yang dapat diakses sepanjang masa kepengurusan."
      ]
    },
  ];
  return (
    <section className={`bg-background relative overflow-hidden ${isTeaser ? "py-24" : "py-32"}`} id="visi-misi">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid grid-cols-1 ${isTeaser ? "lg:grid-cols-12" : "lg:grid-cols-2"} gap-20 items-start`}>
          
          {/* Vision Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${isTeaser ? "lg:col-span-12 mb-12" : "lg:sticky lg:top-32"}`}
          >
            <div className={`${isTeaser ? "text-center flex flex-col items-center" : "mb-10"}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 mb-6"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 dark:text-slate-500">Strategic Direction</span>
              </motion.div>
              <h2 className={`text-5xl ${isTeaser ? "md:text-9xl" : "md:text-7xl"} font-black text-slate-950 dark:text-white tracking-tighter leading-[0.85] mb-8`}>
                Visi Besar <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 italic">SINTESA KARSA</span>
              </h2>
              <div className={`text-2xl text-slate-500 dark:text-slate-400 font-bold leading-relaxed mb-10 italic ${isTeaser ? "max-w-4xl" : "max-w-lg"}`}>
                "Mewujudkan <span className="text-slate-950 dark:text-white underline decoration-primary/30 decoration-4 underline-offset-8 font-black">MPM FTUI Fraksi Elektro 2026</span> yang Sinergis dalam kolaborasi dan Progresif dalam tanggung jawab, guna membangun garda Aspiratif yang kredibel bagi seluruh warga DTE UI."
              </div>

              {isTeaser && (
                <Link href="/profil">
                  <button className="px-10 h-16 bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 rounded-[1.5rem] font-black tracking-widest uppercase text-xs flex items-center space-x-3 hover:bg-primary transition-all shadow-xl hover:-translate-y-1 group">
                    <span>Lihat Profil Selengkapnya</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              )}
            </div>
            
            {!isTeaser && (
              <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100 dark:shadow-none inline-flex items-center space-x-6 group hover:translate-x-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-slate-950 dark:bg-slate-50 flex items-center justify-center border border-slate-900 dark:border-slate-200 shadow-lg group-hover:rotate-6 transition-all">
                  <Target className="w-8 h-8 text-white dark:text-slate-950" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">Target Object 2026</p>
                  <p className="text-lg font-black text-slate-950 dark:text-white tracking-tight italic">Warga Departemen Teknik Elektro UI</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Mission Side - Only visible if NOT teaser */}
          {!isTeaser && (
            <div className="space-y-6">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 mb-6 block lg:hidden">Mandat & Misi</span>
              {missions.map((mission, idx) => (
                <motion.div
                  key={mission.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveTab(activeTab === mission.id ? null : mission.id)}
                  className={`group p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border cursor-pointer transition-all duration-500 ${
                    activeTab === mission.id 
                      ? "border-primary/50 shadow-2xl shadow-primary/5 ring-1 ring-primary/20 bg-slate-50/50 dark:bg-primary/5" 
                      : "border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-slate-200 dark:hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-6">
                      <div className={`mt-1 w-14 h-14 rounded-2xl border transition-all duration-500 shadow-sm flex items-center justify-center shrink-0 ${
                        activeTab === mission.id 
                          ? "bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 border-slate-950 dark:border-white scale-110" 
                          : "bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-950 dark:text-white group-hover:scale-110"
                      }`}>
                        <mission.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-black mb-3 tracking-tight transition-colors duration-300 ${activeTab === mission.id ? "text-primary" : "text-slate-950 dark:text-white group-hover:text-primary"}`}>{mission.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-bold">
                          {mission.desc}
                        </p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-300 transition-transform duration-500 ${activeTab === mission.id ? "rotate-180 text-primary" : "group-hover:text-slate-950"}`} />
                  </div>

                  {/* Parameters Dropdown */}
                  <motion.div
                    initial={false}
                    animate={{ height: activeTab === mission.id ? "auto" : 0, opacity: activeTab === mission.id ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 mt-8 border-t border-slate-100 dark:border-slate-800 space-y-4">
                      <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Parameter Keberhasilan</p>
                      {mission.params.map((param, pIdx) => (
                        <div key={pIdx} className="flex items-start space-x-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{param}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}

