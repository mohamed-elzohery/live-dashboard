import { Plus } from "lucide-react";
import React from "react";
import { Dialog, DialogTrigger, DialogContent } from "../dialog";
import { CreateOrganization } from "@clerk/nextjs";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="aspect-square bg-white/25 opacity-75 hover:opacity-100 transition-all cursor-pointer w-full rounded-md flex justify-center items-center">
          <Plus size={20} className="text-white" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[40rem] p-0 bg-transparent border-none">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
