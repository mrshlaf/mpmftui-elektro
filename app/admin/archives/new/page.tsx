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
      router.push("/admin/archives");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Gagal menambahkan arsip.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Link 
        href="/admin/archives" 
        className="flex items-center space-x-2 text-slate-600 hover:text-slate-950 transition-colors group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-black uppercase tracking-widest">Back to Management</span>
      </Link>

      <div className="bg-white border border-slate-200 rounded-[3rem] p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.04)] relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-blue-600 mb-6">
            <Shield className="w-5 h-5" />
            <span className="font-black tracking-[0.2em] text-[10px] uppercase">Legislative Documentation</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter mb-10">Archive New Document</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Document Title</label>
              <Input name="title" required placeholder="Judul UU / TAP / Siaran Pers..." className="h-14 rounded-2xl bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-blue-500/20 focus:border-blue-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Document Type</label>
                <select 
                  name="documentType" 
                  className="w-full h-14 rounded-2xl bg-slate-50 border-slate-200 text-slate-900 focus:ring-blue-500/20 focus:border-blue-500 px-6 font-semibold text-sm outline-none appearance-none"
                  required
                >
                  <option value="Undang-Undang">Undang-Undang</option>
                  <option value="Ketetapan">Ketetapan</option>
                  <option value="Siaran Pers">Siaran Pers</option>
                  <option value="Peraturan">Peraturan</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Category</label>
                <Input name="category" placeholder="E.g. Internal, Eksternal, Mahasiswa" required className="h-14 rounded-2xl bg-slate-50 border-slate-200 text-slate-900 focus:ring-blue-500/20 focus:border-blue-500" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Document Link (Drive/PDF)</label>
              <Input name="linkUrl" required placeholder="https://drive.google.com/..." className="h-14 rounded-2xl bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-blue-500/20 focus:border-blue-500" />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Abstrak / Deskripsi Singkat</label>
              <Textarea 
                name="description" 
                required 
                placeholder="Ringkasan isi dokumen..." 
                className="min-h-[140px] rounded-3xl bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-blue-500/20 focus:border-blue-500 p-6 resize-none" 
              />
            </div>

            <div className="pt-6 border-t border-slate-100 flex justify-end">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="h-16 px-10 bg-slate-900 text-white hover:bg-slate-800 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all group active:scale-95"
              >
                {isLoading ? "ARCHIVING..." : (
                  <span className="flex items-center">
                    PUBLISH DOCUMENT
                    <FileText className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
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
