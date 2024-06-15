import { AnimeSearchRes } from "@/types/anime/anime.types";
import React from "react";
import HeaderSearchResultCard from "../page/header/HeaderSearchResultCard";
import { MotionProps, motion } from "framer-motion";

const AnimeResults = ({ animes }: { animes: AnimeSearchRes["results"] }) => {
  const resultAnimaction = {};
  return (
    <motion.div
      initial={{
        height: "0%",
      }}
      animate={{
        height: "100%",
      }}
      className="absolute top-full left-0 w-full">
      {animes?.slice(0, 5).map((anime) => (
        <HeaderSearchResultCard key={anime.id} anime={anime} />
      ))}
    </motion.div>
  );
};

export default AnimeResults;
