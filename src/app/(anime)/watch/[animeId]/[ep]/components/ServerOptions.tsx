import { Button } from "@/components/ui/button";
import {
  animeStoreT,
  animeStreamResT,
  animeStremsT,
  serverT,
  videoStateT,
} from "@/types/anime.types";
import React from "react";

const ServerOptions = ({
  servers,
  setVideoUrl,
  setLocalStoreData,
  videoUrl,
}: {
  servers: animeStremsT;
  setVideoUrl: (value: string) => void;
  setLocalStoreData: (data: animeStoreT) => void;
  videoUrl: string;
}) => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {servers.sub && servers.sub.length && (
          <div className="gap-3 flex items-center">
            <span>Sub</span>
            <div className="flex gap-2 items-center">
              {servers.sub.map((server) => (
                <Button
                  key={server.title}
                  onClick={() => {
                    setVideoUrl(server.strems.url);
                    setLocalStoreData({
                      prefiredLanguge: "sub",
                    });
                  }}
                  variant={
                    videoUrl === server.strems.url ? "default" : "secondary"
                  }
                  size={"sm"}>
                  {server.strems.quality}
                </Button>
              ))}
            </div>
          </div>
        )}
        {servers.dub && servers.dub.length && (
          <div className="gap-3 flex items-center">
            <span>Dub</span>
            <div className="flex gap-2 items-center">
              {servers.dub.map((server) => (
                <Button
                  key={server.title}
                  onClick={() => {
                    setVideoUrl(server.strems.url);
                    setLocalStoreData({
                      prefiredLanguge: "sub",
                    });
                  }}
                  variant={
                    videoUrl === server.strems.url ? "default" : "secondary"
                  }
                  size={"sm"}>
                  {server.strems.quality}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServerOptions;
