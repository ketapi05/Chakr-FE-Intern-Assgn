"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Users2,
  Building2,
  LayoutDashboardIcon,
  SquareCheckBig,
  BookUser,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function CommandDemo() {
  const router = useRouter();
  const handleClick = (element: string) => {
    return () => {
      router.push(`${element}`);
    };
  };
  return (
    <div className="flex  items-center w-[60vw]">
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem className="hover:cursor-pointer">
              <Users2 />
              <span onClick={handleClick("people")} className=" ml-2">
                People
              </span>
            </CommandItem>
            <CommandItem className="cursor-pointer">
              <Building2 />
              <span onClick={handleClick("companies")} className="ml-2">
                Companies
              </span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Common">
            <CommandItem className="hover:cursor-pointer">
              <LayoutDashboardIcon />
              <span onClick={handleClick("/")} className="ml-2">
                Dashboard
              </span>
              <CommandShortcut>⌘D</CommandShortcut>
            </CommandItem>
            <CommandItem className="hover:cursor-pointer">
              <SquareCheckBig />
              <span onClick={handleClick("tasks")} className="ml-2">
                Tasks
              </span>
              <CommandShortcut>⌘T</CommandShortcut>
            </CommandItem>
            <CommandItem className="hover:cursor-pointer">
              <BookUser />
              <span onClick={handleClick("support")} className="ml-2">
                Support
              </span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
