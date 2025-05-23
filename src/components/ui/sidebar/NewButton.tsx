import { Plus } from "lucide-react";
import React from "react";
import { Dialog, DialogTrigger, DialogContent } from "../dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Hint from "../hint/Tooltip";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          aria-label="Create a new organization"
          className="aspect-square bg-white/25 opacity-75 hover:opacity-100 transition-all cursor-pointer rounded-md flex justify-center items-center"
        >
          <Hint
            label="Create new organization"
            side="right"
            align="center"
            sideOffset={12}
          >
            <Plus size={20} className="text-white" />
          </Hint>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[40rem] p-0 bg-transparent border-none">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
