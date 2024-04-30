import { NextRequest, NextResponse } from "next/server";
import { ANIME } from "@consumet/extensions";

export const GET = async (req: NextRequest, { params }: { params: any }) => {
  const gogoanime = new ANIME.Gogoanime();

  try {
    const topAiring = await gogoanime.fetchAnimeInfo(
      "boku-no-kokoro-no-yabai-yatsu-season-2"
    );

    return NextResponse.json(await topAiring);
    return NextResponse.json(await gogoanime.search("One Piece"));
  } catch (error) {
    return NextResponse.json(error);
  }
};
