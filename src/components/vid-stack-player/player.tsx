"use client";
import { useEffect, useState } from "react";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

import { CheckboxLable } from "../ui/CheckboxLable";

import { MediaPlayer, MediaProvider, SeekButton } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { SeekForward10Icon } from "@vidstack/react/icons";
import { useFirstRender } from "../custom-hooks/useFirstRender";

const Player = ({
  videoUrl,
  nextEpisode,
  prevepisode,
}: {
  videoUrl: string;
  nextEpisode: () => void;
  prevepisode: () => void;
}) => {
  const [autoPlay, setAutoPlay] = useState(false);
  const [autoNext, setAutoNext] = useState(false);

  const isFirstRender = useFirstRender();

  useEffect(() => {
    const listanStorageChange = () => {
      if (localStorage.getItem("auto-play") === null) {
        setAutoPlay(false);
      } else {
        setAutoPlay(JSON.parse(localStorage.getItem("auto-play") as string));
      }

      if (localStorage.getItem("auto-next") === null) {
        setAutoNext(false);
      } else {
        setAutoNext(JSON.parse(localStorage.getItem("auto-next") as string));
      }
    };
    isFirstRender && listanStorageChange();

    window.addEventListener("storage", listanStorageChange);

    return () => window.removeEventListener("storage", listanStorageChange);
  }, [autoPlay, autoNext]);

  const setAutoPlayStorage = (value: boolean) => {
    localStorage.setItem("auto-play", JSON.stringify(value));
    window.dispatchEvent(new Event("storage"));
    console.log("setItemSuccess");
  };
  const setAutoNextStorage = (value: boolean) => {
    localStorage.setItem("auto-next", JSON.stringify(value));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div>
      <MediaPlayer
        onEnded={() => autoNext && nextEpisode()}
        autoPlay={autoPlay}
        storage={"player-state"}
        src={videoUrl}>
        <MediaProvider />
        <DefaultVideoLayout
          slots={{
            seekBackwardButton: (
              <SeekButton className="vds-button" seconds={10}>
                <SeekForward10Icon className="vds-icon" />
              </SeekButton>
            ),
          }}
          colorScheme="dark"
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
      <div className="w-full flex items-center gap-2">
        <CheckboxLable
          lable="Auto Play"
          value={autoPlay}
          onCheckedChange={(checked) => setAutoPlayStorage(checked)}
        />
        <CheckboxLable
          lable="Auto Next"
          value={autoNext}
          onCheckedChange={(checked) => setAutoNextStorage(checked)}
        />
        <button
          className="group text-muted-foreground hover:text-foreground transition-colors ease-out"
          onClick={nextEpisode}>
          <TbPlayerTrackPrevFilled color="inherit" />
        </button>
        <button
          className="group text-muted-foreground hover:text-foreground transition-colors ease-out"
          onClick={prevepisode}>
          <TbPlayerTrackNextFilled color="inherit" />
        </button>
      </div>
    </div>
  );
};

export default Player;
