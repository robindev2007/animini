"use client";

import {
  TAnimeEpisodes,
  TAnimeInfo,
  TAnimeStremRes,
} from "@/types/anime/anime.types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface UseAnimeInfoParams {
  animeId: string;
  activeEp?: TAnimeEpisodes["episodes"][0];
}

const fetchAnimeStreams = async (episodeNumber: number, id: string) => {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/stream/${id}-episode-${episodeNumber}`;

  const { data } = await axios.get<TAnimeStremRes>(url);
  return data;
};

const fetchAnimeInfo = async (animeId: string) => {
  const { data } = await axios.get<TAnimeInfo>(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v2/info/${animeId}`
  );
  return data;
};

const fetchAnimeEpisodes = async (animeId: string) => {
  const { data } = await axios.get<TAnimeEpisodes>(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/episode/${animeId}`
  );
  return data;
};

export const useAnimeInfo = ({ animeId, activeEp }: UseAnimeInfoParams) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const pathname = usePathname();
  const initialEp = pathname.split("ep-")[1];

  useEffect(() => {
    console.log(activeEp);
    return () => {};
  }, [typeof window !== "undefined" && history.state]);

  const {
    data: animeInfo,
    error,
    isLoading: infoLoading,
  } = useQuery<TAnimeInfo>({
    queryKey: ["animeInfo", animeId],
    queryFn: () => fetchAnimeInfo(animeId),
  });

  const { data: animeEpisodes, isLoading: epLoading } =
    useQuery<TAnimeEpisodes>({
      queryKey: ["animeEpisodes", animeId],
      queryFn: () =>
        fetchAnimeEpisodes(animeInfo?.id_provider?.idGogo as string),
      enabled: animeInfo?.id_provider?.idGogo ? true : false,
    });

  const {
    data: animeStreams,
    refetch: refetchAnimeStreams,
    isLoading: stremLoading,
  } = useQuery<TAnimeStremRes>({
    queryKey: [
      "animeStreams",
      Number(activeEp?.id.split("-").pop()) ?? Number(initialEp),
    ],
    queryFn: () =>
      fetchAnimeStreams(
        Number(activeEp?.id.split("-").pop()) ?? Number(initialEp),
        animeInfo?.id_provider?.idGogo as string
      ),
    enabled: animeInfo?.id_provider?.idGogo ? true : false,
  });

  const {
    data: animeDubStreams,
    refetch: refetchAnimeDubStreams,
    isLoading: dubStremLoading,
  } = useQuery<TAnimeStremRes>({
    queryKey: [
      "animeDubStreams",
      Number(activeEp?.id.split("-").pop()) ?? Number(initialEp),
    ],
    queryFn: () =>
      fetchAnimeStreams(
        Number(activeEp?.id.split("-").pop()) ?? Number(initialEp),
        animeInfo?.id_provider?.idGogoDub as string
      ),
    enabled: animeInfo?.id_provider?.idGogo ? true : false,
  });

  useEffect(() => {
    if (activeEp) {
      refetchAnimeStreams();
      refetchAnimeDubStreams();
    }
  }, [activeEp, refetchAnimeStreams, refetchAnimeDubStreams]);

  return {
    animeInfo,
    error,
    infoLoading,
    animeStreams,
    animeDubStreams,
    animeEpisodes,
    epLoading,
    dubStremLoading,
    stremLoading,
  };
};
