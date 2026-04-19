"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldAlert, Sparkles, ArrowRight, ChevronLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push("/admin/dashboard");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error ?? "Akses ditolak. Periksa kredensial.");
      }
    } catch {
      setError("Terjadi kesalahan jaringan.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative bg-background overflow-hidden font-sans selection:bg-primary/10">
      {/* Back Button */}
      <Link 
        href="/" 
        className="absolute top-12 left-12 flex items-center space-x-3 text-slate-400 hover:text-slate-950 dark:hover:text-white transition-all group z-20"
      >
        <div className="w-12 h-12 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center group-hover:bg-slate-50 dark:group-hover:bg-slate-800 transition-all shadow-sm">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] hidden sm:block">Exit Terminal</span>
      </Link>

      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[150px] -ml-40 -mb-40" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="w-full max-w-xl z-10"
      >
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-[0_40px_120px_rgba(0,0,0,0.06)] dark:shadow-none relative overflow-hidden group">
          
          {/* Header */}
          <div className="text-center mb-16 relative z-10">
            <motion.div 
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mx-auto w-24 h-24 rounded-[2.5rem] bg-slate-950 dark:bg-slate-50 flex items-center justify-center mb-10 shadow-2xl shadow-slate-200 dark:shadow-none"
            >
              <ShieldCheck className="w-10 h-10 text-white dark:text-slate-950" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-[0.05em] mb-2 leading-none uppercase font-heading">Secure</h1>
            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 tracking-[0.05em] leading-none uppercase font-heading">Workspace</h1>
            <div className="mt-6 flex items-center justify-center py-2 px-6 bg-slate-50 dark:bg-slate-800 rounded-full w-fit mx-auto border border-slate-100 dark:border-slate-700">
              <span className="text-slate-400 dark:text-slate-500 text-[9px] font-black uppercase tracking-[0.5em] leading-none">SINTESA KARSA 2026 Node</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] ml-1">Access Identity</label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="USERNAME"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="h-16 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700 rounded-[1.5rem] text-slate-950 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:border-primary focus:ring-primary/10 px-8 transition-all font-black text-sm uppercase tracking-widest shadow-sm dark:shadow-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em] ml-1">Universal Key</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-16 bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700 rounded-[1.5rem] text-slate-950 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:border-primary focus:ring-primary/10 px-8 transition-all font-black shadow-sm dark:shadow-none"
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-[1.5rem] p-5 flex items-center space-x-4 text-red-600 dark:text-red-400"
                >
                  <ShieldAlert className="w-5 h-5 shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-20 bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 hover:bg-primary dark:hover:bg-primary dark:hover:text-white font-black text-xs uppercase tracking-[0.3em] rounded-[1.5rem] shadow-2xl shadow-slate-200 dark:shadow-none transition-all active:scale-95 group"
            >
              {isLoading ? "AUTHORIZING..." : (
                <span className="flex items-center">
                  Initialize Terminal
                  <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-3 transition-transform" />
                </span>
              )}
            </Button>
          </form>

          {/* Footer decoration */}
          <div className="mt-16 pt-10 border-t border-slate-50 dark:border-slate-800 text-center flex items-center justify-center space-x-3">
            <Sparkles className="w-3 h-3 text-primary animate-pulse" />
            <span className="text-[9px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-[0.5em]">
              Precision Built for High-Stakes Governance
            </span>
          </div>

          {/* Card Decor */}
          <div className="absolute top-0 left-0 w-2 h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.div>
    </div>
  );
}
