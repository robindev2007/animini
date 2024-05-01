"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { setCookie } from "cookies-next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAnimeState } from "@/components/custom-hooks/useAnimeStateHook";
import { animeStoreDataT, episodeT } from "@/types/anime/anime.types";

const EpisodesList = ({
  episodes,
  currentEp,
  animeId,
  setLocalStoreData,
}: {
  episodes: episodeT[];
  currentEp: number;
  animeId: number;
  setLocalStoreData: (data: animeStoreDataT) => void;
}) => {
  const [selectedRange, setSelectedRange] = useState(
    Math.round(currentEp / 100) * 100
  );
  const [activeEp, setActiveEp] = useState(currentEp);
  const { animeIdState, epState, animeStoreData } = useAnimeState();

  const selectedEpisods = [];
  for (let i = (selectedRange - 1) * 100 + 1; i <= selectedRange * 100; i++) {
    selectedEpisods.push(i);
  }

  useEffect(() => {
    setActiveEp(epState);
  }, [epState]);

  const handleEpisodeButtonClick = (episode: number) => {
    history.pushState({}, "", `${episode}`);

    const isNewEp =
      !animeStoreData?.watchedEpisodes ||
      !animeStoreData.watchedEpisodes.includes(episode);

    if (!isNewEp) return;
    setLocalStoreData({
      currentEp: episode,
      watchedEpisodes: animeStoreData?.watchedEpisodes?.length
        ? [...animeStoreData.watchedEpisodes, episode]
        : [episode],
    });
  };

  return (
    <div className="grid gap-3">
      <Select
        onValueChange={(value) => setSelectedRange(Number(value))}
        defaultValue={selectedRange.toString()}>
        <SelectTrigger className="w-fit bg-secondary gap-5 text-sm">
          <SelectValue placeholder="0-100" />
        </SelectTrigger>
        <SelectContent>
          {episodes.map(
            (ep, i) =>
              i % 100 === 0 && (
                <SelectItem key={i} value={i.toString()}>
                  {i + 1} - {i + 100}
                </SelectItem>
              )
          )}
        </SelectContent>
      </Select>
      <div className="grid md:grid-cols-10 grid-cols-5 gap-1">
        {episodes
          .slice(selectedRange, selectedRange + 100)
          .map((episode, i) => {
            const epNumber = Number(
              episode.id.split("-")[episode.id.split("-").length - 1]
            );
            return (
              <Button
                key={episode.id}
                onClick={() => handleEpisodeButtonClick(epNumber)}
                variant={
                  epState == epNumber ||
                  animeStoreData?.watchedEpisodes?.includes(epNumber)
                    ? "default"
                    : "secondary"
                }
                size={"sm"}
                className={cn(
                  epState !== epNumber &&
                    animeStoreData?.watchedEpisodes?.includes(epNumber) &&
                    "opacity-20"
                )}>
                {epNumber}
              </Button>
            );
          })}
      </div>
    </div>
  );
};

export default EpisodesList;

// `ep-${episode.number}`
