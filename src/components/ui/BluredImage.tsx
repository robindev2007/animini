import getBase64 from "@/utils/get-base-64";
import Image, { ImageProps } from "next/image";
import React, { ComponentPropsWithoutRef, DetailedHTMLProps } from "react";

const BluredImage = async ({ src, ...props }: ImageProps) => {
  const blurImage = await getBase64(src as string);
  return <Image src={src} blurDataURL={blurImage} {...props} />;
};

export default BluredImage;

// npm i plaiceholder
