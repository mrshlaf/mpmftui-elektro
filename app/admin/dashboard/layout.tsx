import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LayoutDashboard, FileText, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex-shrink-0">
        <div className="h-full flex flex-col pt-6">
          <div className="px-6 mb-8 mt-2">
            <h2 className="text-xl font-bold text-primary">Admin Portal</h2>
            <p className="text-sm text-muted-foreground">Sintesa Karsa 2026</p>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            <Link
              href="/admin/dashboard"
              className="flex items-center space-x-3 text-muted-foreground hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Overview</span>
            </Link>
            <Link
              href="/admin/dashboard/activities"
              className="flex items-center space-x-3 text-muted-foreground hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
            >
              <ImageIcon className="w-5 h-5" />
              <span>Activities</span>
            </Link>
            <Link
              href="/admin/dashboard/archives"
              className="flex items-center space-x-3 text-muted-foreground hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span>Archives</span>
            </Link>
          </nav>
          <div className="p-4 border-t border-border mt-auto">
            <LogoutButton />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
