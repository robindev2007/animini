import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { FaMicrophone } from "react-icons/fa6";
import { MdSubtitles } from "react-icons/md";

const Load = () => {
  return (
    <div className="flex gap-2 flex-col xl:flex-row">
      <div className="flex flex-col 2xl:flex-row-reverse gap-5 justify-between">
        <div className="flex gap-2 flex-col">
          {/* <VideoPlayer url={activeVideoUrl} loading={isLoading} /> */}
          <Skeleton className="h-[50vh]" />
          <div className="flex gap-5 flex-col lg:py-2">
            <div className="flex gap-5">
              <div className="flex items-center gap-1">
                <MdSubtitles />
                Sub
              </div>
              <div className="space-x-2">
                {Array.from({ length: 2 }).map((_, i) => (
                  <Skeleton key={i}>server-{i + 1}</Skeleton>
                ))}
              </div>
            </div>
            <div className="flex gap-5 flex-col lg:py-2">
              <div className="flex gap-5">
                <div className="flex items-center gap-1">
                  <FaMicrophone />
                  Dub
                </div>
                <div className="space-x-2">
                  {Array(2).map((_, i) => (
                    <Skeleton key={i}>server-{i + 1}</Skeleton>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <Servers
                activeVideoUrl={activeVideoUrl}
                subServer={animeStreams}
                dubServer={animeDubStreams}
                setVideoUrl={handleSetVideoUrl}
              /> */}
          <div className="2xl:flex hidden">
            {/* <AnimeInfo anime={animeInfo} /> */}
          </div>
        </div>

        <div className="shrink-0">
          {/* <Episodes
                currentEp={activeEp?.episode ?? initialEp}
                episodes={animeEpisodes}
                setEp={setNewEp}
              /> */}
        </div>
        <div className="2xl:hidden">
          {/* <AnimeInfo anime={animeInfo} /> */}
        </div>
      </div>
      {/* <RelatedAnimes animes={animeInfo?.relation} /> */}
    </div>
  );
};

export default Load;
