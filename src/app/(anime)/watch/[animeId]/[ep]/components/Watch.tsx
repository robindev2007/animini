"use client";
import React, { useEffect, useState } from "react";
import EpisodesList from "./EpisodesList";

import { useAnimeState } from "@/components/custom-hooks/useAnimeStateHook";
import {
  animeInfoT,
  animeStoreDataT,
  singleStremT,
  stremsT,
} from "@/types/anime/anime.types";
import ServerOptions from "./ServerOptions";
import { getStrems } from "@/app/actions/anime/anime";
import { useFirstRender } from "@/components/custom-hooks/useFirstRender";
import Player from "@/components/vid-stack-player/player";
import EpNumberDetails from "./EpNumberDetails";
import Image from "next/image";

const Watch = ({
  animeInfo,
  defaultStrimes,
  currentEp,
}: {
  animeInfo: animeInfoT;
  defaultStrimes: stremsT;
  currentEp: string;
}) => {
  const { animeStoreData, epState } = useAnimeState();

  const [strems, setStrems] = useState(defaultStrimes);
  const [videoUrl, setVideoUrl] = useState(
    defaultStrimes.sub ? defaultStrimes.sub[0].strems.url : ""
  );
  const [loading, setLoading] = useState(false);

  const isfirstRender = useFirstRender();

  useEffect(() => {
    const getStremsLink = async () => {
      if (isfirstRender) return;
      setLoading(true);
      const videoUrl = await getStrems({
        idDub: animeInfo.id_provider.idGogoDub,
        idSub: animeInfo.id_provider.idGogo,
        ep: epState.toString(),
      });

      setStrems(videoUrl);
      setVideoUrl(
        videoUrl.dub
          ? videoUrl.dub[0].strems.url
          : videoUrl.sub
          ? videoUrl.sub[0].strems.url
          : ""
      );
      setLoading(false);
    };

    getStremsLink();

    return () => {};
  }, [epState]);

  const nextEpisode = () => {
    history.pushState({}, "", `${Number(epState) + 1}`);
  };
  const prevEpisode = () => {
    history.pushState({}, "", `${Number(epState) - 1}`);
  };

  const changeServer = (url: string) => {
    setVideoUrl(url);
  };

  const setLocalStoreData = (data: animeStoreDataT) => {
    if (typeof window !== "undefined") {
      const updatedData: animeStoreDataT = {
        ...animeStoreData,
        ...data,
        watchedEpisodes: data.watchedEpisodes,
      };
      localStorage.setItem(
        animeInfo.id.toString(),
        JSON.stringify(updatedData)
      );
    }
  };

  return (
    <div className="w-full grid gap-5 mb-20">
      {loading || !videoUrl ? (
        <div className="aspect-video rounded-md bg-secondary flex items-center justify-center flex-col">
          <Image
            className="h-[20%] w-auto"
            src={"/images/pokimon-loading.gif"}
            height={600}
            width={600}
            alt="loading..."
          />
          <div className="text-muted-foreground/60">Loading...</div>
        </div>
      ) : (
        <Player
          videoUrl={videoUrl}
          nextEpisode={nextEpisode}
          prevepisode={prevEpisode}
        />
      )}
      <EpNumberDetails activeEp={epState} />
      <ServerOptions
        servers={strems}
        activeUrl={videoUrl}
        changeServer={changeServer}
      />

      <EpisodesList
        animeId={animeInfo.id}
        episodes={animeInfo.episodeList}
        currentEp={epState}
        setLocalStoreData={setLocalStoreData}
      />
    </div>
  );
};

export default Watch;
