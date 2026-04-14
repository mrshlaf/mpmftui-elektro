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
    <div className="flex min-h-screen bg-white font-sans selection:bg-primary/10 selection:text-primary">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-slate-100 flex flex-col z-20 sticky top-0 h-screen overflow-hidden">
        <div className="p-12">
          <Link href="/" className="flex flex-col space-y-2 group">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-2xl shadow-slate-200">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-black text-slate-950 tracking-tighter block leading-none">SINTESA KARSA</span>
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">Admin Node</span>
              </div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-8 space-y-2 overflow-y-auto">
          <div className="mb-6 px-4">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Core Navigation</p>
          </div>
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-6 py-5 rounded-[1.5rem] transition-all duration-500 group relative",
                  isActive 
                    ? "bg-slate-950 text-white shadow-2xl shadow-slate-200" 
                    : "text-slate-500 hover:text-slate-950 hover:bg-slate-50"
                )}
              >
                <div className="flex items-center space-x-5">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500",
                    isActive ? "bg-white text-slate-950" : "bg-white border border-slate-100 group-hover:border-slate-200"
                  )}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-black text-xs uppercase tracking-widest">{item.label}</span>
                </div>
                {isActive && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-10">
          <button 
            className="w-full flex items-center justify-center space-x-3 h-16 rounded-[1.5rem] bg-slate-50 text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all font-black text-[10px] uppercase tracking-[0.2em] border border-slate-100/50"
            onClick={() => {
              document.cookie = "admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
              window.location.href = "/admin/login";
            }}
          >
            <LogOut className="w-4 h-4" />
            <span>Terminate Session</span>
          </button>
        </div>

        {/* Decor */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative">
        {/* Top Header */}
        <header className="h-28 bg-white/70 backdrop-blur-2xl border-b border-slate-100 flex items-center justify-between px-14 sticky top-0 z-30">
          <div className="flex items-center space-x-4">
            <div className="w-1.5 h-8 bg-slate-950 rounded-full" />
            <div>
              <h2 className="text-xl font-black text-slate-950 tracking-tighter uppercase leading-none">Management Console</h2>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">IKM UI Digital Ecosystem</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Authenticated As</p>
              <p className="text-sm font-black text-slate-950 italic uppercase">System Administrator</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center shadow-xl shadow-slate-200">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
        </header>

        <div className="p-14 relative z-10">
          {children}
        </div>

        {/* Background Decor */}
        <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[150px] pointer-events-none z-0" />
      </main>
    </div>
  );
}
