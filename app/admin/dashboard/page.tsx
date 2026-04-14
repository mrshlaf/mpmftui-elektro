import { getActivities } from "@/lib/actions/activities";
import { getArchives } from "@/lib/actions/archives";
import { DashboardClientUI } from "./DashboardClientUI";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const activities = await getActivities();
  const archives = await getArchives();

  const stats = [
    { label: "Total Activities", value: activities.length.toString(), iconName: "activity", color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Legislative Archives", value: archives.length.toString(), iconName: "archive", color: "text-purple-500", bg: "bg-purple-50" },
    { label: "Public Reach", value: "100%", iconName: "trending", color: "text-primary", bg: "bg-primary/10" },
  ];

  const blocks = [
    { 
      title: "Recent Activities", 
      iconName: "activity", 
      placeholder: activities.length > 0 ? `${activities.length} items published` : "No activities yet",
      href: "/admin/activities"
    },
    { 
      title: "Recent Archives", 
      iconName: "archive", 
      placeholder: archives.length > 0 ? `${archives.length} documents archived` : "No archives yet",
      href: "/admin/archives"
    },
  ];

  return (
    <DashboardClientUI stats={stats} blocks={blocks} />
  );
}
