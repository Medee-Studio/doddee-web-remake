"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

interface DashboardHeaderProps {
  title?: string;
}

export function DashboardHeader({ title = "Votre tableau de bord" }: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b bg-background px-6 py-4">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="h-6 w-6" />
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      </div>
    </header>
  );
} 