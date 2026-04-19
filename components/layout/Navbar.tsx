"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, MessageCircle, Mail, Lock as LockIcon, ArrowUpRight, ChevronRight } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Profil", href: "/profil" },
    { name: "Produk", href: "/profrak" },
    { name: "Ejawantah", href: "/ejawantah" },
    { name: "Transparansi", href: "/transparansi" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-0 transition-all duration-300">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`w-full transition-all duration-500 ease-in-out flex items-center justify-between px-6 py-4 md:px-12 md:py-5 border-b ${
          scrolled 
            ? "bg-white/70 dark:bg-slate-900/80 backdrop-blur-2xl border-slate-200/50 dark:border-slate-800/50 shadow-lg" 
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3 group relative z-50">
          <div className="w-10 h-10 md:w-12 md:h-12 transition-all duration-500 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-slate-100 shadow-sm group-hover:scale-105 relative">
            <Image 
              src="/logo-mpm.png" 
              alt="MPM Logo" 
              fill
              className="object-contain p-1.5" 
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-950 dark:text-white font-black tracking-tighter text-base md:text-lg block leading-none uppercase">SINTESA KARSA</span>
            <span className="text-[9px] text-primary font-black uppercase tracking-[0.2em] mt-0.5">Fraksi Elektro 2026</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center bg-slate-100/30 dark:bg-slate-800/20 p-1.5 rounded-full border border-slate-200/20 dark:border-white/5">
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? "text-white dark:text-slate-950" : "text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-slate-950 dark:bg-slate-50 rounded-full"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mr-2" />
          <ThemeToggle />
          <Link href="/admin/login">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-400 hover:text-primary transition-colors shadow-sm"
            >
              <LockIcon className="w-4 h-4" />
            </motion.div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-[110] w-11 h-11 flex items-center justify-center rounded-2xl transition-all duration-300 ${
              isOpen ? "bg-slate-100 dark:bg-slate-800 text-slate-950 dark:text-white rotate-90" : "bg-slate-50 dark:bg-slate-800 text-slate-950 dark:text-white"
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Modern Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white/40 dark:bg-slate-950/40 backdrop-blur-2xl z-[100] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 w-full md:w-[400px] h-screen bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl z-[105] lg:hidden border-l border-slate-100 dark:border-slate-800 p-8 pt-28"
            >
              <div className="flex flex-col h-full justify-between pb-10">
                <div className="space-y-2">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 px-4">Navigation Menu</div>
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between p-5 rounded-3xl transition-all hover:bg-slate-50 dark:hover:bg-slate-900 ${
                          pathname === link.href ? "bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800" : ""
                        }`}
                      >
                        <div className="flex items-center space-x-5">
                          <span className={`text-[10px] font-black text-slate-300 dark:text-slate-700`}>0{idx + 1}</span>
                          <span className={`text-2xl font-black uppercase tracking-tighter ${
                            pathname === link.href ? "text-primary" : "text-slate-500 dark:text-slate-400 group-hover:text-slate-950 dark:group-hover:text-white"
                          }`}>{link.name}</span>
                        </div>
                        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${pathname === link.href ? "text-primary rotate-90" : "text-slate-200 dark:text-slate-800 group-hover:translate-x-1"}`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-6 px-4">
                  <div className="h-px bg-slate-100 dark:bg-slate-900 w-full" />
                  <div className="flex flex-col space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Portal Akses</span>
                    <Link
                      href="/admin/login"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center space-x-3 bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl"
                    >
                      <LockIcon className="w-4 h-4" />
                      <span>Admin Portal Access</span>
                    </Link>
                  </div>
                  <div className="pt-4 flex justify-between items-center text-[10px] font-black text-slate-400 tracking-widest uppercase">
                    <span>MPM FTUI Elektro &bull; 2026</span>
                    <div className="flex space-x-4">
                      <Mail className="w-4 h-4" />
                      <MessageCircle className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
