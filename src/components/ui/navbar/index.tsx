import { UserButton } from "@clerk/nextjs";
import React from "react";
import Search from "./Search";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  return (
    <nav className={`flex justify-between items-center p-4 ${className || ""}`}>
      <Search />
      <UserButton />
    </nav>
  );
};

export default NavBar;
