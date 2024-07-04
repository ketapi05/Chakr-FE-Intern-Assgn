'use client'
import React, {useState} from 'react'
import { Nav } from '@/components/ui/nav';
import { Separator } from '@/components/ui/separator';

type Props = {}

import {
    LayoutDashboardIcon,
    Search,
    Building2,
    Users2,
    PanelLeftClose,
    PanelRightClose
  } from "lucide-react"
import { Button } from '@/components/ui/button';

export default function SideNavbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  function toggleSidebar(){
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative min-w-[120px] px-3 pt-8 h-[100vh]">
      <div className="absolute right-[-5px] top-3">
           <Button
            onClick={toggleSidebar}
            variant="ghost"
            className="p-2 h-8 w-8"
            >
              {isOpen? <PanelRightClose /> : <PanelLeftClose />}
            </Button>
      </div>
        <Nav
            isCollapsed={isOpen}
            links={[
              {
                title: "Dashboard",
                href: "/",
                icon: LayoutDashboardIcon,
                variant: "default",
              },
            ]}
        />
        {!isOpen && <Separator type="line" />}
        <Nav
            isCollapsed={isOpen}
            links={[
              {
                title: "Search",
                href: "/search",
                icon: Search,
                variant: "ghost",
              },
            ]}
          />
          {!isOpen && <Separator type="text" text="Workspace" />}
          <Nav
            isCollapsed={isOpen}
            links={[
              {
                title: "People",
                href: "/people",
                icon: Users2,
                variant: "ghost",
              },
              {
                title: "Companies",
                href: "/companies",
                icon: Building2,
                variant: "ghost",
              },
            ]}
          />
    </div>
  )
}