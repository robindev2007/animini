export type trendingAnimeT = {
  id: number;
  idMal: number;
  status: string;
  title: {
    userPreferred: string;
    romaji: string;
    english: string;
    native: string;
  };
  genres: string[];
  tags: {
    id: number;
    name: string;
  }[];
  trailer: {
    id: string;
    site: string;
    thumbnail: string;
  };
  description: string;
  format: string;
  bannerImage: string;
  coverImage: {
    extraLarge: string;
    large: string;
    medium: string;
    color: string;
  };
  episodes: number;
  meanScore: number;
  duration: number;
  season: string;
  seasonYear: number;
  averageScore: number;
  nextAiringEpisode: {
    airingAt: number;
    timeUntilAiring: number;
    episode: number;
  };
};

export type TODO = any;

export type animeInfoT = any;
//   id: string;
//   title: string;
//   url: string;
//   image: string;
//   releaseDate: string | null; // or null
//   description: string | null; // or null
//   genres: [string];
//   subOrDub: "sub";
//   type: string | null; // or null
//   status: "Ongoing";
//   otherName: string | null; // or null
//   totalEpisodes: number;
// };

export type episodeT = {
  id: string;
  title: string;
};

export type singleStremT = {
  title: string;
  strems: {
    url: string;
    label: string;
    isM3U8: boolean;
    quality: string;
  };
}[];

export type stremsT = {
  sub: singleStremT | null;
  dub: singleStremT | null;
};

export type animeStoreDataT = {
  currentEp?: number;
  language?: "sub" | "dub";
  watchedEpisodes?: number[];
};

export type searchResultT = {
  id: number;
  idMal: number;
  status: string;
  title: {
    userPreferred: string;
    romaji: string;
    english: string;
    native: string;
  };
  bannerImage: string;
  coverImage: {
    extraLarge: string;
    large: string;
    medium: string;
    color: string;
  };
  episodes: number;
  genres: string[];
  tags: {
    id: number;
    name: string;
  }[];
  season: string;
  format: string;
  seasonYear: number;
  averageScore: number;
  nextAiringEpisode: null;
};
