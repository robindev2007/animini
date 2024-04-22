import React from "react";
import {
  getAnimeInfo,
  getAvailableServers,
  getStremLinks,
} from "@/app/actions/anime";
import WatchPage from "./components/Watch";
import { serversNames } from "@/lib/constance/constances";
import { animeStremsT } from "@/types/anime.types";
import VideoPlayer from "./components/VideoPlayer";

const AnimeEpPage = async ({
  params,
}: {
  params: { ep: string; animeId: string };
}) => {
  const animeInfo = await getAnimeInfo({ id: params.animeId });

  const epId =
    params.ep === "ep-0"
      ? params.animeId
      : params.animeId + "-episode" + params.ep.split("ep")[1];

  const videourls = (await getStremLinks(epId)) as animeStremsT;

  const availableServers = await getAvailableServers(
    animeInfo.id,
    animeInfo.subOrDub,
    epId
  );

  return (
    <div className="flex flex-col">
      {/* <WatchPage
        animeInfo={animeInfo}
        currentEp={Number(params.ep.split("ep-")[1])}
        videoUrls={videourls}
        servers={availableServers}
      />
      {JSON.stringify(availableServers)} */}
      <VideoPlayer url={videourls?.sources[0].url} />
    </div>
  );
};

export default AnimeEpPage;
