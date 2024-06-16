import { Skeleton } from "@/components/ui/skeleton";
import Player from "@/components/vid-stack-player/player";
import React from "react";

const VideoPlayer = ({
  url,
  loading,
  poster,
}: {
  url: string;
  loading: boolean;
  poster?: string;
}) => {
  const nextEpisode = () => {};
  const prevEpisode = () => {};

  return (
    <div className="rounded-none overflow-hidden">
      {!url || loading ? (
        <Skeleton className="aspect-video w-full" />
      ) : (
        <Player
          videoUrl={url}
          nextEpisode={nextEpisode}
          prevepisode={prevEpisode}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
