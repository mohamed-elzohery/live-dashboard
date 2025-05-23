"use client";
import React, { useEffect } from "react";
import { Input } from "../input";
import { SearchIcon } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type SearchProps = {
  className?: string;
};

const Search: React.FC<SearchProps> = ({ className }) => {
  const [debouncedValue, setValue] = useDebounceValue("", 500);
  const { push } = useRouter();

  useEffect(() => {
    push(debouncedValue ? `/?search=${debouncedValue}` : "/");
  }, [debouncedValue, push]);

  return (
    <div
      role="search"
      className={cn("flex flex-1 items-center relative", className)}
    >
      <Input
        type="text"
        placeholder="Search Boards"
        className={cn("flex-1 max-w-sm pl-8 text-muted-foreground")}
        aria-label="Search"
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchIcon className="absolute w-4 h-4 left-2" />
    </div>
  );
};

export default Search;
