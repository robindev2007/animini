import TopAirings from "./components/TopAirings";
import { getTopAiringAnimes } from "../actions/anime";

export default async function Home() {
  const topAiringsAnimes = await getTopAiringAnimes({ page: 1 });
  return (
    <div className="">
      <TopAirings animes={topAiringsAnimes} />
    </div>
  );
}
