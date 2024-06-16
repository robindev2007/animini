"use client";
import React from "react";
import Image from "next/image";
import H2 from "@/components/ui/h2";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa6";
import { topAnime } from "@/lib/constance/anime-data";
import { TrendingResult } from "@/types/anime/anime.types";

const CarouselCard = ({ anime }: { anime: TrendingResult }) => {
  if (!anime.bannerImage) return null;

  const animeTitle =
    anime.title.english ??
    anime.title.userPreferred ??
    anime.title.romaji ??
    anime.title.native;
  return (
    <div className="w-full relative h-full xl:flex gap-5 xl:items-center xl:justify-center rounded-sm overflow-hidden">
      <div className="order-last overflow-hidden bg-cover xl:w-[65%] h-full w-full object-cover xl:rounded-md anime-slider-image-mask relative">
        <Image
          src={anime.bannerImage ?? ""}
          fill
          alt={animeTitle}
          sizes="(min-width: 1660px) 807px, (min-width: 1280px) calc(39.17vw + 165px), 97.5vw"
          className="object-cover opacity-95"
        />
      </div>
      {/* <div className="xl:relative w-full flex"> */}
      <div className="w-[45%] absolute xl:relative h-fit left-3 bottom-10 shrink-0 xl:h-full xl:items-center xl:pl-4 md:flex">
        <div className="space-y-2">
          <H2 className="text-2xl xl:text-5xl font-bold line-clamp-2">
            {animeTitle}
          </H2>
          <span
            className="line-clamp-2 text-muted-foreground leading-4 text-pretty xl:text-lg"
            dangerouslySetInnerHTML={{ __html: anime.description }}
          />
          <Button
            asChild
            className="text-lg flex gap-2 w-fit p-6 py-1 h-fit mt-auto">
            <Link href={`/watch/${anime.id}`} className="xl:text-2xl text-lg">
              <FaPlay />
              Play now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
