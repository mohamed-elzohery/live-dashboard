"use client";
import { OrganizationSwitcher } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { Button } from "../button";
import { LayoutDashboard, Star } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface OrgSidebarProps {
  className?: string;
}

const OrgSidebar = ({ className }: OrgSidebarProps) => {
  const searchParams = useSearchParams();
  return (
    <aside
      className={`lg:flex flex-col gap-6 p-2 text-white hidden ${className || ""} `}
    >
      <header className="flex gap-4 p-4 items-center bg-white rounded-lg">
        <Image src="/logo.svg" alt="Live Dashboard" width={60} height={60} />
        <h1 className="font-bold text-3xl text-black">Board</h1>
      </header>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "6px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
              fontSize: "1.6rem",
            },
          },
        }}
      />
      <nav className="flex flex-col">
        <Button
          className="flex justify-start items-center gap-4 p-8  text-slate-900"
          variant={searchParams.get("favorites") ? "ghost" : "secondary"}
          asChild
        >
          <Link href="/" className="flex items-center gap-2">
            <LayoutDashboard className="w-24 h-24" />
            <span>Team Boards</span>
          </Link>
        </Button>
        <Button
          className="flex justify-start items-center gap-4 p-8  text-slate-900"
          variant={searchParams.get("favorites") ? "secondary" : "ghost"}
          asChild
        >
          <Link
            href={{
              pathname: "/",
              query: { favorites: true },
            }}
            className="flex items-center gap-2"
          >
            <Star size={32} />
            <span>Favorites Boards</span>
          </Link>
        </Button>
      </nav>
    </aside>
  );
};

export default OrgSidebar;
