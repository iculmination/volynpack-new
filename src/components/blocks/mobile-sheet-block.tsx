"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

useEmblaCarousel.globalOptions = { loop: true };

const MobileSheetBlock = () => {
  return (
    <section className="lg:hidden w-full py-20 text-white text-xl">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="mx-12">
          <CarouselItem>
            <div className="w-full bg-gradient-to-b from-pink-500 to-pink-700 rounded-lg p-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              fugiat dolorum vitae. Eos, quae ea?
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full bg-gradient-to-b from-pink-500 to-pink-700 rounded-lg p-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              fugiat dolorum vitae. Eos, quae ea?
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full bg-gradient-to-b from-pink-500 to-pink-700 rounded-lg p-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              fugiat dolorum vitae. Eos, quae ea?
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full bg-gradient-to-b from-pink-500 to-pink-700 rounded-lg p-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              fugiat dolorum vitae. Eos, quae ea?
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full bg-gradient-to-b from-pink-500 to-pink-700 rounded-lg p-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              fugiat dolorum vitae. Eos, quae ea?
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full bg-gradient-to-b from-pink-500 to-pink-700 rounded-lg p-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              fugiat dolorum vitae. Eos, quae ea?
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default MobileSheetBlock;
