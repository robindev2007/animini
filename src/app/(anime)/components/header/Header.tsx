"use client";
import { searchAnime } from "@/app/actions/anime";
import { Input } from "@/components/ui/input";
import { AnimeSearchT } from "@/types/anime.types";
import React, {
  KeyboardEvent,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDebounce } from "use-debounce";
import SearchMenu from "./SearchMenu";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="py-2 flex items-center justify-between gap-2">
      <Link href={"/"}>
        <h2 className="text-lime-600 text-lg font-bold">AniRobin</h2>
      </Link>
      <SearchMenu />
    </div>
  );
};
