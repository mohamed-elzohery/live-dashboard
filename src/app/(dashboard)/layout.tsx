import React, { PropsWithChildren } from "react";
import ConvexClientProvider from "../providers/convex-client-provider";
import { Metadata } from "next";
import "../globals.css";
import { Inter } from "next/font/google";
import SidebarComponent from "@/components/ui/sidebar";
import OrgSidebar from "@/components/ui/org-sidebar";
import NavBar from "@/components/ui/navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Live Dashboard",
  description:
    "A live dashboard for your projects. collaborate with your team.",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ConvexClientProvider>
          <main className="grid grid-cols-[6rem_0rem_1fr] lg:grid-cols-[6rem_20rem_1fr] grid-rows-[5rem_1fr] h-screen content-stretch">
            <SidebarComponent className="row-span-2 col-start-1 col-end-2" />
            <OrgSidebar className="row-span-2 col-start-2 col-end-3 " />
            <NavBar className="row-start-1 row-end-2 col-start-3 col-end-4" />
            <main className="row-start-2 row-end-3 col-start-3 col-end-4 bg-gray-100 ">
              {children}
            </main>
          </main>
        </ConvexClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
