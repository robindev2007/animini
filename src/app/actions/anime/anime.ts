"use server";

import { TAnimeInfo, TTopAiringRes } from "@/types/anime/anime.types";
import axios from "axios";
import { unstable_noStore } from "next/cache";
import { cache } from "react";

export const getTopAiringAnimes = cache(async (limit?: number) => {
  unstable_noStore();

  const url = `https://amvstrm-api-9w3p.onrender.com/api/v2/trending`;

  try {
    const { data } = await axios.get(url, {
      params: {
        limit: limit ? limit : 50,
      },
    });

    const res = data.results.filter((anime: TAnimeInfo) => {
      return anime;
    });

    return data.results as TTopAiringRes[];
  } catch (error) {
    return null;
  }
});

export const getAnimeData = cache(async (id: string) => {
  const infoUrl = `https://prod-2-amvstrm-api.nyt92.eu.org/api/v2/info/${id}`;

  try {
    const { data }: { data: any } = await axios.get(infoUrl);

    const getEpisodes = async (url: string) => {
      const { data } = await axios.get(url);
      return data.episodes as any[];
    };

    const info = data;
    const episodesUrl = `https://amvstrm-api-9w3p.onrender.com/api/v1/episode/${info.id_provider.idGogo}`;

    const res = await getEpisodes(episodesUrl);
    const episodes = res.sort((a, b) => {
      const episodeNumberB = parseInt((b.title.match(/\d+/) as any)[0]);
      const episodeNumberA = parseInt((a.title.match(/\d+/) as any)[0]);

      return episodeNumberA - episodeNumberB;
    });

    info.episodeList = episodes;

    const resData = { info };

    return resData;
  } catch (error) {
    return error;
  }
});

export const getStrems = cache(
  async ({
    idSub,
    idDub,
    ep,
  }: {
    idSub: string;
    idDub: string;
    ep: string;
  }) => {
    const getSingleStrem = async ({ epId }: { epId: string }) => {
      try {
        const { data } = await axios.get(
          `https://prod-2-amvstrm-api.nyt92.eu.org/api/v2/stream/${epId}`
        );

        if (!data) return null;

        const res = Object.entries(data.stream.multi).map(([key, value]) => ({
          title: key,
          strems: value,
        }));

        return res as unknown as any;
      } catch (error) {
        return null;
      }
    };

    const subStrems = await getSingleStrem({ epId: idSub + `-episode-${ep}` });
    const dubStrems = await getSingleStrem({ epId: idDub + `-episode-${ep}` });

    const responceData = [
      subStrems && { title: "Sub", strems: subStrems },
      dubStrems && { title: "Dub", strems: dubStrems },
    ];

    const resData = { sub: subStrems, dub: dubStrems };
    return resData;
  }
);

export const getTrandingAnimes = async (limit?: number) => {
  unstable_noStore();

  const url = "https://amvstrm-api-9w3p.onrender.com/api/v2/trending";

  try {
    const { data } = await axios.get(url, {
      params: {
        limit: limit ? limit : 10,
      },
    });

    const res = data.results.filter((anime: any) => anime.bannerImage);

    return data.results as any[];
  } catch (error) {
    return null;
  }
};

export const getSearchResult = async (search: string) => {
  unstable_noStore();

  const url = "https://amvstrm-api-9w3p.onrender.com/api/v2/search";

  try {
    const { data } = await axios.get(url, {
      params: {
        q: search,
      },
    });

    return data.results as any[];
  } catch (error) {
    return null;
  }
};
