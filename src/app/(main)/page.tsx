import { animeInfoT, trendingAnimeT } from "@/types/anime/anime.types";

import { getTrandingAnimes } from "@/app/actions/anime/anime";
import MainPageSkaliton from "@/components/Loading/MainPageSkaliton";
import HeroAnimeSlider from "./components/HeroAnimeSlider";
import TopAirings from "./components/TopAirings";
import TopAiring from "./@topAiring/page";
import { Header } from "@/components/page/header/Header";
import PageContainer from "@/components/common/PageContainer";

export default async function Home() {
  const trandingAnimes = (await getTrandingAnimes(10)) as animeInfoT[];

  return (
    <PageContainer>
      <div className="flex flex-col gap-7 mb-20">
        <Header />
        <HeroAnimeSlider trandingAnimes={trandingAnimes} />
        <TopAiring />
      </div>
    </PageContainer>
  );
}
