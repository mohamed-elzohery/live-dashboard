import React from "react";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside className={`bg-blue-700 text-white ${className || ""}`}>
      Sidebar
    </aside>
  );
};

export default Sidebar;
