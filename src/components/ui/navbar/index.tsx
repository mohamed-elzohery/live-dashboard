"use client";
import { useOrganization, UserButton } from "@clerk/nextjs";
import React from "react";
import Search from "./Search";
import { OrgSwitcher } from "../org-sidebar";
import InviteButton from "./InviteButton";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  const { organization } = useOrganization();
  return (
    <nav
      className={`flex justify-between items-center p-4 gap-4 ${className || ""}`}
    >
      <Search className="hidden lg:flex" />
      <div className="w-full max-w-xs flex lg:hidden">
        <OrgSwitcher />
      </div>
      <div className="hidden ml-auto lg:flex">
        {organization && <InviteButton />}
      </div>
      <UserButton />
    </nav>
  );
};

export default NavBar;
