"use client";

import { motion } from "framer-motion";
import { Trash2, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Archive {
  _id?: string;
  title: string;
  description: string;
  category: string;
  documentType: string;
  linkUrl: string;
}

interface Props {
  archives: Archive[];
  onDelete: (id: string) => Promise<void>;
}

export default function ArchivesList({ archives, onDelete }: Props) {
  if (archives.length === 0) {
    return (
      <div className="py-32 text-center bg-white rounded-[3.5rem] border-4 border-dashed border-slate-50">
        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <FileText className="w-10 h-10 text-slate-300" />
        </div>
        <p className="text-slate-400 font-black text-xl italic tracking-tight uppercase">No documents found</p>
        <p className="text-slate-300 text-sm font-bold mt-2 uppercase tracking-widest">Setiap keputusan adalah sejarah.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {archives.map((archive) => (
        <motion.div 
          key={archive._id} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-slate-100 rounded-[3rem] p-8 flex flex-col md:flex-row items-center gap-10 group hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-primary/20 transition-all duration-700"
        >
          <div className="w-20 h-20 rounded-[1.5rem] bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 group-hover:bg-slate-950 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
            <FileText className="w-8 h-8" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-5 py-2 bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl">
                {archive.documentType}
              </span>
              <div className="px-4 py-2 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl">
                {archive.category}
              </div>
            </div>
            <h3 className="text-3xl font-black text-slate-950 truncate mb-3 tracking-tighter uppercase">{archive.title}</h3>
            <p className="text-slate-500 text-base line-clamp-2 italic font-bold leading-relaxed">{archive.description}</p>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <Link href={archive.linkUrl} target="_blank">
              <button className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 hover:text-white hover:bg-primary hover:border-primary hover:shadow-xl transition-all duration-500 flex items-center justify-center group/link">
                <ExternalLink className="w-6 h-6 group-hover/link:scale-110 transition-transform" />
              </button>
            </Link>
            <button 
              onClick={() => onDelete(archive._id!)}
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
