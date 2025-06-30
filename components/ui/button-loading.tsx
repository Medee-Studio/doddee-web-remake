"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface ButtonLoadingProps {
  children?: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | "full" | null | undefined;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
}

export function ButtonLoading({ 
  children = "Chargement...", 
  className,
  size = "default",
  variant = "default"
}: ButtonLoadingProps) {
  // Handle "full" size by converting to default and adding w-full class
  const buttonSize = size === "full" ? "default" : size;
  const buttonClassName = size === "full" ? `w-full ${className || ""}` : className;
  
  return (
    <Button disabled className={buttonClassName} size={buttonSize} variant={variant}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      {children}
    </Button>
  );
}