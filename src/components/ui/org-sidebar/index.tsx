import React from "react";

interface OrgSidebarProps {
  className?: string;
}

const OrgSidebar = ({ className }: OrgSidebarProps) => {
  return (
    <aside className={`bg-red-300 text-white ${className || ""}`}>
      OrgSidebar
    </aside>
  );
};

export default OrgSidebar;
