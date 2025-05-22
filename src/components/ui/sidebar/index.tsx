import React from "react";
import NewButton from "./NewButton";
import List from "./List";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside
      className={`bg-blue-900 text-white flex flex-col items-center gap-4 p-4 py-8 ${className || ""}`}
    >
      <NewButton />
      <List />
    </aside>
  );
};

export default Sidebar;
