"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Send, FileText, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createArchive } from "@/lib/actions/archives";

export default function NewArchivePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      documentType: formData.get("documentType") as string,
      linkUrl: formData.get("linkUrl") as string,
      category: formData.get("category") as string,
    };

    try {
      await createArchive(data);
      router.push("/admin/dashboard/archives");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan arsip.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 selection:bg-primary/10">
      <Link 
        href="/admin/dashboard/archives" 
        className="flex items-center space-x-3 text-slate-400 hover:text-slate-950 transition-all group w-fit"
      >
        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:-translate-x-1 transition-transform">
          <ChevronLeft className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Management</span>
      </Link>

      <div className="bg-white border border-slate-100 rounded-[3.5rem] p-10 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.04)] relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-primary mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            <span className="font-black tracking-[0.4em] text-[10px] uppercase text-slate-400">Documentation Mode</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter mb-12 uppercase leading-none">
            Archive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 italic">Official Document</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Document Title</label>
              <div className="relative group">
                <Input 
                  name="title" 
                  required 
                  placeholder="E.g. Undang-Undang IKM UI No. 1 Tahun 2026" 
                  className="h-16 rounded-[1.5rem] bg-slate-50 border-slate-100 text-slate-950 placeholder:text-slate-300 focus:ring-primary/10 focus:border-primary font-bold px-8 transition-all shadow-sm" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Document Type</label>
                <div className="relative">
                  <select 
                    name="documentType" 
                    className="w-full h-16 rounded-[1.5rem] bg-slate-50 border-slate-100 text-slate-950 focus:ring-primary/10 focus:border-primary px-8 font-bold text-sm outline-none appearance-none cursor-pointer"
                    required
                  >
                    <option value="Undang-Undang">⚖️ Undang-Undang</option>
                    <option value="Ketetapan">📜 Ketetapan</option>
                    <option value="Siaran Pers">📢 Siaran Pers</option>
                    <option value="Peraturan">📋 Peraturan</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Sub-Category</label>
                <Input 
                  name="category" 
                  placeholder="External, Mahasiswa, etc." 
                  required 
                  className="h-16 rounded-[1.5rem] bg-slate-50 border-slate-100 text-slate-950 focus:ring-primary/10 focus:border-primary font-bold px-8 shadow-sm" 
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Cloud Storage Link</label>
              <Input 
                name="linkUrl" 
                required 
                placeholder="Google Drive / PDF Public Link" 
                className="h-16 rounded-[1.5rem] bg-slate-50 border-slate-100 text-slate-950 placeholder:text-slate-300 focus:ring-primary/10 focus:border-primary font-bold px-8 shadow-sm" 
              />
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-1">Short Abstract</label>
              <Textarea 
                name="description" 
                required 
                placeholder="Brief summary of the document contents..." 
                className="min-h-[160px] rounded-[2rem] bg-slate-50 border-slate-100 text-slate-950 placeholder:text-slate-300 focus:ring-primary/10 focus:border-primary p-8 resize-none font-bold leading-relaxed shadow-sm" 
              />
            </div>

            <div className="pt-10 flex justify-end">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="h-20 px-14 bg-slate-950 text-white hover:bg-primary rounded-3xl font-black text-xs tracking-[0.2em] shadow-2xl hover:-translate-y-2 transition-all group active:scale-95"
              >
                {isLoading ? "ARCHIVING..." : (
                  <span className="flex items-center uppercase">
                    Publish Document
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
