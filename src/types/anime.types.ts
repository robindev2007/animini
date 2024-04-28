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
  genres: string[];
  subOrDub: "sub" | "dub";
  type: string | null; // or null
  status: string;
  otherName: string | null; // or null
  totalEpisodes: number;
  episodes: {
    id: string;
    number: number;
    url: string;
  }[];
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
  key: string;
  value: {
    url: string;
    label: string;
    isM3U8: boolean;
    quality: string;
  };
};

export type animeStremsT = {
  sub: animeStremT;
  dub?: animeStremT;
};

export type animeStremT = {
  title: string;
  strems: {
    url: string;
    label: string;
    isM3U8: boolean;
    quality: string;
  };
}[];

export type animeStreamResT = {
  code: number;
  message: string;
  info: {
    title: string;
    id: string;
    episode: string;
  };
  stream: {
    multi: {
      main: {
        url: string;
        label: string;
        isM3U8: boolean;
        quality: string;
      };
      backup: {
        url: string;
        label: string;
        isM3U8: boolean;
        quality: string;
      };
    };
    tracks: string;
  };
};

export type videoStateT = { subOrDub: "sub" | "dub"; url: string };

export type animeStoreT = {
  title?: string;
  currentEp?: string | number;
  prefiredLanguge?: "sub" | "dub";
  watchdEpisods?: number[];
};
