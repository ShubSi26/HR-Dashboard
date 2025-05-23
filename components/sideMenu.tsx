"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function SidebarMenu({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>      ),
    },
    {
      label: "Analytics",
      href: "/analytics",
      icon: (
        <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chart-histogram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3v18h18" /><path d="M20 18v3" /><path d="M16 16v5" /><path d="M12 13v8" /><path d="M8 16v5" /><path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" /></svg>      ),
    },
    {
      label: "Bookmarks",
      href: "/bookmarks",
      icon: (
        <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" /><path d="M9 15l-4.5 4.5" /><path d="M14.5 4l5.5 5.5" /></svg>    
      ),
      },
  ];
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  return (
    <div
      className={cn(
        " h-full max-h-screen flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
                <div onClick={()=>signOut({ callbackUrl: "/login" })} className="cursor-pointer">
                    <SidebarLink  link={{
                    label: "Logout",
                    icon: (
                        <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>      ),
                    }} />
                </div>
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: session?.user?.name!,
                icon: (
                  <img
                    src={session?.user?.image!} 
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {children}
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler text-white icons-tabler-outline icon-tabler-topology-star-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M6 12h4" /><path d="M14 12h4" /><path d="M15 7l-2 3" /><path d="M9 7l2 3" /><path d="M11 14l-2 3" /><path d="M13 14l2 3" /></svg>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        HR Dashboard
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler text-white icons-tabler-outline icon-tabler-topology-star-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" /><path d="M6 12h4" /><path d="M14 12h4" /><path d="M15 7l-2 3" /><path d="M9 7l2 3" /><path d="M11 14l-2 3" /><path d="M13 14l2 3" /></svg>
    </a>
  );
};