import Image from "next/image";
import { Button } from "../ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { MotionDiv } from "../ui/motion-div";

const SocialBlock = () => {
  return (
    <section
      id="social"
      className="relative py-16 sm:py-20 md:py-32 bg-gradient-to-b from-gray-300 to-gray-50 flex justify-evenly items-center"
    >
      <Image
        src="/Path 2 reversed.png"
        width={1440}
        height={35}
        alt="path"
        className="absolute -top-1 w-full z-10"
      />
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <Button
          className="rounded-full size-20 sm:size-24 md:size-32"
          variant="outline"
        >
          <Instagram className="text-pink-600 size-12" />
        </Button>
      </MotionDiv>
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <Button
          className="rounded-full size-20 sm:size-24 md:size-32"
          variant="outline"
        >
          <Facebook className="text-pink-600 size-12" />
        </Button>
      </MotionDiv>
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.4 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <Button
          className="rounded-full size-20 sm:size-24 md:size-32"
          variant="outline"
        >
          <Youtube className="text-pink-600 size-12" />
        </Button>
      </MotionDiv>
    </section>
  );
};

export default SocialBlock;
