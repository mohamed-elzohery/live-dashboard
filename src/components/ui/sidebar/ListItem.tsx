"use client";

import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";
import Hint from "../hint/Tooltip";

type ListItemProps = {
  id: string;
  name: string;
  imageUrl: string;
};
const ListItem: React.FC<ListItemProps> = ({ id, name, imageUrl }) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();
  const isActive = organization?.id === id;

  const handleClick = () => {
    if (isActive) return;
    setActive?.({ organization: id });
  };
  return (
    <li className="flex">
      <Hint label={name} side="right" align="center" sideOffset={12}>
        <button
          aria-label={name}
          className="cursor-pointer"
          onClick={handleClick}
        >
          <Image
            src={imageUrl}
            alt={name}
            width={40}
            height={40}
            className={cn(
              "rounded-md w-full opacity-75 hover:opacity-100 transition",
              {
                "opacity-100": isActive,
              }
            )}
          />
        </button>
      </Hint>
    </li>
  );
};

export default ListItem;
