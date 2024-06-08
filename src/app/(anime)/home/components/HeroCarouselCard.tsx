"use client";
import React from "react";
import { topAnime } from "@/lib/constance/anime-data";
import Image from "next/image";
import H2 from "@/components/ui/h2";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa6";

const HeroCarouselCard = ({ anime }: { anime: topAnime }) => {
  return (
    <div className="w-full relative">
      <Image
        src={anime.bannerImage ?? anime.coverImage}
        height={400}
        width={1900}
        alt=""
        className="w-full md:h-[45vh] h-[30vh] object-cover opacity-50 anime-card-image"
      />
      <div className="absolute bottom-10 left-3 w-full flex">
        <div className="w-10/12 md:w-1/2 space-y-2">
          <H2 className="text-2xl font-bold">
            {anime.title.english || anime.title.native}
          </H2>
          <span
            className="line-clamp-2 text-muted-foreground leading-4 text-pretty"
            dangerouslySetInnerHTML={{ __html: anime.description }}
          />
          <Button asChild className="text-lg flex gap-2 w-fit p-6 py-1 h-fit">
            <Link href={`/watch/${anime.id}`}>
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
