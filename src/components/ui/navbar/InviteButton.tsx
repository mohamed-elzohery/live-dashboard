import React from "react";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "../dialog";
import { Button } from "../button";
import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

type InviteButtonProps = {
  className?: string;
};

const InviteButton: React.FC<InviteButtonProps> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2" variant={"outline"}>
          <Plus size={20} className="text-black" />
          Invite Members
        </Button>
      </DialogTrigger>
      <DialogContent className="justify-center p-0 bg-transparent border-none max-w-fit!">
        <OrganizationProfile />
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;
