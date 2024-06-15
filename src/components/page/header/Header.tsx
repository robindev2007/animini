import React from "react";
import HeaderSearch from "./HeaderSearch";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/common/Container";

const Header = () => {
  return (
    <div className="bg-card border-b border-border/50 shadow-md">
      <Container className="flex py-1 gap-2 items-center justify-between relative z-20">
        <Link href={"/home"} className="text-indigo-600 text-xl font-semibold">
          <Image
            className="md:h-5 h-5 w-fit"
            src={"/images/logo-main.png"}
            height={173}
            width={828}
            alt="zanime logo"
          />
        </Link>
        <HeaderSearch />
      </Container>
    </div>
  );
};

export default Header;
