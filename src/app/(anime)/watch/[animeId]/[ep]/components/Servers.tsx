import React from "react";
import { servers } from "../page";
import { Button } from "@/components/ui/button";

const Servers = ({
  servers,
  setVideoUrl,
}: {
  servers: servers | undefined;
  setVideoUrl: (url: string) => void;
}) => {
  return (
    <div>
      <div className="flex gap-2">
        {servers?.length &&
          servers?.map((server) => (
            <Button
              onClick={() => setVideoUrl(server.url)}
              variant={"secondary"}>
              {server.name}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Servers;
