"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, ArrowRight, ExternalLink, Globe, Layout, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Legislasi & Data": [
      { name: "FrakZIP (Pusat Data)", href: "https://drive.google.com/drive/folders/1x25CIo0VwHPzBSRx7QrsR_3virMq2WTK" },
      { name: "UUD IKM UI", href: "https://drive.google.com/file/d/1Dv-1e46Z31zwiHKvEK2S-yj2Dy8xpRev/view" },
      { name: "Arsip Kegiatan", href: "/#kegiatan" },
    ],
    "Layanan": [
      { name: "Pengajuan Forum", href: "https://drive.google.com/drive/folders/1x25CIo0VwHPzBSRx7QrsR_3virMq2WTK" },
      { name: "Saluran Aspirasi", href: "https://wa.me/6285213695654" },
      { name: "Oprec Staff", href: "http://bit.ly/OprecStaffMPM2026" },
    ],
  };

  return (
    <footer className="relative pt-32 pb-12 bg-slate-950 border-t border-slate-900/50 overflow-hidden text-white font-outfit">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[180px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Identity Section */}
          <div className="lg:col-span-5 space-y-10 focus-within:z-50">
            <Link href="/" className="inline-flex items-center space-x-5 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] overflow-hidden">
                <img src="/logo-mpm.png" alt="Logo MPM" className="w-full h-full object-contain p-2" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white tracking-tighter block leading-none uppercase">SINTESA KARSA</span>
                <span className="text-[11px] text-primary font-black tracking-[0.4em] uppercase mt-1">Fraksi Elektro 2026</span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-xl max-w-md font-bold leading-relaxed">
              Mewujudkan aspirasi yang progresif dan transparan untuk seluruh Warga Teknik Elektro UI.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: ExternalLink, href: "https://www.instagram.com/mpmftui.elektro", label: "Instagram" },
                { icon: MessageCircle, href: "https://wa.me/6285213695654", label: "WhatsApp" },
                { icon: Mail, href: "mailto:mpmftui.fraksielektro@gmail.com", label: "Email" },
              ].map((social) => (
                <motion.div key={social.label} whileHover={{ y: -5, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={social.href}
                    target="_blank"
                    className="w-14 h-14 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all duration-300 shadow-xl"
                  >
                    <social.icon className="w-6 h-6" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="space-y-8">
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <h4 className="text-white font-black tracking-[0.3em] uppercase text-[10px]">{title}</h4>
                </div>
                <ul className="space-y-5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group text-base font-bold"
                      >
                        <motion.div className="mr-0 w-0 opacity-0 group-hover:w-5 group-hover:mr-2 group-hover:opacity-100 transition-all duration-500 text-primary flex items-center">
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                        <span className="group-hover:translate-x-1 transition-transform duration-500">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.25em]">
              © {currentYear} SINTESA KARSA 2026
            </p>
            <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.3em]">
              Garda Aspiratif &bull; Progresif &bull; Transparan
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-[10px] font-black tracking-[0.2em] uppercase text-slate-400">
            <div className="flex items-center hover:text-primary transition-colors cursor-default">
              <MapPin className="w-4 h-4 mr-2.5 text-primary" />
              DTE FTUI, Depok
            </div>
            <Link 
              href="/admin/login" 
              className="px-6 py-2.5 bg-slate-900/50 border border-white/5 rounded-xl text-slate-500 hover:text-white hover:border-white/20 hover:bg-slate-900 transition-all shadow-sm"
            >
              System Management
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
