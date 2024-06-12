import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SearchResult } from "@/types/anime/anime.types";

const HeaderSearchResultCard = ({
  anime,
  setShowResults,
}: {
  anime: SearchResult;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const animeTitle =
    anime.title.english ??
    anime.title.userPreferred ??
    anime.title.romaji ??
    anime.title.native;

  const coverImage =
    anime.coverImage.extraLarge ??
    anime.coverImage.large ??
    anime.coverImage.medium ??
    "";

  return (
    <Link
      onClick={() => setShowResults(false)}
      href={`/v2/watch/${anime.id}`}
      className="flex gap-2 hover:bg-secondary py-2 even:bg-secondary/60 transition-all duration-200 px-2 ease-linear">
      <Image
        src={anime.coverImage.large ?? anime.coverImage.medium ?? ""}
        height={230}
        width={335}
        className="aspect-[230/335] w-24 shrink-0 rounded-md overflow-hidden object-contain"
        alt={animeTitle}
      />
      <div className="flex flex-col h-full">
        <p className="text-sm line-clamp-2">{animeTitle}</p>
        <div className="text-muted-foreground mt-auto grid grid-cols-2 gap-2">
          <p className="text-xs">
            Format: <br /> {anime.format}
          </p>
          <p className="text-xs">
            Session: <br /> {anime.season}
          </p>
          <p className="text-xs">
            Year: <br /> {anime.seasonYear}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HeaderSearchResultCard;
