"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import HeaderSearchResultCard from "./HeaderSearchResultCard";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimeSearchRes } from "@/types/anime/anime.types";
import axios from "axios";

const HeaderSearch = () => {
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
    <div>
      <Button
        aria-label="Search Button"
        variant={"secondary"}
        className="bg-background h-full hover:bg-secondary border border-border/80"
        onClick={() => setShowSearch((prev) => !prev)}>
        <FaMagnifyingGlass />
      </Button>

      {showSearch && (
        <div className="absolute top-full left-0 w-full bg-card border-t">
          <div className="flex gap-2 p-2 items-center justify-center">
            <Input
              value={searchText}
              placeholder="Aa..."
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          {loading ? (
            <div className="flex gap-2 flex-col p-2 w-full">
              {Array.from({ length: 10 }).map((_, i) => (
                <Skeleton key={i} className="h-30 w-max flex-1" />
              ))}
            </div>
          ) : (
            searchRes && (
              <div className="p-2 max-h-[85vh] overflow-x-hidden overflow-y-scroll">
                {searchRes?.results?.map((anime) => (
                  <HeaderSearchResultCard key={anime.id} anime={anime} />
                ))}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
