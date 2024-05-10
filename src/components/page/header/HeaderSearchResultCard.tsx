import React from "react";
import { searchRes } from "./HeaderSearch";
import Image from "next/image";
import Link from "next/link";

const HeaderSearchResultCard = ({
  anime,
  setShowResults,
}: {
  anime: searchRes[0];
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Link
      onClick={() => setShowResults(false)}
      href={`/watch/${anime.id.split("-dub")[0]}`}
      className="flex gap-2 hover:bg-secondary py-2 even:bg-secondary/60 transition-all duration-200 px-2 ease-linear">
      <div className="h-28 w-24 overflow-hidden rounded">
        <Image src={anime.image} height={400} width={200} alt={anime.title} />
      </div>
      <div>
        <p>{anime.title}</p>
      </div>
    </Link>
  );
};

export default HeaderSearchResultCard;
