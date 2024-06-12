import React from "react";
import { getPlaiceholder } from "plaiceholder";

const getBase64 = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Faild to load image");
    }

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (error) {}
};

export default getBase64;
