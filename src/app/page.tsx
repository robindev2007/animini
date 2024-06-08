import HeaderSearch from "@/components/page/header/HeaderSearch";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./components/SearchBar";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import poster from "../../public/images/posters/1.png";
import logo from "../../public/images/logo-main.png";

const MainPage = () => {
  const links = [
    {
      title: "Home",
      href: "/watch",
    },
    {
      title: "Trending",
      href: "/watch",
    },
    {
      title: "Topair",
      href: "/watch",
    },
  ];

  return (
    <div className="flex justify-center w-full h-screen pt-10">
      <div className="flex gap-3 items-center flex-col container">
        <Image className="w-40" src={logo} alt="zanime logo" />
        <div className="flex gap-3 text-sm">
          {links.map((link) => (
            <Link key={link.title} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
        {/* <Input placeholder="Anime..." className="md:w-[40%] w-full" /> */}
        <SearchBar />
        <Image
          className="h-96 object-contain"
          src={poster}
          alt="One piece poster"
        />

        <Button asChild className="flex gap-2 p-6 text-lg hover:gap-2">
          <Link href={"/home"}>
            Go to Home Page
            <FaArrowRight className="size-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
