import { Home, FileUser } from 'lucide-react';

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

// Menu items.
const navigationLinks = [
    {
        title: 'Home',
        url: '/',
        icon: Home,
    },
    {
        title: 'resume-parser',
        url: '/resume-parser',
        icon: FileUser,
    },
];

export function AppSidebar() {
    return (
        <Sidebar className='py-1' collapsible='icon'>
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
