import { cookies } from "next/headers"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import {
  SidebarProvider,
} from "@/components/ui/sidebar"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {  
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className="flex min-h-screen flex-col lg:flex-row w-full">
        <AppSidebar className="lg:w-64 lg:block hidden"/>        
        <main className="flex-1 overflow-y-auto w-full">
          {children}
        </main>
        {/* <SidebarInset className="flex-1 flex flex-col w-full">
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
          </header>
          <main className="flex-1 overflow-y-auto w-full">
            {children}
          </main>
        </SidebarInset> */}
      </div>
    </SidebarProvider>
  )
} 