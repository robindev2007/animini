import axios from "axios";
import React from "react";
import { TTopAiringRes } from "@/types/anime/anime.types";
import { getTopActionAnimes } from "@/app/actions/anime/animeActions";
import RenderAnimeFlex from "@/components/common/RenderAnimeFlex";

const getTopAirings = async () => {
  try {
    const data: { data: TTopAiringRes } = await axios.get(
      "https://amv-api.vercel.app/api/v2/trending?limit=13"
    );
    return { animes: data.data.results };
  } catch (error) {
    return { error };
  }
};

const Page = async () => {
  const { animes } = await getTopAirings();
  const topActionAnimes = await getTopActionAnimes({ limit: 16 });

  return (
    <div>
      {/* <Carousel /> */}
      {/* <RenderAnimeFlex animes={animes} title="Top Airing" /> */}
      <RenderAnimeFlex animes={topActionAnimes} title="Top Action" />
    </div>
  );
};

export default Page;
