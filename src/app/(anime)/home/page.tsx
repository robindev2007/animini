import axios from "axios";
import React from "react";
import TopAirings from "./components/TopAirings";
import HeroCarousel from "./components/HeroCarousel";
import Carousel from "./components/Carousel";

const getTopAirings = async () => {
  try {
    const data = await axios.get("https://animetize-api.vercel.app/top-airing");
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
