import React from "react";
import { trendingAnimeT } from "@/types/anime/anime.types";
import AnimeCard from "@/components/common/AnimeCard";
import { getTopAiringAnimes } from "@/app/actions/anime/anime";

const TopAirings = async () => {
  const topAiringsAnimes = (await getTopAiringAnimes(100)) as trendingAnimeT[];
  return (
    <div className="relative">
      <h2 className="py-3 text-2xl font-semibold"> Top Airing animes </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {topAiringsAnimes &&
          topAiringsAnimes.length &&
          topAiringsAnimes.map((anime: any, i: any) => (
            <AnimeCard key={anime.id} index={i} anime={anime} />
          ))}
      </div>
    </div>
  );
};

export default TopAirings;
