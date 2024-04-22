"use server";

import { serversNames } from "@/lib/constance/constances";
import {
  AnimeInfoT,
  AnimeSearchT,
  TopAiringAnimeT,
  animeStremsT,
  serverT,
} from "@/types/anime.types";
import axios from "axios";
import { error } from "console";
import { Epilogue } from "next/font/google";

export const getTopAiringAnimes = async ({ page }: { page: number }) => {
  const url = "https://animetize-api.vercel.app/anime/gogoanime/top-airing";

  try {
    const { data }: { data: TopAiringAnimeT } = await axios.get(url, {
      params: { page: 1 },
    });

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getAnimeInfo = async ({ id }: { id: string }) => {
  const url = `https://animetize-api.vercel.app/anime/gogoanime/info/${id}`;

  try {
    const { data }: { data: AnimeInfoT } = await axios.get(url);
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getStremLinks = async (
  id: string,
  server?: "gogocdn" | "streamsb" | "vidstreaming"
) => {
  console.log(id);
  const url = `https://animetize-api.vercel.app/anime/gogoanime/watch/${id}`;

  try {
    const { data }: { data: animeStremsT } = await axios.get(url, {
      params: { server: server ? server : "gogocdn" },
    });
    return data;
  } catch (err: any) {
    console.log(error);
  }
};

export const searchAnime = async (query: string) => {
  const url = `https://animetize-api.vercel.app/anime/gogoanime/${query}`;

  try {
    const { data }: { data: AnimeSearchT } = await axios.get(url, {
      params: { page: 1 },
    });
    return data;
  } catch (err: any) {
    console.log(error);
  }
};

export const getAvailableServers = async (
  animeId: string,
  subOrdub: AnimeInfoT["subOrDub"],
  epId: string
) => {
  try {
    const defaultLangServers = await getServer(epId);

    const s1 = {
      subOrdub: subOrdub,
      servers: defaultLangServers?.filter((server) =>
        serversNames.includes(server.name)
      ),
    };
    let s2;

    const otherLangLink =
      subOrdub === "sub"
        ? `${animeId}-dub-episode-${epId.split("-episode-")[1]}`
        : `${animeId.split("-dub")[0]}-episode-${epId.split("-episode-")[1]}`;

    try {
      const servers2 = await getServer(otherLangLink);

      s2 = servers2 && {
        subOrdub: subOrdub === "sub" ? "dub" : "sub",
        servers: servers2?.filter((server) =>
          serversNames.includes(server.name)
        ),
      };
    } catch (error) {
      s2 = null;
    }

    return [s1, s2];
  } catch (err: any) {
    console.log(error);
  }
};

const getServer = async (epId: string) => {
  const url = `https://animetize-api.vercel.app/anime/gogoanime/servers/${epId}`;

  try {
    const { data }: { data: serverT[] } = await axios.get(url);
    return data;
  } catch {
    return null;
  }
};
