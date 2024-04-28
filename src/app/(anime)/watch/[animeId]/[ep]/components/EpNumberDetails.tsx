import React from "react";

const EpNumberDetails = ({ activeEp }: { activeEp: number }) => {
  return (
    <div className="bg-secondary rounded p-2 w-full text-xs text-center border text-muted-foreground">
      You are currently watching{" "}
      <span className="text-primary font-semibold">Episode {activeEp}</span>. If
      current server dosen't work, please try other servers.
    </div>
  );
};

export default EpNumberDetails;
