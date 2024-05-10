import React from "react";
import HeaderSearch from "./HeaderSearch";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex gap-2 items-center justify-between py-3 relative">
      <Link href={"/anime"} className="text-indigo-600 text-xl font-semibold">
        MiniAnime
      </Link>
      <HeaderSearch />
    </div>
  );
};

export default Header;
