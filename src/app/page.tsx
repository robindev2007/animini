import HeaderSearch from "@/components/page/header/HeaderSearch";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./components/SearchBar";

const MainPage = () => {
  const links = [
    {
      title: "Home",
      href: "/anime",
    },
    {
      title: "Trending",
      href: "/trending",
    },
    {
      title: "Topair",
      href: "/topair",
    },
  ];

  return (
    <div className="flex justify-center w-full h-screen">
      <div className="flex gap-3 items-center flex-col container">
        <Image
          className="w-32"
          src={"/images/logo-main.png"}
          height={500}
          width={800}
          alt="zanime logo"
        />
        <div className="flex gap-3 text-sm">
          {links.map((link) => (
            <Link key={link.title} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
        {/* <Input placeholder="Anime..." className="md:w-[40%] w-full" /> */}
        <SearchBar />
      </div>
    </div>
  );
};

export default MainPage;
