"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Scale, Users, FileText, ClipboardList, PenTool } from "lucide-react";

interface Directives {
  id: number;
  text: string;
  type: string;
}

const directives: Directives[] = [
  { id: 1, text: "Bertanggung jawab atas kinerja MPM FTUI Fraksi secara umum", type: "Koordinasi" },
  { id: 2, text: "Bertanggung jawab atas keberlangsungan koordinasi yang terjalin antar-lembaga eksekutif", type: "Koordinasi" },
  { id: 3, text: "Bertanggung jawab atas terlaksananya pengawasan awal dan pengawasan lanjut", type: "Koordinasi" },
  { id: 4, text: "Bertanggung jawab dalam menampung dan menjaring seluruh aspirasi dari lembaga maupun warga", type: "Produk Fraksi" },
  { id: 5, text: "Bertanggung jawab atas penindaklanjutan dan penyelesaian masalah di departemen/program", type: "Rapat" },
  { id: 6, text: "Bertanggung jawab atas terlaksananya forum departemen di departemen/program", type: "Koordinasi" },
  { id: 7, text: "Bertanggung jawab dalam memberikan dan mencabut mandat kepada BPH di IMD/IMPI/KPD", type: "Produk Legislasi" },
  { id: 8, text: "Mengawasi keberlangsungan prosedur pembinaan di departemen/program", type: "Koordinasi" },
  { id: 9, text: "Melakukan sosialisasi Laporan Pertanggung Jawaban kepada Warga", type: "Output" },
  { id: 10, text: "Bertanggung jawab atas penuansaan UUD IKM UI kepada lembaga eksekutif", type: "Produk Fraksi" },
  { id: 11, text: "Bertanggung jawab atas seluruh pengarsiapan yang ada di MPM FTUI Fraksi", type: "Produk Fraksi" },
  { id: 12, text: "Bertanggung jawab atas seluruh inventarisasi yang ada di MPM FTUI Fraksi", type: "Produk Fraksi" },
  { id: 13, text: "Bertanggung Jawab terhadap penjagaan internal MPM FTUI Fraksi", type: "Koordinasi" },
  { id: 14, text: "Bertanggung jawab atas tersebarnya informasi yang dimandatkan oleh MPM FTUI", type: "Koordinasi" },
  { id: 15, text: "Menyusun dan menanamkan kurikulum kaderisasi kepada Staf MPM FTUI Fraksi", type: "Koordinasi" },
  { id: 16, text: "Menyusun dan menetapkan produk legislasi termasuk yang dilimpahkan oleh MPM FTUI", type: "Produk Legislasi" },
  { id: 17, text: "Menyusun dan menjalankan Produk Fraksi", type: "Produk Fraksi" },
  { id: 18, text: "Mengusut dan memeriksa penyimpangan yang dilakukan oleh fungsionaris/lembaga", type: "Koordinasi" },
  { id: 19, text: "Bertanggung jawab terkait pemberian perwakilan apabila diminta oleh MPM Pusat", type: "Koordinasi" },
  { id: 20, text: "Membela warga departemen yang akan atau telah dikenakan sanksi", type: "Koordinasi" },
  { id: 21, text: "Bertanggung jawab menghadiri Rapat Pimpinan Fraksi", type: "Rapat" },
  { id: 22, text: "Bertanggung jawab terkait perwakilan sewaktu-waktu diminta oleh MPM Pusat", type: "Koordinasi" },
  { id: 23, text: "Bertanggung jawab atas keuangan internal MPM FTUI Fraksi", type: "Output" },
  { id: 24, text: "Bertanggung jawab atas pengelolaan sosial media MPM FTUI Fraksi", type: "Produk Fraksi" },
  { id: 25, text: "Bertanggung jawab atas perancangan dan penjagaan timeline MPM FTUI Fraksi", type: "Koordinasi" },
  { id: 26, text: "Bertanggung jawab atas terlaksananya rapat MPM FTUI Fraksi", type: "Rapat" },
  { id: 27, text: "Bertanggung jawab atas terlaksananya kajian tahunan Musyawarah Kerja IKM UI", type: "Rapat" },
  { id: 28, text: "Bertanggung jawab atas terlaksananya Sidang Fraksi", type: "Rapat" }
];

const categories = ["All", "Koordinasi", "Rapat", "Produk Fraksi", "Produk Legislasi", "Output"];

export default function GovernanceSection() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? directives 
    : directives.filter(d => d.type === filter);

  const getIcon = (type: string) => {
    switch (type) {
      case "Koordinasi": return <Users className="w-4 h-4" />;
      case "Rapat": return <ClipboardList className="w-4 h-4" />;
      case "Produk Fraksi": return <PenTool className="w-4 h-4" />;
      case "Produk Legislasi": return <Scale className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="ejawantah">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 dark:text-slate-500">Directives & Mandates</span>
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-8xl font-black text-slate-950 dark:text-white tracking-tighter leading-[0.8] mb-8"
          >
            Ejawantah <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 italic">Fraksi Elektro</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-bold leading-relaxed max-w-2xl mx-auto"
          >
            Amanah dan tugas fungsional yang dijalankan secara profesional untuk mengawal kepentingan Warga Departemen Teknik Elektro UI.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all duration-500 border ${
                filter === cat 
                ? "bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 border-slate-950 dark:border-white shadow-2xl shadow-slate-200 dark:shadow-none scale-105" 
                : "bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 hover:text-slate-950 dark:hover:text-white border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="group p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 shadow-sm dark:shadow-none transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-10">
                    <div className="text-[9px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">Directive #{item.id}</div>
                    <div className={`p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 transition-all duration-500 group-hover:bg-slate-950 dark:group-hover:bg-slate-50 group-hover:text-white dark:group-hover:text-slate-950 ${
                      filter !== "All" ? "text-primary" : "text-slate-400"
                    }`}>
                      {getIcon(item.type)}
                    </div>
                  </div>
                  <p className="text-slate-950 dark:text-white text-xl font-black leading-tight mb-10 group-hover:text-primary transition-colors">
                    {item.text}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest group-hover:text-slate-950 dark:group-hover:text-white transition-colors">{item.type}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
