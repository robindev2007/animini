"use client";
import React, { useEffect, useState } from "react";
import Episodes from "./components/Episodes/Episodes";
import useShallowRoute from "@/components/hook/useShalowRoute";
import Servers from "./components/Servers";
import { useAnimate } from "framer-motion";
import { useAnimeState } from "@/components/hook/animeState";
import VideoPlayer from "./components/VideoPlayer";
import WatchingDetails from "./components/Episodes/WatchingDetails";
import { animeStore, setAnimeStore } from "@/utils/setAnimeLocalstore";

export type animeInfo = {
  id: string;
  title: string;
  url: string;
  image: string;
  releaseDate: string; // or null
  description: string; // or null
  genres: [string];
  subOrDub: "sub";
  type: string; // or null
  status: "Ongoing";
  otherName: string; // or null
  totalEpisodes: number;
  episodes: [
    {
      id: string;
      number: 0;
      url: string;
    }
  ];
};

export type servers = {
  title: string;
  server:
    | [
        {
          name: string;
          url: string;
        }
      ]
    | null;
}[];

const EpPage = ({ params }: { params: { animeId: string; ep: string } }) => {
  const [animeInfo, setAnimeInfo] = useState<animeInfo>();
  const [servers, setServers] = useState<servers>();
  const [videoUrl, setVideoUrl] = useState("");
  const [currentEp, setCurrentEp] = useState(params.ep);
  const [loading, setLoading] = useState(false);
  const [animeStoreState, setAnimestoreState] = useState<animeStore>();

  const localstore = typeof window !== "undefined" ? localStorage : undefined;

  const { shallowRouteState } = useShallowRoute();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://animetize-api.vercel.app/info/${params.animeId}`
      );

      const data = await res.json();
      console.log(data);
      setAnimeInfo(data);
    };
    getData();
  }, []);

  const handleEpchange = () => {};

  useEffect(() => {
    setCurrentEp(shallowRouteState);
    setAnimeStore({
      id: params.animeId,
      currentEp: shallowRouteState ? Number(shallowRouteState) : 1,
      watchedEpisodes: [Number(shallowRouteState)],
    });

    if (localstore) {
      const storedData = localstore.getItem(params.animeId);
      const data = storedData
        ? (JSON.parse(storedData) as animeStore)
        : undefined;
      setAnimestoreState(data);
    }

    const getEpStrem = async () => {
      setLoading(true);
      if (!params.animeId || !params.ep) return;
      const subUrl = `https://animetize-api.vercel.app/servers/${params.animeId}-episode-${currentEp}`;
      const dubUrl = `https://animetize-api.vercel.app/servers/${params.animeId}-dub-episode-${currentEp}`;

      const subServer = await getServer(subUrl);
      const dubServer = await getServer(dubUrl);

      const subdata = { title: "Sub", server: subServer };
      const dubdata = { title: "Dub", server: dubServer };

      const d = [subdata, dubdata];
      setServers(d);
      const newVidUrl =
        dubdata && dubdata.server?.length
          ? dubdata.server[0].url
          : subdata && subdata.server?.length
          ? subdata.server[0].url
          : "";
      setNextUrl(newVidUrl);
      setLoading(false);
    };
    getEpStrem();
  }, [shallowRouteState]);

  const setNextUrl = (url: string) => {
    setVideoUrl(url);
  };

  const getServer = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = (await res.json()) as [
        {
          name: string;
          url: string;
        }
      ];
      return data;
    } catch (error) {
      return null;
    }
  };

  return (
    <div className="flex gap-3 flex-col">
      <VideoPlayer loading={loading} url={videoUrl} />
      <WatchingDetails ep={currentEp} />
      <Servers
        allServers={servers}
        setVideoUrl={setNextUrl}
        activeUrl={videoUrl}
      />
      <Episodes
        currentEp={Number(currentEp)}
        episodes={animeInfo?.episodes}
        animeStore={animeStoreState}
      />
    </div>
  );
};

export default EpPage;
