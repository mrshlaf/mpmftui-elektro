"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Zap className="w-4 h-4 text-primary" />
          </div>
          <span className="font-bold text-white tracking-tight">
            Fraksi <span className="text-primary">Elektro</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#activities" className="text-muted-foreground hover:text-white transition-colors">
            Activities
          </Link>
          <Link href="#trias" className="text-muted-foreground hover:text-white transition-colors">
            Layanan
          </Link>
          <Link href="/archives" className="text-muted-foreground hover:text-white transition-colors">
            Arsip
          </Link>
          <Link
            href="/admin/login"
            className="px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Admin
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
