import { UserButton } from "@clerk/nextjs";
import React from "react";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  return (
    <nav
      className={`flex justify-between items-center bg-green-500 text-white ${className || ""}`}
    >
      <UserButton />
      <form role="search" className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-l-md"
        />
      </form>
    </nav>
  );
};

export default NavBar;
