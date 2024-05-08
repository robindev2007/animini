"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { animeInfoT } from "@/types/anime/anime.types";
import { getAnimeSubName } from "@/utils/utils";
import { animeRes } from "@/app/(anime)/anime/@topairing/page";

const AnimeCard = ({
  anime,
  index,
}: {
  anime: animeRes["results"][0];
  index: number;
}) => {
  const itemVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
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
        href={`/watch/${getAnimeSubName(anime.id)}`}
        className="transition-all duration-200 ease-out rounded h-full hover:shadow-2xl p-2 flex flex-col shadow hover:border-primary/60 gap-2">
        <div className="h-72 md:h-56 border border-border/80 pxshrink-0 overflow-hidden rounded-[inherit]">
          <Image
            src={anime.image}
            height={600}
            width={600}
            alt={anime.title}
            className="h-full object-cover"
          />
        </div>
        <div className="">
          <h2 className="line-clamp-2 text-sm font-semibold">{anime.title}</h2>
        </div>
      </Link>
    </motion.div>
  );
};

export default AnimeCard;
