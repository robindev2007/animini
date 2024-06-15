import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SearchResult } from "@/types/anime/anime.types";

const HeaderSearchResultCard = ({ anime }: { anime: SearchResult }) => {
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
      href={`/v2/watch/${anime.id}`}
      className="flex w-full gap-2 hover:bg-primary-lite py-2 even:bg-black odd:bg-card transition-all duration-200 px-2 ease-linear">
      <Image
        src={anime.coverImage.large ?? anime.coverImage.medium ?? ""}
        height={230}
        width={335}
        className="aspect-[230/335] w-16 shrink-0 rounded-md overflow-hidden object-contain"
        alt={animeTitle}
      />
      <div className="flex flex-col h-full">
        <p className="text-sm line-clamp-2">{animeTitle}</p>
        <div>
          <p></p>
        </div>
      </div>
    </Link>
  );
};

export default HeaderSearchResultCard;
