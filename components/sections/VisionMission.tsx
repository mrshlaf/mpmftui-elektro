"use client";

import { motion } from "framer-motion";
import { Target, Heart, Eye, ArrowRight } from "lucide-react";

const missions = [
  {
    title: "Harmonissi Aspirasi",
    desc: "Menyinergikan seluruh elemen Departemen Teknik Elektro untuk menciptakan satu suara yang kuat dan bermartabat.",
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    title: "Transparansi Radikal",
    desc: "Menjamin keterbukaan informasi legislatif dan anggaran secara real-time bagi seluruh anggota IKM Elektro.",
    icon: Target,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Advokasi Responsif",
    desc: "Menjadi garda terdepan dalam merespon dan mengawal setiap kebijakan yang berdampak pada kesejahteraan mahasiswa.",
    icon: Eye,
    color: "text-primary",
    bg: "bg-primary/5",
  },
];

export default function VisionMission() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Vision Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="mb-10">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-4 block">Foundational Core</span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                Visi Besar <br />
                <span className="text-primary italic">Sintesa Karsa</span>
              </h2>
              <div className="text-2xl text-slate-500 font-medium leading-relaxed max-w-lg mb-10">
                "Mewujudkan lembaga legislatif yang <span className="text-slate-900 font-black italic">akuntabel</span>, <span className="text-slate-900 font-black italic">aspiratif</span>, dan <span className="text-slate-900 font-black italic">sinergis</span> demi keberlanjutan IKM Departemen Teknik Elektro yang harmonis."
              </div>
            </div>
            
            <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl inline-flex items-center space-x-6 group hover:shadow-2xl transition-all">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Focus Point 2026</p>
                <p className="text-lg font-black text-slate-900 tracking-tight">Legislasi Berbasis Harmoni</p>
              </div>
            </div>
          </motion.div>

          {/* Mission Side */}
          <div className="space-y-6">
            {missions.map((mission, idx) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-start space-x-6">
                  <div className={`mt-1 w-14 h-14 rounded-2xl ${mission.bg} ${mission.color} flex items-center justify-center shrink-0 shadow-sm`}>
                    <mission.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors">{mission.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {mission.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/2 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/2 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
