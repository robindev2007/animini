import { Button } from "@/components/ui/button";
import { serversNames } from "@/lib/constance/constances";
import { AnimeInfoT, availableServers, serverT } from "@/types/anime.types";
import { convertServerNames } from "@/utils/convertServersName";
import { json } from "node:stream/consumers";
import React from "react";

const ServerSelect = ({
  servers,
  animeInfo,
  currentServer,
}: {
  servers: availableServers;
  animeInfo: AnimeInfoT;
  currentServer?: string;
}) => {
  return (
    <div className="space-y-2">
      {servers.map(
        (server) =>
          server.servers && (
            <div key={server.subOrdub} className="flex gap-4 items-center">
              <p>{server.subOrdub}:</p>
              <div className="flex items-center gap-2">
                {server.servers.map((ser) => (
                  <Button
                    variant={
                      (currentServer === ser.name ||
                        ser.name === "Gogo server") &&
                      server.subOrdub === animeInfo.subOrDub
                        ? "default"
                        : "secondary"
                    }
                    size={"sm"}
                    key={ser.name}>
                    {ser.name}
                  </Button>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ServerSelect;
// https://animetize-api.vercel.app/anime/gogoanime/servers/one-piece-episode-8
