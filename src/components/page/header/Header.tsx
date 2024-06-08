import React from "react";
import HeaderSearch from "./HeaderSearch";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-card">
      <div className="flex container gap-2 items-center justify-between py-2 px-3 relative z-20">
        <Link href={"/watch"} className="text-indigo-600 text-xl font-semibold">
          <Image
            className="h-6 w-fit"
            src={"/images/logo-main.png"}
            height={173}
            width={828}
            alt="zanime logo"
          />
        </Link>
        <HeaderSearch />
      </div>
    </div>
  );
};

export default Header;
