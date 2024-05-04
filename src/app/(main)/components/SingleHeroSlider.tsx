import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { animeInfoT, trendingAnimeT } from "@/types/anime/anime.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleHeroSlider = ({ anime }: { anime: animeInfoT }) => {
  return (
    <div className="h-[46vh] overflow-hidden relative">
      <div className="blur-[0px] pointer-events-none">
        <Image
          src={
            anime.coverImage.extraLarge
              ? anime.coverImage.extraLarge
              : anime.coverImage.large
          }
          height={400}
          width={1900}
          alt={
            anime.title.english
              ? anime.title.english
              : anime.title.userPreferred
          }
          className="w-full anime-slider-image"
        />
      </div>
      <div className="z-10 absolute bottom-10 left-10 md:max-w-[40%] max-w-[80%] grid gap-2">
        <h2 className="text-2xl md:text-3xl font-semibold line-clamp-2">
          {anime.title.english
            ? anime.title.english
            : anime.title.userPreferred}
        </h2>

        <div>
          {anime.episodes && (
            <Badge variant={"secondary"}>ep-{anime.episodes}</Badge>
          )}
          {anime.dub && (
            <Badge variant={"secondary"}>{anime.dub && "dub"}</Badge>
          )}
        </div>
        <span
          className="line-clamp-3 text-sm text-muted-foreground font-medium"
          dangerouslySetInnerHTML={{ __html: anime.description }}
        />
        <div>
          {anime.genres.slice(0, 5).map((genre) => (
            <Badge key={genre} variant={"secondary"}>
              {genre}
            </Badge>
          ))}
        </div>
        <Link
          href={`/watch/${anime.id}`}
          className={cn(buttonVariants({}), "flex w-fit h-fit py-1 mt-3")}>
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default SingleHeroSlider;
