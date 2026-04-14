"use client";

import { motion } from "framer-motion";
import { Users, FileText, LayoutDashboard, Bookmark, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const portalLinks = [
  {
    title: "Profil & Identitas",
    desc: "Kenali Visi, Misi, Parameter Keberhasilan, dan Struktur Tim Fraksi Elektro 2026.",
    icon: Users,
    href: "/profil",
    color: "blue"
  },
  {
    title: "Produk Fraksi",
    desc: "AspirAksi, FrakSight, FrakZIP, FrakSchool, serta Produk Legislasi (TAP) resmi.",
    icon: Bookmark,
    href: "/profrak",
    color: "purple"
  },
  {
    title: "Ejawantah Kerja",
    desc: "Detail 28 poin arahan dan tanggung jawab yang wajib dijalankan oleh Fraksi Elektro.",
    icon: FileText,
    href: "/ejawantah",
    color: "cyan"
  },
  {
    title: "Transparansi",
    desc: "Dashboard laporan audit Program Kerja (67 Proker) & hasil analisis kestabilan RKAT.",
    icon: LayoutDashboard,
    href: "/transparansi",
    color: "yellow"
  }
];

export default function PortalCards() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="portal">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 dark:text-slate-500">Navigation Hub</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-[1] mb-6">
            Eksplorasi <span className="text-primary italic">Sintesa Karsa</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-bold leading-relaxed">
            Akses langsung ke seluruh dokumen, produk, dan laporan performa MPM FTUI Fraksi Elektro 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portalLinks.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Link href={item.href} className="block h-full group">
                <div className="h-full p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:hover:shadow-none transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between relative overflow-hidden group-hover:bg-slate-50/50 dark:group-hover:bg-primary/5">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 ${
                        item.color === "blue" ? "text-blue-500 group-hover:bg-blue-500 group-hover:text-white" : 
                        item.color === "purple" ? "text-purple-500 group-hover:bg-purple-500 group-hover:text-white" : 
                        item.color === "cyan" ? "text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white" : 
                        "text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white"
                      } group-hover:scale-110 shadow-sm`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-100 dark:border-slate-800 text-slate-300 dark:text-slate-600 group-hover:bg-slate-950 dark:group-hover:bg-slate-50 group-hover:text-white dark:group-hover:text-slate-950 group-hover:border-slate-950 dark:group-hover:border-white transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-bold leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
