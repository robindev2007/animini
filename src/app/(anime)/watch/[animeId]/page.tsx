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

    if (!data || !data.currentEp) return redirect(`/watch/${animeId}/1`);

    return redirect(`/watch/${animeId}/${data.currentEp}`);
  }

  // Handle the case when localStorage is not available
  // animeData.

  return "loading";
};

export default WatchPage;
