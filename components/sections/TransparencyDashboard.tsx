"use client";

import { motion } from "framer-motion";
import { BarChart3, PieChart, TrendingUp, AlertCircle, CheckCircle2, DollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";

interface TransparencyDashboardProps {
  isTeaser?: boolean;
}

export default function TransparencyDashboard({ isTeaser = false }: TransparencyDashboardProps) {
  const stats = [
    { label: "Total Proker IME", value: "67", sub: "Analisis GBPK", icon: BarChart3, color: "text-primary group-hover:text-cyan-300", bg: "bg-slate-950 border-slate-800" },
    { label: "Fokusan GBPKD", value: "34.2%", sub: "Implementasi Nilai", icon: PieChart, color: "text-purple-400 group-hover:text-purple-300", bg: "bg-slate-950 border-slate-800" },
    { label: "Stabilitas Kas", value: "Aman", sub: "Evaluasi RKAT", icon: CheckCircle2, color: "text-green-400 group-hover:text-green-300", bg: "bg-slate-950 border-slate-800" },
  ];

  return (
    <section className={`bg-background text-foreground relative overflow-hidden ${isTeaser ? "py-24" : "py-32"}`} id="transparansi">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col ${isTeaser ? "items-center text-center" : "lg:flex-row items-start justify-between"} mb-20 gap-12`}>
          <div className={`${isTeaser ? "max-w-4xl flex flex-col items-center" : "max-w-2xl"}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 text-primary mb-6"
            >
              <TrendingUp className="w-5 h-5" />
              <span className="font-black tracking-[0.4em] text-[10px] uppercase text-slate-400">Analytical Oversight</span>
            </motion.div>
            <h2 className={`font-black tracking-tighter leading-[0.8] mb-8 text-foreground ${isTeaser ? "text-5xl md:text-9xl" : "text-5xl md:text-8xl"}`}>
              Insight & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 italic">Transparansi</span>
            </h2>
            <p className={`text-slate-500 dark:text-slate-400 font-bold leading-relaxed ${isTeaser ? "text-xl md:text-2xl max-w-3xl" : "text-lg md:text-xl"}`}>
              Hasil audit dan analisis strategis terhadap program kerja dan stabilitas keuangan internal untuk menjamin akuntabilitas triwulanan.
            </p>
            
            {isTeaser && (
              <div className="mt-12">
                <Link href="/transparansi">
                  <button className="px-10 h-16 bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 rounded-[1.5rem] font-black tracking-widest uppercase text-xs flex items-center space-x-3 hover:bg-primary transition-all shadow-xl hover:-translate-y-1 group">
                    <span>Buka Dashboard Transparansi</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            )}
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 w-full ${isTeaser ? "max-w-4xl" : "lg:w-auto mt-8"}`}>
            {stats.map((stat, idx) => (
                 <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 ${stat.color} flex items-center justify-center mb-6 transition-all group-hover:bg-slate-950 dark:group-hover:bg-slate-50 group-hover:text-white dark:group-hover:text-slate-950`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-black text-slate-950 dark:text-white mb-1 tracking-tighter">{stat.value}</h3>
                <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {!isTeaser && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Proker Analysis Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm dark:shadow-none hover:shadow-2xl transition-all duration-700 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 text-blue-500 rounded-2xl group-hover:bg-slate-950 dark:group-hover:bg-slate-50 group-hover:text-white dark:group-hover:text-slate-950 transition-all duration-500">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-black tracking-tighter text-slate-950 dark:text-white">Analisis Proker IME</h4>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed font-bold mb-10">
                  Penyebaran Program Kerja telah memenuhi seluruh nilai GBPK. Fokus utama saat ini adalah pengoptimalan dasar nilai GBPKD yang mendominasi sebesar 34,2%. Catatan perbaikan dititikberatkan pada penguatan nilai Ke-IKM-an dan hubungan interpersonal.
                </p>
              </div>
              <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 relative z-10 bg-blue-50 dark:bg-blue-900/40 self-start px-4 py-2 rounded-full border border-blue-100 dark:border-blue-800/50">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>Status: GBPK Terpenuhi</span>
              </div>
              {/* Minimal Background Decor for Card */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-50 dark:bg-blue-400/10 rounded-full blur-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Finance Analysis Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 text-emerald-500 rounded-2xl group-hover:bg-slate-950 dark:group-hover:bg-slate-50 group-hover:text-white dark:group-hover:text-slate-950 transition-all duration-500">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-black tracking-tighter text-slate-950 dark:text-white">RKAT & Stabilitas Kas</h4>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed font-bold mb-10">
                  Kondisi kas lembaga dinyatakan stabil dengan pemasukan tertinggi pada bulan September. Meskipun terdapat fluktuasi pada bulan Januari-Juli, manajemen kas tetap aman. Saran mitigasi diarahkan pada perencanaan Dana Usaha dan verifikasi pengajuan Sponsorship.
                </p>
              </div>
              <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 relative z-10 bg-emerald-50 dark:bg-emerald-900/40 self-start px-4 py-2 rounded-full border border-emerald-100 dark:border-emerald-800/50">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Status Finansial Aman</span>
              </div>
              {/* Minimal Background Decor for Card */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-50 dark:bg-emerald-400/10 rounded-full blur-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        )}
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-50 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
