import * as React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  action?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export function PageHeader({ 
  title, 
  description, 
  action, 
  children, 
  className 
}: PageHeaderProps) {
  return (
    <div className={cn("border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          {action && (
            <div className="flex items-center space-x-2">
              {action}
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}

interface PageTitleProps {
  title: string
  description?: string
  className?: string
}

export function PageTitle({ title, description, className }: PageTitleProps) {
  return (
    <div className={cn("space-y-0.5", className)}>
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}
    </div>
  )
}

interface PageContentProps {
  children: React.ReactNode
  className?: string
}

export function PageContent({ children, className }: PageContentProps) {
  return (
    <div className={cn("container flex-1 space-y-4 p-4 md:p-8", className)}>
      {children}
    </div>
  )
}

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={cn("flex min-h-screen flex-col", className)}>
      {children}
    </div>
  )
}