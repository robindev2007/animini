import H2 from "@/components/ui/h2";
import { TAnimeInfo } from "@/types/anime/anime.types";
import Image from "next/image";
import React from "react";

const AnimeInfo = ({ anime }: { anime?: TAnimeInfo }) => {
  if (!anime) return;
  return (
    <div className="flex gap-2 py-4 flex-col md:flex-row">
      <Image
        src={anime.coverImage?.large ?? anime.coverImage?.medium ?? ""}
        height={600}
        width={400}
        alt={
          anime.title?.english ??
          anime.title?.userPreferred ??
          anime.title?.romaji ??
          anime.title?.native
        }
        className="max-w-52 rounded-md overflow-hidden shrink-0 aspect-[400/600] object-cover mx-auto md:mx-0"
      />
      <div className="space-y-2">
        <div>
          <H2>
            {anime.title?.english ??
              anime.title?.userPreferred ??
              anime.title?.romaji ??
              anime.title?.native}
          </H2>
          <span className="text-xs">Original title: {anime.title?.native}</span>
          <span className="line-clamp-3 text-pretty mt-1">
            {anime.description}
          </span>
        </div>
        <div className="flex flex-col text-sm">
          <p>Details</p>
          <span>Type: {anime.format}</span>
          <span>Episodes: {anime.episodes}</span>
          <span>Status: {anime.status}</span>
          <span>Releas: {anime.year}</span>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;
