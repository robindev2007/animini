"use clint";
import { animeStoreT } from "@/types/anime.types";
import { setCookie } from "cookies-next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useAnimeState = () => {
  const pathname = usePathname();

  const defaultAnimeIdState = pathname.split("/")[2];

  const [activeEpState, setActiveEpState] = useState(1);
  const [animeIdState, setAnimeIdState] = useState(defaultAnimeIdState);
  const [animeEpId, setAnimeEpId] = useState(
    defaultAnimeIdState + `-episode-${pathname.split("-ep")[1]}`
  );

  useEffect(() => {
    const animeId = pathname.split("/")[2];
    const ep = Number(pathname.split("ep-")[1]);
    const epId = animeId + `-episode-${pathname.split("/ep-")[1]}`;

    setAnimeEpId(epId);
    setAnimeIdState(animeId);
    setActiveEpState(ep);
  }, [typeof history !== "undefined" && history.state]);

  return { activeEpState, animeIdState, animeEpId };
};
