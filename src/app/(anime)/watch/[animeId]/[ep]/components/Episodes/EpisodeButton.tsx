"use client";
import React from "react";
import { ep } from "../WatchPage";
import { Button } from "@/components/ui/button";
import useshalowRoute from "@/components/hook/useShalowRoute";
import { cn } from "@/lib/utils";

const EpisodeButton = ({
  ep,
  activeEp,
  pushNewEp,
  watched,
}: {
  ep: ep;
  activeEp: string;
  pushNewEp: (ep: ep) => void;
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
