import React from "react";
import { servers } from "../page";
import { Button } from "@/components/ui/button";

const Servers = ({
  allServers,
  setVideoUrl,
  activeUrl,
}: {
  allServers: servers | undefined;
  setVideoUrl: (url: string) => void;
  activeUrl?: string;
}) => {
  return (
    <div className="flex gap-3 flex-col">
      {allServers?.map(
        (servers) =>
          servers.server?.length && (
            <div key={servers.title} className="flex gap-2 items-center">
              <p className="font-medium">{servers.title}</p>
              <div className="flex gap-2 flex-wrap">
                {servers.server?.map((ser) => (
                  <Button
                    className="scale-80 md:scale-100"
                    key={ser.name}
                    onClick={() => setVideoUrl(ser.url)}
                    variant={activeUrl == ser.url ? "default" : "secondary"}>
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

export default Servers;
