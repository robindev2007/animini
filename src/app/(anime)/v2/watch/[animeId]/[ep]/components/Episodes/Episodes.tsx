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

  // const pushNewEp = (ep: ep) => {
  //   shallowRoute.push(ep.id.split("-").slice(-1).toString());
  //   setNewEpId(ep.id);
  //   setNewEp(ep);
  // };

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
            length: Math.ceil((episodes?.episodes?.length ?? 1) / 100),
          }).map((arr, i) => (
            <SelectItem key={i} value={i == 0 ? `0` : `${i}00`}>
              {i === 0 ? `1-100` : `${i}01-${i + 1}00`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="grid md:grid-cols-10 2xl:grid-cols-5 grid-cols-5 gap-1">
        {episodes?.episodes
          ?.toReversed()
          ?.slice(epStart, epStart + 100)
          .map((ep) => (
            <Button
              onClick={() => handleClick(ep)}
              variant={
                currentEp == ep.id.split("-").pop() ? "default" : "secondary"
              }
              key={ep.id}>
              {ep.id.split("-").pop()}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Episodes;
