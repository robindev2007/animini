"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimeInfoT } from "@/types/anime.types";
import Link from "next/link";
import React, { useState } from "react";
import { setCookie } from "cookies-next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EpisodesList = ({
  episodes,
  currentEp,
  animeId,
}: {
  episodes: AnimeInfoT["episodes"];
  currentEp: number;
  animeId: string;
}) => {
  const [selectedRange, setSelectedRange] = useState(0);
  const selectedEpisods = [];

  for (let i = (selectedRange - 1) * 100 + 1; i <= selectedRange * 100; i++) {
    selectedEpisods.push(i);
  }

  return (
    <div className="grid gap-3">
      <Select onValueChange={(value) => setSelectedRange(Number(value))}>
        <SelectTrigger className="w-fit bg-secondary gap-5 text-sm">
          <SelectValue placeholder="0-100" />
        </SelectTrigger>
        <SelectContent>
          {episodes.map(
            (ep, i) =>
              i % 100 === 0 && (
                <SelectItem value={i.toString()}>
                  {i + 1} - {i + 100}
                </SelectItem>
              )
          )}
        </SelectContent>
      </Select>
      <div className="grid md:grid-cols-10 grid-cols-5 gap-1">
        {episodes.slice(selectedRange, selectedRange + 100).map((episode) => (
          <Link
            key={episode.number}
            href={`ep-${episode.number}`}
            onClick={() => setCookie(animeId, currentEp + 1)}
            className={cn(
              buttonVariants({
                size: "sm",
                variant: "secondary",
              }),
              currentEp == episode.number ? "bg-primary/90" : "bg-secondary/70"
            )}>
            {episode.number}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EpisodesList;
