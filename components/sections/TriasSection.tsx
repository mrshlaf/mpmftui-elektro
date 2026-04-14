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
    title: "UUD IKM FTUI",
    desc: "Landasan hukum konstitusional mahasiswa Teknik UI. Pahami hak, kewajiban, dan regulasi organisasi kita.",
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
    <section className="py-24 bg-white relative" id="layanan">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-primary mb-6"
            >
              <Zap className="w-5 h-5 fill-current" />
              <span className="font-black tracking-[0.3em] text-xs uppercase text-slate-600">Services & Infrastructure</span>
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
            >
              Pilar Pelayanan <span className="text-primary italic">Digital</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg md:text-xl max-w-sm leading-relaxed font-medium"
          >
            Memastikan aksesibilitas informasi dan transparansi legislatif bagi seluruh IKM Elektro.
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
              className="group"
            >
              <Link href={item.link} target="_blank" className="block h-full">
                <div className="h-full bg-white border border-slate-100 p-10 rounded-[2.5rem] transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.02)] group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] group-hover:-translate-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-10">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        item.color === "blue" ? "bg-blue-50 text-blue-600" : 
                        item.color === "yellow" ? "bg-yellow-50 text-yellow-600" : 
                        "bg-purple-50 text-purple-600"
                      } group-hover:scale-110 group-hover:shadow-lg`}>
                        <item.icon className="w-8 h-8" />
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase bg-slate-50 text-slate-600 px-4 py-1.5 rounded-full border border-slate-100">
                        {item.label}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-5 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-10 font-medium">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center text-slate-900 text-sm font-black opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    Akses Sekarang <ExternalLink className="ml-2 w-4 h-4 text-primary" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
