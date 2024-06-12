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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TrendingRes } from "@/types/anime/anime.types";

const getTrandingAnimes = async () => {
  const { data } = await axios.get<TrendingRes>(
    "https://amv-api.vercel.app/api/v2/trending?limit=12"
  );
  return data;
};

const Carousel = () => {
  const { data: animes } = useQuery({
    queryKey: ["popularAnimes"],
    queryFn: getTrandingAnimes,
  });

  return (
    <Container className="md:h-[40vh] h-[30vh]">
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
        className="h-full">
        {animes?.results.map((anime) => (
          <SwiperSlide key={anime.id}>
            <HeroCarouselCard anime={anime} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;
