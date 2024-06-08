import Header from "@/components/page/header/Header";
import React, { ReactNode } from "react";
import HeroCarousel from "./components/HeroCarousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Animez",
  description: "Find top airing and popular animes | animez",
  metadataBase: new URL("https://zanime.vercel.app"),
};
const AnimeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      {/* <HeroCarousel />
      {topairing} */}
      {children}
    </div>
  );
};

export default AnimeLayout;
