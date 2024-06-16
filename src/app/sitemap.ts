import { MetadataRoute } from "next";
import {
  getTopActionAnimes,
  getTopAirings,
} from "./actions/anime/animeActions";
import { TTopAiringRes } from "@/types/anime/anime.types";
import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://zanime.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const topAnimes = async () => {
    const page1 = await getTopActionAnimes({ limit: 1000 });
    const page2 = await getTopActionAnimes({ limit: 1000, page: 2 });
    const page3 = await getTopActionAnimes({ limit: 1000, page: 3 });
    const page4 = await getTopActionAnimes({ limit: 1000, page: 4 });
    const page5 = await getTopActionAnimes({ limit: 1000, page: 5 });
    const page6 = await getTopActionAnimes({ limit: 1000, page: 6 });
    const page7 = await getTopActionAnimes({ limit: 1000, page: 7 });
    const page8 = await getTopActionAnimes({ limit: 1000, page: 8 });

    return [
      ...page1,
      ...page2,
      ...page3,
      ...page4,
      ...page5,
      ...page6,
      ...page7,
      ...page8,
    ];
  };
  const popularAnimes = await getTopAirings(900);

  const topAnimesRoute: MetadataRoute.Sitemap = (await topAnimes()).map(
    (anime) => ({
      url: BASE_URL + `/watch/${anime.id}`,
      lastModified: Date.now().toLocaleString(),
      changeFrequency: "weekly",
    })
  );

  const popularAnimesRoute: MetadataRoute.Sitemap = popularAnimes.animes
    ? popularAnimes.animes?.map((anime) => ({
        url: BASE_URL + `/watch/${anime.id}`,
        lastModified: Date.now().toLocaleString(),
        changeFrequency: "weekly",
      }))
    : [];

  const baseUrls: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: Date.now().toLocaleString(),
      changeFrequency: "weekly",
    },
    {
      url: BASE_URL + "/home",
      lastModified: Date.now().toLocaleString(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  return [...baseUrls, ...topAnimesRoute, ...popularAnimesRoute];
}
