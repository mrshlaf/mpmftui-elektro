import Link from "next/link";
import { Zap, ExternalLink } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="font-bold text-white tracking-tight">
                Fraksi <span className="text-primary">Elektro</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              MPM FTUI Fraksi Elektro 2026. Garda Aspiratif, Progresif, dan Transparan.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Navigasi</h4>
            <ul className="space-y-2.5 text-sm">
              {["Activities", "FrakZIP", "Pengajuan Forum", "Arsip Legislatif"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Status</h4>
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm text-white">Open Recruitment</span>
            </div>
            <p className="text-muted-foreground text-xs">
              Fraksi Elektro sedang membuka pendaftaran anggota baru. Bergabunglah!
            </p>
            <div className="flex items-center gap-3 mt-4">
              <Link href="#" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="w-4 h-4" /> Instagram
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} MPM FTUI Fraksi Elektro. All rights reserved.</p>
          <p className="text-primary/60 font-mono">#SintesaKarsa2026</p>
        </div>
      </div>
    </footer>
  );
}
