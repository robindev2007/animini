import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { trendingAnimeT } from "@/types/anime/anime.types";

const SingleAnimeCard = ({
  anime,
  index,
}: {
  anime: trendingAnimeT;
  index: number;
}) => {
  const itemVariants = {
    initial: {
      opacity: 0,
      x: "5vh",
    },
    animate: {
      opacity: 1,
      x: "0vh",
      transition: {
        duration: 0.6,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="initial"
      animate="animate"
      viewport={{ once: true }}>
      <Link
        href={`/watch/${anime.id}`}
        className="bg-card hover:scale-105 transition-all duration-200 ease-out odd:hover:rotate-1 even:hover:-rotate-1 rounded gap-2 border overflow-hidden h-full hover:shadow-2xl hover:z-20 p-2 flex flex-col shadow hover:border-primary/60">
        <div className="h-72 md:h-56 border border-border/80 pxshrink-0 overflow-hidden rounded-[inherit]">
          <Image
            src={
              anime.coverImage.extraLarge
                ? anime.coverImage.extraLarge
                : anime.coverImage.medium
            }
            height={600}
            width={600}
            alt={anime.title.english ? anime.title.english : anime.title.native}
            className="h-full object-cover"
          />
        </div>
        <div className="mt-auto">
          <h2 className="line-clamp-2 text-sm font-semibold">
            {anime.title.english ? anime.title.english : anime.title.native}
          </h2>
        </div>
        <div className="flex flex-wrap">
          {anime.genres.slice(0, 3).map((genre) => (
            <Badge
              key={genre}
              className="whitespace-nowrap text-xs scale-90"
              variant={"secondary"}>
              {genre}
            </Badge>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

export default SingleAnimeCard;
