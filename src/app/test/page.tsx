"use client";
import React from "react";

const TestPage = () => {
  return (
    // <div className="min-h-[256px] bg-black h-0 relative">
    //   {/* <iframe
    //     src="https://embtaku.pro/streaming.php?id=MzUyMQ==&title=One+Piece+Episode+2&typesub=SUB"
    //     height={"100%"}></iframe> */}
    //   <iframe
    //     src="https://embtaku.pro/streaming.php?id=MzUyMQ==&title=One+Piece+Episode+2&typesub=SUB"
    //     allowFullScreen={true}
    //     frameBorder={0}
    //     marginWidth={0}
    //     marginHeight={0}
    //     scrolling="no"
    //     className="absolute top-0 left-0 w-full h-full"></iframe>

    // </div>
    <div className="watch_play">
      <div className="play-video min-h-64 relative h-fit pb-[56%]">
        <iframe
          className="h-full w-full absolute top-0 left-0"
          src="https://embtaku.pro/streaming.php?id=MzUyMQ==&title=One+Piece+Episode+2&typesub=SUB"
          allowFullScreen={true}
          marginWidth={0}
          marginHeight={0}
          scrolling="no"></iframe>
      </div>
      <div className="clr"></div>
    </div>
  );
};

export default TestPage;
