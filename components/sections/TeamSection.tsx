"use client";

import { motion } from "framer-motion";
import { User, Shield, Briefcase, Users } from "lucide-react";

const teamGroups = [
  {
    category: "Pimpinan Terpusat",
    members: [
      { name: "Koordinator Fraksi", role: "Pimpinan Utama", icon: Shield },
      { name: "Sekretaris Jenderal", role: "Administrasi & Internal", icon: Briefcase },
    ]
  },
  {
    category: "Komisi Utama",
    members: [
      { name: "Komisi 1", role: "Legislasi & Aturan", icon: Users },
      { name: "Komisi 2", role: "Budgeting & Pengawasan", icon: Users },
      { name: "Komisi 3", role: "Advokasi & Aspirasi", icon: Users },
    ]
  }
];

export default function TeamSection() {
  return (
    <section className="py-32 bg-white relative" id="struktur">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-6"
          >
            <Users className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Governance Structure</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8"
          >
            Struktur <span className="text-primary italic">Organisasi</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg font-medium leading-relaxed"
          >
            Sinergi antar komisi dan pimpinan untuk menjamin berjalannya fungsi legislatif yang optimal di Departemen Teknik Elektro.
          </motion.p>
        </div>

        <div className="space-y-20">
          {teamGroups.map((group, groupIdx) => (
            <div key={group.category}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 mb-10"
              >
                <div className="h-[2px] w-12 bg-primary" />
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">{group.category}</h3>
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
                    <div className="h-full bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 group-hover:bg-white group-hover:border-primary/20 group-hover:shadow-2xl transition-all duration-500">
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-500">
                          <member.icon className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-slate-900 tracking-tight mb-1 group-hover:text-primary transition-colors">{member.name}</h4>
                          <p className="text-xs font-black uppercase tracking-widest text-slate-400">{member.role}</p>
                        </div>
                      </div>
                      
                      {/* Decorative Element */}
                      <div className="absolute top-4 right-8 text-slate-100 group-hover:text-primary/5 transition-colors">
                        <User className="w-16 h-16" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
