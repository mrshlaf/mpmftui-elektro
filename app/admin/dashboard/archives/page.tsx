import { getArchives, deleteArchive } from "@/lib/actions/archives";
import { Plus, Shield } from "lucide-react";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import ArchivesList from "./ArchivesList";

export const dynamic = "force-dynamic";

export default async function AdminArchivesPage() {
  const archives = await getArchives();

  async function handleDelete(id: string) {
    "use server";
    await deleteArchive(id);
    revalidatePath("/admin/dashboard/archives");
  }

  return (
    <div className="space-y-12">
      {/* Header section with premium feel */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 text-primary mb-6">
            <Shield className="w-5 h-5" />
            <span className="font-black tracking-[0.4em] text-[10px] uppercase text-slate-400">Legislative Archives</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-[0.9] mb-4 uppercase">
            Amanat <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 italic font-black">Konstitusi</span>
          </h1>
          <p className="text-slate-500 text-lg font-bold leading-relaxed max-w-md italic">
            Manage official constitutional and legislative assets.
          </p>
        </div>
        
        <Link href="/admin/dashboard/archives/new" className="relative z-10">
          <button className="h-20 px-10 bg-slate-950 text-white rounded-3xl font-black text-xs tracking-[0.2em] uppercase flex items-center hover:bg-primary transition-all shadow-2xl hover:-translate-y-2 active:scale-95 group">
            <Plus className="w-6 h-6 mr-4 group-hover:rotate-90 transition-transform" />
            New Documentation
          </button>
        </Link>
      </div>

      <ArchivesList archives={archives} onDelete={handleDelete} />
    </div>
  );
}
