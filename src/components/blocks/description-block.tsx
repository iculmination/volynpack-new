import Image from "next/image";
import { Button } from "../ui/button";

const DescriptionBlock = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-evenly px-10 lg:px-0 py-10 lg:py-32 w-full">
      <div className="bg-gradient-to-b from-pink-500 to-pink-700 rounded-full mx-auto lg:mx-0 w-fit">
        <Image
          src="/paper-bags.webp"
          width={500}
          height={500}
          alt="paper-bags"
          className="drop-shadow"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-left space-y-6">
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
        <Button className="lg:w-40 bg-white border border-pink-600 text-pink-600 hover:text-white hover:bg-pink-600">
          Lorem.
        </Button>
      </div>
    </section>
  );
};

export default DescriptionBlock;
