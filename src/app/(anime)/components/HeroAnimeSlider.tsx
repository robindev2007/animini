"use client";
import React from "react";
import SingleHeroSlider from "./SingleHeroSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "@/styles/pagination.css";
import { animeInfoT, trendingAnimeT } from "@/types/anime/anime.types";

const HeroAnimeSlider = ({
  trandingAnimes,
}: {
  trandingAnimes: animeInfoT[];
}) => {
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
        {trandingAnimes &&
          trandingAnimes.map((anime) => (
            <SwiperSlide key={anime.id}>
              <SingleHeroSlider anime={anime} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HeroAnimeSlider;
