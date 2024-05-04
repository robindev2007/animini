import { Input } from "@/components/ui/input";
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import SearchAnimeCard from "./SearchAnimeCard";
import { getSearchResult } from "@/app/actions/anime/anime";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import SearchResults from "./SearchResults";

const SearchMenu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [serarchText] = useDebounce(searchQuery, 200);
  const [showResults, setShowResults] = useState(false);

  const [showSearchBox, setShowSearchBox] = useState(false);

  const [searchResults, setSearchResults] = useState<any | undefined>(
    undefined
  );
  const [activeIndex, setActiveIndex] = useState(-1);

  const componentRef = useRef<HTMLDivElement | null>(null);

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
    window.addEventListener("click", (e) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(e.target as any)
      ) {
        setShowResults(false);
      }
    });

    return () => {};
  }, []);

  return (
    <div>
      <Button
        size={"icon"}
        variant={"secondary"}
        onClick={() => setShowSearchBox((prev) => !prev)}>
        <FaMagnifyingGlass />
      </Button>
      <div className="absolute top-full left-0 z-20 w-full">
        {showSearchBox && (
          <div className="p-3 bg-background shadow-lg">
            <Input
              className="peer/input z-50 flex"
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="One Piece..."
            />
          </div>
        )}
        {showResults && searchResults && searchResults.length && (
          <SearchResults results={searchResults} />
        )}
      </div>
    </div>
  );
};

export default SearchMenu;
