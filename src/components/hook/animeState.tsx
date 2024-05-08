import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useAnimeState = () => {
  const [animeId, setAnimeId] = useState("");
  const [epId, setEpId] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    const newAnimeId = pathname.split("/")[2];
    const newEpId = newAnimeId;
    setAnimeId(newAnimeId);

    return () => {};
  }, []);

  const setNewEpId = (ep: string) => {
    setEpId(ep);
  };

  return { epId, animeId, setNewEpId };
};
