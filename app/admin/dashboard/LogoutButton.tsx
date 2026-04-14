"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <Button
      variant="ghost"
      className="w-full flex items-center justify-start space-x-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
      onClick={handleLogout}
    >
      <LogOut className="w-5 h-5" />
      <span>Log Out</span>
    </Button>
  );
}
