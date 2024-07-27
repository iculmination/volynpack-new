import Image from "next/image";
import { Button } from "../ui/button";
import SwiperMain from "../ui/swiper";
import { MotionDiv } from "../ui/motion-div";

const WelcomeBlock = () => {
  return (
    <section id="welcome" className="relative flex items-center justify-center">
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="absolute z-10 text-white flex flex-col justify-center space-y-4"
      >
        <h2 className="text-center drop-shadow-lg text-2xl md:text-4xl lg:text-6xl font-bold">
          <p>Ласкаво просимо</p>
          <p>
            до Volyn<span className="text-pink-200">pack</span>
          </p>
        </h2>
        <a
          href="#description"
          className="h-10 lg:h-12 mx-auto lg:text-md rounded-lg"
        >
          <Button>Про нас</Button>
        </a>
      </MotionDiv>
      <SwiperMain />
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

export default WelcomeBlock;
