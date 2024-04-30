import TopAirings from "./components/TopAirings";
import { getTopAiringAnimes } from "../actions/anime";
import HeroAnimeSlider from "./components/HeroAnimeSlider";
import GridBg from "@/components/ui/grid-background";

export default async function Home() {
  const topAiringsAnimes = await getTopAiringAnimes({ page: 1 });
  return (
    <div className="flex flex-col gap-7 mb-20">
      <HeroAnimeSlider />
      <TopAirings animes={topAiringsAnimes} />
    </div>
  );
}
