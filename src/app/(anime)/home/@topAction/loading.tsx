import Container from "@/components/common/Container";
import TopAiringSkleton from "@/components/page/TopAirings/TopAiring";
import React from "react";

const Loading = () => {
  return (
    <Container>
      <TopAiringSkleton />
    </Container>
  );
};

export default Loading;
