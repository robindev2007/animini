import { Input } from "@/components/ui/input";
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import SearchAnimeCard from "./SearchAnimeCard";
import { getSearchResult } from "@/app/actions/anime/anime";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const SearchMenu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [serarchText] = useDebounce(searchQuery, 200);

  const [searchResults, setSearchResults] = useState<any | undefined>(
    undefined
  );
  const [activeIndex, setActiveIndex] = useState(-1);

  const activeIndexRef = useRef<HTMLDivElement | null>(null);
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const { key } = e;
    let nextIndex = 0;

    if (key === "ArrowDown") {
      nextIndex = (activeIndex + 1) % (searchResults?.results.length as number);
    }
    if (key === "ArrowUp") {
      nextIndex =
        (activeIndex + (searchResults?.results.length as number) - 1) %
        (searchResults?.results.length as number);
    }

    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const getSearchResults = async () => {
      if (searchQuery.length == 0) return;
      setSearchResults(undefined);
      const res = await getSearchResult(searchQuery);
      setSearchResults(res);
    };

    getSearchResults();
    return () => {};
  }, [serarchText]);

  useEffect(() => {
    activeIndexRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [activeIndex]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(e.target as any)
      ) {
        // setResultsActive(false);
      }
    });

    return () => {};
  }, []);

  return (
    <div
      ref={componentRef}
      className="z-20"
      tabIndex={1}
      onKeyDown={handleKeyDown}>
      <div className="absolute top-full left-0 w-full bg-card p-3">
        <Input
          className="peer/input z-50 flex"
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search..."
        />

        {searchResults?.length > 0 && searchQuery.length > 0 && (
          <div className="absolute top-full w-full flex left-0 bg-card shadow p-2 rounded border mt-1 gap-1 flex-col">
            {searchResults.slice(0, 6).map((anime: any, index: any) => (
              <div
                ref={activeIndex === index ? activeIndexRef : null}
                key={index}>
                <SearchAnimeCard active={activeIndex === index} anime={anime} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMenu;
