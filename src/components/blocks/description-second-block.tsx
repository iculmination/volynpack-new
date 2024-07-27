import Image from "next/image";
import { Button } from "../ui/button";
import { MotionDiv } from "../ui/motion-div";

const DescriptionSecondBlock = () => {
  return (
    <section
      id="description-second"
      className="lg:pt-24 pb-16 lg:pb-40 w-full bg-gradient-to-b from-white via-white to-pink-200"
    >
      <div className="flex justify-between container">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="lg:w-1/2 flex flex-col justify-center text-left space-y-6"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-pink-600">
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
          <a href="#social" className="w-full">
            <Button className="w-full lg:w-40 hover:bg-white hover:border border-pink-600 hover:text-pink-600">
              Lorem.
            </Button>
          </a>
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
          className="hidden lg:block bg-gradient-to-b from-pink-500 to-pink-700 rounded-full "
        >
          <Image
            src="/paper-bags.webp"
            width={500}
            height={500}
            alt="paper-bags"
            className="drop-shadow"
          />
        </MotionDiv>
      </div>
    </section>
  );
};

export default DescriptionSecondBlock;
