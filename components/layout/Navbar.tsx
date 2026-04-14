"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, MessageCircle, Mail, Lock as LockIcon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Aspirasi", href: "https://wa.me/6285213695654" },
    { name: "Oprec", href: "http://bit.ly/OprecStaffMPM2026" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-4xl transition-all duration-300 rounded-full px-6 py-3 flex items-center justify-between ${
          scrolled 
            ? "glass-primary bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-slate-200" 
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 shadow-md">
            <span className="text-primary font-bold text-lg">S</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-slate-900 font-black tracking-tight">SINTESA KARSA</span>
            <span className="block text-[10px] text-primary font-black -mt-1 uppercase tracking-widest">Fraksi Elektro</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-600 hover:text-slate-950 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          
          <div className="h-4 w-[1px] bg-slate-200" />

          <div className="flex items-center space-x-4">
            <Link href="https://www.instagram.com/mpmftui.elektro" target="_blank" className="text-slate-500 hover:text-primary transition-colors">
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link href="mailto:mpmftui.fraksielektro@gmail.com" className="text-slate-500 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
            </Link>
            <div className="h-4 w-[1px] bg-slate-200" />
            <Link href="/admin/login" title="Admin Login" className="text-slate-500 hover:text-slate-900 transition-colors p-1.5 rounded-full hover:bg-slate-100">
              <LockIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-white p-6 rounded-[2.5rem] shadow-2xl md:hidden flex flex-col space-y-2 border border-slate-100"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-black text-slate-900 bg-slate-50 p-5 rounded-2xl hover:bg-primary/5 hover:text-primary transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/admin/login"
              className="mt-4 flex items-center justify-center space-x-2 text-primary bg-primary/5 p-6 rounded-2xl hover:bg-primary/10 transition-all font-black text-lg"
              onClick={() => setIsOpen(false)}
            >
              <LockIcon className="w-5 h-5" />
              <span>ADMIN ACCESS</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
