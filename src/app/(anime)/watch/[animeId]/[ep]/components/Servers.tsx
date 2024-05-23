import React from "react";
import { serversWithTitle } from "../page";
import { Button } from "@/components/ui/button";

const Servers = ({
  allServers,
  setVideoUrl,
  activeUrl,
}: {
  allServers: serversWithTitle | undefined;
  setVideoUrl: (url: string) => void;
  activeUrl?: string;
}) => {
  return (
    <div className="flex gap-3 flex-col">
      {allServers?.map((servers) => {
        return Object.keys(servers).map((serverTitle) => {
          const server = servers[serverTitle as "sub" | "dub"];
          if (server)
            return (
              <div key={serverTitle} className="flex gap-3">
                <p>{serverTitle}</p>
                <div className="flex gap-2">
                  {Object.keys(server).map((serverName) => {
                    const url = server[serverName as "main"].url;
                    return (
                      <Button
                        key={serverName}
                        variant={activeUrl === url ? "default" : "secondary"}
                        size={"sm"}
                        onClick={() => setVideoUrl(url)}>
                        {serverName}
                      </Button>
                    );
                  })}
                </div>
              </div>
            );
        });
      })}
    </div>
  );
};

export default Servers;
