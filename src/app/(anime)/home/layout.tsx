import React, { ReactNode } from "react";
import { Metadata } from "next";
import Container from "@/components/common/Container";

export const metadata: Metadata = {
  title: "Home",
  description: "Find top airing and popular animes | animez",
  metadataBase: new URL("https://zanime.vercel.app"),
};
const AnimeLayout = ({
  topairing,
  Carousel,
  topAction,
}: {
  children: ReactNode;
  topairing: ReactNode;
  Carousel: ReactNode;
  topAction: ReactNode;
}) => {
  return (
    <Container className="flex flex-col space-y-5">
      {Carousel}
      <div className="flex gap-4 flex-col w-full">
        {topairing}
        {/* {topAction} */}
      </div>
      {/* {children} */}
    </Container>
  );
};

export default AnimeLayout;
