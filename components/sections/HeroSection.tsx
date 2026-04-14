"use client";

import { motion } from "framer-motion";
import { Zap, Sparkles, MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Light Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-soft-light dark:opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-soft-light dark:opacity-10" />
        
        {/* Subtle Tech Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 mb-10 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400">SINTESA KARSA 2026</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-7xl md:text-[12rem] font-black mb-10 tracking-tighter text-foreground leading-[0.8] drop-shadow-sm"
          >
            SINTESA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-cyan-500 italic drop-shadow-[0_20px_60px_rgba(0,209,255,0.25)]">KARSA</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 mb-14 max-w-4xl mx-auto leading-relaxed font-bold"
          >
            PAGI ELEKTRO! Bersama mewujudkan ekosistem aspiratif yang <span className="text-slate-950 dark:text-white underline decoration-primary decoration-4 underline-offset-4">progresif dan transparan</span> untuk seluruh Warga Departemen Teknik Elektro UI.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
          >
            <Link href="http://bit.ly/OprecStaffMPM2026" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-12 h-18 bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 hover:bg-primary dark:hover:bg-primary hover:text-slate-950 rounded-[2rem] group transition-all duration-500 font-black text-xl shadow-2xl hover:-translate-y-2">
                Join our Staff
                <Zap className="ml-2 w-6 h-6 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
            <Link href="/transparansi" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-12 h-18 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-[2rem] text-slate-950 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 font-black text-xl hover:shadow-xl transition-all">
                Cek Transparansi
              </Button>
            </Link>
          </motion.div>

          {/* Impact Overview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-12 md:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          >
             { [
              { label: "Products", value: "04" },
              { label: "Directives", value: "28" },
              { label: "Prokers Audited", value: "67" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-6xl font-black text-foreground tracking-tighter mb-1">{stat.value}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300 pointer-events-none"
      >
        <MoveDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
