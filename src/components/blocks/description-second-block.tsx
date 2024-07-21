import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "@radix-ui/react-separator";

const DescriptionSecondBlock = () => {
  return (
    <section className="pt-24 pb-40 w-full bg-gradient-to-b from-white via-white to-pink-200">
      <div className="flex justify-between container">
        <div className="w-1/2 flex flex-col justify-center text-left space-y-6">
          <h2 className="text-6xl font-bold text-pink-600">
            Lorem, ipsum dolor.
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            tenetur voluptate officiis reiciendis. Dolorem architecto voluptatum
            quibusdam, laborum odio unde.
          </p>
          <p className="text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            tenetur voluptate officiis reiciendis. Dolorem architecto voluptatum
            quibusdam, laborum odio unde.
          </p>
          <Button className="w-40 hover:bg-white hover:border border-pink-600 hover:text-pink-600">
            Lorem.
          </Button>
        </div>
        <div className="bg-pink-600 rounded-full ">
          <Image
            src="/paper-bags.webp"
            width={500}
            height={500}
            alt="paper-bags"
            className="drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default DescriptionSecondBlock;
