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

const Episodes = ({
  episodes,
  currentEp,
}: {
  episodes: animeInfo["episodes"] | undefined;
  currentEp: number;
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

  const num = 199;
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
        </SelectContent>
      </Select>
      <div className="grid grid-cols-10 gap-2">
        {episodes?.length &&
          episodes
            .slice(epStart, epStart + 100)
            .map((ep) => (
              <EpisodeButton
                key={ep.number}
                ep={ep}
                activeEp={shallowRouteState}
                pushNewEp={pushNewEp}
              />
            ))}
      </div>
    </div>
  );
};

export default Episodes;
