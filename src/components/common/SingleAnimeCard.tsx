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
      href={`/watch/${anime.id}`}
      className="bg-card p-2 rounded gap-2 border overflow-hidden h-full flex flex-col shadow">
      <div className="h-[300px] shrink-0 overflow-hidden rounded-[inherit] border">
        <Image
          src={anime.image}
          height={600}
          width={600}
          alt={anime.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-auto">
        <h2 className="line-clamp-2 text-sm">{anime.title}</h2>
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
