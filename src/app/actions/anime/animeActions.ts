"use server";

import { TopActionAnimesRes } from "@/types/anime/anime.types";
import axios from "axios";

export const getTopActionAnimes = async () => {
  try {
    const { data } = await axios.post<TopActionAnimesRes>(
      "https://amv-api.vercel.app/api/v2/search",
      {
        genres: ["Action"],
        page: 1,
        size: 16,
      }
    );
    return data.results;
  } catch (error) {}
};