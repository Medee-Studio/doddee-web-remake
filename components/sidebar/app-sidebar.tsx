"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  BarChart3,
  Book,
  Calendar,
  Megaphone,
  Plus,
  CreditCard,
} from "lucide-react"

import { NavMain, type NavItem } from "./nav-main"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import AppIcon from "@/components/common/app-icon"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      title: "Tableau de bord",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: pathname === "/dashboard",
    },
    {
      title: "Actions",
      url: "/dashboard/actions",
      icon: Plus,
      isActive: pathname === "/dashboard/actions",
    }, {
      title: "Mes cours",
      url: "/dashboard/courses",
      icon: Book,
      isActive: pathname === "/dashboard/courses",
    },
    {
      title: "Plan d'action",
      url: "/dashboard/action-plan",
      icon: Calendar,
      isActive: pathname === "/dashboard/action-plan",
    },
    {
      title: "Eco profil",
      url: "/dashboard/eco-profile",
      icon: Megaphone,
      isActive: pathname === "/dashboard/eco-profile",
    },
    {
      title: "Mes KPIs",
      url: "/dashboard/kpis",
      icon: BarChart3,
      isActive: pathname === "/dashboard/kpis",
    },
    {
      title: "Abonnement",
      url: "/dashboard/subscription",
      icon: CreditCard,
      isActive: pathname === "/dashboard/subscription",
    }
  ]

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground border-b flex-row items-center h-16">
        <AppIcon className="h-12" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
} 