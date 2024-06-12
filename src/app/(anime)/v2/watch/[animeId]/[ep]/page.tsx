import React from "react";
import AnimeWatch from "./components/WatchPage";
import Container from "@/components/common/Container";

// export async function generateMetadata({
//   params: { animeId, ep },
// }: {
//   params: { animeId: string; ep: string };
// }): Promise<Metadata> {
//   const res = await fetch(`https://animetize-api.vercel.app/info/${animeId}`, {
//     cache: "force-cache",
//   });
//   const anime = (await res.json()) as animeInfoT;

//   return {
//     title: "Watch " + anime.title + " | ZAnime",
//     description: anime.description,
//     metadataBase: new URL("https://zanime.vercel.app"),
//   };
// }

const AnimeWatchPage = async ({
  params,
}: {
  params: { animeId: string; ep: string };
}) => {
  const { animeId, ep } = params;

  return (
    <Container className="px-2 pb-7">
      <AnimeWatch params={params} />
    </Container>
  );
};

export default AnimeWatchPage;
