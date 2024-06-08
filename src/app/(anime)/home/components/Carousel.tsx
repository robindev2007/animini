"use client";
import { topAnimes } from "@/lib/constance/anime-data";
import React from "react";
import HeroCarouselCard from "./HeroCarouselCard";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Container from "@/components/common/Container";

const Carousel = () => {
  const animes = topAnimes;

  return (
    <Container>
      <Swiper
        speed={500}
        keyboard
        pagination={{
          clickable: true,
          bulletActiveClass: "bg-primary",
          bulletClass: "bg-muted-foreground/80 h-2 w-2 rounded-full flex",
        }}
        modules={[Pagination]}
        autoplay
        loop
        fadeEffect={{ crossFade: true }}
        className="">
        {animes.map((anime) => (
          <SwiperSlide key={anime.id}>
            <HeroCarouselCard anime={anime} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;
