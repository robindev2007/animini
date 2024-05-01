import React from "react";

import Watch from "./components/Watch";
import Image from "next/image";
import { cookies } from "next/headers";
import { Metadata, ResolvingMetadata } from "next";
import { getAnimeData, getStrems } from "@/app/actions/anime/anime";
import { animeInfoT, episodeT, singleStremT } from "@/types/anime/anime.types";

const AnimeEpPage = async ({
  params,
}: {
  params: { ep: string; animeId: string };
}) => {
  const { info, episodes } = (await getAnimeData(params.animeId)) as {
    info: animeInfoT;
    episodes: episodeT[];
  };

  const strems = await getStrems({
    idSub: info.id_provider.idGogo,
    idDub: info.id_provider.idGogoDub,
    ep: params.ep.split("-")[params.ep.split("-").length - 1],
  });

  return (
    <div className="grid gap-3">
      <Watch animeInfo={info} defaultStrimes={strems} currentEp={params.ep} />
    </div>
  );
};

export default AnimeEpPage;
