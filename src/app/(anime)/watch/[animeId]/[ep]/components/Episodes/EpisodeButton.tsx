"use client";
import React from "react";
import { animeInfo } from "../../page";
import { Button } from "@/components/ui/button";
import useshalowRoute from "@/components/hook/useShalowRoute";
import { cn } from "@/lib/utils";

const EpisodeButton = ({
  ep,
  activeEp,
  pushNewEp,
  watched,
}: {
  ep: animeInfo["episodes"][0];
  activeEp: string;
  pushNewEp: (ep: animeInfo["episodes"][0]) => void;
  watched?: boolean;
}) => {
  const handleClick = () => {
    pushNewEp(ep);
  };

  return (
    <Button
      onClick={handleClick}
      variant={
        activeEp == ep.number.toString() || watched ? "default" : "secondary"
      }
      className={cn(
        watched && activeEp !== ep.number.toString() && "opacity-50"
      )}>
      {ep.number}
    </Button>
  );
};

export default EpisodeButton;
