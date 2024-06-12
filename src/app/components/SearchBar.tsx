"use client";
import HeaderSearchResultCard from "@/components/page/header/HeaderSearchResultCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimeSearchRes } from "@/types/anime/anime.types";
import React, { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDebounce } from "use-debounce";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchRes, setSearchRes] = useState<AnimeSearchRes | null>();
  const [search] = useDebounce(searchText, 400);
  const [showSearch, setShowSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setSearchRes(null);
      if (!searchText.length) return setLoading(false);
      const res = await fetch(`https://animetize-api.vercel.app/${searchText}`);

      const data = await res.json();

      setSearchRes(data.results);
      setLoading(false);
    };
    getData();
  }, [search]);

  return (
    <div className="w-full bg-card md:max-w-[50vw]">
      <div className="flex gap-2 p-2">
        <Input
          value={searchText}
          placeholder="Aa..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          className="h-full"
          variant={"secondary"}
          onClick={() => setShowSearch((prev) => !prev)}>
          <FaMagnifyingGlass />
        </Button>
      </div>
      {loading ? (
        <div className="flex gap-2 flex-col p-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i}>
              <Skeleton className="h-30 w-full" />
            </div>
          ))}
        </div>
      ) : (
        <div className="p-2 max-h-[85vh] overflow-x-hidden overflow-y-scroll">
          {searchRes?.results?.map((anime) => (
            <HeaderSearchResultCard
              key={anime.id}
              anime={anime}
              setShowResults={setShowSearch}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
