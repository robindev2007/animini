import AnimeCard from "@/components/common/AnimeCard";
import React from "react";

export type animeRes = {
  currentPage: number;
  hasNextPage: boolean;
  results: [
    {
      id: string;
      title: string;
      image: string;
      url: string;
      genres: string[];
    }
  ];
};

const TopAiring = async () => {
  const animeDataRes = await fetch(
    "https://animetize-api.vercel.app/top-airing"
  );

  const animes = (await animeDataRes.json()) as animeRes;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {animes.results &&
          animes.results.map((anime, i) => (
            <AnimeCard anime={anime} index={i} key={anime.id} />
          ))}
      </div>
    </div>
  );
};

export default TopAiring;
