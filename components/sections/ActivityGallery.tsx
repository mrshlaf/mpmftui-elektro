"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Camera, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
              className="inline-flex items-center space-x-3 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 mb-6"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 italic">Progresivitas</span>
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
            <div className="col-span-full py-24 text-center bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] border-2 border-dashed border-slate-100 dark:border-slate-800">
              <p className="text-slate-400 dark:text-slate-500 font-bold italic">Belum ada kegiatan yang dipublikasikan.</p>
            </div>
          ) : (
            activities.map((activity, idx) => (
              <motion.div
                key={activity._id || idx}
                variants={item}
                className={`group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 ${
                  activity.size === "large" ? "md:col-span-2 lg:col-span-2 md:row-span-2" : "col-span-1"
                }`}
                onClick={() => setActiveImage(idx)}
              >
                <div className={`relative w-full ${activity.size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"} overflow-hidden`}>
                  <Image
                    src={activity.externaImageUrl || activity.localImagePath || "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80"}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent transition-opacity duration-500 opacity-60 group-hover:opacity-40" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 pb-1.5 rounded-xl bg-slate-950 text-white text-[9px] font-black uppercase tracking-widest shadow-xl">
                        {activity.category}
                      </span>
                      <div className="flex items-center text-white/80 text-[10px] font-bold bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl">
                        <Calendar className="w-3.5 h-3.5 mr-2" />
                        {new Date(activity.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric"
                        })}
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight drop-shadow-lg">
                      {activity.title}
                    </h3>
                  </div>
                  
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 border border-white/30">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Modal for Full Image */}
        <AnimatePresence>
          {activeImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl p-4 md:p-10"
              onClick={() => setActiveImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                className="relative max-w-6xl w-full aspect-[16/10] rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={activities[activeImage].externaImageUrl || activities[activeImage].localImagePath || ""}
                  alt={activities[activeImage].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                  <span className="px-5 py-2 rounded-2xl bg-primary text-slate-950 text-[10px] font-black uppercase tracking-widest mb-6 inline-block shadow-xl">
                    {activities[activeImage].category}
                  </span>
                  <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
                    {activities[activeImage].title}
                  </h2>
                  <p className="text-white/80 text-lg md:text-2xl font-bold max-w-4xl leading-relaxed">
                    {activities[activeImage].description}
                  </p>
                </div>
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-8 right-8 w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-2xl flex items-center justify-center hover:bg-slate-950 dark:hover:bg-slate-700 hover:text-white transition-all transform hover:scale-110 active:scale-90"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
