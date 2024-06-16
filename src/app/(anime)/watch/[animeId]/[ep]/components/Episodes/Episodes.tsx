"use client";
import React, { useState } from "react";
import EpisodeButton from "./EpisodeButton";
import useShallowRoute from "@/components/hook/useShalowRoute";
import { useAnimeState } from "@/components/hook/animeState";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Episode, TAnimeEpisodes, TAnimeInfo } from "@/types/anime/anime.types";
import { Button } from "@/components/ui/button";

const Episodes = ({
  episodes,
  currentEp,
  setEp,
}: {
  episodes?: TAnimeEpisodes;
  currentEp?: number;
  setEp: any;
}) => {
  const [epStart, setEpStart] = useState(Math.ceil(1 / 100) * 100 - 100);

  const fillterdEps = episodes?.episodes.filter((ep) => {
    const epId = ep.id.split("-").pop();

    if (typeof epId !== "number" && isNaN(Number(epId))) return false;
    return true;
  });

  const handleClick = (ep: TAnimeEpisodes["episodes"][0]) => {
    if (typeof window !== "undefined") {
      setEp(ep);
      const urlEpID = "ep-" + ep.id.split("-").pop();
      history.pushState({}, "", urlEpID);
    }
  };

  return (
    <div className="space-y-2">
      <Select
        defaultValue={epStart.toString()}
        onValueChange={(value) => setEpStart(Number(value))}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({
            length: Math.ceil((fillterdEps?.length ?? 1) / 100),
          }).map((arr, i) => (
            <SelectItem key={i} value={i == 0 ? `0` : `${i}00`}>
              {i === 0 ? `1-100` : `${i}01-${i + 1}00`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="grid md:grid-cols-10 2xl:grid-cols-5 grid-cols-5 gap-1">
        {fillterdEps
          ?.toReversed()
          ?.slice(epStart, epStart + 100)
          .map((ep) => {
            const epId = ep.id.split("-").pop();

            return (
              <Button
                onClick={() => handleClick(ep)}
                variant={currentEp == epId ? "default" : "secondary"}
                key={ep.id}>
                {epId}
              </Button>
            );
          })}
      </div>
    </div>
  );
};

export default Episodes;

const a = [
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season Episode 11",
    id: "tensei-shitara-slime-datta-ken-3rd-season-episode-11",
  },
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season Episode 10",
    id: "tensei-shitara-slime-datta-ken-3rd-season-episode-10",
  },
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season Episode 9",
    id: "tensei-shitara-slime-datta-ken-3rd-season-episode-9",
  },
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season Episode 8",
    id: "tensei-shitara-slime-datta-ken-3rd-season-episode-8",
  },
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season Episode 7",
    id: "tensei-shitara-slime-datta-ken-3rd-season-episode-7",
  },
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season Episode 6",
    id: "tensei-shitara-slime-datta-ken-3rd-season-episode-6",
  },
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season Episode 5",
    id: "tensei-shitara-slime-datta-ken-3rd-season-episode-5",
  },
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season Episode 4",
    id: "tensei-shitara-slime-datta-ken-3rd-season-episode-4",
  },
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season Episode 3",
    id: "tensei-shitara-slime-datta-ken-3rd-season-episode-3",
  },
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season Episode 2",
    id: "tensei-shitara-slime-datta-ken-3rd-season-episode-2",
  },
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season Episode 1",
    id: "tensei-shitara-slime-datta-ken-3rd-season-episode-1",
  },
  {
    title: "Tensei shitara Slime Datta Ken 3rd Season Episode undefined",
    id: "tensei-shitara-slime-datta-ken-3rd-season",
  },
];
