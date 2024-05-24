import Header from "@/components/page/header/Header";
import React, { ReactNode } from "react";
import HeroCarousel from "./components/HeroCarousel";

const AnimeLayout = ({ topairing }: { topairing: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      {topairing}
    </div>
  );
};

export default AnimeLayout;
