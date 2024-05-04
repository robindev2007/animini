import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import SearchAnimeCard from "./SearchAnimeCard";

const SearchResults = ({ results }: { results: any[] }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const activeIndexRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const { key } = e;
    let nextIndex = 0;

    if (key === "ArrowDown") {
      nextIndex = (activeIndex + 1) % (results.length as number);
    }
    if (key === "ArrowUp") {
      nextIndex =
        (activeIndex + (results.length as number) - 1) %
        (results.length as number);
    }

    setActiveIndex(nextIndex);
  };

  // useEffect(() => {
  //   activeIndexRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // }, [activeIndex]);

  return (
    <div tabIndex={1} className="bg-card border" onKeyDown={handleKeyDown}>
      <div className="gap-2 flex flex-col bg-secondary">
        {results.slice(0, 6).map((anime: any, index: any) => (
          <div ref={activeIndex === index ? activeIndexRef : null} key={index}>
            <SearchAnimeCard active={activeIndex === index} anime={anime} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
