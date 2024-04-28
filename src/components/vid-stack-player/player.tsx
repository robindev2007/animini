"use client";
import React from "react";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

import { CheckboxLable } from "../ui/CheckboxLable";

import { MediaPlayer, MediaProvider, SeekButton } from "@vidstack/react";
import {
  DefaultLayoutIcons,
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { FaPause, FaPlay } from "react-icons/fa";
import { IoVolumeMute } from "react-icons/io5";
import { FaVolumeLow } from "react-icons/fa6";
import { SeekForward10Icon } from "@vidstack/react/icons";

const Player = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div>
      <MediaPlayer storage={"no-key"} src={videoUrl}>
        <MediaProvider />
        <DefaultVideoLayout
          slots={{
            seekBackwardButton: (
              <SeekButton className="vds-button" seconds={10}>
                <SeekForward10Icon className="vds-icon" />
              </SeekButton>
            ),
          }}
          colorScheme="light"
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
      <div className="w-full flex items-center gap-2">
        <CheckboxLable
          lable="Auto Play"
          onCheckedChange={(checked) => console.log(checked)}
        />
        <CheckboxLable
          lable="Auto Next"
          onCheckedChange={(checked) => console.log(checked)}
        />
        <button className="color-red-300 hover:color-primary">
          <TbPlayerTrackPrevFilled color="inherit" />
        </button>
        <button className="color-red-300 hover:color-primary">
          <TbPlayerTrackNextFilled color="inherit" />
        </button>
      </div>
    </div>
  );
};

export default Player;
