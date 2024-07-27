import Image from "next/image";
import { Button } from "../ui/button";
import { MotionDiv } from "../ui/motion-div";

const DescriptionBlock = () => {
  return (
    <section
      id="description"
      className="flex flex-col lg:flex-row justify-evenly px-10 lg:px-0 py-10 lg:py-32 w-full"
    >
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="bg-gradient-to-b from-pink-500 to-pink-700 rounded-full mx-auto lg:mx-0 w-fit"
      >
        <Image
          src="/paper-bags.webp"
          width={500}
          height={500}
          alt="paper-bags"
          className="drop-shadow"
        />
      </MotionDiv>
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className="w-full lg:w-1/2 flex flex-col justify-center text-left space-y-6"
      >
        <h2 className="mt-6 lg:mt-0 text-4xl lg:text-6xl font-bold text-pink-600">
          Lorem, ipsum dolor.
        </h2>
        <p className="lg:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          tenetur voluptate officiis reiciendis. Dolorem architecto voluptatum
          quibusdam, laborum odio unde.
        </p>
        <p className="lg:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          tenetur voluptate officiis reiciendis. Dolorem architecto voluptatum
          quibusdam, laborum odio unde.
        </p>
        <a href="#form" className="w-full">
          <Button className="w-full lg:w-40 bg-white border border-pink-600 text-pink-600 hover:text-white hover:bg-pink-600">
            Lorem.
          </Button>
        </a>
      </MotionDiv>
    </section>
  );
};

export default DescriptionBlock;
