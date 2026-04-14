"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, Send, Sparkles, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createActivity } from "@/lib/actions/activities";

export default function NewActivityPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      date: formData.get("date") as string,
      localImagePath: "/uploads/activities/placeholder.jpg",
      externaImageUrl: formData.get("imageUrl") as string,
    };

    try {
      await createActivity(data);
      router.push("/admin/activities");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan kegiatan.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Link 
        href="/admin/activities" 
        className="flex items-center space-x-2 text-slate-600 hover:text-slate-950 transition-colors group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-black uppercase tracking-widest">Back to Management</span>
      </Link>

      <div className="bg-white border border-slate-200 rounded-[3rem] p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-primary mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-black tracking-[0.2em] text-[10px] uppercase">Intellectual Asset Creation</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter mb-10">Deploy New Activity</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Asset Title</label>
                <Input name="title" required placeholder="Nama Kegiatan..." className="h-14 rounded-2xl bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-primary/20 focus:border-primary" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Event Date</label>
                <Input name="date" type="date" required className="h-14 rounded-2xl bg-slate-50 border-slate-200 text-slate-900 focus:ring-primary/20 focus:border-primary" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Category</label>
                <select 
                  name="category" 
                  className="w-full h-14 rounded-2xl bg-slate-50 border-slate-200 text-slate-900 focus:ring-primary/20 focus:border-primary px-6 font-semibold text-sm outline-none appearance-none"
                  required
                >
                  <option value="Sidang">Sidang</option>
                  <option value="Kunjungan">Kunjungan</option>
                  <option value="Forum">Forum</option>
                  <option value="Internal">Internal</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Visual URL (External)</label>
                <Input name="imageUrl" placeholder="https://..." className="h-14 rounded-2xl bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-primary/20 focus:border-primary" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Asset Description</label>
              <Textarea 
                name="description" 
                required 
                placeholder="Deskripsi kegiatan secara mendalam..." 
                className="min-h-[160px] rounded-3xl bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-primary/20 focus:border-primary p-6 resize-none" 
              />
            </div>

            <div className="pt-6 border-t border-slate-100 flex justify-end">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="h-16 px-10 bg-slate-900 text-white hover:bg-slate-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all group active:scale-95"
              >
                {isLoading ? "DEPLOYING..." : (
                  <span className="flex items-center">
                    PUBLISH ACTIVITY
                    <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
