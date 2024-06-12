"use client";
import React, { useEffect, useState } from "react";
import { Episode, TAnimeEpisodes } from "@/types/anime/anime.types";
import { useAnimeInfo } from "@/utils/hooks/userAnimeInfo";
import AnimeInfo from "./AnimeInfo";
import VideoPlayer from "./VideoPlayer";
import Servers from "./Servers";
import Episodes from "./Episodes/Episodes";
import { usePathname } from "next/navigation";
import RelatedAnimes from "./RelatedAnimes";
import NotFound from "@/components/common/not-founnd-page";
import WatchingDetails from "./WatchingDetails";

const AnimeWatch = ({
  params: { animeId, ep },
}: {
  params: { animeId: string; ep: string };
}) => {
  const [activeVideoUrl, setActiveVideoUrl] = useState("");
  const [activeEp, setActiveEp] = useState<TAnimeEpisodes["episodes"][0]>();

  const pathname = usePathname();
  const initialEp = Number(pathname.split("-").pop()) || Number(ep);

  const {
    animeInfo,
    animeStreams,
    animeDubStreams,
    animeEpisodes,
    error,
    infoLoading,
    dubStremLoading,
    epLoading,
    stremLoading,
  } = useAnimeInfo({
    animeId,
    activeEp,
  });

  const handleSetVideoUrl = (videoUrl: string) => {
    setActiveVideoUrl(videoUrl);
  };

  const setNewEp = (newEp: Episode) => {
    setActiveEp(newEp);
  };

  useEffect(() => {
    if (animeStreams || animeDubStreams) {
      const videoUrl =
        (animeDubStreams?.sources && animeDubStreams.sources.length > 0
          ? animeDubStreams.sources[0].url
          : "") ||
        (animeStreams?.sources && animeStreams.sources.length > 0
          ? animeStreams.sources[0].url
          : "");
      setActiveVideoUrl(videoUrl);
    }
  }, [animeStreams, animeDubStreams]);

  useEffect(() => {
    if (animeEpisodes && animeEpisodes?.episodes && !activeEp) {
      const initialEpisode = animeEpisodes?.episodes?.find(
        (episode) => Number(episode.id.split("-").pop()) === initialEp
      );
      setActiveEp(initialEpisode);
    }
  }, [animeEpisodes, initialEp, activeEp]);

  if (error) {
    return `Error: ${error.message}`;
  }

  if (!infoLoading && !animeInfo) {
    return <NotFound />;
  }

  if (
    !infoLoading &&
    !animeInfo?.id_provider?.idGogo &&
    !animeInfo?.id_provider?.idGogoDub
  )
    return "this anime is not yeat loaded";

  return (
    <div className="flex gap-2 flex-col xl:flex-row">
      <div className="flex flex-col 2xl:flex-row-reverse gap-5 justify-between">
        <div className="flex flex-col gap-2 h-full">
          <VideoPlayer
            url={activeVideoUrl}
            loading={dubStremLoading ?? stremLoading}
          />
          <div className="flex flex-1 gap-3 flex-col md:flex-row">
            <WatchingDetails
              currentEp={activeEp?.id.split("-").pop() ?? initialEp}
            />
            <Servers
              loading={dubStremLoading ?? stremLoading}
              activeVideoUrl={activeVideoUrl}
              subServer={animeStreams}
              dubServer={animeDubStreams}
              setVideoUrl={handleSetVideoUrl}
            />
          </div>
          <div className="2xl:flex hidden">
            <AnimeInfo anime={animeInfo} />
          </div>
        </div>

        <div className="shrink-0">
          <Episodes
            currentEp={Number(activeEp?.id.split("-").pop())}
            episodes={animeEpisodes}
            setEp={setNewEp}
          />
        </div>
        <div className="2xl:hidden">
          <AnimeInfo anime={animeInfo} />
        </div>
      </div>
      {animeInfo?.relation && animeInfo?.relation?.length > 0 && (
        <RelatedAnimes animes={animeInfo?.relation} />
      )}
    </div>
  );
};

export default AnimeWatch;
