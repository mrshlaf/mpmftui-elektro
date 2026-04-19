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
    <>
      <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] md:w-full md:max-w-fit px-0 md:px-6 transition-all duration-500`}>
        <motion.nav
          className={`flex items-center justify-between md:justify-start space-x-2 md:space-x-4 px-4 py-2.5 md:px-6 md:py-3.5 rounded-full border shadow-2xl transition-all duration-500 ${
            scrolled 
              ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-3xl border-slate-200/50 dark:border-slate-800/50 shadow-primary/10 scale-100" 
              : "bg-white/40 dark:bg-slate-950/40 backdrop-blur-2xl border-white/20 dark:border-white/5 scale-[1.02]"
          }`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2.5 mr-6 group relative z-50">
            <div className="w-9 h-9 md:w-11 md:h-11 transition-all duration-500 rounded-[0.9rem] bg-white flex items-center justify-center overflow-hidden border border-slate-100 shadow-sm group-hover:scale-105 group-hover:rotate-3 relative">
              <Image 
                src="/logo-mpm.png" 
                alt="MPM Logo" 
                fill
                className="object-contain p-1.5" 
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-slate-950 dark:text-white font-black tracking-tight text-sm md:text-base block leading-none uppercase">SINTESA KARSA</span>
              <span className="text-[8px] text-primary font-black uppercase tracking-[0.15em] mt-0.5 whitespace-nowrap">Fraksi Elektro 2026</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? "text-slate-950 dark:text-white" : "text-slate-500 hover:text-slate-950 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-primary/20 dark:bg-primary/30 rounded-full"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1" />
            <ThemeToggle />
            <Link href="/admin/login">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 hover:bg-primary transition-colors shadow-lg"
              >
                <LockIcon className="w-3.5 h-3.5" />
              </motion.div>
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-950 dark:bg-slate-50 text-white dark:text-slate-950 shadow-lg"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Modern Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white/40 dark:bg-slate-950/40 backdrop-blur-3xl z-[150]"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 w-full md:w-[400px] h-screen bg-white shadow-2xl dark:bg-slate-950 z-[160] border-l border-slate-100 dark:border-slate-800 p-8 pt-28"
            >
              <div className="flex flex-col h-full justify-between pb-10">
                <div className="space-y-2">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 px-4">Navigation Menu</div>
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + idx * 0.05 }}
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
    </>
  );
}
