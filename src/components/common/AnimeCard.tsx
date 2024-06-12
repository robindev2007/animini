"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TTopAiringRes } from "@/types/anime/anime.types";
import { FaMicrophone } from "react-icons/fa";

const AnimeCard = ({ anime }: { anime: TTopAiringRes["results"][0] }) => {
  const itemVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.09,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  if (anime.status == "NOT_YET_RELEASED") return null;

  return (
    <motion.div
      variants={itemVariants}
      initial="initial"
      animate="animate"
      viewport={{ once: true }}>
      <Link
        href={`/v2/watch/${anime.id}`}
        className="transition-all duration-200 ease-out rounded h-full hover:shadow-2xl p-2 flex flex-col shadow hover:border-primary/60 gap-2">
        <Image
          src={
            anime.coverImage.extraLarge ??
            anime.coverImage.large ??
            anime.coverImage.medium
          }
          width={400}
          height={600}
          alt={anime.title.english ?? anime.title.native}
          className="border shrink-0 w-full border-border/80 overflow-hidden rounded-[inherit] aspect-[460/590] object-cover rounded-b-none"
        />

        <div className="">
          <h2 className="line-clamp-2 text-sm font-semibold">
            {anime.title.english ??
              anime.title.userPreferred ??
              anime.title.romaji ??
              anime.title.native}
          </h2>
        </div>
      </Link>
    </motion.div>
  );
};

export default AnimeCard;
