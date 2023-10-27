"use client";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { ReactNode, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from "lucide-react";

export default function Carousel({ children }: { children: ReactNode }) {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1.1}
        breakpoints={{
          896: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Autoplay]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {children}
      </Swiper>
      <div className="md:flex items-center justify-end mt-10 gap-8 hidden">
        <Button
          onClick={() => swiperRef.current?.slidePrev()}
          variant="link"
          size="lg"
          className="group"
        >
          <ArrowLeft className="group-hover:-translate-x-1" />
          Trước
        </Button>
        <Button
          onClick={() => swiperRef.current?.slideNext()}
          variant="link"
          size="lg"
          className="group"
        >
          Sau
          <ArrowRight className="group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
