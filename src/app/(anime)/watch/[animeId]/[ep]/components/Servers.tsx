import React from "react";
import { serversWithTitle } from "../page";
import { Button } from "@/components/ui/button";
import { MdSubtitles } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";

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
    <div className="flex gap-3 flex-col lg:py-2">
      {allServers?.map((servers) => {
        return Object.keys(servers).map((serverTitle) => {
          const server = servers[serverTitle as "Sub"];
          if (server)
            return (
              <div key={serverTitle} className="flex gap-3">
                {serverTitle === "Dub" ? (
                  <div className="flex items-center gap-1">
                    <FaMicrophone />
                    Dub
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <MdSubtitles /> Sub
                  </div>
                )}
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
