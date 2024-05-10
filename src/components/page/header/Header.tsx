import React from "react";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <div className="flex gap-2 items-center justify-between py-3 relative">
      <div className="text-indigo-600 text-xl font-semibold">MiniAnime</div>
      <HeaderSearch />
    </div>
  );
};

export default Header;
