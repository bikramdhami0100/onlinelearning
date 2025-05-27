import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Book, Compass, LayoutDashboard, Magnet, PencilRulerIcon, UserCircle2Icon, WalletCards } from "lucide-react";
import Link from "next/link";
import AddNewCourseDialog from "./AddNewCourseDialog";
 function AppSidebar() {
  const SideBarOption=[
    {
       title:'Dashboard',
       icon:LayoutDashboard,
       path:'/workspace'
    },
    {
       title:'My Learning',
       icon:Book,
       path:'/workspace/my-learning'
    },
    {
       title:'Explore Courses',
       icon:Compass,
       path:'/workspace/explore-courses'
    },{
       title:'AI Tools',
       icon:PencilRulerIcon,
       path:'/workspace/ai-tools'
    },
    {
       title:'Billing',
       icon:WalletCards,
       path:'/workspace/billing'
    },
    {
       title:'Profile',
       icon:UserCircle2Icon,
       path:'/workspace/profile'
    }
  ]
  return (
    <Sidebar>
      <SidebarHeader className={'p-4'} >
      <Image src="/logo.svg" alt="logo" width={170} height={48}  />
       </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
          <AddNewCourseDialog>
          <Button>Create a new Course</Button>
          </AddNewCourseDialog>
         </SidebarGroup>
        <SidebarGroup >
           <SidebarContent>
                <SidebarMenu>
                      {SideBarOption.map((option)=>(
                        <SidebarMenuItem key={option.title}>
                          <SidebarMenuButton>
                           <Link  className='text-[17px] flex cursor-pointer items-center gap-2' href={option?.path}>
                            <option.icon  className=" h-7 w-7  "/>
                            <span>{option.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                </SidebarMenu>
           </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
export default AppSidebar;
