import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AnimeSearchT } from "@/types/anime.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SearchAnimeCard = ({
  active,
  anime,
  onclick,
}: {
  active?: boolean;
  anime: AnimeSearchT["results"][0];
  onclick: () => void;
}) => {
  return (
    <div>
      <Link
        onClick={() => onclick()}
        href={`/watch/${anime.id}`}
        className={cn(
          active && "bg-secondary",
          "flex gap-2 hover:bg-secondary p-1 rounded border"
        )}>
        <div className="h-16 w-fit overflow-hidden">
          <Image src={anime.image} height={100} width={100} alt={anime.title} />
        </div>
        <div className="text-xs">
          <p>{anime.title}</p>
          <Badge variant={"secondary"} className="scale-90">
            {anime.subOrDub}
          </Badge>
        </div>
      </Link>
    </div>
  );
};

export default SearchAnimeCard;
