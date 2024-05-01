"use clint";
import { animeStoreDataT } from "@/types/anime/anime.types";
import { setCookie } from "cookies-next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useAnimeState = () => {
  const pathname = usePathname();

  const [animeIdState, setAnimeIdState] = useState(0);
  const [epState, setEpState] = useState(0);
  const [animeStoreData, setAnimeStoreData] = useState<animeStoreDataT>();

  useEffect(() => {
    const animeId = pathname.split("/")[2];
    const animeEp = pathname.split("/")[3].split("-")[
      pathname.split("/")[3].split("-").length - 1
    ];
    setEpState(Number(animeEp));
    setAnimeIdState(Number(animeId));
  }, [typeof history !== "undefined" && history.state]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data =
        JSON.parse(localStorage.getItem(animeIdState?.toString()) as string) ??
        null;
      setAnimeStoreData(data);
    }
  }, [epState]);

  return { animeIdState, epState, animeStoreData };
};
