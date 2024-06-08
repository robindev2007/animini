"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Episodes from "./Episodes/Episodes";
import useShallowRoute from "@/components/hook/useShalowRoute";
import { usePathname } from "next/navigation";
import VideoPlayer from "./VideoPlayer";
import Servers from "./Servers";
import WatchingDetails from "./Episodes/WatchingDetails";
import AnimeInfo from "./AnimeInfo";
import { animeInfoT } from "@/types/anime/anime.types";

export type ep = { id: string; title: string };
export type stream = {
  stream: {
    multi: {
      main: {
        url: string;
        label: string;
        isM3U8: boolean;
        quality: string;
      };
      backup: {
        url: string;
        label: string;
        isM3U8: boolean;
        quality: string;
      };
    };
    tracks: string;
  };
};
export type server = {
  main: {
    url: string;
    label: string;
    isM3U8: boolean;
    quality: string;
  };
  backup: {
    url: string;
    label: string;
    isM3U8: boolean;
    quality: string;
  };
};
export type animeStore = {
  id: string;
  currentEp: number;
  watchedEpisodes: number[];
};

export type serversWithTitle = {
  Sub?: server;
  Dub?: server;
}[];

const AnimeWatch = ({
  params: { animeId, ep },
}: {
  params: { animeId: string; ep: string };
}) => {
  const [episodes, setEpisodes] = useState<ep[]>();
  const [currentEp, setCurrentEp] = useState<ep>();
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [servers, setServers] = useState<serversWithTitle>();
  const [animeLocaldata, setAnimeLocaldata] = useState<animeStore>();
  const [animeInfo, setAnimeInfo] = useState<animeInfoT>();

  const localStore = typeof window !== "undefined" ? localStorage : undefined;

  const { shallowRouteState } = useShallowRoute();
  const pathname = usePathname();

  useEffect(() => {
    const getData = async () => {
      const { data }: { data: { episodes: ep[] } } = await axios.get(
        `https://api.amvstr.me/api/v1/episode/${animeId}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setEpisodes(data.episodes.reverse());
      console.log(data);
      const res = await fetch(
        `https://animetize-api.vercel.app/info/${animeId}`,
        {
          cache: "force-cache",
        }
      );
      const anime = (await res.json()) as animeInfoT;
      setAnimeInfo(anime);
    };
    getData();
  }, []);

  useEffect(() => {
    const newEpId = pathname.split("/").slice(-1)[0];
    const subId = animeId + "-episode-" + newEpId;
    const dubId = animeId + "-dub-episode-" + newEpId;

    const setLocastoreData = () => {
      if (!localStore) return;

      const oldData = JSON.parse(
        localStore?.getItem(animeId) as string
      ) as animeStore;

      if (!oldData || !oldData.currentEp) {
        const animeData: animeStore = {
          id: animeId,
          currentEp: Number(ep),
          watchedEpisodes: [Number(ep)],
        };
        localStore.setItem(animeId, JSON.stringify(animeData));
        setAnimeLocaldata(animeData);
        return;
      }

      const newEpisodesSet = new Set([
        ...oldData.watchedEpisodes,
        Number(newEpId),
      ]);
      const newEpisodes = Array.from(newEpisodesSet).sort((a, b) => a - b);
      const newData: animeStore = {
        ...oldData,
        currentEp: Number(newEpId),
        watchedEpisodes: newEpisodes,
      };

      localStore.setItem(animeId, JSON.stringify(newData));
      setAnimeLocaldata(newData);
    };

    const getAllStrems = async () => {
      setLoading(true);
      const subStrems = await getStrem(subId);
      const dubStrems = await getStrem(dubId);
      const newServers = [{ Sub: subStrems }, { Dub: dubStrems }];
      setServers(newServers);
      console.log(newServers);
      const newUrl = dubStrems ? dubStrems.main.url : subStrems?.main.url || "";
      setVideoUrl(newUrl);
      setLoading(false);
    };
    getAllStrems();
    setLocastoreData();
  }, [shallowRouteState]);

  const getStrem = async (animeEpId: string) => {
    // get streams
    try {
      const { data } = (await axios.get(
        `https://api.amvstr.me/api/v2/stream/${animeEpId}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )) as { data: stream };

      return data.stream.multi as server;
    } catch (error) {
      return undefined;
    }
  };

  return (
    <div className="space-y-2">
      <VideoPlayer url={videoUrl} loading={loading} />
      <div className="flex gap-2 flex-col lg:flex-row p-2">
        <WatchingDetails ep={pathname.split("/").splice(-1)[0]} />

        <Servers
          allServers={servers}
          setVideoUrl={setVideoUrl}
          activeUrl={videoUrl}
        />
      </div>
      <Episodes
        episodes={episodes}
        currentEp={Number(currentEp?.id.split("-").splice(-1) || ep)}
        setNewEp={setCurrentEp}
        animeStore={animeLocaldata}
      />
      {animeInfo && <AnimeInfo anime={animeInfo} />}
    </div>
  );
};

export default AnimeWatch;
