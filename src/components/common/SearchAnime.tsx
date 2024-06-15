"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useDebounce } from "use-debounce";
import { AnimeSearchRes } from "@/types/anime/anime.types";
import HeaderSearchResultCard from "../page/header/HeaderSearchResultCard";
import axios from "axios";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "../hook/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";
import AnimeResults from "./AnimeResults";

const SearchAnime = ({ className }: { className?: string }) => {
  const [searchText, setSearchText] = useState("");
  const [searchRes, setSearchRes] = useState<AnimeSearchRes | undefined>();
  const [search] = useDebounce(searchText, 400);
  const [showSearch, setShowSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const containerRef = useOutsideClick(() => {
    console.log("Click outside");
    setShowSearch(false);
  });

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
    <div
      ref={containerRef}
      className={cn("w-full relative rounded-md", className)}>
      <div className={cn("p-2 transition-all", showSearch && "bg-card")}>
        <Input
          onFocus={() => setShowSearch(true)}
          value={searchText}
          placeholder="Aa..."
          className="bg-white text-black font-medium"
          onChange={(e) => {
            setShowSearch(true);
            setSearchText(e.target.value);
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        {searchRes && showSearch && <AnimeResults animes={searchRes.results} />}
      </AnimatePresence>
    </div>
  );
};

export default SearchAnime;
