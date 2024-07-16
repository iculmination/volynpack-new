"use client";

import Image from "next/image";

import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WelcomeBlock = () => {
  const images: string[] = [];
  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="border border-zinc-300 rounded-t-lg bg-zinc-100 flex items-center justify-center self-center"
      >
        {images.map((image) => (
          <SwiperSlide
            key={image}
            className="flex items-center justify-center self-center"
          >
            <Image
              src={image}
              alt={image}
              key={image}
              height={500}
              width={500}
              className="object-contain self-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WelcomeBlock;
