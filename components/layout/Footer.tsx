"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, ArrowRight, ExternalLink, Zap } from "lucide-react";

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
    <footer className="relative pt-32 pb-16 bg-slate-950 border-t border-slate-900 overflow-hidden text-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-950/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-4 mb-8 group">
              <div className="w-14 h-14 bg-white rounded-[1.25rem] flex items-center justify-center transition-all duration-500 group-hover:-rotate-6 group-hover:shadow-2xl group-hover:shadow-white/10 overflow-hidden">
                <img src="/logo-mpm.png" alt="Logo MPM" className="w-full h-full object-contain p-2" />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tighter block leading-none">SINTESA KARSA</span>
                <span className="text-[10px] text-primary font-black tracking-[0.3em] uppercase">Fraksi Elektro 2026</span>
              </div>
            </Link>
            <p className="text-slate-400 text-lg max-w-sm mb-10 font-bold leading-relaxed">
              Mewujudkan aspirasi yang progresif dan transparan untuk Warga Departemen Teknik Elektro UI.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: ExternalLink, href: "https://www.instagram.com/mpmftui.elektro", label: "Instagram" },
                { icon: MessageCircle, href: "https://wa.me/6285213695654", label: "WhatsApp" },
                { icon: Mail, href: "mailto:mpmftui.fraksielektro@gmail.com", label: "Email" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="w-14 h-14 bg-white/5 backdrop-blur-sm rounded-[1.25rem] flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-black mb-8 tracking-widest uppercase text-[10px]">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-all flex items-center group text-sm font-bold"
                    >
                      <ArrowRight className="w-0 h-4 mr-0 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300 text-primary" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
            © {currentYear} SINTESA KARSA 2026. Built with Precision.
          </p>
          <div className="flex items-center space-x-8 text-[10px] font-black tracking-[0.2em] uppercase text-slate-400">
            <div className="flex items-center hover:text-primary transition-colors cursor-default">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              DTE FTUI, Depok
            </div>
            <Link href="/admin/login" className="hover:text-primary hover:bg-slate-900 transition-all bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 font-black text-slate-400">
              System Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
