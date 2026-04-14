"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, MessageSquare, BookOpen, ArrowRight } from "lucide-react";

const cards = [
  {
    id: "frakzip",
    icon: FileText,
    label: "FrakZIP",
    title: "Fraksi Zona Inisiatif & Pengawasan",
    description:
      "Mengawasi implementasi kebijakan dan mendorong inisiatif legislatif yang berpihak pada mahasiswa Elektro.",
    color: "#00F5FF",
    href: "/frakzip",
  },
  {
    id: "forum",
    icon: MessageSquare,
    label: "Pengajuan Forum",
    title: "Bawa Aspirasi ke Forum",
    description:
      "Sampaikan aspirasi, keluhan, atau usulan kebijakan secara terstruktur kepada Fraksi Elektro.",
    color: "#FFDD00",
    href: "/forum",
  },
  {
    id: "uud",
    icon: BookOpen,
    label: "UUD IKM",
    title: "Undang-Undang Dasar IKM UI",
    description:
      "Akses lengkap seluruh dokumen legislatif, TAP MPM, dan produk hukum IKM UI.",
    color: "#00F5FF",
    href: "/archives",
  },
];

export default function TriasSection() {
  return (
    <section id="trias" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1a3a]/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Layanan Legislatif
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white tracking-tight"
          >
            Tiga Pilar Utama
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <Link href={card.href} className="group block h-full">
                <div
                  className="h-full p-8 rounded-2xl border bg-card transition-all duration-300 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
                  style={{ borderColor: `${card.color}20` }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 group-hover:opacity-100 opacity-50"
                    style={{ background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}
                  >
                    <card.icon className="w-6 h-6" style={{ color: card.color }} />
                  </div>

                  {/* Badge */}
                  <span
                    className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                    style={{
                      background: `${card.color}15`,
                      color: card.color,
                      border: `1px solid ${card.color}25`,
                    }}
                  >
                    {card.label}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                    style={{ color: card.color }}
                  >
                    Selengkapnya
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
