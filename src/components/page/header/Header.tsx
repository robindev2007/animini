"use client";
import React, { useState } from "react";
import SearchMenu from "./SearchMenu";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="py-2 flex items-center justify-between gap-2 relative">
      <Link href={"/"}>
        <Image
          src={"/images/logo-main.png"}
          height={200}
          width={600}
          alt="zanime logo"
          className="h-6 w-full"
        />
      </Link>

      <SearchMenu />
    </div>
  );
};
