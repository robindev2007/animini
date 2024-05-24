import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainPage = () => {
  const links = [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "Trending",
      href: "/trending",
    },
    {
      title: "Trending",
      href: "/trending",
    },
  ];

  return (
    <div className="flex justify-center w-full h-screen">
      <div className="flex gap-3 items-center flex-col">
        <Image
          className="w-32"
          src={"/images/logo-main.png"}
          height={500}
          width={800}
          alt="zanime logo"
        />
        <div className="flex gap-3">
          {links.map((link) => (
            <Link key={link.title} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
