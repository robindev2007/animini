"use client";
import { animeStore } from "@/utils/setAnimeLocalstore";
import { redirect } from "next/navigation";
import React from "react";

const WatchPage = ({
  params: { animeId },
}: {
  params: { animeId: string };
}) => {
  const localstore = typeof window !== "undefined" && localStorage;

  if (localstore) {
    const storedData = localstore.getItem(animeId);
    const data: animeStore | undefined = storedData
      ? JSON.parse(storedData)
      : undefined;

    if (!data || !data.currentEp) {
      const animeData: animeStore = {
        id: animeId,
        currentEp: 1,
        watchedEpisodes: [1],
      };
      localstore.setItem(animeId, JSON.stringify(animeData));
      return redirect(`/v2/watch/${animeId}/ep-1`);
    }

    return redirect(`/v2/watch/${animeId}/ep-${data.currentEp}`);
  }

  // Handle the case when localStorage is not available
  // animeData.

  return "loading";
};

export default WatchPage;
