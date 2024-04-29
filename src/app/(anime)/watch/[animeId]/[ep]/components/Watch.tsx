"use client";
import React, { useEffect, useState } from "react";
import EpisodesList from "./EpisodesList";
import {
  AnimeInfoT,
  animeStoreT,
  animeStremsT,
  serverT,
  videoStateT,
} from "@/types/anime.types";
import { useAnimeState } from "@/components/custom-hooks/useAnimeStateHook";
import { useFirstRender } from "@/components/custom-hooks/useFirstRender";
import { getStremLinks, getStrems } from "@/app/actions/anime";
import Player from "@/components/vid-stack-player/player";
import EpNumberDetails from "./EpNumberDetails";
import ServerOptions from "./ServerOptions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import Image from "next/image";

const Watch = ({
  animeInfo,
  defaultVideourls,
  currentEp,
}: {
  animeInfo: AnimeInfoT;
  defaultVideourls: animeStremsT;
  currentEp: number;
}) => {
  const animeStoreRowData =
    typeof window !== "undefined" ? localStorage.getItem(animeInfo.id) : null;

  const animeStoreData = JSON.parse(animeStoreRowData as string) as AnimeInfoT;

  const [videoUrls, setVieoUrls] = useState(defaultVideourls);
  const [videoState, setVideoState] = useState<videoStateT>({
    subOrDub: animeStoreData?.subOrDub ? animeStoreData?.subOrDub : "dub",
    url: defaultVideourls.sub[0].strems.url,
  });

  const [subOrDub, setSubOrDub] = useState(animeInfo.subOrDub);
  const [loadingVideo, setLoadingVideo] = useState(false);

  const { animeEpId, activeEpState, animeIdState } = useAnimeState();

  const isFirstRender = useFirstRender();

  const handleSetVideoState = (value: videoStateT) => {
    setLoadingVideo(true);
    setVideoState(value);
    setLoadingVideo(false);
  };

  useEffect(() => {
    const getVideoUrl = async () => {
      if (isFirstRender) return;
      setLoadingVideo(true);
      const res = await getStrems({
        animeId: animeIdState,
        ep: activeEpState.toString(),
      });

      setVieoUrls(res);
      setVideoState({
        subOrDub: videoState.subOrDub,
        url:
          videoState.subOrDub === "dub"
            ? res.dub?.length
              ? res.dub[0].strems.url
              : res.sub[0].strems.url
            : res.sub[0].strems.url,
      });
      setLoadingVideo(false);
    };
    getVideoUrl();
  }, [animeEpId]);

  const setLocalStoreData = (d: animeStoreT) => {
    localStorage.setItem(animeInfo.id, JSON.stringify(d));
  };

  const nextEpisode = () => {
    history.pushState({}, "", `ep-${Number(activeEpState) + 1}`);
  };
  const prevEpisode = () => {
    history.pushState({}, "", `ep-${Number(activeEpState) + 1}`);
  };

  return (
    <div className="w-full grid gap-5 mb-20">
      {loadingVideo || !videoState.url ? (
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
          videoUrl={videoState.url}
          nextEpisode={nextEpisode}
          prevepisode={prevEpisode}
        />
      )}
      <EpNumberDetails activeEp={activeEpState} />

      <ServerOptions
        servers={videoUrls}
        setVideoState={handleSetVideoState}
        videoState={videoState}
        setLocalStoreData={setLocalStoreData}
      />

      <EpisodesList
        animeId={animeInfo.id}
        episodes={animeInfo.episodes}
        currentEp={currentEp}
        setLocalStoreData={setLocalStoreData}
      />
    </div>
  );
};

export default Watch;
