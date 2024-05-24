import React from "react";
import { Anime } from "../@topairing/page";
import { topAnime } from "@/lib/constance/anime-data";
import Image from "next/image";

const HeroCarouselCard = ({ anime }: { anime: topAnime }) => {
  return (
    <div className="w-full h-[80vh] bg-red-500">
      <Image
        src={anime.bannerImage}
        height={828}
        width={174}
        alt=""
        className="w-full min-h-[30vh]"
      />
    </div>
  );
};

export default HeroCarouselCard;
