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

      <div className="bg-white border border-slate-100 rounded-[3.5rem] p-10 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.04)] relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-primary mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span className="font-black tracking-[0.4em] text-[10px] uppercase text-slate-400">Creation Mode</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter mb-12 uppercase leading-none">
            Publish <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 italic">New Legacy</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Moment Title</label>
                <div className="relative group">
                  <Input 
                    name="title" 
                    required 
                    placeholder="E.g. Sidang Paripurna I" 
                    className="h-16 rounded-[1.5rem] bg-slate-50 border-slate-100 text-slate-950 placeholder:text-slate-300 focus:ring-primary/10 focus:border-primary font-bold px-8 transition-all" 
                  />
                  <div className="absolute inset-0 rounded-[1.5rem] border-2 border-primary/0 group-hover:border-primary/5 pointer-events-none transition-all" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Execution Date</label>
                <Input 
                  name="date" 
                  type="date" 
                  required 
                  className="h-16 rounded-[1.5rem] bg-slate-50 border-slate-100 text-slate-950 focus:ring-primary/10 focus:border-primary font-bold px-8" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Classification</label>
                <div className="relative">
                  <select 
                    name="category" 
                    className="w-full h-16 rounded-[1.5rem] bg-slate-50 border-slate-100 text-slate-950 focus:ring-primary/10 focus:border-primary px-8 font-bold text-sm outline-none appearance-none cursor-pointer"
                    required
                  >
                    <option value="Sidang">🏛️ Sidang</option>
                    <option value="Kunjungan">🤝 Kunjungan</option>
                    <option value="Forum">🎤 Forum</option>
                    <option value="Internal">🏠 Internal</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Cover Image Link</label>
                <div className="relative group">
                  <Input 
                    name="imageUrl" 
                    placeholder="Imgur / Unsplash URL..." 
                    className="h-16 rounded-[1.5rem] bg-slate-50 border-slate-100 text-slate-950 placeholder:text-slate-300 focus:ring-primary/10 focus:border-primary font-bold px-8 transition-all" 
                  />
                  <ImageIcon className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Detailed Log</label>
              <Textarea 
                name="description" 
                required 
                placeholder="Narrate the importance of this moment for the fraction..." 
                className="min-h-[180px] rounded-[2rem] bg-slate-50 border-slate-100 text-slate-950 placeholder:text-slate-300 focus:ring-primary/10 focus:border-primary p-8 resize-none font-bold leading-relaxed transition-all" 
              />
            </div>

            <div className="pt-10 flex justify-end">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="h-20 px-14 bg-slate-950 text-white hover:bg-primary rounded-3xl font-black text-xs tracking-[0.2em] shadow-2xl hover:-translate-y-2 transition-all group active:scale-95"
              >
                {isLoading ? "SYNCING..." : (
                  <span className="flex items-center uppercase">
                    Publish to Feed
                    <Send className="ml-4 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Decorative Orbs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-50 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </div>
  );
}
