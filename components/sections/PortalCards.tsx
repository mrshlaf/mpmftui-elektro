"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Users, FileText, LayoutDashboard, Bookmark, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

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
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 dark:text-slate-500">Navigation Hub</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-[1] mb-6">
            Eksplorasi <span className="text-primary">Sintesa Karsa</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-bold leading-relaxed">
            Akses langsung ke seluruh dokumen, produk, dan laporan performa MPM FTUI Fraksi Elektro 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portalLinks.map((item, idx) => (
            <PortalCard key={item.title} item={item} idx={idx} />
          ))}
        </div>
      </div>
      
    </section>
  );
}

function PortalCard({ item, idx }: any) {
  const iconRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!iconRef.current) return;
    const rect = iconRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic pull range
    const threshold = 100;
    if (Math.abs(distanceX) < threshold && Math.abs(distanceY) < threshold) {
      mouseX.set(distanceX * 0.4);
      mouseY.set(distanceY * 0.4);
    } else {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
    >
      <Link href={item.href} className="block h-full group">
        <div className="h-full p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/40 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] transition-all duration-700 hover:-translate-y-4 flex flex-col justify-between relative overflow-hidden group-hover:bg-white dark:group-hover:bg-primary/5 shadow-sm">
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <motion.div 
                ref={iconRef}
                style={{ x: dx, y: dy }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg ${
                item.color === "blue" ? "text-blue-500 group-hover:bg-blue-500 group-hover:text-white" : 
                item.color === "purple" ? "text-purple-500 group-hover:bg-purple-500 group-hover:text-white" : 
                item.color === "cyan" ? "text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white" : 
                "text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white"
              } group-hover:scale-110`}
              >
                <item.icon className="w-7 h-7" />
              </motion.div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center border border-slate-100 dark:border-slate-800 text-slate-300 dark:text-slate-600 group-hover:bg-slate-950 dark:group-hover:bg-slate-50 group-hover:text-white dark:group-hover:text-slate-950 group-hover:border-slate-950 dark:group-hover:border-white transition-all duration-500 group-hover:rotate-45">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-bold leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
