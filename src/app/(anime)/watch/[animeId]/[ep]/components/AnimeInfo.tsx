import H2 from "@/components/ui/h2";
import { animeInfoT } from "@/types/anime/anime.types";
import Image from "next/image";
import React from "react";

const AnimeInfo = ({ anime }: { anime: animeInfoT }) => {
  return (
    <div className="flex gap-2 py-4">
      <Image
        src={anime.image}
        height={600}
        width={400}
        alt={anime.title}
        className="max-w-[30%] rounded-md overflow-hidden shrink-0 aspect-[400/600] object-cover mx-auto md:mx-0"
      />
      <div className="space-y-2">
        <div>
          <H2>{anime.title}</H2>
          <span className="text-xs">Original title: {anime.otherName}</span>
          <span className="line-clamp-3 text-pretty mt-1">
            {anime.description}
          </span>
        </div>
        <div className="flex flex-col text-sm">
          <p>Details</p>
          <span>Type: {anime.type}</span>
          <span>Episodes: {anime.totalEpisodes}</span>
          <span>Status: {anime.status}</span>
          <span>Releas: {anime.releaseDate}</span>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;
