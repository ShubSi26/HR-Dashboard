"use client";

import SideMenu from "@/components/sideMenu";
import { SessionProvider } from "next-auth/react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <SessionProvider>
        <SideMenu>
            {children}
        </SideMenu>
    </SessionProvider>
  );
}
