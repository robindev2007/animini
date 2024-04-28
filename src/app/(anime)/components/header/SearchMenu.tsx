import { searchAnime } from "@/app/actions/anime";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AnimeSearchT } from "@/types/anime.types";
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import SearchAnimeCard from "./SearchAnimeCard";

const SearchMenu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [serarchText] = useDebounce(searchQuery, 200);
  const [resultsActive, setResultsActive] = useState(false);

  const [searchResults, setSearchResults] = useState<AnimeSearchT | undefined>(
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
      const res = await searchAnime(searchQuery);
      setSearchResults(res);
    };

    getSearchResults();
    return () => {};
  }, [serarchText]);

  // useEffect(() => {
  //   activeIndexRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // }, [activeIndex]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(e.target as any)
      ) {
        setResultsActive(false);
      }
    });

    return () => {};
  }, []);

  return (
    <div
      ref={componentRef}
      className="w-[40%] relative z-20"
      tabIndex={1}
      onKeyDown={handleKeyDown}>
      <Input
        onClick={() => setResultsActive(true)}
        // onBlur={() => setResultsActive(false)}
        className="peer/input z-50 flex"
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search..."
      />

      {resultsActive &&
        searchResults &&
        searchResults?.results.length > 0 &&
        searchQuery.length > 0 && (
          <div className="absolute top-full w-full left-0 bg-card shadow p-2 rounded border mt-1 gap-1 flex-col">
            {searchResults?.results.slice(0, 6).map((anime, index) => (
              <div
                ref={activeIndex === index ? activeIndexRef : null}
                key={index}>
                <SearchAnimeCard
                  onclick={() => setResultsActive(false)}
                  active={activeIndex === index}
                  anime={anime}
                />
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default SearchMenu;
