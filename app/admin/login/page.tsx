"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldAlert, Sparkles, ArrowRight, ChevronLeft, ShieldCheck, Terminal, Fingerprint } from "lucide-react";
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
        setError(data.error ?? "Access Permission Denied.");
      }
    } catch {
      setError("Network infrastructure failure.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative bg-slate-950 overflow-hidden font-sans selection:bg-primary/20">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,209,255,0.05),transparent_70%)]" />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-full h-full bg-primary/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-blue-600/10 rounded-full blur-[120px]" 
        />
      </div>

      {/* Back Button */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center space-x-3 text-slate-500 hover:text-white transition-all group z-50 font-heading"
      >
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-800 flex items-center justify-center group-hover:bg-slate-900 transition-all shadow-sm">
          <ChevronLeft className="w-4 h-4 md:w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] hidden sm:block">Return Home</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="w-full max-w-[540px] z-10"
      >
        <div className="glass-dark p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden group border-slate-800/50">
          
          {/* Header */}
          <div className="text-center mb-12 relative z-10">
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mx-auto w-20 h-20 md:w-24 md:h-24 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-8 shadow-[0_20px_50px_rgba(0,209,255,0.3)]"
            >
              <Fingerprint className="w-10 h-10 md:w-12 md:h-12 text-slate-950" />
            </motion.div>
            
            <div className="space-y-1">
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase font-heading leading-tight">SINTESA</h1>
                <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 tracking-tighter uppercase font-heading leading-tight">AUTH NODE</h1>
            </div>

            <div className="mt-8 flex items-center justify-center py-2.5 px-6 bg-white/5 rounded-full w-fit mx-auto border border-white/10 backdrop-blur-md">
                <Terminal className="w-3.5 h-3.5 text-primary mr-3" />
              <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.4em] leading-none">Security Protocol Active</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="space-y-3">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Identity Hub</label>
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              </div>
              <Input
                type="text"
                placeholder="USERNAME"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="h-16 md:h-20 bg-white/5 border-white/10 rounded-[1.5rem] md:rounded-[2rem] text-white placeholder:text-slate-600 focus:border-primary/50 focus:ring-primary/10 px-8 transition-all font-black text-xs md:text-sm uppercase tracking-widest shadow-inner"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Universal Key</label>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
              </div>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-16 md:h-20 bg-white/5 border-white/10 rounded-[1.5rem] md:rounded-[2rem] text-white placeholder:text-slate-600 focus:border-primary/50 focus:ring-primary/10 px-8 transition-all font-black text-xs md:text-sm shadow-inner"
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-red-500/10 border border-red-500/20 rounded-[1.5rem] p-5 flex items-center space-x-4 text-red-500"
                >
                  <ShieldAlert className="w-5 h-5 shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-18 md:h-22 bg-white text-slate-950 hover:bg-primary transition-all font-black text-[11px] md:text-xs uppercase tracking-[0.3em] rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_50px_rgba(255,255,255,0.1)] active:scale-[0.98] group overflow-hidden relative"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
              {isLoading ? "AUTHORIZING..." : (
                <span className="flex items-center">
                  Authorize Node Access
                  <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              )}
            </Button>
          </form>

          {/* Footer decoration */}
          <div className="mt-12 pt-8 border-t border-white/5 text-center flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3">
                <div className="p-1 px-3 bg-slate-900 border border-white/10 rounded-md">
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">v2.0.26 Final</span>
                </div>
            </div>
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.4em] max-w-[200px]">
              Advanced Governance Infrastructure
            </span>
          </div>

          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] z-20 opacity-20" />
        </div>
      </motion.div>
    </div>
  );
}
