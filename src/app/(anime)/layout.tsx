import React, { ReactNode } from "react";
import StateProvider from "../reduxStore/StateProvider";
import { Header } from "./components/header/Header";

const AnimeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto px-3">
      <StateProvider>
        <Header />
        {children}
      </StateProvider>
    </div>
  );
};

export default AnimeLayout;
