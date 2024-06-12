import H1 from "@/components/ui/h1";
import Image from "next/image";
import React from "react";
import notFoundImg from "../../../public/images/posters/2.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Header from "../page/header/Header";

const NotFound = () => {
  return (
    <div className="flex items-center flex-col justify-center gap-4 text-center p-4 flex-1">
      <H1>The page you are looking for could not be found</H1>
      <Image
        src={notFoundImg}
        alt=""
        placeholder="empty"
        width={622}
        height={474}
      />
      <Button asChild className="flex gap-2 p-6 text-lg hover:gap-2">
        <Link href={"/home"}>
          Go to Home Page
          <FaArrowRight className="size-5" />
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
