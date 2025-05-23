"use client";
import React, { useEffect } from "react";
import { Input } from "../input";
import { SearchIcon } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import { useRouter } from "next/navigation";

const Search = () => {
  const [debouncedValue, setValue] = useDebounceValue("", 500);
  const { push } = useRouter();

  useEffect(() => {
    push(debouncedValue ? `/?search=${debouncedValue}` : "/");
  }, [debouncedValue, push]);

  return (
    <div role="search" className="flex flex-1 items-center relative">
      <Input
        type="text"
        placeholder="Search Boards"
        className="flex-1 max-w-sm pl-8"
        aria-label="Search"
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchIcon className="absolute w-4 h-4 left-2" />
    </div>
  );
};

export default Search;
