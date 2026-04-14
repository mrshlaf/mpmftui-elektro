"use client";

import { motion } from "framer-motion";
import { Trash2, Calendar } from "lucide-react";
import Image from "next/image";

interface Activity {
  _id?: string;
  title: string;
  description: string;
  localImagePath: string;
  externaImageUrl?: string;
  date: string;
  category: string;
}

interface Props {
  activities: Activity[];
  onDelete: (id: string) => Promise<void>;
}

export default function ActivitiesList({ activities, onDelete }: Props) {
  if (activities.length === 0) {
    return (
      <div className="py-32 text-center bg-white rounded-[3.5rem] border-4 border-dashed border-slate-50">
        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Calendar className="w-10 h-10 text-slate-300" />
        </div>
        <p className="text-slate-400 font-black text-xl italic tracking-tight uppercase">No activities found</p>
        <p className="text-slate-300 text-sm font-bold mt-2 uppercase tracking-widest">Waktunya menciptakan sejarah baru.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {activities.map((activity) => (
        <motion.div 
          key={activity._id} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-slate-100 rounded-[3rem] p-8 flex flex-col md:flex-row items-center gap-10 group hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-primary/20 transition-all duration-700"
        >
          <div className="relative w-full md:w-48 h-48 rounded-[2.5rem] overflow-hidden shrink-0 border border-slate-100 shadow-lg group-hover:scale-105 transition-all duration-700">
            <Image
              src={activity.externaImageUrl || activity.localImagePath}
              alt={activity.title}
              fill
              className="object-cover group-hover:rotate-1 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-5 py-2 bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl">
                {activity.category}
              </span>
              <div className="flex items-center text-primary text-[10px] font-black uppercase tracking-[0.2em] bg-primary/5 px-4 py-2 rounded-2xl">
                <Calendar className="w-3.5 h-3.5 mr-2" />
                {new Date(activity.date).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
            </div>
            <h3 className="text-3xl font-black text-slate-950 truncate mb-3 tracking-tighter uppercase">{activity.title}</h3>
            <p className="text-slate-500 text-base line-clamp-2 italic font-bold leading-relaxed">{activity.description}</p>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <button 
              onClick={() => onDelete(activity._id!)}
              className="w-16 h-16 rounded-2xl bg-white border border-slate-100 text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500 hover:shadow-xl transition-all duration-500 flex items-center justify-center group/del"
            >
              <Trash2 className="w-6 h-6 group-hover/del:scale-110 transition-transform" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
