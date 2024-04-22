export type TopAiringAnimeT = {
  currentPage: number;
  hasNextPage: boolean;
  results: [
    {
      id: string;
      title: string;
      image: string;
      url: string;
      genres: string[];
    }
  ];
};

export type AnimeInfoT = {
  id: string;
  title: string;
  url: string;
  image: string;
  releaseDate: string | null; // or null
  description: string | null; // or null
  genres: [string];
  subOrDub: string;
  type: string | null; // or null
  status: string;
  otherName: string | null; // or null
  totalEpisodes: number;
  episodes: [
    {
      id: string;
      number: number;
      url: string;
    }
  ];
};

export type animeStremsT = {
  headers: {
    Referer: string;
    watchsb: string | null; // or null, since only provided with server being equal to streamsb.
    "User-Agent": string | null; // or null
  };
  sources: [
    {
      url: string;
      quality: string;
      isM3U8: true;
    }
  ];
};

export type AnimeSearchT = {
  currentPage: number;
  hasNextPage: boolean;
  results: [
    {
      id: string;
      title: string;
      image: string;
      releaseDate: string | null; // or null
      subOrDub: "sub" | "dub"; // or "dub"
    }
  ];
};

export type serverT = {
  name: string;
  url: string;
};

export type availableServers = {
  subOrdub: string;
  servers: serverT[] | null;
}[];
