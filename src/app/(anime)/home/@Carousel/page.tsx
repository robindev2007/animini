import React from "react";
import Carousel from "./Carousel";
import axios from "axios";
import { TrendingRes } from "@/types/anime/anime.types";
import { wati } from "@/utils/utils";

const getTrandingAnimes = async () => {
  const { data } = await axios.get<TrendingRes>(
    "https://amv-api.vercel.app/api/v2/trending?limit=12"
  );

  // await wati(5);

  return data;
};

const CarouselPage = async () => {
  const { results } = await getTrandingAnimes();
  return <Carousel initialAnimes={results} />;
};

export default CarouselPage;
