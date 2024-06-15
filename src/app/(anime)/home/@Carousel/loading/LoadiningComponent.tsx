import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const LoadiningComponent = () => {
  return (
    <Swiper
      speed={500}
      keyboard
      pagination={{
        clickable: true,
        bulletActiveClass: "bg-primary",
        bulletClass: "bg-muted-foreground/80 h-2 w-2 rounded-full flex",
      }}
      modules={[Pagination]}
      autoplay
      loop
      fadeEffect={{ crossFade: true }}
      className="h-full">
      {Array(10).map((_, i) => (
        <SwiperSlide key={i}>
          <Skeleton className="w-full h-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LoadiningComponent;
