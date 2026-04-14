import { getActivities } from "@/lib/actions/activities";
import { getArchives } from "@/lib/actions/archives";
import { DashboardClientUI } from "@/app/admin/dashboard/DashboardClientUI";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const activities = await getActivities();
  const archives = await getArchives();

  const stats = [
    { label: "Active Activities", value: activities.length.toString(), iconName: "activity", color: "text-primary", bg: "bg-slate-50 dark:bg-slate-800/50" },
    { label: "Legislative Archives", value: archives.length.toString(), iconName: "archive", color: "text-slate-950 dark:text-white", bg: "bg-slate-50 dark:bg-slate-800/50" },
    { label: "Network Stability", value: "99.9%", iconName: "trending", color: "text-blue-500", bg: "bg-slate-50 dark:bg-slate-800/50" },
  ];

  const blocks = [
    { 
      title: "Recent Activities", 
      iconName: "activity", 
      placeholder: (activities && activities.length > 0) ? `${activities.length} items published` : "No activities yet",
      href: "/admin/dashboard/activities"
    },
    { 
      title: "Recent Archives", 
      iconName: "archive", 
      placeholder: (archives && archives.length > 0) ? `${archives.length} documents archived` : "No archives yet",
      href: "/admin/dashboard/archives"
    },
  ];

  return (
    <DashboardClientUI stats={stats} blocks={blocks} />
  );
}
