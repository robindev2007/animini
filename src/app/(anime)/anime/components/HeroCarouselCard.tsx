"use client";
import React, { useRef } from "react";
import { Anime } from "../@topairing/page";
import { topAnime } from "@/lib/constance/anime-data";
import Image from "next/image";
import H2 from "@/components/ui/h2";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const HeroCarouselCard = ({ anime }: { anime: topAnime }) => {
  return (
    <div className="w-full relative">
      <Image
        src={anime.bannerImage ?? anime.coverImage}
        height={400}
        width={1900}
        alt=""
        className="w-full h-[45vh] object-cover opacity-50 anime-card-image"
      />
      <div className="absolute p-5 bottom-0 left-0 w-full flex">
        <div className="w-10/12 md:w-1/2 space-y-2">
          <H2>{anime.title.english || anime.title.native}</H2>
          <span
            className="line-clamp-2 text-muted-foreground leading-4 text-pretty"
            dangerouslySetInnerHTML={{ __html: anime.description }}
          />
          <Link
            className={buttonVariants({ size: "default" })}
            href={`/watch/${anime.id}`}>
            Watch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCarouselCard;
