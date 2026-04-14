"use client";

import { motion } from "framer-motion";
import { Zap, Sparkles, MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Refined Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 mb-10 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-[11px] font-black tracking-[0.2em] uppercase text-slate-500">SINTESA KARSA 2026</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-9xl font-black mb-10 tracking-tight text-slate-900 leading-[0.9]"
          >
            Elevating <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-primary animate-gradient text-glow-light">Collective</span> <br />
            Aspiration
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-500 mb-14 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Membangun ekosistem legislatif yang transparan, responsif, dan profesional untuk menyuarakan aspirasi IKM Departemen Teknik Elektro UI.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link href="http://bit.ly/OprecStaffMPM2026" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-10 h-16 bg-slate-900 text-white hover:bg-slate-800 rounded-2xl group transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Join our Staff
                <Zap className="ml-2 w-5 h-5 group-hover:fill-yellow-400 transition-colors" />
              </Button>
            </Link>
            <Link href="https://wa.me/6285213695654" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 h-16 border-slate-200 rounded-2xl text-slate-900 hover:bg-slate-50 font-bold text-lg">
                Saluran Aspirasi
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Scroll Hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-300 pointer-events-none lg:block hidden"
      >
        <MoveDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
