import { Skeleton } from "@/components/ui/skeleton";
import Player from "@/components/vid-stack-player/player";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url, loading }: { url: string; loading: boolean }) => {
  const nextEpisode = () => {};
  const prevEpisode = () => {};
  return (
    <div className="rounded overflow-hidden">
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
