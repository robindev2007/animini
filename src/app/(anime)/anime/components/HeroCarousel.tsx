"use client";
import { topAnimes } from "@/lib/constance/anime-data";
import React, { useRef } from "react";
import HeroCarouselCard from "./HeroCarouselCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroCarousel = () => {
  const animes = topAnimes;
  const plugin = useRef(Autoplay({ delay: 1000 * 5, stopOnInteraction: true }));
  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}>
        <CarouselContent className="-ml-4">
          {animes.map((anime) => (
            <CarouselItem className="pl-4" key={anime.title.native}>
              <HeroCarouselCard anime={anime} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
