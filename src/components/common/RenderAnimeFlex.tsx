import { TopActionAnimesResult, TopAirResult } from "@/types/anime/anime.types";
import React from "react";
import H2 from "../ui/h2";
import AnimeCard from "./AnimeCard";

const RenderAnimeFlex = ({
  animes,
  title,
}: {
  animes?: TopAirResult[] | TopActionAnimesResult[];
  title: string;
}) => {
  if (!animes || animes.length < 1) return null;

  return (
    <div>
      <H2>{title}</H2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex-cols-5 xl:grid-cols-6 gap-5 gap-y-2">
        {animes &&
          animes.length > 0 &&
          animes.map((anime) => <AnimeCard anime={anime} key={anime.id} />)}
      </div>
    </div>
  );
};

export default RenderAnimeFlex;
