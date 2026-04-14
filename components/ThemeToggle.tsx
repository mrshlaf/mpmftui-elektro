"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1 active:scale-90 group overflow-hidden"
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <motion.div
        initial={false}
        animate={{
          y: theme === "light" ? 0 : 40,
          opacity: theme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "backOut" }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-amber-500" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          y: theme === "dark" ? 0 : -40,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "backOut" }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-primary" />
      </motion.div>
      
      {/* Visual Feedback Ring */}
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-all duration-500" />
    </button>
  );
}
