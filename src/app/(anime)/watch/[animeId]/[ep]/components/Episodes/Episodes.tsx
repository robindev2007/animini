"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { animeInfo } from "../../page";
import EpisodeButton from "./EpisodeButton";
import useShallowRoute from "@/components/hook/useShalowRoute";
import { useAnimate } from "framer-motion";
import { useAnimeState } from "@/components/hook/animeState";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { animeStore } from "@/utils/setAnimeLocalstore";
import { cn } from "@/lib/utils";

const Episodes = ({
  episodes,
  currentEp,
  animeStore,
}: {
  episodes: animeInfo["episodes"] | undefined;
  currentEp: number;
  animeStore: animeStore | undefined;
}) => {
  const { shallowRoute, shallowRouteState } = useShallowRoute();
  const { setNewEpId } = useAnimeState();
  const [epStart, setEpStart] = useState(
    Math.ceil(currentEp / 100) * 100 - 100
  );

  const pushNewEp = (ep: animeInfo["episodes"][0]) => {
    shallowRoute.push(ep.number.toString());
    setNewEpId(ep.id);
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
            length: Math.ceil((episodes?.length as number) / 100),
          }).map((arr, i) => (
            <SelectItem key={i} value={i == 0 ? `0` : `${i}00`}>
              {i === 0 ? `1-100` : `${i}01-${i + 1}00`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="grid md:grid-cols-10 grid-cols-5 gap-2">
        {episodes?.length &&
          episodes
            .slice(Number(epStart), Number(epStart) + 100)
            .map((ep) => (
              <EpisodeButton
                key={ep.number}
                ep={ep}
                activeEp={shallowRouteState}
                pushNewEp={pushNewEp}
                watched={animeStore?.watchedEpisodes?.includes(ep.number)}
              />
            ))}
      </div>
    </div>
  );
};

export default Episodes;
