import React, { ReactNode } from "react";
import StateProvider from "../reduxStore/StateProvider";
import { Header } from "../../components/page/header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZAnime",
  description: "Watch anime online on Zanime for free | ZAnime",
};

const AnimeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto px-3 dark">
      {/* <StateProvider> */}
      <Header />
      {children}
      {/* </StateProvider> */}
    </div>
  );
};

export default AnimeLayout;
