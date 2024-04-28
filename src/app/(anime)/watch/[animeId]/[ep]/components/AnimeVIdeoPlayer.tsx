"use client";
import React, { useEffect, useState } from "react";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";
import { animeStremsT } from "@/types/anime.types";
import { useAnimeState } from "@/components/custom-hooks/useAnimeStateHook";
import { getStremLinks } from "@/app/actions/anime";
import { useFirstRender } from "@/components/custom-hooks/useFirstRender";
import ReactPlayer from "react-player";

const AnimeVIdeoPlayer = ({ defaultUrls }: { defaultUrls: animeStremsT }) => {
  const [url, setUrl] = useState(defaultUrls.iframe[0].iframe);

  const { animeEpId } = useAnimeState();

  const isFirstRender = useFirstRender();

  useEffect(() => {
    const getUrlOfStrem = async () => {
      if (isFirstRender) return;
      const urls = await getStremLinks(animeEpId);
      setUrl(urls?.iframe[0].iframe as string);
    };
    getUrlOfStrem();
  }, [animeEpId]);

  return (
    <iframe
      src={url}
      allowFullScreen
      className="aspect-video w-full overflow-hidden bg-secondary/50"></iframe>
  );
};

export default AnimeVIdeoPlayer;
