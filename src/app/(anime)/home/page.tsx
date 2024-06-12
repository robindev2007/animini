import axios from "axios";
import React from "react";
import TopAirings from "./components/TopAirings";
import Carousel from "./components/Carousel";
import { TTopAiringRes } from "@/types/anime/anime.types";

const getTopAirings = async () => {
  try {
    const data: { data: TTopAiringRes } = await axios.get(
      "https://amv-api.vercel.app/api/v2/trending?limit=100"
    );
    return { animes: data.data.results };
  } catch (error) {
    return { error };
  }
};

const Page = async () => {
  const { animes } = await getTopAirings();

  return (
    <div>
      {/* <HeroCarousel /> */}
      <Carousel />
      <TopAirings animes={animes} />
    </div>
  );
};

export default Page;
