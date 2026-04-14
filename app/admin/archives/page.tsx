import { getArchives, deleteArchive } from "@/lib/actions/archives";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, FileText, ExternalLink, Shield } from "lucide-react";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export default async function AdminArchivesPage() {
  const archives = await getArchives();

  async function handleDelete(id: string) {
    "use server";
    await deleteArchive(id);
    revalidatePath("/admin/archives");
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Archives</h1>
          <p className="text-slate-500 text-sm font-medium">Manage constitutional and legislative assets.</p>
        </div>
        <Link href="/admin/archives/new">
          <Button className="rounded-2xl h-12 px-6 bg-slate-900 hover:bg-slate-800 font-bold shadow-lg">
            <Plus className="w-5 h-5 mr-2" />
            New Archive
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {archives.length === 0 ? (
          <div className="py-20 text-center bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-100">
            <p className="text-slate-400 font-bold italic">No archives found. Start by documenting a law.</p>
          </div>
        ) : (
          archives.map((archive) => (
            <div 
              key={archive._id} 
              className="bg-white border border-slate-100 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 group hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                <FileText className="w-8 h-8" />
              </div>
              
              <div className="flex-1 min-w-0 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                    {archive.documentType}
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                    {archive.category}
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 truncate mb-1">{archive.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-1 italic font-bold">{archive.description}</p>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <Link href={archive.linkUrl} target="_blank">
                  <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </Link>
                <form action={handleDelete.bind(null, archive._id!)}>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="w-12 h-12 rounded-2xl text-red-400 hover:text-red-600 hover:bg-red-50 transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
