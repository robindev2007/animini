import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TopAiringLoadingAkeliton = () => {
  return (
    <div className="relative">
      <h2 className="py-3 text-2xl font-semibold"> Top Airing animes </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {Array.from({ length: 50 }).map((_, i: number) => (
          <div key={i} className="flex gap-3 flex-col">
            <Skeleton className="h-60 rounded border" />
            <div className="space-y-2">
              <Skeleton className="h-3 rounded border" />
              <Skeleton className="h-3 w-1/2 rounded border" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAiringLoadingAkeliton;
