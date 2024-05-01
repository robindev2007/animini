"use client";
import WatchPageSkaliton from "@/components/Loading/WatchPageSkaliton";
import { useAnimeState } from "@/components/custom-hooks/useAnimeStateHook";
import { TODO, animeStoreDataT } from "@/types/anime/anime.types";
import { useRouter } from "next/navigation";

const AnimePage = ({ params }: { params: { animeId: string } }) => {
  const router = useRouter();
  let currentEp = 1;

  const animeStoreData =
    typeof window !== "undefined"
      ? (JSON.parse(
          localStorage.getItem(params.animeId) as string
        ) as animeStoreDataT)
      : null;

  if (animeStoreData?.currentEp) {
    router.push(`/watch/${params.animeId}/${animeStoreData.currentEp}`);
  } else {
    if (typeof window !== "undefined") {
      const oldData = JSON.parse(
        localStorage.getItem(params.animeId) as string
      );
      localStorage.setItem(
        params.animeId,
        JSON.stringify({ ...oldData, currentEp: 1 } as animeStoreDataT)
      );
    }
    router.push(`/watch/${params.animeId}/${1}`);
  }

  return <WatchPageSkaliton />;
};

export default AnimePage;
