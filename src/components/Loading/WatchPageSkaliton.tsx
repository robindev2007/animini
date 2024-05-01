import React from "react";
import { Skeleton } from "../ui/skeleton";

const WatchPageSkaliton = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1 flex-col">
        <Skeleton className="aspect-video h-full w-full" />
        <div className="flex gap-1">
          <Skeleton className="w-10 h-4" />
          <Skeleton className="w-10 h-4" />
          <Skeleton className="w-6 h-4 ml-5" />
          <Skeleton className="w-6 h-4" />
        </div>
      </div>
      <Skeleton className="h-8 w-full" />
      <div className="grid gap-1">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex gap-4">
            <Skeleton className="w-12 h-7" />
            <div className="ml-4 flex gap-3">
              <Skeleton className="w-12 h-7" />
              <Skeleton className="w-12 h-7" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 flex-col">
        <Skeleton className="h-8 w-20" />

        <div className="grid gap-1 w-full md:grid-cols-10 grid-cols-5">
          {Array.from({ length: 50 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPageSkaliton;
