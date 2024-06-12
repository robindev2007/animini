import React, { ReactNode } from "react";
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
