"use client";
import React from "react";
import { animeInfo } from "../../page";
import { Button } from "@/components/ui/button";
import useshalowRoute from "@/components/hook/useShalowRoute";

const EpisodeButton = ({
  ep,
  activeEp,
  pushNewEp,
}: {
  ep: animeInfo["episodes"][0];
  activeEp: string;
  pushNewEp: (ep: animeInfo["episodes"][0]) => void;
}) => {
  const handleClick = () => {
    pushNewEp(ep);
  };

  return (
    <Button
      onClick={handleClick}
      variant={activeEp == ep.number.toString() ? "default" : "secondary"}
      className="">
      {ep.number}
    </Button>
  );
};

export default EpisodeButton;
