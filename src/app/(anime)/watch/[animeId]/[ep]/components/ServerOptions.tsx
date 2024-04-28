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
  setVideoState,
  videoState,
  setLocalStoreData,
}: {
  servers: animeStremsT;
  setVideoState: (value: videoStateT) => void;
  videoState: videoStateT;
  setLocalStoreData: (data: animeStoreT) => void;
}) => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {servers.sub.length && (
          <div className="gap-3 flex items-center">
            <span>Sub</span>
            <div className="flex gap-2 items-center">
              {servers.sub.map((server) => (
                <Button
                  key={server.title}
                  onClick={() => {
                    setVideoState({ subOrDub: "sub", url: server.strems.url });
                    setLocalStoreData({
                      prefiredLanguge: "sub",
                    });
                  }}
                  variant={
                    videoState.subOrDub === videoState.subOrDub &&
                    videoState.url === server.strems.url
                      ? "default"
                      : "secondary"
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
                    setVideoState({ subOrDub: "dub", url: server.strems.url });
                    setLocalStoreData({
                      prefiredLanguge: "sub",
                    });
                  }}
                  variant={
                    videoState.subOrDub === videoState.subOrDub &&
                    videoState.url === server.strems.url
                      ? "default"
                      : "secondary"
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
