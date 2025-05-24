"use client";
import EmptyResults from "@/components/ui/empty-results/EmptyResults";
import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../../convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import BoardCard from "./BoardCard";

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
  console.log("boards", boards);
  if (!boards || boards.length === 0) return <EmptyResults />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {boards.map((board) => (
        <BoardCard key={board._id} board={board} />
      ))}
    </div>
  );
};

export default Boards;
