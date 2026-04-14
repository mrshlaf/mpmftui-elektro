"use client";

import { motion } from "framer-motion";
import { User, Shield, Briefcase, Users } from "lucide-react";

const teamGroups = [
  {
    category: "Pimpinan Fraksi",
    members: [
      { name: "Devan (Tkom'24)", role: "Ketua Fraksi / SC IP Keuangan", icon: Shield },
      { name: "Faris (E'24)", role: "Wakil Ketua / Agt Badan Legislasi", icon: Briefcase },
    ]
  },
  {
    category: "Jajaran Koordinator",
    members: [
      { name: "Marshal (Tkom'24)", role: "Sekretaris & Bendahara / SC Mabim", icon: Users },
      { name: "Vito (E'24)", role: "PJ Humas / SC Pembinaan Lanjut", icon: Users },
      { name: "Alif (E'24)", role: "PJ PSDM / SC Target GBHI", icon: Users },
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
            className="inline-flex items-center space-x-3 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 mb-6"
          >
            <Users className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400 dark:text-slate-500">Governance Structure</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-black text-slate-950 dark:text-white tracking-tighter leading-[0.8] mb-8"
          >
            Struktur <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 italic">Organisasi</span>
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
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative h-full"
                  >
                    <div className="h-full bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 group-hover:bg-slate-50 dark:group-hover:bg-slate-800 shadow-sm dark:shadow-none hover:shadow-2xl transition-all duration-500 flex items-center space-x-6 relative overflow-hidden">
                      <div className="w-20 h-20 rounded-2xl bg-slate-950 dark:bg-slate-50 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-all duration-500 shrink-0 relative z-10">
                        <member.icon className="w-10 h-10 text-white dark:text-slate-950" />
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-xl font-black text-slate-950 dark:text-white tracking-tight mb-1 group-hover:text-primary transition-colors">{member.name}</h4>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors leading-relaxed">{member.role}</p>
                      </div>
                      
                      {/* Decorative Element */}
                      <div className="absolute -bottom-10 -right-4 text-slate-100 dark:text-slate-800 opacity-5 group-hover:opacity-10 dark:group-hover:opacity-20 group-hover:text-primary transition-all duration-700 pointer-events-none">
                        <User className="w-32 h-32" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}

