import Container from "@/components/common/Container";
import RenderAnimeFlex from "@/components/common/RenderAnimeFlex";
import { TTopAiringRes } from "@/types/anime/anime.types";
import axios from "axios";
import React from "react";

const getTopAction = async () => {
  try {
    const data: { data: TTopAiringRes } = await axios.get(
      "https://amv-api.vercel.app/api/v2/trending?limit=17"
    );

    return { animes: data.data.results };
  } catch (error) {
    return { error };
  }
};

const TopAiring = async () => {
  const { animes } = await getTopAction();
  return <RenderAnimeFlex animes={animes} title="Top Airings" />;
};

export default TopAiring;
