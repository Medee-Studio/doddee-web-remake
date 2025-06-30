"use client"

import Link from "next/link"
import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar"

export interface NavItem {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
    isActive?: boolean
  }[]
}

export function NavMain({ items }: { items: NavItem[] }) {
  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Plateforme</SidebarGroupLabel> */}
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}> {/* Pass isActive to SidebarMenuItem if it supports it */}
            {item.items && item.items.length > 0 ? (
              <Collapsible
                asChild
                defaultOpen={item.isActive} // Controls if the collapsible section is open by default
                className="group/collapsible"
              >
                <>
                  <CollapsibleTrigger asChild>
                    {/* SidebarMenuButton might have its own active state styling or accept isActive */} 
                    <SidebarMenuButton tooltip={item.title} isActive={item.isActive}> 
                      {item.icon && <item.icon className="h-4 w-4" />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        // For sub-items, SidebarMenuItem or a simple Link might be used depending on styling needs.
                        // Assuming SidebarMenuItem can be used here for consistency.
                        <SidebarMenuItem key={subItem.title}>
                           <Link href={subItem.url} className="flex w-full items-center rounded-md p-2 text-sm hover:bg-muted">
                            {/* Sub-item icons can be added here if needed */} 
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              </Collapsible>
            ) : (
              // Direct link item
              <SidebarMenuButton asChild tooltip={item.title} isActive={item.isActive}>
                <Link href={item.url}>
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
} 