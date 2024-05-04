import React from "react";
import { Skeleton } from "../ui/skeleton";

const MainPageSkaliton = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div>
        <Skeleton className="h-48 " />
      </div>
    </div>
  );
};

export default MainPageSkaliton;
