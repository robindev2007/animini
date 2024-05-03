"use client";
import GridBg from "@/components/ui/grid-background";
import React from "react";
import { motion } from "framer-motion";
import { trendingAnimeT } from "@/types/anime/anime.types";
import AnimeCard from "../../../components/common/AnimeCard";

const TopAirings = ({ animes }: { animes: trendingAnimeT[] }) => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="relative">
      <h2 className="py-3 text-2xl font-semibold"> Top Airing animes </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {animes &&
          animes.length &&
          animes.map((anime: any, i: any) => (
            <AnimeCard key={anime.id} index={i} anime={anime} />
          ))}
      </div>
    </div>
  );
};

export default TopAirings;
