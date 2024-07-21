import Image from "next/image";
import { Button } from "../ui/button";

const DescriptionSecondBlock = () => {
  return (
    <section className="flex justify-between py-32 w-full container">
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
        <Button className="w-40">Lorem.</Button>
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
    </section>
  );
};

export default DescriptionSecondBlock;
