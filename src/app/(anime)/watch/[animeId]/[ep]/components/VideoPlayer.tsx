"use client";
import AnimePlayer from "@/components/common/AnimePlayer";
import { animeStremsT } from "@/types/anime.types";
import { useSearchParams } from "next/navigation";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({
  url,
  onEnded,
}: {
  url?: string;
  onEnded: () => void;
}) => {
  const searchParams = useSearchParams();

  return (
    <div className="bg-card border min-h-[373.500px] rounded">
      <div className="grid grid-cols-1 h-full max-auto w-full min-h-[373.500px]">
        {url ? (
          <ReactPlayer
            light
            pip
            // onEnded={onEnded}

            controls
            url={url}
            playing
            width={"100%"}
            height={"100%"}
          />
        ) : (
          <div className="w-full flex items-center justify-center">
            <p>Select an episode to start watching</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
