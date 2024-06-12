import H2 from "@/components/ui/h2";
import React from "react";
import AnimeCard from "@/components/common/AnimeCard";
import Container from "@/components/common/Container";
import { TTopAiringRes } from "@/types/anime/anime.types";

const TopAirings = ({ animes }: { animes?: TTopAiringRes["results"] }) => {
  return (
    <Container>
      <H2>Top Airings</H2>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-1">
        {animes &&
          animes.length > 0 &&
          animes.map((anime) => <AnimeCard anime={anime} key={anime.id} />)}
      </div>
    </Container>
  );
};

export default TopAirings;
