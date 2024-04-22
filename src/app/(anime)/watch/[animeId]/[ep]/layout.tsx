import React, { Children, ReactNode } from "react";
import EpisodesList from "./components/EpisodesList";
import ServerSelect from "./components/ServerSelect";
import {
  getAnimeInfo,
  getAvailableServers,
  getStremLinks,
} from "@/app/actions/anime";
import { animeStremsT, availableServers } from "@/types/anime.types";

const WatchAnimeLayout = async ({
  params,
  children,
}: {
  params: { ep: string; animeId: string };
  children: ReactNode;
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
    <div>
      {Number(params.ep.split("ep-")[1])}
      {children}
      {availableServers && (
        <ServerSelect
          servers={availableServers as availableServers}
          animeInfo={animeInfo}
        />
      )}
      <EpisodesList
        animeId={animeInfo.id}
        episodes={animeInfo.episodes}
        currentEp={Number(params.ep.split("ep-")[1])}
      />
    </div>
  );
};

export default WatchAnimeLayout;
