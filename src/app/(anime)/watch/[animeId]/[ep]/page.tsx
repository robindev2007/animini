"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Episodes from "./components/Episodes/Episodes";
import useShallowRoute from "@/components/hook/useShalowRoute";
import { usePathname } from "next/navigation";
import VideoPlayer from "./components/VideoPlayer";
import Servers from "./components/Servers";

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

export type serversWithTitle = {
  sub?: server;
  dub?: server;
}[];

const AnimeWatchPage = ({
  params: { animeId, ep },
}: {
  params: { animeId: string; ep: string };
}) => {
  const [episodes, setEpisodes] = useState<ep[]>();
  const [currentEp, setCurrentEp] = useState<ep>();
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [servers, setServers] = useState<serversWithTitle>();

  const { shallowRouteState } = useShallowRoute();
  const pathname = usePathname();

  useEffect(() => {
    const getData = async () => {
      const { data }: { data: { episodes: ep[] } } = await axios.get(
        `https://prod-2-amvstrm-api.nyt92.eu.org/api/v1/episode/${animeId}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setEpisodes(data.episodes.reverse());
      console.log(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const newEpId = pathname.split("/").slice(-1)[0];
    const subId = animeId + "-episode-" + newEpId;
    const dubId = animeId + "-dub-episode-" + newEpId;

    const getAllStrems = async () => {
      setLoading(true);
      const subStrems = await getStrem(subId);
      const dubStrems = await getStrem(dubId);
      const newServers = [{ sub: subStrems }, { dub: dubStrems }];
      setServers(newServers);
      console.log(newServers);
      const newUrl = dubStrems ? dubStrems.main.url : subStrems?.main.url || "";
      setVideoUrl(newUrl);
      setLoading(false);
    };
    getAllStrems();
  }, [shallowRouteState]);

  const getStrem = async (animeEpId: string) => {
    // get streams
    try {
      const { data } = (await axios.get(
        `https://prod-2-amvstrm-api.nyt92.eu.org/api/v2/stream/${animeEpId}`,
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
      <Servers
        allServers={servers}
        setVideoUrl={setVideoUrl}
        activeUrl={videoUrl}
      />
      <Episodes
        episodes={episodes}
        currentEp={Number(ep)}
        setNewEp={setCurrentEp}
      />
    </div>
  );
};

export default AnimeWatchPage;
