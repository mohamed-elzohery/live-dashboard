"use client";
import EmptyResults from "@/components/ui/empty-results/EmptyResults";
import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../../convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import BoardCard, { BoardListSkeleton } from "./BoardCard";
import NewBoardCard from "./NewBoardCard";

const Boards = () => {
  const { organization } = useOrganization();
  return (
    <section className="bg-white p-4 h-full">
      {organization?.id ? (
        <BoardsList orgId={organization.id} />
      ) : (
        <EmptyResults />
      )}
    </section>
  );
};

const BoardsList: React.FC<{ orgId: string }> = ({ orgId }) => {
  const boards = useQuery(api.boards.get, { orgId });
  if (boards === undefined) return <BoardListSkeleton />;
  if (!boards || boards.length === 0) return <EmptyResults />;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4">
      <NewBoardCard disabled={false} />
      {boards.map((board) => (
        <BoardCard key={board._id} board={{ ...board, isFavorite: false }} />
      ))}
    </div>
  );
};

export default Boards;
