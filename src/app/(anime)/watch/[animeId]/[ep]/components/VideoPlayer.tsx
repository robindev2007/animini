import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url, loading }: { url: string; loading: boolean }) => {
  return (
    <div className="h-full rounded overflow-hidden">
      {url && !loading ? (
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
