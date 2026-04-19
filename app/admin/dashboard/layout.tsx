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
  User,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/admin/dashboard" },
  { icon: Activity, label: "Activities", href: "/admin/dashboard/activities" },
  { icon: Archive, label: "Archives", href: "/admin/dashboard/archives" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-primary/10 selection:text-primary overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-80 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 flex-col z-20 sticky top-0 h-screen overflow-hidden">
        <div className="p-10">
          <Link href="/" className="flex flex-col space-y-2 group">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-slate-950 dark:bg-slate-50 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-2xl shadow-slate-200 dark:shadow-none">
                <ShieldCheck className="w-6 h-6 text-white dark:text-slate-950" />
              </div>
              <div>
                <span className="text-xl font-black text-slate-950 dark:text-white tracking-tighter block leading-none font-heading uppercase">SINTESA KARSA</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.3em]">Admin Node</span>
              </div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-8 space-y-2 overflow-y-auto">
          <div className="mb-6 px-4">
            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Core Navigation</p>
          </div>
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));
            return (
              <SidebarLink key={item.href} item={item} isActive={isActive} />
            );
          })}
        </nav>

        <LogoutSection />
      </aside>

      {/* Mobile Sidebar (Slide-over) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[100] lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-[320px] bg-white dark:bg-slate-900 z-[101] lg:hidden flex flex-col border-r border-slate-100 dark:border-slate-800"
            >
              <div className="p-8 border-b border-slate-50 dark:border-slate-800 mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-950 dark:bg-slate-50 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-white dark:text-slate-950" />
                  </div>
                  <span className="text-lg font-black text-slate-950 dark:text-white tracking-tighter font-heading uppercase">SINTESA</span>
                </div>
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <nav className="flex-1 px-6 space-y-2 overflow-y-auto">
                {sidebarItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));
                  return (
                    <SidebarLink key={item.href} item={item} isActive={isActive} onClick={() => setIsSidebarOpen(false)} />
                  );
                })}
              </nav>

              <LogoutSection isMobile />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 relative min-w-0">
        {/* Top Header */}
        <header className="h-20 lg:h-28 bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-6 lg:px-14 sticky top-0 z-30">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-300"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="w-1.5 h-8 bg-slate-950 dark:bg-slate-50 rounded-full" />
              <div>
                <h2 className="text-base lg:text-xl font-black text-slate-950 dark:text-white tracking-tighter uppercase leading-none font-heading">Management Console</h2>
                <p className="text-[9px] lg:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">IKM UI Digital Ecosystem</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 lg:space-x-8">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">Authenticated As</p>
              <p className="text-xs lg:text-sm font-black text-slate-950 dark:text-white uppercase font-heading tracking-tight">System Admin</p>
            </div>
            <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-slate-950 dark:bg-slate-50 flex items-center justify-center shadow-xl shadow-slate-200 dark:shadow-none">
              <User className="w-5 h-5 lg:w-6 lg:h-6 text-white dark:text-slate-950" />
            </div>
          </div>
        </header>

        <div className="p-6 lg:p-14 relative z-10">
          {children}
        </div>

        {/* Background Decor */}
        <div className="fixed top-0 right-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-primary/5 rounded-full blur-[100px] lg:blur-[150px] pointer-events-none z-0" />
        <div className="fixed bottom-0 left-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-blue-500/5 rounded-full blur-[100px] lg:blur-[150px] pointer-events-none z-0" />
      </main>
    </div>
  );
}

function SidebarLink({ item, isActive, onClick }: any) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center justify-between px-5 md:px-6 py-4 md:py-5 rounded-[1.25rem] md:rounded-[1.5rem] transition-all duration-500 group relative",
        isActive 
          ? "bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 shadow-2xl shadow-slate-200 dark:shadow-none" 
          : "text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800"
      )}
    >
      <div className="flex items-center space-x-4 md:space-x-5">
        <div className={cn(
          "w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all duration-500",
          isActive ? "bg-white dark:bg-slate-950 text-slate-950 dark:text-white" : "bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 group-hover:border-slate-200"
        )}>
          <item.icon className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <span className="font-black text-[10px] md:text-xs uppercase tracking-widest">{item.label}</span>
      </div>
      {isActive && (
        <motion.div 
          layoutId="active-indicator"
          className="w-1.5 h-1.5 rounded-full bg-primary"
        />
      )}
    </Link>
  );
}

function LogoutSection({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div className={cn(isMobile ? "p-8" : "p-10")}>
      <button 
        className="w-full flex items-center justify-center space-x-3 h-14 md:h-16 rounded-[1.25rem] md:rounded-[1.5rem] bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-600 dark:hover:text-red-400 transition-all font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] border border-slate-100/50 dark:border-slate-800/50"
        onClick={() => {
          document.cookie = "admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
          window.location.href = "/admin/login";
        }}
      >
        <LogOut className="w-4 h-4 shadow-sm" />
        <span>Terminate Session</span>
      </button>
    </div>
  );
}
