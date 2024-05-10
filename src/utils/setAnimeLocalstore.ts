"use client";
const localstore = typeof window !== "undefined" ? localStorage : undefined;

export type animeStore = {
  id: string;
  currentEp?: number;
  watchedEpisodes?: number[] | undefined;
};

export const setAnimeStore = (data: animeStore) => {
  let oldData: animeStore | undefined;
  if (localstore) {
    const storedData = localstore.getItem(data.id);
    oldData = storedData ? (JSON.parse(storedData) as animeStore) : undefined;
  }

  const newWatchedEpisodes = oldData?.watchedEpisodes
    ? [...oldData.watchedEpisodes, ...(data.watchedEpisodes ?? [])]
    : data.watchedEpisodes ?? [];

  const newdata: animeStore = {
    ...oldData,
    ...data,
    watchedEpisodes: newWatchedEpisodes,
  };

  if (localstore) {
    localstore.setItem(data.id, JSON.stringify(newdata));
  }
};
