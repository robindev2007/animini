import TopAirings from "./components/TopAirings";
import HeroAnimeSlider from "./components/HeroAnimeSlider";
import GridBg from "@/components/ui/grid-background";
import { getTopAiringAnimes, getTrandingAnimes } from "../actions/anime/anime";
import { animeInfoT, trendingAnimeT } from "@/types/anime/anime.types";

export default async function Home() {
  const topAiringsAnimes = (await getTopAiringAnimes(100)) as trendingAnimeT[];
  const trandingAnimes = (await getTrandingAnimes(10)) as animeInfoT[];
  return (
    <div className="flex flex-col gap-7 mb-20">
      <HeroAnimeSlider trandingAnimes={trandingAnimes} />
      <TopAirings animes={topAiringsAnimes} />
    </div>
  );
}
