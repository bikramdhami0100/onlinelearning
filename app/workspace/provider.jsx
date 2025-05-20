import React from 'react'
import {SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar";
import AddSidebar from "./_components/AddSidebar";
import AddHeader from "./_components/AddHeader";
function WorkspaceProvider({children}) {
  return (
     <SidebarProvider>
     <AddSidebar />
    
    <div className=' w-full'>
        <AddHeader/>
        <div className=' p-8'>
        {children}
        </div>
    </div>
     </SidebarProvider>
  )
}

export default WorkspaceProvider;