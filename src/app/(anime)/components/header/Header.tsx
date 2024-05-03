"use client";
import React, { useState } from "react";
import SearchMenu from "./SearchMenu";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className="py-2 flex items-center justify-between gap-2 relative">
      <Link href={"/"}>
        <h2 className="text-purple-500 text-lg font-bold">ZAnime</h2>
      </Link>

      <SearchMenu />
    </div>
  );
};
