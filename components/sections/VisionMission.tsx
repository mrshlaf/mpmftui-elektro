"use client";

import { Target, Users, ShieldCheck, Zap, ChevronDown, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

  if (isTeaser) {
    return (
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center py-16 md:py-32 overflow-hidden bg-white dark:bg-black font-sans">

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 mb-12 shadow-sm backdrop-blur-md hover:border-primary/50 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-500 dark:text-slate-400">Strategic Philosophy &bull; Sintesa Karsa</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-8xl lg:text-9xl font-black text-slate-950 dark:text-white tracking-tighter leading-[0.9] md:leading-[0.8] mb-12 font-heading"
            >
              Visi Besar Kita <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-cyan-500 drop-shadow-[0_20px_100px_rgba(30,58,138,0.3)] animate-gradient-x">SINTESA KARSA</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-4xl text-slate-600 dark:text-slate-400 font-bold leading-tight max-w-5xl mx-auto mb-10 md:mb-16"
            >
              "Mewujudkan <span className="text-slate-950 dark:text-white font-black">MPM FTUI Fraksi Elektro 2026</span> yang Sinergis dalam kolaborasi dan Progresif dalam tanggung jawab."
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Link href="/profil">
                <Button size="lg" className="px-12 h-20 bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 hover:bg-primary dark:hover:bg-primary hover:text-white rounded-[2rem] group transition-all duration-500 font-black text-xl shadow-2xl hover:-translate-y-3 hover:shadow-primary/30">
                  <span>Pelajari Misi Selengkapnya</span>
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

      </section>
    );
  }

  return (
    <section className="bg-background relative overflow-hidden py-32 font-sans" id="visi-misi">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Vision Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className={`${isTeaser ? "text-center flex flex-col items-center" : "mb-10"}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 mb-6"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 dark:text-slate-500">Strategic Direction</span>
              </motion.div>
              <h2 className={`text-4xl ${isTeaser ? "md:text-9xl" : "md:text-7xl"} font-black text-slate-950 dark:text-white tracking-tighter leading-[0.85] mb-8 font-heading`}>
                Visi Besar <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">SINTESA KARSA</span>
              </h2>
              <div className={`text-lg md:text-2xl text-slate-500 dark:text-slate-400 font-bold leading-relaxed mb-10 ${isTeaser ? "max-w-4xl" : "max-w-lg"}`}>
                "Mewujudkan <span className="text-slate-950 dark:text-white font-black">MPM FTUI Fraksi Elektro 2026</span> yang Sinergis dalam kolaborasi dan Progresif dalam tanggung jawab, guna membangun garda Aspiratif yang kredibel bagi seluruh warga DTE UI."
              </div>

              {isTeaser && (
                <Link href="/profil">
                  <button className="w-full md:w-auto px-6 md:px-10 h-14 md:h-16 bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 rounded-[1.25rem] md:rounded-[1.5rem] font-black tracking-widest uppercase text-[10px] md:text-xs flex items-center justify-center md:justify-start space-x-3 hover:bg-primary transition-all shadow-xl hover:-translate-y-1 group">
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
                  <p className="text-lg font-black text-slate-950 dark:text-white tracking-tight">Warga Departemen Teknik Elektro UI</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Mission Side - Only visible if NOT teaser */}
          {!isTeaser && (
            <div className="space-y-6">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 mb-6 block lg:hidden">Mandat & Misi</span>
              {missions.map((mission, idx) => (
                <MissionCard key={mission.id} mission={mission} idx={idx} activeTab={activeTab} setActiveTab={setActiveTab} />
              ))}
            </div>
          )}

        </div>
      </div>

    </section>
  );
}

function MissionCard({ mission, idx, activeTab, setActiveTab }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      viewport={{ once: true }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onClick={() => setActiveTab(activeTab === mission.id ? null : mission.id)}
      className={`group p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border cursor-pointer transition-all duration-500 relative overflow-hidden ${
        activeTab === mission.id 
          ? "border-primary/50 shadow-2xl shadow-primary/5 ring-1 ring-primary/20 bg-white dark:bg-primary/5" 
          : "border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-slate-200 dark:hover:border-slate-700"
      }`}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]: any) => `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(59, 130, 246, 0.1), transparent 80%)`
          )
        }}
      />

      <div className="flex items-start justify-between relative z-10" style={{ transform: "translateZ(50px)" }}>
        <div className="flex items-start space-x-6">
          <div className={`mt-1 w-14 h-14 rounded-2xl border transition-all duration-500 shadow-sm flex items-center justify-center shrink-0 ${
            activeTab === mission.id 
              ? "bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 border-slate-950 dark:border-white scale-110" 
              : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-950 dark:text-white group-hover:scale-110 group-hover:rotate-6"
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
        className="overflow-hidden relative z-10"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="pt-8 mt-8 border-t border-slate-100 dark:border-slate-800 space-y-4">
          <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Parameter Keberhasilan</p>
          {mission.params.map((param: any, pIdx: number) => (
            <div key={pIdx} className="flex items-start space-x-3 text-sm font-bold text-slate-600 dark:text-slate-400">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              <span className="leading-relaxed">{param}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

