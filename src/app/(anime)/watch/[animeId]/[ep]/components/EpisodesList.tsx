"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimeInfoT, animeStoreT } from "@/types/anime.types";
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

const EpisodesList = ({
  episodes,
  currentEp,
  animeId,
  setLocalStoreData,
}: {
  episodes: AnimeInfoT["episodes"];
  currentEp: number;
  animeId: string;
  setLocalStoreData: (data: animeStoreT) => void;
}) => {
  const [selectedRange, setSelectedRange] = useState(
    Math.round(currentEp / 100) * 100
  );
  const [activeEp, setActiveEp] = useState(currentEp);

  const { activeEpState, animeIdState } = useAnimeState();

  const selectedEpisods = [];
  for (let i = (selectedRange - 1) * 100 + 1; i <= selectedRange * 100; i++) {
    selectedEpisods.push(i);
  }

  useEffect(() => {
    setActiveEp(activeEpState);
  }, [activeEpState, animeIdState]);

  const animeStoreData =
    typeof window !== "undefined" && localStorage.getItem(animeId);

  const handleEpisodeButtonClick = (episode: AnimeInfoT["episodes"][0]) => {
    history.pushState({}, "", `ep-${episode.number}`);

    const oldData = JSON.parse(animeStoreData as string) as animeStoreT;

    setLocalStoreData({
      ...oldData,
      title: animeId,
      currentEp: episode.number,
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
        {episodes.slice(selectedRange, selectedRange + 100).map((episode) => (
          <Button
            onClick={() => handleEpisodeButtonClick(episode)}
            variant={activeEp === episode.number ? "default" : "secondary"}
            key={episode.number}>
            {episode.number}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default EpisodesList;

// `ep-${episode.number}`
