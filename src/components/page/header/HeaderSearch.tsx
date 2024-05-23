"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import HeaderSearchResultCard from "./HeaderSearchResultCard";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

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
    <div>
      <Button
        variant={"secondary"}
        onClick={() => setShowSearch((prev) => !prev)}>
        <FaMagnifyingGlass />
      </Button>

      {showSearch && (
        <div className="absolute top-full left-0 w-full bg-card border-t">
          <div className="flex gap-2 p-2">
            <Input
              value={searchText}
              placeholder="Aa..."
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
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
            <div className="p-2 max-h-[85vh] overflow-y-scroll">
              {searchRes?.map((anime) => (
                <HeaderSearchResultCard
                  key={anime.id}
                  anime={anime}
                  setShowResults={setShowSearch}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
