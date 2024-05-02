"use client";
import SingleAnimeCard from "@/components/common/SingleAnimeCard";
import GridBg from "@/components/ui/grid-background";
import React from "react";
import { motion } from "framer-motion";
import { trendingAnimeT } from "@/types/anime/anime.types";

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
      <motion.div
        initial="initial"
        animate="animate"
        variants={containerVariants}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {animes &&
          animes.map((anime, i) => (
            <SingleAnimeCard key={anime.id} index={i} anime={anime} />
          ))}
      </motion.div>
    </div>
  );
};

export default TopAirings;
