import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { TopAiringAnimeT } from "@/types/anime.types";

const SingleAnimeCard = ({
  anime,
}: {
  anime: TopAiringAnimeT["results"][0];
}) => {
  return (
    <Link
      href={`/watch/${anime.id.split("-dub")[0]}`}
      className="bg-card hover:scale-105 transition-all duration-200 ease-out odd:hover:rotate-1 even:hover:-rotate-1 rounded gap-2 border overflow-hidden h-full hover:shadow-2xl hover:z-20 p-2 flex flex-col shadow hover:border-primary/60">
      <div className="h-48 md:h-56 border border-border/80 pxshrink-0 overflow-hidden rounded-[inherit]">
        <Image
          src={anime.image}
          height={600}
          width={600}
          alt={anime.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-auto">
        <h2 className="line-clamp-2 text-sm font-semibold">{anime.title}</h2>
      </div>
      <div className="flex flex-wrap">
        {anime.genres.slice(0, 3).map((genre) => (
          <Badge
            key={genre}
            className="whitespace-nowrap text-xs scale-90"
            variant={"secondary"}>
            {genre}
          </Badge>
        ))}
      </div>
    </Link>
  );
};

export default SingleAnimeCard;