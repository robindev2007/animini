export type TTopAiringRes = {
  code: number;
  message: string;
  page: Page;
  results: TopAirResult[];
};

export type Page = {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
};

export type TopAirResult = {
  id: number;
  idMal: number;
  status: string;
  title: Title;
  genres: string[];
  tags: Tag[];
  trailer?: Trailer;
  description: string;
  format: string;
  bannerImage?: string;
  coverImage: CoverImage;
  episodes?: number;
  meanScore: number;
  duration?: number;
  season: string;
  seasonYear: number;
  averageScore: number;
  nextAiringEpisode?: NextAiringEpisode;
};

export type Tag = {
  id: number;
  name: string;
};

export type Trailer = {
  id: string;
  site: string;
  thumbnail: string;
};

export type NextAiringEpisode = {
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
};

export interface TAnimeInfo {
  code: number;
  message: string;
  id: number;
  idMal: number;
  id_provider: IdProvider;
  title: Title;
  dub: boolean;
  description: string;
  coverImage: CoverImage;
  bannerImage: string;
  genres: string[];
  tags: Tag[];
  status: string;
  format: string;
  episodes: number;
  year: number;
  season: string;
  duration: number;
  startIn: StartIn;
  endIn: EndIn;
  nextair: Nextair;
  score: Score;
  popularity: number;
  siteUrl: string;
  trailer: Trailer;
  studios: Studio[];
  relation: Relation[];
}

export interface IdProvider {
  idGogo: string;
  idGogoDub: string;
  idZoro: string;
  id9anime: string;
  idPahe: string;
}

export interface Title {
  romaji: string;
  english: string;
  native: string;
  userPreferred: string;
}

export interface CoverImage {
  extraLarge: string;
  large: string;
  medium: string;
  color: string;
}

export interface StartIn {
  year: number;
  month: number;
  day: number;
}

export interface EndIn {
  year: any;
  month: any;
  day: any;
}

export interface Nextair {
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
}

export interface Score {
  averageScore: number;
  decimalScore: number;
}

export interface Studio {
  name: string;
}

export interface Relation {
  id: number;
  idMal: number;
  title: Title2;
  coverImage: CoverImage2;
  bannerImage: string;
  genres: string[];
  tags: Tag2[];
  type: string;
  format: string;
  status: string;
  episodes?: number;
  duration?: number;
  averageScore?: number;
  season?: string;
}

export interface Title2 {
  romaji: string;
  english?: string;
  native: string;
  userPreferred: string;
}

export interface CoverImage2 {
  large: string;
  medium: string;
  color: string;
}

export interface Tag2 {
  id: number;
  name: string;
}

export interface TAnimeStremRes {
  code: number;
  message: string;
  info: Info;
  sources: Source[];
  iframe: Iframe[];
}

export interface Info {
  title: string;
  id: string;
  episode: string;
}

export interface Source {
  url: string;
  label: string;
  isM3U8: boolean;
  quality: string;
}

export interface Iframe {
  name: string;
  iframe: string;
}

export interface TAnimeEpisodes {
  code: number;
  message: string;
  title: string;
  id: string;
  totalEpisodes: string;
  episodes: Episode[];
}

export interface Episode {
  title: string;
  id: string;
}

export interface AnimeSearchRes {
  code: number;
  message: string;
  pageInfo: SearchPageInfo;
  results: TopAirResult[];
}

export interface SearchPageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}

export interface SearchResult {
  id: number;
  idMal: number;
  status: string;
  title: Title;
  bannerImage?: string;
  coverImage: CoverImage;
  episodes?: number;
  genres: string[];
  tags: Tag[];
  season?: string;
  format?: string;
  seasonYear?: number;
  averageScore?: number;
  nextAiringEpisode?: NextAiringEpisode;
}

export interface SearchTitle {
  userPreferred: string;
  romaji: string;
  english?: string;
  native: string;
}

export interface SearchCoverImage {
  extraLarge: string;
  large: string;
  medium: string;
  color?: string;
}

export interface SearchTag {
  id: number;
  name: string;
}

export interface SearchNextAiringEpisode {
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
}

export interface TrendingRes {
  code: number;
  message: string;
  page: Page;
  results: TrendingResult[];
}

export interface TrendingPage {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}

export interface TrendingResult {
  id: number;
  idMal: number;
  status: string;
  title: Title;
  genres: string[];
  tags: Tag[];
  trailer?: Trailer;
  description: string;
  format: string;
  bannerImage?: string;
  coverImage: CoverImage;
  episodes?: number;
  meanScore: number;
  duration?: number;
  season: string;
  seasonYear: number;
  averageScore: number;
  nextAiringEpisode: NextAiringEpisode;
}

export interface TrendingTitle {
  userPreferred: string;
  romaji: string;
  english: string;
  native: string;
}

export interface TrendingTag {
  id: number;
  name: string;
}

export interface TrendingTrailer {
  id: string;
  site: string;
  thumbnail: string;
}

export interface TrendingCoverImage {
  extraLarge: string;
  large: string;
  medium: string;
  color: string;
}

export interface TrendingNextAiringEpisode {
  airingAt: number;
  timeUntilAiring: number;
  episode: number;
}
