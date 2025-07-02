import * as React from "react"
import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2", 
    lg: "h-8 w-8 border-[3px]"
  }

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-transparent border-t-current",
        sizeClasses[size],
        className
      )}
    />
  )
}

interface LoadingDotsProps {
  className?: string
}

export function LoadingDots({ className }: LoadingDotsProps) {
  return (
    <div className={cn("flex space-x-1", className)}>
      <div className="h-2 w-2 bg-current rounded-full animate-pulse [animation-delay:-0.3s]" />
      <div className="h-2 w-2 bg-current rounded-full animate-pulse [animation-delay:-0.15s]" />
      <div className="h-2 w-2 bg-current rounded-full animate-pulse" />
    </div>
  )
}

interface LoadingPageProps {
  title?: string
  description?: string
  className?: string
}

export function LoadingPage({ 
  title = "Chargement...", 
  description, 
  className 
}: LoadingPageProps) {
  return (
    <div className={cn(
      "flex min-h-screen items-center justify-center bg-background",
      className
    )}>
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4 text-primary" />
        <h2 className="text-lg font-semibold text-foreground mb-2">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  )
}

interface LoadingCardProps {
  className?: string
}

export function LoadingCard({ className }: LoadingCardProps) {
  return (
    <div className={cn(
      "rounded-lg border bg-card p-6 shadow-sm animate-pulse",
      className
    )}>
      <div className="space-y-3">
        <div className="h-4 bg-muted rounded w-3/4" />
        <div className="h-3 bg-muted rounded w-1/2" />
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded" />
          <div className="h-3 bg-muted rounded w-5/6" />
        </div>
      </div>
    </div>
  )
}

interface LoadingSkeletonProps {
  lines?: number
  className?: string
}

export function LoadingSkeleton({ lines = 3, className }: LoadingSkeletonProps) {
  return (
    <div className={cn("space-y-2 animate-pulse", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i}
          className={cn(
            "h-3 bg-muted rounded",
            i === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  )
}