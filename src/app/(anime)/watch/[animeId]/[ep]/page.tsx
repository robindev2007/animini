"use client";
import React, { useEffect, useState } from "react";
import Episodes from "./components/Episodes/Episodes";
import useShallowRoute from "@/components/hook/useShalowRoute";
import Servers from "./components/Servers";
import { useAnimate } from "framer-motion";
import { useAnimeState } from "@/components/hook/animeState";
import VideoPlayer from "./components/VideoPlayer";

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

export type servers = [
  {
    name: string;
    url: string;
  }
];

const EpPage = ({ params }: { params: { animeId: string; ep: string } }) => {
  const [animeInfo, setAnimeInfo] = useState<animeInfo>();
  const [servers, setServers] = useState<servers>();
  const [videoUrl, setVideoUrl] = useState("");

  const { shallowRouteState } = useShallowRoute();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://animetize-api.vercel.app/info/${params.animeId}`
      );

      const data = await res.json();
      setAnimeInfo(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getEpStrem = async () => {
      const res = await fetch(
        `https://animetize-api.vercel.app/servers/${animeInfo?.id}-episode-${shallowRouteState}`
      );
      const data = await res.json();
      console.log(data);
      setServers(data);
    };
    getEpStrem();
  }, [shallowRouteState]);

  const setNVideoUrl = (url: string) => {
    setVideoUrl(url);
  };

  const { animeId, epId } = useAnimeState();

  return (
    <div className="flex gap-3 flex-col">
      {videoUrl}
      <VideoPlayer url={videoUrl} />
      <Servers servers={servers} setVideoUrl={setNVideoUrl} />
      <Episodes episodes={animeInfo?.episodes} />
    </div>
  );
};

export default EpPage;
