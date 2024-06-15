"use client";
import Container from "@/components/common/Container";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadiningComponent from "./loading/LoadiningComponent";
import CarouselSkeleton from "@/components/Loading/CarouselSkeleton";

const Loading = () => {
  return (
    <Container className="md:h-[40vh] h-[30vh]">
      <CarouselSkeleton />
    </Container>
  );
};

export default Loading;
