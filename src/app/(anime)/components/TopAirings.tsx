import SingleAnimeCard from "@/components/common/SingleAnimeCard";
import React from "react";

const TopAirings = ({ animes }: { animes: TopAiringAnimeT }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {animes.results.map((anime) => (
        <SingleAnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
};

export default TopAirings;
