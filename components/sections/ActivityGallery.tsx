"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, Activity } from "lucide-react";
import Image from "next/image";

interface ActivityData {
  _id?: string;
  title: string;
  description: string;
  localImagePath: string;
  externaImageUrl?: string;
  date: string;
  category: string;
}

export default function ActivityGallery({ activities }: { activities: ActivityData[] }) {
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
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="kegiatan">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-primary mb-6"
            >
              <Activity className="w-5 h-5" />
              <span className="font-black tracking-[0.3em] text-xs uppercase text-slate-600">Activity Archive</span>
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
            >
              Jejak <span className="text-primary italic">Progresivitas</span>
            </motion.h2>
          </div>
          <p className="text-slate-600 text-lg md:text-xl max-w-sm leading-relaxed font-medium">
            Dokumentasi langkah nyata Fraksi Elektro dalam mengawal aspirasi IKM Elektro.
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
            <div className="col-span-full py-24 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-100">
              <p className="text-slate-500 font-black italic">Belum ada kegiatan yang dipublikasikan.</p>
            </div>
          ) : (
            activities.map((activity, idx) => (
              <motion.div
                key={activity._id || idx}
                variants={item}
                className="group relative h-[500px] overflow-hidden rounded-[3rem] bg-slate-50 border border-slate-100"
              >
                {/* Image Treatment */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={activity.externaImageUrl || activity.localImagePath || "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80"}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                  <div className="flex items-center space-x-3 mb-5">
                    <span className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
                      {activity.category}
                    </span>
                    <div className="flex items-center text-slate-600 text-xs font-bold">
                      <Calendar className="w-3.5 h-3.5 mr-2 text-primary" />
                      {new Date(activity.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      })}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {activity.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm font-medium line-clamp-2 mb-8 group-hover:text-slate-900 transition-colors">
                    {activity.description}
                  </p>

                  <div className="pt-8 border-t border-slate-200/50 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      View Details
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
