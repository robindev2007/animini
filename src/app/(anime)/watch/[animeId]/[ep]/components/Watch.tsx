"use client";
import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import EpisodesList from "./EpisodesList";
import {
  AnimeInfoT,
  animeStremsT,
  availableServers,
  serverT,
} from "@/types/anime.types";
import ServerSelect from "./ServerSelect";
import { useRouter } from "next/navigation";

const WatchPage = ({
  animeInfo,
  currentEp,
  videoUrls,
  servers,
}: {
  animeInfo: AnimeInfoT;
  currentEp: number;
  videoUrls: animeStremsT;
  servers: availableServers;
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">
      <VideoPlayer
        url={videoUrls?.sources[0].url}
        onEnded={() => {
          router.push(`ep-${currentEp + 1}`);
        }}
      />

      {servers && <ServerSelect servers={servers} animeInfo={animeInfo} />}
      <EpisodesList
        animeId={animeInfo.id}
        episodes={animeInfo.episodes}
        currentEp={currentEp}
      />
    </div>
  );
};

export default WatchPage;
