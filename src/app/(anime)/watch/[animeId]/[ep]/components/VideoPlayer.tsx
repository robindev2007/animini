import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url, loading }: { url: string; loading: boolean }) => {
  return (
    <div className="rounded-md overflow-hidden">
      {!url || loading ? (
        <Skeleton className="aspect-video" />
      ) : (
        <div className="watch_play">
          <div className="play-video min-h-64 relative h-fit pb-[56%]">
            <iframe
              className="h-full w-full absolute top-0 left-0"
              src={url}
              allowFullScreen={true}
              marginWidth={0}
              marginHeight={0}
              scrolling="no"></iframe>
          </div>
          <div className="clr"></div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
