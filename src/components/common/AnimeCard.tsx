"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TopActionAnimesResult, TopAirResult } from "@/types/anime/anime.types";
import { FaClock, FaStar, FaPlay } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const AnimeCard = ({
  anime,
}: {
  anime: TopAirResult | TopActionAnimesResult;
}) => {
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

  return (
    <div>
      <div className="transition-all duration-200 ease-out rounded h-full hover:shadow-2xl flex flex-col shadow hover:border-primary/60 gap-2">
        <Link
          href={`/v2/watch/${anime.id}`}
          className="bg-card rounded-sm overflow-hidden border border-border/20 shadow-lg">
          <div className="relative aspect-[460/660] w-full group">
            <Image
              src={
                anime.coverImage.extraLarge ??
                anime.coverImage.large ??
                anime.coverImage.medium
              }
              fill
              sizes="(min-width: 1640px) 232px, (min-width: 1280px) calc(12.65vw + 27px), (min-width: 780px) calc(25vw - 25px), (min-width: 640px) calc(33.33vw - 23px), calc(50vw - 22px)"
              alt={anime.title.english ?? anime.title.native}
              className="shrink-0 overflow-hidden "
            />

            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                className="absolute top-0 left-0 h-full w-full bg-black/40 flex items-center justify-center transition-all ease-in-out ">
                <FaPlay className="size-16 drop-shadow-xl" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="px-[3px] py-1 flex text-muted-foreground text-xs font-semibold items-center gap-0.5">
            <div className="items-center bg-primary text-white/60 flex gap-0.5 px-1 rounded clip-right">
              <FaStar className="-mt-[0.5px]" />
              {anime.meanScore ? anime.meanScore / 10 : "_"}
            </div>

            <div className="items-center bg-secondary flex gap-0.5 px-1 rounded clip-both">
              <FaClock />
              {anime.duration ?? "_"}
            </div>

            <div className="items-center bg-secondary px-1 rounded clip-left whitespace-nowrap flex">
              <span className="hidden sm:block whitespace-nowrap">ep-</span>
              {anime.episodes ?? "_"}
            </div>

            <div className="text-xs ml-auto">{anime.format ?? "."}</div>
          </div>
        </Link>

        <Link href={`/v2/watch/${anime.id}`} className="">
          <h2 className="line-clamp-2 text-sm font-semibold hover:text-primary-foreground transition-colors ease-out">
            {anime.title.english ??
              anime.title.userPreferred ??
              anime.title.romaji ??
              anime.title.native}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default AnimeCard;
