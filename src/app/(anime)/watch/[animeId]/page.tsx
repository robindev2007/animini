"use client";
import { animeStoreT } from "@/types/anime.types";
import { useRouter } from "next/navigation";

const AnimePage = ({ params }: { params: { animeId: string } }) => {
  const router = useRouter();
  let currentEp = 1;
  const animeStoreRowData =
    typeof window !== "undefined" ? localStorage.getItem(params.animeId) : null;

  if (animeStoreRowData === null)
    return router.push(`/watch/${params.animeId}/ep-1`);

  const animeStoreData = JSON.parse(animeStoreRowData) as animeStoreT;

  if (!animeStoreData.currentEp)
    return router.push(`/watch/${params.animeId}/ep-1`);

  return router.push(`/watch/${params.animeId}/ep-${animeStoreData.currentEp}`);
};

export default AnimePage;
