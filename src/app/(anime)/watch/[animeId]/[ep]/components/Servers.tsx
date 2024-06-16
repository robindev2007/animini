import React from "react";
import { Button } from "@/components/ui/button";
import { MdSubtitles } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { TAnimeStremRes } from "@/types/anime/anime.types";
import ServersSkeleton from "./loading/ServersSkeleton";

const Servers = ({
  subServer,
  dubServer,
  setVideoUrl,
  activeVideoUrl,
  loading,
}: {
  subServer?: TAnimeStremRes;
  dubServer?: TAnimeStremRes;
  activeVideoUrl: string;
  setVideoUrl: (videoUrl: string) => void;
  loading?: boolean;
}) => {
  return (
    <div className="flex gap-3 flex-col lg:py-2">
      {subServer && subServer.sources && (
        <div className="flex gap-5">
          <div className="flex items-center gap-1">
            <MdSubtitles />
            Sub
          </div>
          <div className="space-x-2">
            {subServer.sources.map((server, i) => (
              <Button
                key={server.url}
                onClick={() => setVideoUrl(server.url)}
                variant={
                  activeVideoUrl === server.url ? "default" : "secondary"
                }>
                server-{i + 1}
              </Button>
            ))}
          </div>
        </div>
      )}
      {dubServer && dubServer.sources && (
        <div className="flex gap-5">
          <div className="flex items-center gap-1">
            <FaMicrophone />
            Dub
          </div>
          <div className="space-x-2">
            {dubServer.sources.map((server, i) => (
              <Button
                key={server.url}
                onClick={() => setVideoUrl(server.url)}
                variant={
                  activeVideoUrl === server.url ? "default" : "secondary"
                }>
                server-{i + 1}
              </Button>
            ))}
          </div>
        </div>
      )}
      {/* {dubServer.sources.map((server) => (
        <div key={server.url}>
          <div className="flex items-center gap-1">
            <FaMicrophone />
            Dub
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Servers;
