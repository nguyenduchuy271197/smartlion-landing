"use client";

import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { ReactNode, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";

export default function Carousel({ children }: { children: ReactNode }) {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1.1}
        breakpoints={{
          896: {
            slidesPerView: 2.2,
          },
        }}
        loop={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {children}
      </Swiper>
      <div className="flex items-center justify-end mt-10 gap-8">
        <Button
          onClick={() => swiperRef.current?.slidePrev()}
          variant="link"
          size="lg"
        >
          <MoveLeft className="w-6 h-6" />
          Trước
        </Button>
        <Button
          onClick={() => swiperRef.current?.slideNext()}
          variant="link"
          size="lg"
        >
          Sau
          <MoveRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
