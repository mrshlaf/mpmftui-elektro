"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
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
    <section className="py-32 bg-white relative overflow-hidden" id="ejawantah">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 px-3 py-1 rounded-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">Directives & Mandates</span>
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.8] mb-8 font-sans"
          >
            Ejawantah <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Fraksi Elektro</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 text-lg md:text-xl font-bold leading-relaxed max-w-2xl mx-auto"
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
              className={`px-6 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all duration-500 border ${filter === cat
                ? "bg-slate-950 text-white border-slate-950 shadow-2xl shadow-slate-200 scale-105"
                : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800"
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
              <DirectiveCard key={item.id} item={item} filter={filter} getIcon={getIcon} />
            ))}
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}

function DirectiveCard({ item, filter, getIcon }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 100, damping: 30 });

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
      layout
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "circOut" }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-primary/40 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] shadow-sm transition-all duration-500 flex flex-col justify-between relative overflow-hidden h-full"
    >
      {/* Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]: any) => `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(59, 130, 246, 0.05), transparent 80%)`
          )
        }}
      />

      <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
        <div className="flex items-center justify-between mb-10">
          <div className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">Directive #{item.id}</div>
          <div className={`p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 transition-all duration-500 group-hover:bg-slate-950 dark:group-hover:bg-slate-50 group-hover:text-white dark:group-hover:text-slate-950 group-hover:rotate-6 group-hover:scale-110 shadow-sm ${filter !== "All" ? "text-primary" : "text-slate-400 dark:text-slate-500"}`}>
            {getIcon(item.type)}
          </div>
        </div>
        <p className="text-slate-950 text-xl font-black leading-tight mb-10 group-hover:text-primary transition-colors">
          "{item.text}"
        </p>
      </div>

      <div className="flex items-center space-x-3 relative z-10" style={{ transform: "translateZ(20px)" }}>
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-950 transition-colors">{item.type}</span>
      </div>

    </motion.div>
  );
}