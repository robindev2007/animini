"use client";
import React from "react";

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
import CarouselCard from "./CarouselCard";

const getTrandingAnimes = async () => {
  const { data } = await axios.get<TrendingRes>(
    "https://amv-api.vercel.app/api/v2/trending?limit=12"
  );
  const results = data.results.filter((anime) => !!anime.bannerImage);
  return results;
};

const Carousel = ({
  initialAnimes,
}: {
  initialAnimes: TrendingRes["results"];
}) => {
  const { data: animes } = useQuery({
    queryKey: ["popularAnimes"],
    queryFn: getTrandingAnimes,
    initialData: initialAnimes,
  });

  return (
    <Container className="md:h-[35vh] h-[30vh] lg:h-[40vh]">
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
        {animes?.map((anime) => (
          <SwiperSlide key={anime.id}>
            <CarouselCard anime={anime} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;
