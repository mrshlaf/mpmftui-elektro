"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { User, Shield, Briefcase, Users } from "lucide-react";
import { useRef } from "react";

const teamGroups = [
  {
    category: "Pimpinan Fraksi",
    members: [
      { 
        name: "Danish Putra Devananda", 
        fraksiRole: "Ketua Fraksi", 
        pusatRole: "Komandan | SC IP Keuangan", 
        icon: Shield 
      },
      { 
        name: "Azra Farisi Muhammad", 
        fraksiRole: "Wakil ketua Fraksi", 
        pusatRole: "BALEG | SC GBPKD", 
        icon: Briefcase 
      },
    ]
  },
  {
    category: "Jajaran Koordinator",
    members: [
      { 
        name: "Marshal Aufa Diliyana", 
        fraksiRole: "Sekretaris Bendahara", 
        pusatRole: "KOMSIS | SC Mabim", 
        icon: Users 
      },
      { 
        name: "Vito Madani Winata", 
        fraksiRole: "Humas", 
        pusatRole: "KOMSIS | SC Pembinaan Lanjut", 
        icon: Users 
      },
      { 
        name: "Muhammad Alif Haditsa", 
        fraksiRole: "PSDM", 
        pusatRole: "KOLEGA | SC Indeks Ketercapaian GBHI", 
        icon: Users 
      },
    ]
  },
  {
    category: "Staff Fraksi",
    members: [
      { name: "Nararya Zuhdi Parabhawa", fraksiRole: "Staff", pusatRole: "KOMSIS | Staff", icon: User },
      { name: "Muhammad Dzaki Hidayatullah", fraksiRole: "Staff", pusatRole: "Litbang | Staff", icon: User },
      { name: "Akmal Maftuh Putra Dien", fraksiRole: "Staff", pusatRole: "KOLEGA | Staff", icon: User },
      { name: "Sultan Ariq Zaman Syari", fraksiRole: "Staff", pusatRole: "Kestari | Staff", icon: User },
      { name: "Arafah Akbar Satria", fraksiRole: "Staff", pusatRole: "Litbang | Staff", icon: User },
      { name: "Gabriel Sebastian Sitorus", fraksiRole: "Staff", pusatRole: "Baleg | Staff", icon: User },
      { name: "Fadhil Akmal Adhiputra", fraksiRole: "Staff", pusatRole: "KOMANDAN | Staff", icon: User },
    ]
  }
];

export default function TeamSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden" id="struktur">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 px-3 py-1 rounded-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 mb-6"
          >
            <Users className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 dark:text-slate-500">Governance Structure</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-black text-slate-950 dark:text-white tracking-tighter leading-[0.8] mb-8 font-sans"
          >
            Struktur <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Organisasi</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-bold leading-relaxed"
          >
            Sinergi antar komisi dan pimpinan untuk menjamin berjalannya fungsi legislatif yang optimal di Departemen Teknik Elektro.
          </motion.p>
        </div>

        <div className="space-y-24">
          {teamGroups.map((group, groupIdx) => (
            <div key={group.category}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6 mb-12"
              >
                <div className="h-[2px] w-16 bg-slate-950 dark:bg-slate-50" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">{group.category}</h3>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.members.map((member, idx) => (
                  <TeamMemberCard key={member.name} member={member} idx={idx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

function TeamMemberCard({ member, idx }: any) {
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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: idx * 0.1 }}
      viewport={{ once: true }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-full"
    >
      <div className="h-full bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 group-hover:border-primary/30 shadow-sm dark:shadow-none hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 flex items-center space-x-6 relative overflow-hidden">
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

        <div className="w-20 h-20 rounded-[1.8rem] bg-slate-950 dark:bg-slate-50 flex items-center justify-center shadow-xl group-hover:rotate-12 transition-all duration-700 shrink-0 relative z-10" style={{ transform: "translateZ(60px)" }}>
          <member.icon className="w-10 h-10 text-white dark:text-slate-950" />
        </div>
        <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
          <h4 className="text-xl font-black text-slate-950 dark:text-white tracking-tight mb-2 group-hover:text-primary transition-colors">{member.name}</h4>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 rounded-full bg-primary" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors leading-relaxed">
                {member.fraksiRole}
              </p>
            </div>
            <p className="text-[9px] font-bold text-slate-300 dark:text-slate-600 group-hover:text-slate-400 transition-colors pl-3 border-l-2 border-slate-100 dark:border-slate-800">
              {member.pusatRole}
            </p>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
}

