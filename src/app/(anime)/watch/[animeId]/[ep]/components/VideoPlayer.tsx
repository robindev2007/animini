import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }: { url: string }) => {
  return (
    <div className="h-full rounded overflow-hidden">
      {url ? (
        <iframe
          src={url}
          width={"100%"}
          className="aspect-video h-full w-full overflow-hidden"
        />
      ) : (
        <div className="aspect-video bg-secondary"></div>
      )}
    </div>
  );
};

export default VideoPlayer;
