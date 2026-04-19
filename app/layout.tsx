import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { ThemeProvider } from "@/components/ThemeContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SINTESA KARSA 2026 | MPM FTUI Fraksi Elektro",
  description:
    "Garda Aspiratif, Progresif, dan Transparan — Platform Digital MPM FTUI Fraksi Elektro 2026.",
  keywords: ["MPM FTUI", "Fraksi Elektro", "Sintesa Karsa", "2026"],
  icons: {
    icon: "/logo-mpm.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${geistMono.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className={`${plusJakartaSans.className} min-h-screen bg-background text-foreground antialiased selection:bg-primary/20`}>
        <Providers>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
