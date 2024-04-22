import React from "react";
import ReactPlayer from "react-player";

const AnimePlayer = ({
  url,
  onEnded,
}: {
  url?: string;
  onEnded: () => void;
}) => {
  return (
    <div className="grid grid-cols-1 h-full max-auto w-full min-h-[373.500px]">
      {url ? (
        <ReactPlayer
          light
          pip
          onEnded={onEnded}
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
  );
};

export default AnimePlayer;
