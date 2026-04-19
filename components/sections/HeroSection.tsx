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
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-soft-light dark:opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-soft-light dark:opacity-10" />
        
        {/* Subtle Tech Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>


      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Opaque Prominent Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[450px] aspect-square relative group shrink-0"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-all duration-700 -z-10" />
            <img 
              src="/logo-mpm.png" 
              alt="MPM Logo" 
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_50px_rgba(30,58,138,0.4)] group-hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>

          <div className="text-center lg:text-left pt-10">
            {/* Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 mb-8 shadow-sm backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400 font-outfit">SINTESA KARSA &bull; 2026</span>
            </motion.div>

            {/* Headline */}
            <div className="relative mb-8">
              <motion.h1
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="text-6xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-foreground leading-[0.85] md:leading-[0.8] drop-shadow-2xl font-outfit"
              >
                PAGI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-cyan-500 italic inline-block drop-shadow-[0_20px_100px_rgba(0,209,255,0.4)]">ELEKTRO!</span>
              </motion.h1>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-bold font-outfit"
            >
              Bersama mewujudkan ekosistem aspiratif yang <span className="text-slate-950 dark:text-white underline decoration-primary decoration-[6px] underline-offset-8">progresif dan transparan</span> untuk seluruh Warga Teknik Elektro UI.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-16"
            >
              <Link href="http://bit.ly/OprecStaffMPM2026" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-10 h-16 bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 hover:bg-primary dark:hover:bg-primary hover:text-white rounded-2xl group transition-all duration-500 font-black text-lg shadow-2xl hover:-translate-y-1">
                  Join Staff
                  <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
              <Link href="/transparansi" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 h-16 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl text-slate-950 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 font-black text-lg hover:shadow-xl transition-all">
                  Transparansi
                </Button>
              </Link>
            </motion.div>

            {/* Impact Overview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            >
               { [
                { label: "Products", value: "04" },
                { label: "Directives", value: "28" },
                { label: "Audited", value: "67" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className="text-3xl md:text-5xl font-black text-foreground tracking-tighter mb-1 font-outfit">{stat.value}</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
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
