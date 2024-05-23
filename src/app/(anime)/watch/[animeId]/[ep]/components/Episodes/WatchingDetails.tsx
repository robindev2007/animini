import React from "react";

const WatchingDetails = ({ ep }: { ep: number | string }) => {
  return (
    <div className="w-full rounded bg-secondary text-center p-2 text-sm border">
      You are watching <span className="text-primary">episode {ep}</span>
    </div>
  );
};

export default WatchingDetails;
