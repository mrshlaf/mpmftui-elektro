"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Activity, 
  Archive, 
  LogOut, 
  ShieldCheck,
  ChevronRight,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin/dashboard" },
  { icon: Activity, label: "Activities", href: "/admin/dashboard/activities" },
  { icon: Archive, label: "Archives", href: "/admin/dashboard/archives" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-50 border-r border-slate-100 flex flex-col z-20 sticky top-0 h-screen">
        <div className="p-10">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
              <span className="text-white font-black text-2xl">S</span>
            </div>
            <div>
              <span className="text-lg font-black text-slate-900 tracking-tighter">SINTESA</span>
              <span className="block text-[10px] text-primary font-black uppercase tracking-[0.2em] -mt-1">Admin Node</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-6 space-y-1.5 overflow-y-auto">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 group",
                  isActive 
                    ? "bg-white text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-100" 
                    : "text-slate-400 hover:text-slate-900 hover:bg-white/50"
                )}
              >
                <div className="flex items-center space-x-4">
                  <div className={cn(
                    "p-2.5 rounded-xl transition-all",
                    isActive ? "bg-primary text-slate-900 shadow-lg shadow-primary/20" : "bg-white border border-slate-100 group-hover:bg-slate-50"
                  )}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm tracking-tight">{item.label}</span>
                </div>
                {isActive && (
                  <motion.div layoutId="sidebar-active">
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </motion.div>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-8 border-t border-slate-100">
          <button 
            className="w-full flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl bg-red-50 text-red-600 hover:bg-red-100 transition-all font-black text-xs uppercase tracking-widest"
            onClick={() => {
              document.cookie = "admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
              window.location.href = "/admin/login";
            }}
          >
            <LogOut className="w-4 h-4" />
            <span>Terminate</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative overflow-x-hidden">
        {/* Top Header */}
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-10 sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <div className="w-1.5 h-6 bg-primary rounded-full" />
            <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">Dashboard</h2>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Operator Status</p>
              <p className="text-sm font-bold text-slate-900">Admin Account</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
              <User className="w-6 h-6 text-slate-400" />
            </div>
          </div>
        </header>

        <div className="p-10 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/2 rounded-full blur-[100px] pointer-events-none" />
          {children}
        </div>
      </main>
    </div>
  );
}
