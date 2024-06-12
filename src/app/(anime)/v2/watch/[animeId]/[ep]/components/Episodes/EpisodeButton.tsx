"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import useshalowRoute from "@/components/hook/useShalowRoute";
import { cn } from "@/lib/utils";
import { Episode } from "@/types/anime/anime.types";

const EpisodeButton = ({
  ep,
  activeEp,
  pushNewEp,
  watched,
}: {
  ep: Episode;
  activeEp: string;
  pushNewEp: (ep: Episode) => void;
  watched?: boolean;
}) => {
  const handleClick = () => {
    pushNewEp(ep);
  };

  return (
    <Button
      onClick={handleClick}
      variant={
        activeEp == ep.id.split("-").slice(-1).toString() || watched
          ? "default"
          : "secondary"
      }
      className={cn(
        watched &&
          activeEp !== ep.id.split("-").slice(-1).toString() &&
          "opacity-50"
      )}>
      {ep.id.split("-").slice(-1).toString()}
    </Button>
  );
};

export default EpisodeButton;
