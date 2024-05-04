import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { searchResultT } from "@/types/anime/anime.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SearchAnimeCard = ({
  active,
  anime,
}: // onclick,
{
  active?: boolean;
  anime: searchResultT;
  // onclick: () => void;
}) => {
  return (
    <div>
      <Link
        // onClick={() => onclick()}
        href={`/watch/${anime.id}`}
        className={cn(
          active && "bg-secondary",
          "flex gap-2 hover:bg-secondary p-1 rounded border w-full"
        )}>
        <div className="h-28 w-20 overflow-hidden shrink-0">
          <Image
            src={anime.coverImage.extraLarge ?? anime.coverImage.large}
            height={100}
            width={100}
            alt={anime.title.english ?? anime.title.native}
            className="h-full object-cover"
          />
        </div>
        <div className="text-xs shrink-0">
          <p>
            {(anime.title.english
              ? anime.title.english
              : anime.title.userPreferred) ?? anime.title.native}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SearchAnimeCard;
