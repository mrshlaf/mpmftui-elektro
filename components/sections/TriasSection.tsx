"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, MessageSquare, ExternalLink, Zap } from "lucide-react";
import Link from "next/link";

const triasItems = [
  {
    title: "FrakZIP",
    desc: "Akses pusat data, arsip kegiatan, dan dokumentasi resmi Fraksi Elektro dalam satu folder terintegrasi.",
    icon: ShieldCheck,
    color: "blue",
    link: "https://drive.google.com/drive/folders/1x25CIo0VwHPzBSRx7QrsR_3virMq2WTK",
    label: "DATA CENTER",
  },
  {
    title: "UUD IKM UI",
    desc: "Landasan hukum konstitusional mahasiswa UI. Pahami hak, kewajiban, dan regulasi organisasi kita.",
    icon: Scale,
    color: "yellow",
    link: "https://drive.google.com/file/d/1Dv-1e46Z31zwiHKvEK2S-yj2Dy8xpRev/view",
    label: "LEGISLATION",
  },
  {
    title: "Forum Elektro",
    desc: "Wadah penyaluran aspirasi dan pengajuan isu strategis untuk dibahas secara formal di tingkat fakultas.",
    icon: MessageSquare,
    color: "purple",
    link: "https://drive.google.com/drive/folders/1x25CIo0VwHPzBSRx7QrsR_3virMq2WTK",
    label: "ADVOCACY",
  },
];

export default function TriasSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="layanan">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 text-primary mb-6"
            >
              <Zap className="w-5 h-5" />
              <span className="font-black tracking-[0.4em] text-[10px] uppercase text-slate-400">Services & Infrastructure</span>
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-8xl font-black text-slate-950 dark:text-white tracking-tighter leading-[0.8]"
            >
              Pilar Pelayanan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 italic">Digital</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-sm leading-relaxed font-bold border-l-4 border-slate-100 dark:border-slate-800 pl-8"
          >
            Memastikan aksesibilitas informasi dan transparansi legislatif bagi seluruh Warga DTE UI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {triasItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <Link href={item.link} target="_blank" className="block h-full">
                <div className="h-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-10 rounded-[3rem] transition-all duration-700 hover:border-primary/40 hover:shadow-2xl dark:hover:shadow-one hover:-translate-y-3 flex flex-col justify-between relative overflow-hidden shadow-sm dark:shadow-none">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-10">
                      <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-all duration-500 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 ${
                        item.color === "blue" ? "text-blue-500" : 
                        item.color === "yellow" ? "text-yellow-600" : 
                        "text-purple-500"
                      } group-hover:scale-110 group-hover:bg-slate-950 dark:group-hover:bg-slate-50 group-hover:text-white dark:group-hover:text-slate-950`}>
                        <item.icon className="w-8 h-8" />
                      </div>
                      <span className="text-[9px] font-black tracking-widest uppercase bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 px-4 py-2 rounded-xl">
                        {item.label}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-5 tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-10 font-bold">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center text-primary text-[11px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 relative z-10">
                    Akses Sekarang <ExternalLink className="ml-2 w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
