"use server";

import { serversNames } from "@/lib/constance/constances";
import {
  AnimeInfoT,
  AnimeSearchT,
  TopAiringAnimeT,
  animeStreamResT,
  animeStremT,
  animeStremsT,
  serverT,
} from "@/types/anime.types";
import axios from "axios";
import { error } from "console";
import { cookies } from "next/headers";

export const getTopAiringAnimes = async ({ page }: { page: number }) => {
  const url = "https://ranime-backend.onrender.com/anime/gogoanime/top-airing";

  const maxPage = 6;

  try {
    let currentPage = 1;
    let hasNextPage = true;
    let results: TopAiringAnimeT["results"] | [] = [];

    while (hasNextPage) {
      try {
        const { data }: { data: TopAiringAnimeT } = await axios.get(url, {
          params: { page: currentPage },
        });

        const pageResults = data.results;

        results = [...results, ...pageResults] as TopAiringAnimeT["results"];

        currentPage = currentPage + 1;
        hasNextPage = currentPage > maxPage ? false : data.hasNextPage;
      } catch (error) {
        console.log(error);
      }
    }

    return results;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getStremLinks = async (
  animeEpId: string,
  server?: "gogocdn" | "streamsb" | "vidstreaming"
) => {
  const epValuesArry = animeEpId.split("-episode-");
  const animeEpIdDub = epValuesArry[0] + "-dub-" + epValuesArry[1];

  const url = `https://api-amvstrm.nyt92.eu.org/api/v2/stream/${animeEpId}`;
  const dubUrl = `https://api-amvstrm.nyt92.eu.org/api/v2/stream/${animeEpIdDub}`;

  try {
    const { data: sub }: { data: animeStremT } = await axios.get(url);
    const dubData = await axios.get(dubUrl);

    const results = { sub, dub: dubData.data as animeStremT };
    console.log(results);
    return sub;
  } catch (err: any) {
    console.error(error);
  }
};

export const searchAnime = async (query: string) => {
  const url = `https://ranime-backend.onrender.com/anime/gogoanime/${query}`;

  try {
    const { data }: { data: AnimeSearchT } = await axios.get(url, {
      params: { page: 1 },
    });
    return data;
  } catch (err: any) {
    console.log(error);
  }
};

// new world
export const getAnimeInfo = async ({ animeId }: { animeId: string }) => {
  const url = `https://ranime-backend.onrender.com/anime/gogoanime/info/${animeId}`;

  try {
    const { data }: { data: AnimeInfoT } = await axios.get(url);
    return data;
  } catch (err: any) {
    return null;
  }
};

export const getEpisodeInfo = async ({
  epId,
  animeId,
  ep,
}: {
  epId: string;
  animeId: string;
  ep: string;
}) => {
  const info = (await getAnimeInfo({ animeId: animeId })) as AnimeInfoT;
  const streams = await getStrems({ animeId, ep });

  const responce = {
    info,
    streams,
  };
  return responce;
};

export const getStrems = async ({
  animeId,
  ep,
}: {
  animeId: string;
  ep: string;
}) => {
  const subEpId = `${animeId}-episode-${ep}`;
  const dubEpId = `${animeId}-dub-episode-${ep}`;

  const getSingleStrem = async ({ epId }: { epId: string }) => {
    try {
      const { data }: { data: animeStreamResT } = await axios.get(
        `https://api-amvstrm.nyt92.eu.org/api/v2/stream/${epId}`
      );

      console.log();
      if (!data) return null;

      const res = Object.entries(data.stream.multi).map(([key, value]) => ({
        title: key,
        strems: value,
      }));

      return res;
    } catch (error) {
      return null;
    }
  };

  const subStrems = await getSingleStrem({ epId: subEpId });
  const dubStrems = await getSingleStrem({ epId: dubEpId });

  return { sub: subStrems, dub: dubStrems } as unknown as animeStremsT;
};
