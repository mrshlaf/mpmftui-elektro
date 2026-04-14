"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ActivityData } from "@/lib/actions/activities";
import { CalendarDays, Tag } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ActivityGallery({ activities }: { activities: ActivityData[] }) {
  return (
    <section id="activities" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section heading */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
        >
          Rekam Jejak
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-white tracking-tight"
        >
          Our Activities
        </motion.h2>
      </div>

      {activities.length === 0 ? (
        <div className="text-center text-muted-foreground py-24 border border-dashed border-border rounded-2xl">
          Belum ada aktivitas yang dipublikasikan.
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {activities.map((activity, i) => {
            const isLarge = i === 0 || i === 3;
            return (
              <motion.div
                key={activity._id}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`group relative rounded-2xl overflow-hidden border border-border bg-card flex flex-col cursor-pointer transition-shadow hover:shadow-[0_8px_40px_rgba(0,245,255,0.08)] ${isLarge ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] bg-muted overflow-hidden">
                  {(activity.externaImageUrl || activity.localImagePath) ? (
                    <Image
                      src={activity.externaImageUrl || activity.localImagePath}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized={!!activity.externaImageUrl}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted">
                      <span className="text-muted-foreground text-sm">No image</span>
                    </div>
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                      <Tag className="w-3 h-3" />
                      {activity.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col gap-2">
                  <h3 className="font-bold text-white text-base leading-snug group-hover:text-primary transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 flex-1">
                    {activity.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                    <CalendarDays className="w-3.5 h-3.5" />
                    {new Date(activity.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </section>
  );
}
