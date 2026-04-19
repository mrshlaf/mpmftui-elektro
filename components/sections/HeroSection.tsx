"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Zap, Sparkles, MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const logoX = useTransform(springX, [-500, 500], [-30, 30]);
  const logoY = useTransform(springY, [-500, 500], [-30, 30]);
  
  const blob1X = useTransform(springX, [-500, 500], [-50, 50]);
  const blob1Y = useTransform(springY, [-500, 500], [-50, 50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterItem = {
    hidden: { y: 100, opacity: 0, rotateX: -90 },
    show: { 
      y: 0, 
      opacity: 1, 
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  } as any;

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center py-12 md:py-32 overflow-hidden bg-white dark:bg-black font-sans">
      {/* Light Premium Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Opaque Prominent Logo */}
          <motion.div
            style={{ x: logoX, y: logoY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[450px] aspect-square relative group shrink-0"
          >
            <Image 
              src="/logo-mpm.png" 
              alt="MPM Logo" 
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_50px_rgba(30,58,138,0.4)] group-hover:scale-105 transition-transform duration-700" 
              priority
            />
          </motion.div>

          <div className="text-center lg:text-left pt-10">
            {/* Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 mb-8 shadow-sm backdrop-blur-md hover:border-primary/50 transition-colors group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400 font-sans group-hover:text-primary transition-colors">SINTESA KARSA &bull; 2026</span>
            </motion.div>

            {/* Headline */}
            <div className="relative mb-8 perspective-1000">
              <motion.div
                variants={letterContainer}
                initial="hidden"
                animate="show"
                className="text-5xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-foreground leading-[0.85] md:leading-[0.8] drop-shadow-2xl font-heading select-none mt-4 md:mt-0"
              >
                <div className="flex flex-wrap justify-center lg:justify-start overflow-hidden">
                  {"PAGI".split("").map((char, i) => (
                    <motion.span key={i} variants={letterItem} className="inline-block">{char}</motion.span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start overflow-hidden py-4">
                  {"ELEKTRO!".split("").map((char, i) => (
                    <motion.span 
                      key={i} 
                      variants={letterItem} 
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-cyan-500 font-heading"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                {/* Clean Glow Effect Background */}
                <div className="absolute inset-0 -z-10 bg-primary/30 blur-[150px] rounded-full opacity-60 dark:opacity-40 pointer-events-none" />
              </motion.div>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 mb-10 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-bold font-sans"
            >
              Bersama mewujudkan ekosistem aspiratif yang <span className="text-slate-950 dark:text-white font-black">progresif dan transparan</span> untuk seluruh Warga Teknik Elektro UI.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-16"
            >
              <Link href="http://bit.ly/OprecStaffMPM2026" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-10 h-16 bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 hover:bg-primary dark:hover:bg-primary hover:text-white rounded-2xl group transition-all duration-500 font-black text-lg shadow-2xl hover:-translate-y-2 hover:shadow-primary/20">
                  Join Staff
                  <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
              <Link href="/transparansi" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 h-16 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl text-slate-950 dark:text-white hover:bg-white dark:hover:bg-slate-800 font-black text-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:border-primary/50">
                  Transparansi
                </Button>
              </Link>
            </motion.div>

            {/* Impact Overview */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            >
               { [
                { label: "Products", value: "04" },
                { label: "Directives", value: "28" },
                { label: "Audited", value: "67" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default">
                  <span className="text-3xl md:text-5xl font-black text-foreground tracking-tighter mb-1 font-sans group-hover:text-primary transition-colors">{stat.value}</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-600 transition-colors">{stat.label}</span>
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
