"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { animeInfo } from "../../page";
import EpisodeButton from "./EpisodeButton";
import useShallowRoute from "@/components/hook/useShalowRoute";
import { useAnimate } from "framer-motion";
import { useAnimeState } from "@/components/hook/animeState";

const Episodes = ({
  episodes,
}: {
  episodes: animeInfo["episodes"] | undefined;
}) => {
  const { shallowRoute, shallowRouteState } = useShallowRoute();
  const { setNewEpId } = useAnimeState();

  const pushNewEp = (ep: animeInfo["episodes"][0]) => {
    shallowRoute.push(ep.number.toString());
    setNewEpId(ep.id);
  };

  return (
    <div>
      <div className="grid grid-cols-10 gap-2">
        {episodes &&
          episodes.map((ep) => (
            <EpisodeButton
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
