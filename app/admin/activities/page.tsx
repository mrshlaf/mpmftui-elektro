import { getActivities, deleteActivity } from "@/lib/actions/activities";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Calendar, Tag, ExternalLink, Sparkles, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export default async function AdminActivitiesPage() {
  const activities = await getActivities();

  async function handleDelete(id: string) {
    "use server";
    await deleteActivity(id);
    revalidatePath("/admin/activities");
  }

  return (
    <div className="space-y-12 pb-24">
      {/* Header section with premium feel */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-primary mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-black tracking-[0.4em] text-[10px] uppercase text-slate-400">Activity Management</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-[0.9] mb-4 uppercase">
            Jejak <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 italic font-black">Digital</span>
          </h1>
          <p className="text-slate-500 text-lg font-bold leading-relaxed max-w-md italic">
            Kelola dokumentasi langkah nyata Fraksi Elektro 2026 yang akan diabadikan di beranda utama.
          </p>
        </div>
        
        <Link href="/admin/activities/new" className="relative z-10">
          <button className="h-20 px-10 bg-slate-950 text-white rounded-3xl font-black text-sm tracking-[0.2em] uppercase flex items-center hover:bg-primary transition-all shadow-2xl hover:-translate-y-2 active:scale-95 group">
            <Plus className="w-6 h-6 mr-4 group-hover:rotate-90 transition-transform" />
            Publish New Moment
          </button>
        </Link>

        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      </div>

      <div className="grid grid-cols-1 gap-6">
        {activities.length === 0 ? (
          <div className="py-32 text-center bg-white rounded-[3.5rem] border-4 border-dashed border-slate-50">
            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-slate-300" />
            </div>
            <p className="text-slate-400 font-black text-xl italic tracking-tight uppercase">Belum ada jejak tersimpan</p>
            <p className="text-slate-300 text-sm font-bold mt-2 uppercase tracking-widest">Waktunya menciptakan sejarah baru.</p>
          </div>
        ) : (
          activities.map((activity) => (
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
                <form action={handleDelete.bind(null, activity._id!)}>
                  <button 
                    type="submit"
                    className="w-16 h-16 rounded-2xl bg-white border border-slate-100 text-red-400 hover:text-white hover:bg-red-500 hover:border-red-500 hover:shadow-xl transition-all duration-500 flex items-center justify-center group/del"
                  >
                    <Trash2 className="w-6 h-6 group-hover/del:scale-110 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
