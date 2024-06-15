"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import poster from "../../public/images/posters/1.png";
import logo from "../../public/images/logo-main.png";
import dynamic from "next/dynamic";

const SearchAnime = dynamic(() => import("@/components/common/SearchAnime"));

const MainPage = () => {
  const links = [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "Trending",
      href: "/home",
    },
    {
      title: "Topair",
      href: "/home",
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
        <SearchAnime className="md:max-w-xl rounded-md" />
        <Image
          className="h-96 object-contain"
          src={poster}
          alt="One piece poster"
          width={1002.4}
          height={111.3}
          priority
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
