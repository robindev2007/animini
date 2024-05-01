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

export type animeInfoT = {
  code: 200;
  message: "success";
  id: number;
  idMal: number;
  episodeList: episodeT[];
  id_provider: {
    idGogo: string;
    idGogoDub: string;
    idZoro: string;
    id9anime: string;
    idPahe: string;
  };
  title: {
    romaji: string;
    english: string;
    native: string;
    userPreferred: string;
  };
  dub: boolean;
  description: string;
  coverImage: {
    extraLarge: string;
    large: string;
    medium: string;
    color: string;
  };
  bannerImage: string;
  genres: string[];
  tags: { id: number; name: string }[];
  status: "RELEASING";
  format: "TV";
  episodes: number | null;
  year: number;
  season: string;
  duration: number;
  startIn: { year: number; month: number; day: number };
  endIn: { year: null | number; month: null | number; day: null | number };
  nextair: { airingAt: 1714869000; timeUntilAiring: 393218; episode: 1103 };
  score: { averageScore: 88; decimalScore: 8.8 };
  popularity: 516473;
  siteUrl: "https://anilist.co/anime/21";
  trailer: null;
  studios: [
    { name: "Toei Animation" },
    { name: "Funimation" },
    { name: "Fuji TV" },
    { name: "4Kids Entertainment" },
    { name: "TAP" },
    { name: "Asatsu DK" },
    { name: "Magic Bus" },
    { name: "Mushi Production" },
    { name: "Studio Guts" },
    { name: "Asahi Production" },
    { name: "Avex Pictures" }
  ];
  relation: [
    {
      id: 466;
      idMal: 466;
      title: {
        romaji: "ONE PIECE: Taose! Kaizoku Ganzack";
        english: "One Piece: Defeat the Pirate Ganzack!";
        native: "ONE PIECE 倒せ!海賊ギャンザック";
        userPreferred: "ONE PIECE: Taose! Kaizoku Ganzack";
      };
      coverImage: {
        large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx466-bVP54I7dCB2F.jpg";
        medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx466-bVP54I7dCB2F.jpg";
        color: "#e49328";
      };
      bannerImage: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/466-uS8J4XwJ35Ws.png";
      genres: ["Adventure", "Comedy", "Fantasy"];
      tags: [
        { id: 56; name: "Shounen" },
        { id: 201; name: "Pirates" },
        { id: 82; name: "Male Protagonist" },
        { id: 305; name: "Ships" },
        { id: 247; name: "Slavery" },
        { id: 66; name: "Super Power" },
        { id: 43; name: "Swordplay" }
      ];
      type: "ANIME";
      format: "OVA";
      status: "FINISHED";
      episodes: 1;
      duration: 28;
      averageScore: 64;
      season: "SUMMER";
    }
  ];
};

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
