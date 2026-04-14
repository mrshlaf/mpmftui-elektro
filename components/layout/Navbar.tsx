"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, MessageCircle, Mail, Lock as LockIcon, Zap, ArrowUpRight } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Profil", href: "/profil" },
    { name: "Produk", href: "/profrak" },
    { name: "Ejawantah", href: "/ejawantah" },
    { name: "Transparansi", href: "/transparansi" },
  ];

  const isSolid = scrolled || pathname !== "/";

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 lg:p-6 transition-all duration-300">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-5xl transition-all duration-500 rounded-[2.5rem] px-8 py-3 md:py-4 flex items-center justify-between ${
          scrolled 
            ? "glass shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-white/40" 
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-950 dark:bg-white rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]">
            <Zap className="w-6 h-6 text-white dark:text-slate-950" />
          </div>
          <div className="hidden sm:block">
            <span className="text-slate-900 dark:text-white font-black tracking-tight text-lg block leading-none uppercase">SINTESA KARSA</span>
            <span className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">Fraksi Elektro 2026</span>
          </div>
        </Link>


        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                pathname === link.href 
                  ? "bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 shadow-xl shadow-slate-200 dark:shadow-none" 
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="w-[1px] h-4 bg-slate-100 dark:bg-slate-800 mx-4" />

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/admin/login" title="Admin Access">
              <div className="p-2.5 rounded-full border border-slate-100 dark:border-slate-800 text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                <LockIcon className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-11 h-11 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-950 dark:text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-24 left-4 right-4 bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-2xl md:hidden border border-slate-100 dark:border-slate-800"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between p-5 rounded-3xl transition-all ${
                    pathname === link.href 
                      ? "bg-slate-50 dark:bg-slate-800 text-slate-950 dark:text-white font-black" 
                      : "text-slate-500 dark:text-slate-400 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-sm uppercase tracking-widest">{link.name}</span>
                  <ArrowUpRight className={`w-4 h-4 ${pathname === link.href ? "opacity-100" : "opacity-0"}`} />
                </Link>
              ))}
              <div className="h-4" />
              <div className="flex items-center justify-between px-2 py-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Toggle Theme</span>
                <ThemeToggle />
              </div>
              <Link
                href="/admin/login"
                className="flex items-center justify-center space-x-3 bg-slate-950 dark:bg-slate-900 text-white p-5 rounded-3xl font-black text-xs uppercase tracking-[0.2em]"
                onClick={() => setIsOpen(false)}
              >
                <LockIcon className="w-4 h-4" />
                <span>Admin Portal</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
