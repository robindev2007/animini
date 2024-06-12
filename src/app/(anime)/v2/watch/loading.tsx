import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const AnimeWatchPageLoading = () => {
  return (
    <div className="flex gap-2 flex-col xl:flex-row">
      <div className="flex flex-col 2xl:flex-row-reverse gap-5 justify-between">
        <div className="flex gap-2 flex-col">
          <Skeleton className="h-56 w-52" />
          <div />
          <div className="2xl:flex hidden">
            <div>
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i}>hi</div>
              ))}
            </div>
          </div>
        </div>

        <div className="shrink-0">
          <Skeleton />
        </div>
        <div className="2xl:hidden"></div>
      </div>
      {/* <RelatedAnimes animes={animeInfo?.relation} /> */}
    </div>
  );
};

export default AnimeWatchPageLoading;
