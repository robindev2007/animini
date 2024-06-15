import { getTopActionAnimes } from "@/app/actions/anime/animeActions";
import Container from "@/components/common/Container";
import RenderAnimeFlex from "@/components/common/RenderAnimeFlex";
import { TTopAiringRes } from "@/types/anime/anime.types";
import axios from "axios";
import React from "react";

const TopAiring = async () => {
  const animes = await getTopActionAnimes();
  return <RenderAnimeFlex animes={animes} title="Top Action" />;
};

export default TopAiring;
