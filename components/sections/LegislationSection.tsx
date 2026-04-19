"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Scale, FileText, ExternalLink, Calendar } from "lucide-react";
import { useRef } from "react";

const legislativeProducts = [
  {
    id: "001",
    title: "Struktur BPH IME FTUI 2026",
    ref: "NO. 001/TAP/MPM FTUI FRAKSI ELEKTRO/2026",
    desc: "Membentuk landasan bagi struktur maupun tanggung jawab kepengurusan IME FTUI 2026.",
    date: "2026",
  },
  {
    id: "002",
    title: "Mekanisme Pemberhentian & Pengunduran Diri",
    ref: "No. 002/TAP/MPM FTUI FRAKSI ELEKTRO/2026",
    desc: "Membentuk landasan mekanisme pemberhentian dan pengunduran fungsionaris IME FTUI 2026.",
    date: "2026",
  },
  {
    id: "003",
    title: "Kelengkapan MPM FTUI Fraksi Elektro 2026",
    ref: "No. 003/TAP/MPM FTUI FRAKSI ELEKTRO/2026",
    desc: "Membentuk landasan mengenai seluruh kelengkapan internal MPM FTUI Fraksi Elektro 2026.",
    date: "2026",
  },
];

export default function LegislationSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden" id="legislasi">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-3 px-3 py-1 rounded-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 mb-6 mx-auto lg:mx-0"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 dark:text-slate-500">Legislative Authority</span>
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-8xl font-black text-slate-950 dark:text-white tracking-tighter leading-[0.8] mb-4"
            >
              Produk <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Legislasi</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            <div className="text-right lg:block hidden">
              <p className="text-sm font-black text-slate-950 dark:text-white uppercase tracking-widest leading-none mb-1">TAP Fraksi Elektro</p>
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500">Arsip Ketetapan Resmi 2026</p>
            </div>
            <div className="w-16 h-16 rounded-[2rem] bg-slate-950 dark:bg-slate-50 border border-slate-900 dark:border-slate-200 flex items-center justify-center shadow-xl">
              <Scale className="w-8 h-8 text-white dark:text-slate-950" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {legislativeProducts.map((tap, idx) => (
            <LegislationCard key={tap.id} tap={tap} idx={idx} />
          ))}
        </div>
      </div>
      
    </section>
  );
}

function LegislationCard({ tap, idx }: any) {
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
      className="group p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/40 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-all duration-700 relative overflow-hidden flex flex-col justify-between h-full"
    >
      {/* Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]: any) => `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(59, 130, 246, 0.08), transparent 80%)`
          )
        }}
      />

      <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
        <div className="mb-10 flex items-center justify-between">
          <div className="p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[1.8rem] group-hover:bg-slate-950 dark:group-hover:bg-slate-50 group-hover:text-white dark:group-hover:text-slate-950 transition-all duration-700 group-hover:rotate-6 group-hover:scale-110 shadow-sm">
            <FileText className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-black tracking-[0.3em] text-slate-300 dark:text-slate-600">EST. {tap.date}</span>
        </div>
        
        <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 transition-all drop-shadow-sm">{tap.ref}</p>
        <h3 className="text-3xl font-black text-slate-950 dark:text-white mb-6 tracking-tighter leading-tight group-hover:text-primary transition-colors">
          {tap.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-base font-bold leading-relaxed mb-10">
          {tap.desc}
        </p>
      </div>

      <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="flex items-center space-x-3 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span>Ketetapan Aktif</span>
        </div>
        <a 
          href="https://drive.google.com/drive/u/3/folders/1ExHbgdSsnaE7SNIe9RRnGbWj_uqRRJNI" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-slate-950 dark:group-hover:bg-slate-50 group-hover:text-white dark:group-hover:text-slate-950 group-hover:border-slate-950 dark:group-hover:border-white transition-all duration-500 group-hover:rotate-45 shadow-sm"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

    </motion.div>
  );
}

