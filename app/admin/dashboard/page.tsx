import { getActivities } from "@/lib/actions/activities";
import { getArchives } from "@/lib/actions/archives";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageIcon, FileText, Activity } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [activities, archives] = await Promise.all([
    getActivities(),
    getArchives(),
  ]);

  const recentActivities = activities.slice(0, 5);
  const recentArchives = archives.slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Selamat Datang, <span className="text-primary">Admin</span>
        </h1>
        <p className="text-muted-foreground mt-1">
          Sintesa Karsa 2026 — Dashboard Overview
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Activities</CardTitle>
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <ImageIcon className="w-4 h-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-white">{activities.length}</p>
            <p className="text-xs text-muted-foreground mt-1">Published activities</p>
          </CardContent>
        </Card>

        <Card className="border-secondary/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Legislative Archives</CardTitle>
            <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
              <FileText className="w-4 h-4 text-secondary" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-white">{archives.length}</p>
            <p className="text-xs text-muted-foreground mt-1">UU, TAP, Siaran Pers</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentActivities.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-6">No activities yet</p>
            ) : (
              <ul className="space-y-3">
                {recentActivities.map((a) => (
                  <li key={a._id} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm text-white font-medium truncate">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{a.category} · {new Date(a.date).toLocaleDateString("id-ID")}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-secondary" />
              Recent Archives
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentArchives.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-6">No archives yet</p>
            ) : (
              <ul className="space-y-3">
                {recentArchives.map((a) => (
                  <li key={a._id} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm text-white font-medium truncate">{a.title}</p>
                      <p className="text-xs text-muted-foreground">{a.documentType} · {a.category}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
