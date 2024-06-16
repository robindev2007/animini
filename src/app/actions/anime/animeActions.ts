"use server";

import { TTopAiringRes, TopActionAnimesRes } from "@/types/anime/anime.types";
import axios from "axios";

export const getTopActionAnimes = async ({
  limit,
  page,
}: {
  limit?: number;
  page?: number;
}) => {
  try {
    const { data } = await axios.post<TopActionAnimesRes>(
      "https://amv-api.vercel.app/api/v2/search",
      {
        genres: ["Action"],
        page: page ?? 1,
        size: limit ?? 16,
      }
    );
    return data.results ?? [];
  } catch (error) {
    return [];
  }
};

export const getTopAirings = async (limit?: number) => {
  try {
    const data: { data: TTopAiringRes } = await axios.get(
      `https://amv-api.vercel.app/api/v2/trending?limit=${limit ?? 16}`
    );
    return { animes: data.data.results };
  } catch (error) {
    return { error };
  }
};
