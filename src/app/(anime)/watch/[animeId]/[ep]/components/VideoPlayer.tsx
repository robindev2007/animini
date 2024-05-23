import { Skeleton } from "@/components/ui/skeleton";
import Player from "@/components/vid-stack-player/player";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url, loading }: { url: string; loading: boolean }) => {
  const nextEpisode = () => {};
  const prevEpisode = () => {};
  return (
    <div className="rounded-md overflow-hidden">
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
// https://www034.vipanicdn.net/streamhls/0b594d900f47daabc194844092384914/ep.19.1709230009.m3u8
