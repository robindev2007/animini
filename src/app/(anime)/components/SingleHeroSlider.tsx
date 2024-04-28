import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimeInfoT } from "@/types/anime.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleHeroSlider = ({ anime }: { anime: AnimeInfoT }) => {
  return (
    <div className="h-[46vh] overflow-hidden relative">
      <div className="blur-[0px] pointer-events-none">
        <Image
          src={anime.image}
          height={460}
          width={651}
          alt={anime.title}
          className="w-full anime-slider-image"
        />
      </div>
      <div className="z-10 absolute bottom-10 left-10 max-w-[40%] grid gap-2">
        <h2 className="text-3xl font-semibold">{anime.title}</h2>

        <div>
          <Badge variant={"secondary"}>ep-{anime.totalEpisodes}</Badge>
          <Badge variant={"secondary"}>{anime.subOrDub}</Badge>
        </div>
        <span className="line-clamp-2 text-sm">{anime.description}</span>
        <div>
          {anime.genres.slice(0, 5).map((genre) => (
            <Badge key={genre} variant={"secondary"}>
              {genre}
            </Badge>
          ))}
        </div>
        <Link
          href={`/watch/${anime.id.split("-dub")[0]}`}
          className={cn(buttonVariants({}), "flex w-fit h-fit py-1 mt-3")}>
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default SingleHeroSlider;
