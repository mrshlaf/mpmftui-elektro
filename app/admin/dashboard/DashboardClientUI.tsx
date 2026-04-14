"use client";

import { motion } from "framer-motion";
import { Sparkles, Clock, Zap, Activity, Archive as ArchiveIcon, TrendingUp, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  archive: ArchiveIcon,
  trending: TrendingUp,
};

interface StatItem {
  label: string;
  value: string;
  iconName: string;
  color: string;
  bg: string;
}

interface BlockItem {
  title: string;
  iconName: string;
  placeholder: string;
  href: string;
}

export function DashboardClientUI({ stats, blocks }: { stats: StatItem[], blocks: BlockItem[] }) {
  return (
    <div className="space-y-10">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden p-12 rounded-[3rem] bg-slate-900 shadow-2xl"
      >
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-primary mb-6">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className="font-black tracking-[0.3em] text-[10px] uppercase">Node Authorized</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Selamat Datang, <span className="text-primary italic">Admin</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl font-medium">
            Monitor dan publikasikan aspirasi IKM Elektro melalui ekosistem digital Sintesa Karsa 2026.
          </p>
        </div>
        
        <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => {
          const Icon = iconMap[stat.iconName] || Activity;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="rounded-[2.5rem] border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all group overflow-hidden bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm border border-slate-50`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center text-[10px] font-black tracking-widest text-slate-500">
                      <Clock className="w-3 h-3 mr-1.5" />
                      REAL-TIME
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-1">{stat.value}</h3>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {blocks.map((block) => {
          const Icon = iconMap[block.iconName] || Activity;
          return (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="font-black text-slate-900 uppercase tracking-tighter text-lg">{block.title}</h3>
                </div>
                <Link href={block.href}>
                  <button className="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-slate-900 transition-colors">
                    MANAGE ASSETS
                  </button>
                </Link>
              </div>
              <div className="py-12 flex flex-col items-center justify-center space-y-4 border-2 border-dashed border-slate-50 rounded-[2rem]">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center opacity-40">
                  <Zap className="w-8 h-8 text-slate-300" />
                </div>
                <p className="text-slate-500 font-bold italic tracking-tight">{block.placeholder}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
