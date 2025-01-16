import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Separator } from '@radix-ui/react-separator';
import { navigationLinks } from '@/utils/navigationlinks';

export function AppSidebar() {
    return (
        <Sidebar variant='sidebar' collapsible='icon' className='py-1'>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className='text-lg'>Bachleor POC</SidebarGroupLabel>
                    <Separator className='my-1' />
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navigationLinks.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
