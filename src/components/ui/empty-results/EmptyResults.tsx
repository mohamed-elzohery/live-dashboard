"use client";
import React from "react";
import EmptyResultsLayout from "./EmptyResultsLayout";
import { CreateOrganization, useOrganization } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "../dialog";
import { useApiMutation } from "@/hooks/useApiMutation";
import { api } from "../../../../convex/_generated/api";
import { toast } from "sonner";

const EmptyResults = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");
  const search = searchParams.get("search");
  const { organization } = useOrganization();

  if (favorites) {
    return <EmptyFavourites />;
  }
  if (search) {
    return <EmptySearch />;
  }
  if (!organization) {
    return <EmptyOrganization />;
  }
  return <EmptyBoards />;
};

const EmptyFavourites = () => {
  return (
    <EmptyResultsLayout>
      <EmptyResultsLayout.EmptyResultsImage src="empty-favourites.svg" />
      <EmptyResultsLayout.EmptyResultsHeader>
        No favorites found
      </EmptyResultsLayout.EmptyResultsHeader>
    </EmptyResultsLayout>
  );
};

const EmptyOrganization = () => {
  return (
    <EmptyResultsLayout>
      <EmptyResultsLayout.EmptyResultsImage src="elements.svg" />
      <EmptyResultsLayout.EmptyResultsHeader>
        You don&apos;t have any organization yet.
      </EmptyResultsLayout.EmptyResultsHeader>
      <Dialog>
        <DialogTrigger asChild>
          <button
            aria-label="Create a new organization"
            className="bg-slate-950 px-4 py-2 text-white hover:opacity-100 transition-all cursor-pointer rounded-md flex justify-center items-center"
          >
            Create an organization
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[50rem] p-0 bg-transparent border-none w-auto">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </EmptyResultsLayout>
  );
};

const EmptySearch = () => {
  return (
    <EmptyResultsLayout>
      <EmptyResultsLayout.EmptyResultsImage src="empty-search.svg" />
      <EmptyResultsLayout.EmptyResultsHeader>
        No results found.
      </EmptyResultsLayout.EmptyResultsHeader>
    </EmptyResultsLayout>
  );
};

const EmptyBoards = () => {
  const { mutate: create, isLoading } = useApiMutation(api.board.create);
  const { organization } = useOrganization();
  const router = useRouter();
  const handleClick = () => {
    if (!organization) return;

    create({
      title: "Untitled",
      orgId: organization.id,
    })
      .then((id) => {
        toast.success("Board created");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };
  return (
    <EmptyResultsLayout>
      <EmptyResultsLayout.EmptyResultsImage src="note.svg" />
      <EmptyResultsLayout.EmptyResultsHeader>
        You don&apos;t have any boards yet.
      </EmptyResultsLayout.EmptyResultsHeader>
      <EmptyResultsLayout.CTAEmptyResults
        onClick={handleClick}
        disabled={isLoading}
      >
        Create a board
      </EmptyResultsLayout.CTAEmptyResults>
    </EmptyResultsLayout>
  );
};

export default EmptyResults;
