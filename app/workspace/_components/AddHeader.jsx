import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function AddHeader() {
  return (
    <div className='w-full justify-between items-center shadow-md p-2 '>
      <SidebarTrigger/>
      <UserButton/>
    </div>
  )
}

export default AddHeader