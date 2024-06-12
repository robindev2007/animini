import H2 from "@/components/ui/h2";
import { TAnimeInfo } from "@/types/anime/anime.types";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";

const RelatedAnimeCard = ({ anime }: { anime: TAnimeInfo["relation"][0] }) => {
  if (anime.type === "MANGA") return;
  const animeTitle =
    anime.title.english ??
    anime.title.userPreferred ??
    anime.title.romaji ??
    anime.title.native;
  return (
    <Link
      href={`/v2/watch/${anime.id}`}
      className="flex gap-2 bg-card rounded-md p-1.5 items-start xl:max-w-64 shrink-0 hover:border-primary/90 border-2 border-border/50 shadow-md hover:z-10 transition-all ease-out">
      <Image
        src={anime.coverImage.large ?? anime.coverImage.medium ?? ""}
        height={230}
        width={335}
        className="aspect-[230/335] w-16 shrink-0 rounded-md overflow-hidden object-contain"
        alt={animeTitle}
      />
      <div className="flex flex-col h-full">
        <p className="text-sm line-clamp-2">{animeTitle}</p>
        <div className="text-muted-foreground mt-auto grid grid-cols-2 gap-2">
          <p className="text-xs">Format: {anime.format}</p>
          <p className="text-xs">Session: {anime.season}</p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedAnimeCard;
