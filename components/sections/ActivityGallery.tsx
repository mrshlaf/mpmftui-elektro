"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Calendar, Camera, X, ArrowRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

interface ActivityData {
  _id?: string;
  title: string;
  description: string;
  localImagePath: string;
  externaImageUrl?: string;
  date: string;
  category: string;
  size?: "small" | "large";
}

export default function ActivityGallery({ activities }: { activities: ActivityData[] }) {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="kegiatan">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-3 px-3 py-1 rounded-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500">Activity Archive</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-8xl font-black text-slate-950 dark:text-white tracking-tighter leading-[0.8]"
            >
              Jejak <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Progresivitas</span>
            </motion.h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-bold leading-relaxed max-w-sm border-l-4 border-slate-100 dark:border-slate-800 pl-8">
            Dokumentasi langkah nyata Fraksi Elektro dalam mengawal aspirasi Warga DTE UI.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activities.length === 0 ? (
            <div className="col-span-full py-24 text-center bg-white dark:bg-slate-950 rounded-[3rem] border-2 border-dashed border-slate-100 dark:border-slate-800">
              <p className="text-slate-400 dark:text-slate-500 font-bold">Belum ada kegiatan yang dipublikasikan.</p>
            </div>
          ) : (
            activities.map((activity, idx) => (
              <GalleryItem key={activity._id || idx} activity={activity} idx={idx} setActiveImage={setActiveImage} />
            ))
          )}
        </motion.div>

        <AnimatePresence>
          {activeImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-white/40 dark:bg-slate-950/40 backdrop-blur-3xl p-4 md:p-10"
              onClick={() => setActiveImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 40, opacity: 0, rotateX: 10 }}
                animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
                exit={{ scale: 0.9, y: 40, opacity: 0, rotateX: 10 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative max-w-6xl w-full aspect-[16/10] rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] bg-slate-950"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={activities[activeImage].externaImageUrl || activities[activeImage].localImagePath || ""}
                  alt={activities[activeImage].title}
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-20">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="px-5 py-2 rounded-2xl bg-primary text-slate-950 text-[10px] font-black uppercase tracking-widest mb-8 inline-block shadow-2xl">
                      {activities[activeImage].category}
                    </span>
                    <h2 className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.8]">
                      {activities[activeImage].title}
                    </h2>
                    <p className="text-white/70 text-lg md:text-3xl font-bold max-w-4xl leading-relaxed border-l-4 border-white/20 pl-8">
                      {activities[activeImage].description}
                    </p>
                  </motion.div>
                </div>
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-10 right-10 w-16 h-16 rounded-3xl bg-white/10 backdrop-blur-2xl text-white border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all transform hover:scale-110 active:scale-95 group"
                >
                  <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-500" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function GalleryItem({ activity, idx, setActiveImage }: any) {
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
      variants={{
        hidden: { y: 30, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.6, delay: idx * 0.05 } }
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-slate-100 dark:border-white/5 cursor-pointer shadow-sm hover:shadow-[0_40px_100px_rgba(0,0,0,0.2)] transition-all duration-700 ${
        activity.size === "large" ? "md:col-span-2 lg:col-span-2 md:row-span-2" : "col-span-1"
      }`}
      onClick={() => setActiveImage(idx)}
    >
      <div className={`relative w-full ${activity.size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"} overflow-hidden`}>
        <Image
          src={activity.externaImageUrl || activity.localImagePath || "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80"}
          alt={activity.title}
          fill
          className="object-cover group-hover:scale-110 transition-all duration-1000 ease-out grayscale-[0.2] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-60" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-all duration-700" style={{ transform: "translateZ(60px)" }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-xl bg-primary text-slate-950 text-[9px] font-black uppercase tracking-widest shadow-xl">
              {activity.category}
            </span>
            <div className="flex items-center text-white/90 text-[10px] font-bold bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
              <Calendar className="w-3.5 h-3.5 mr-2" />
              {new Date(activity.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </div>
          </div>
          <h3 className="text-3xl font-black text-white mb-2 tracking-tighter leading-none group-hover:text-primary transition-colors">
            {activity.title}
          </h3>
        </div>
        
        <div className="absolute top-8 right-8 w-14 h-14 bg-white/20 backdrop-blur-2xl rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 border border-white/30" style={{ transform: "translateZ(80px)" }}>
          <Maximize2 className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  );
}
