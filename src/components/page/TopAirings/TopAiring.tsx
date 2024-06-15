import H2 from "@/components/ui/h2";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const TopAiringSkleton = () => {
  return (
    <div className="w-full space-y-3">
      <Skeleton className="h-7 w-20" />
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-1 gap-y-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-[328px] w-full border border-border/40 shadow-md" />
            <Skeleton className="h-4 w-full border border-border/40 rounded-sm shadow-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAiringSkleton;
