"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, ArrowRight, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Legislasi & Data": [
      { name: "FrakZIP (Pusat Data)", href: "https://drive.google.com/drive/folders/1x25CIo0VwHPzBSRx7QrsR_3virMq2WTK" },
      { name: "UUD IKM FTUI", href: "https://drive.google.com/file/d/1Dv-1e46Z31zwiHKvEK2S-yj2Dy8xpRev/view" },
      { name: "Arsip Kegiatan", href: "/#kegiatan" },
    ],
    "Layanan": [
      { name: "Pengajuan Forum", href: "https://drive.google.com/drive/folders/1x25CIo0VwHPzBSRx7QrsR_3virMq2WTK" },
      { name: "Saluran Aspirasi", href: "https://wa.me/6285213695654" },
      { name: "Oprec Staff", href: "http://bit.ly/OprecStaffMPM2026" },
    ],
  };

  return (
    <footer className="relative pt-32 pb-16 bg-white border-t border-slate-200 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 bg-slate-900 rounded-[1.25rem] flex items-center justify-center shadow-xl">
                <span className="text-white font-black text-3xl">S</span>
              </div>
              <div>
                <span className="text-2xl font-black text-slate-900 tracking-tighter">SINTESA KARSA</span>
                <span className="block text-[10px] text-primary font-black tracking-[0.3em] uppercase -mt-1">Fraksi Elektro 2026</span>
              </div>
            </Link>
            <p className="text-slate-600 text-lg max-w-sm mb-10 font-bold leading-relaxed">
              Mewujudkan aspirasi yang progresif dan transparan untuk IKM Departemen Teknik Elektro UI.
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
                  className="w-14 h-14 bg-slate-100 border border-slate-200 rounded-2xl flex items-center justify-center text-slate-600 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 shadow-sm"
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-slate-900 font-black mb-8 tracking-widest uppercase text-[10px]">{title}</h4>
              <ul className="space-y-5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-slate-950 transition-colors flex items-center group text-sm font-bold"
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
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-xs font-black uppercase tracking-widest">
            © {currentYear} Sintesa Karsa 2026. Made with Precision.
          </p>
          <div className="flex items-center space-x-8 text-[10px] font-black tracking-[0.2em] uppercase text-slate-600">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              DTE FTUI, Depok
            </div>
            <Link href="/admin/login" className="hover:text-slate-950 transition-colors bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 font-black">
              Internal Node
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
