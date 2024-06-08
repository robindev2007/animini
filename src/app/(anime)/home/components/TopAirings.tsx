import H2 from "@/components/ui/h2";
import React from "react";
import AnimeCard from "@/components/common/AnimeCard";
import Container from "@/components/common/Container";

const TopAirings = ({ animes }: { animes: any }) => {
  return (
    <Container>
      <H2>Top Airings</H2>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-1">
        {animes &&
          animes.map((anime: any) => (
            <AnimeCard anime={anime} key={anime.id} />
          ))}
      </div>
    </Container>
  );
};

export default TopAirings;
