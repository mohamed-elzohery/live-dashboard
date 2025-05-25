"use client";
import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useApiMutation } from "@/hooks/useApiMutation";
import { api } from "../../../convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const NewBoardCard = ({ disabled }: { disabled: boolean }) => {
  const { mutate: create, isLoading } = useApiMutation(api.board.create);
  const { organization } = useOrganization();
  const handleClick = () => {
    if (!organization) return;

    create({
      title: "Untitled",
      orgId: organization.id,
    })
      .then(() => {
        toast.success("Board created");
        // router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };
  return (
    <Button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={cn(
        "cursor-pointer hover:bg-blue-600 hover:opacity-75 flex flex-col gap-4 items-center justify-center h-full w-full bg-blue-600 opacity-100 border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-md",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <Plus className="text-white" style={{ width: "6em", height: "6rem" }} />
      <span className="text-white text-md font-semibold ">New Board</span>
    </Button>
  );
};

export default NewBoardCard;
