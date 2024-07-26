"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const data = [
  {
    h: "Lorem, ipsum dolor.",
    p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ipsam cum, minus suscipit recusandae rerum similique odit deserunt facilis unde, hic eaque quidem dignissimos? Libero, temporibus voluptatibus? Deserunt vero eos minima dicta accusantium ea.",
  },
  {
    h: "Lorem, ipsum dolor.",
    p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ipsam cum, minus suscipit recusandae rerum similique odit deserunt facilis unde, hic eaque quidem dignissimos? Libero, temporibus voluptatibus? Deserunt vero eos minima dicta accusantium ea, doloremque tenetur qui sapiente alias. Corporis.",
  },
  {
    h: "Lorem, ipsum dolor.",
    p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ipsam cum, minus suscipit recusandae rerum similique odit deserunt facilis unde, hic eaque quidem dignissimos? Libero, temporibus voluptatibus?",
  },
];

const MobileReviewsBlock = () => {
  return (
    <section className="bg-gradient-to-b from-pink-600 from-50% via-pink-600 to-pink-800 text-white pt-10 pb-20 relative">
      <h2 className="w-full text-4xl font-bold mb-4 drop-shadow-md px-4">
        Lorem ipsum dolor sit amet.
      </h2>
      <p className="w-full mb-8 px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </p>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="mx-12">
          {data.map((el, i) => {
            return (
              <CarouselItem key={i}>
                <div className="bg-white text-black rounded-lg p-8 drop-shadow-lg">
                  <h3 className="text-pink-600 text-2xl font-bold mb-8">
                    {el.h}
                  </h3>
                  <p>{el.p}</p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <Image
        src="/Path 2.png"
        width={1440}
        height={35}
        alt="path"
        className="absolute bottom-0 w-full z-10 -mb-1"
      />
    </section>
  );
};

export default MobileReviewsBlock;
