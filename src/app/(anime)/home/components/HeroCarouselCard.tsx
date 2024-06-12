"use client";
import React from "react";
import Image from "next/image";
import H2 from "@/components/ui/h2";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa6";
import { topAnime } from "@/lib/constance/anime-data";
import { TrendingResult } from "@/types/anime/anime.types";

const HeroCarouselCard = ({ anime }: { anime: TrendingResult }) => {
  const animeImage =
    anime.coverImage.extraLarge ??
    anime.coverImage.large ??
    anime.coverImage.medium;
  const animeTitle =
    anime.title.english ??
    anime.title.userPreferred ??
    anime.title.romaji ??
    anime.title.native;
  return (
    <div className="w-full relative h-full">
      <Image
        src={anime.bannerImage ?? animeImage ?? ""}
        height={400}
        width={1900}
        alt=""
        className="w-full h-full object-cover opacity-50 anime-card-image"
      />
      <div className="absolute bottom-10 left-3 w-full flex">
        <div className="w-10/12 md:w-1/2 space-y-2">
          <H2 className="text-2xl font-bold">{animeTitle}</H2>
          <span
            className="line-clamp-2 text-muted-foreground leading-4 text-pretty"
            dangerouslySetInnerHTML={{ __html: anime.description }}
          />
          <Button asChild className="text-lg flex gap-2 w-fit p-6 py-1 h-fit">
            <Link href={`/v2/watch/${anime.id}`}>
              <FaPlay />
              Play now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarouselCard;
