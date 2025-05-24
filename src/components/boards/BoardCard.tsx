import React from "react";
import Image from "next/image";

interface BoardData {
  _creationTime: number;
  _id: string;
  authorId: string;
  authorName: string;
  imageUrl: string;
  orgId: string;
  title: string;
}

interface BoardCardProps {
  board: BoardData;
}

const BoardCard: React.FC<BoardCardProps> = ({ board }) => {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4">
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src={board.imageUrl}
            alt={board.title}
            fill
            className="rounded-md object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {board.title}
          </h3>
          <p className="text-sm text-gray-600">
            by {board.authorName}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Created {formatDate(board._creationTime)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;