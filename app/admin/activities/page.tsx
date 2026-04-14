import { getActivities, deleteActivity } from "@/lib/actions/activities";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Calendar, Tag, ExternalLink } from "lucide-react";
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
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Activities</h1>
          <p className="text-slate-500 text-sm font-medium">Manage and publish legacy moments.</p>
        </div>
        <Link href="/admin/activities/new">
          <Button className="rounded-2xl h-12 px-6 bg-slate-900 hover:bg-slate-800 font-bold shadow-lg">
            <Plus className="w-5 h-5 mr-2" />
            New Activity
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {activities.length === 0 ? (
          <div className="py-20 text-center bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-100">
            <p className="text-slate-400 font-bold italic">No activities found. Start by creating one.</p>
          </div>
        ) : (
          activities.map((activity) => (
            <div 
              key={activity._id} 
              className="bg-white border border-slate-100 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 group hover:shadow-xl transition-all duration-500"
            >
              <div className="relative w-full md:w-32 h-32 rounded-[1.5rem] overflow-hidden shrink-0 border border-slate-100">
                <Image
                  src={activity.externaImageUrl || activity.localImagePath}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                    {activity.category}
                  </span>
                  <div className="flex items-center text-slate-600 text-xs font-black uppercase tracking-widest">
                    <Calendar className="w-3 h-3 mr-1.5" />
                    {new Date(activity.date).toLocaleDateString("id-ID")}
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 truncate mb-1">{activity.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-1 italic font-bold">{activity.description}</p>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <form action={handleDelete.bind(null, activity._id!)}>
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
