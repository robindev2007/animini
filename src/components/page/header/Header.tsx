import React from "react";
import HeaderSearch from "./HeaderSearch";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex gap-2 items-center justify-between py-2 relative">
      <Link href={"/anime"} className="text-indigo-600 text-xl font-semibold">
        <Image
          className="w-32"
          src={"/images/logo-main.png"}
          height={500}
          width={800}
          alt="zanime logo"
        />
      </Link>
      <HeaderSearch />
    </div>
  );
};

export default Header;
