"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useDebounce } from "use-debounce";
import { AnimeSearchRes } from "@/types/anime/anime.types";
import { Skeleton } from "../ui/skeleton";
import HeaderSearchResultCard from "../page/header/HeaderSearchResultCard";
import axios from "axios";
import { cn } from "@/lib/utils";

const SearchAnime = ({ className }: { className?: string }) => {
  const [searchText, setSearchText] = useState("");
  const [searchRes, setSearchRes] = useState<AnimeSearchRes | undefined>();
  const [search] = useDebounce(searchText, 400);
  const [showSearch, setShowSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setSearchRes(undefined);
      if (!searchText.length) return setLoading(false);
      const { data } = await axios.get<AnimeSearchRes>(
        `https://amv-api.vercel.app/api/v2/search?q=${searchText}&limit=30`
      );

      setSearchRes(data);
      setLoading(false);
    };
    getData();
  }, [search]);

  return (
    <div className={cn("w-full bg-card border-t", className)}>
      <div className="flex gap-2 p-2 items-center justify-center">
        <Input
          value={searchText}
          placeholder="Aa..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* <Button
      // variant={"secondary"}
      className="flex-1"
      onClick={() => setShowSearch((prev) => !prev)}>
      <FaMagnifyingGlass />
    </Button> */}
      </div>
      {loading ? (
        <div className="flex gap-2 flex-col p-2 w-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} className="h-30 w-max flex-1" />
          ))}
        </div>
      ) : (
        searchRes && (
          <div className="p-2 max-h-[60vh] overflow-x-hidden overflow-y-scroll">
            {searchRes?.results?.map((anime) => (
              <HeaderSearchResultCard
                key={anime.id}
                anime={anime}
                setShowResults={setShowSearch}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default SearchAnime;
