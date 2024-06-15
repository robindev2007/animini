import React from "react";
import Container from "../common/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Skeleton } from "../ui/skeleton";

const CarouselSkeleton = () => {
  return (
    <div>
      <Container className="h-60 md:h-80 overflow-hidden">
        {Array({ length: 10 }).map((_, i) => (
          <Skeleton key={i} className="h-full w-full" />
        ))}
      </Container>
    </div>
  );
};

export default CarouselSkeleton;
