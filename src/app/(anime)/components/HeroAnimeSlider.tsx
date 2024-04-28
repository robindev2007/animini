"use client";
import { topAnimes } from "@/app/actions/data/top-animes";
import React from "react";
import SingleHeroSlider from "./SingleHeroSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "@/styles/pagination.css";

const HeroAnimeSlider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop
        autoplay={{
          delay: 2000,
        }}
        modules={[Pagination]}>
        {topAnimes.map((anime) => (
          <SwiperSlide key={anime.id}>
            <SingleHeroSlider anime={anime} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroAnimeSlider;
