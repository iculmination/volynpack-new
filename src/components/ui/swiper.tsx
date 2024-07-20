"use client";

import Image from "next/image";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../app/globals.css";

const SwiperMain = () => {
  const images: string[] = [
    "/bags-wide.png",
    "/bags-wide.png",
    "/bags-wide.png",
    "/bags-wide.png",
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay
      navigation
      className="bg-white custom-swiper"
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <Image
            src={image}
            alt={image}
            key={image}
            height={1000}
            width={1000}
            className="mx-auto w-full bg-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperMain;
