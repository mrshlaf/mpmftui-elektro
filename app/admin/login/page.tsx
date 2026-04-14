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
    <div className="min-h-screen flex items-center justify-center p-6 relative bg-white overflow-hidden font-sans">
      {/* Back Button */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors group z-20"
      >
        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-all shadow-sm">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </div>
        <span className="text-sm font-black uppercase tracking-widest hidden sm:block">Back to Home</span>
      </Link>

      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 text-slate-100/50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg z-10"
      >
        <div className="bg-white border border-slate-100 p-10 md:p-14 rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.06)] relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="mx-auto w-20 h-20 rounded-[2rem] bg-slate-900 flex items-center justify-center mb-8 shadow-2xl">
              <ShieldCheck className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter mb-3">SECURE PORTAL</h1>
            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">Sintesa Karsa Admin Access</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Access Identity</label>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="h-16 bg-slate-50 border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary/20 px-6 transition-all font-semibold"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Universal Key</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-16 bg-slate-50 border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary/20 px-6 transition-all font-semibold"
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-center space-x-3 text-red-600"
                >
                  <ShieldAlert className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-black uppercase tracking-widest">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-16 bg-slate-900 text-white hover:bg-slate-800 font-black text-lg rounded-2xl shadow-xl transition-all active:scale-95 group"
            >
              {isLoading ? "AUTHORIZING..." : (
                <span className="flex items-center">
                  INITIALIZE SESSION
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              )}
            </Button>
          </form>

          {/* Footer decoration */}
          <div className="mt-14 pt-10 border-t border-slate-50 text-center flex items-center justify-center space-x-2">
            <Sparkles className="w-3 h-3 text-primary animate-pulse" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
              Precision Built for 2026
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
