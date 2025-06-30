"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

interface PageHeaderProps {
  title?: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b bg-background px-6 h-[64px]">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="h-6 w-6" />
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      </div>
    </header>
  );
} 