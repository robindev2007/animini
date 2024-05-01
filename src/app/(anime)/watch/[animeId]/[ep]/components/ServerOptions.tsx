import { Button } from "@/components/ui/button";
import { singleStremT, stremsT } from "@/types/anime/anime.types";
import React from "react";

const ServerOptions = ({
  servers,
  activeUrl,
  changeServer,
}: {
  servers: stremsT;
  activeUrl: string;
  changeServer: (url: string) => void;
}) => {
  const handleOnclick = (server: singleStremT[0]) => {
    changeServer(server.strems.url);
  };
  return (
    <div className="grid gap-1">
      {Object.entries(servers).map(
        ([title, data]) =>
          data && (
            <div key={title} className="flex gap-3 items-center">
              <div>{title}</div>
              <div className="flex gap-3">
                {data?.map((server) => (
                  <Button
                    key={server.title}
                    onClick={() => handleOnclick(server)}
                    variant={
                      activeUrl === server.strems.url ? "default" : "secondary"
                    }
                    size={"sm"}>
                    {server.title}
                  </Button>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ServerOptions;
