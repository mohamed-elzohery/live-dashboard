import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoreHorizontal, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import NewBoardCard from "./NewBoardCard";
import { Actions } from "./actions";

interface BoardData {
  _creationTime: number;
  _id: string;
  authorId: string;
  authorName: string;
  imageUrl: string;
  orgId: string;
  title: string;
  isFavorite: boolean;
}

interface BoardCardProps {
  board: BoardData;
}

interface BoardCardComponent extends React.FC<BoardCardProps> {
  Skeleton: React.FC;
}

const BoardCard: BoardCardComponent = ({ board }) => {
  return (
    <Link href={`/boards/${board._id}`}>
      <article className="relative bg-amber-50 shadow-sm group hover:shadow-md transition-shadow rounded-md flex flex-col  border border-slate-200 border-solid">
        <Image
          src={board.imageUrl}
          alt={board.title}
          width={300}
          height={450}
          className="rounded-md rounded-b-none w-full h-[16rem] object-fill  transition-all duration-100 group-hover:backdrop-blur-sm group-hover:brightness-75"
        />
        <Actions id={board._id} title={board.title} side="left" sideOffset={0}>
          <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
            <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
          </button>
        </Actions>
        <Star
          className={cn(
            "absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-75 w-4 h-5",
            board.isFavorite
              ? "fill-blue-600  stroke-blue-600"
              : "fill-gray-300  stroke-gray-600"
          )}
        />
        <Footer board={board} />
      </article>
    </Link>
  );
};

const Footer = ({
  board: { _creationTime, authorName, title },
}: BoardCardProps) => {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  return (
    <footer className="flex-1 p-4  bg-white">
      <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
      <p className="text-sm text-gray-600">by {authorName}</p>
      <p className="text-xs text-gray-500 mt-1">
        Created {formatDate(_creationTime)}
      </p>
    </footer>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <article className="relative bg-white h-[20rem] shadow-sm group hover:shadow-md transition-shadow rounded-md flex flex-col border border-slate-200 border-solid">
      <Skeleton className="h-full w-full " />
    </article>
  );
};

export const BoardListSkeleton = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-4">
      <NewBoardCard disabled={true} />
      {Array.from({ length: 5 }).map((_, index) => (
        <BoardCard.Skeleton key={index} />
      ))}
    </div>
  );
};

export default BoardCard;
