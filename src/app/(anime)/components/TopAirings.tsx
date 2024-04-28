import SingleAnimeCard from "@/components/common/SingleAnimeCard";
import GridBg from "@/components/ui/grid-background";
import { TopAiringAnimeT } from "@/types/anime.types";
import React from "react";

const TopAirings = ({
  animes,
}: {
  animes: TopAiringAnimeT["results"] | [];
}) => {
  return (
    <div className="relative">
      <h2 className="py-3 text-2xl font-semibold"> Top Airing animes </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols- gap-3">
        {animes.map((anime) => (
          <SingleAnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default TopAirings;
