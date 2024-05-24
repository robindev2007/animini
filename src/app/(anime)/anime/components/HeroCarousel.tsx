"use client";
import { topAnimes } from "@/lib/constance/anime-data";
import React from "react";
import HeroCarouselCard from "./HeroCarouselCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroCarousel = () => {
  const animes = topAnimes;
  return (
    <div>
      <Carousel>
        <CarouselContent className="-ml-4">
          {animes.map((anime) => (
            <CarouselItem className="pl-4" key={anime.title.native}>
              <HeroCarouselCard anime={animes[0]} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
