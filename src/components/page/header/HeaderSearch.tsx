"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import HeaderSearchResultCard from "./HeaderSearchResultCard";

export type searchRes = {
  id: string;
  title: string;
  image: string;
  releaseDate: string; // or null
  subOrDub: "sub" | "dub"; // or "dub"
  url: string;
}[];

const HeaderSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [searchRes, setSearchRes] = useState<searchRes | null>();
  const [search] = useDebounce(searchText, 1000);
  const [showResult, setShowResult] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const getData = async () => {
      setSearchRes(null);
      if (!searchText.length) return;
      const res = await fetch(`https://animetize-api.vercel.app/${searchText}`);

      const data = await res.json();

      setSearchRes(data.results);
    };
    getData();
  }, [search]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current?.contains(e.target as Node)
      )
        setShowResult(false);
    };
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div ref={containerRef}>
      <Input
        placeholder="Aa..."
        onFocus={() => setShowResult(true)}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {showResult && (
        <div className="absolute top-full left-0 w-full bg-card border rounded shadow-2xl flex flex-col max-h-[80vh] overflow-y-scroll overflow-x-hidden">
          {searchRes?.map((anime) => (
            <HeaderSearchResultCard
              setShowResults={setShowResult}
              anime={anime}
              key={anime.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
