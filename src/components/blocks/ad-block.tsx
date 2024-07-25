import Image from "next/image";
import { Button } from "../ui/button";

const AdBlock = () => {
  return (
    <section className="bg-[url('/bags-wide.png')] h-[600px] lg:h-[800px] bg-fixed bg-cover w-full">
      <div className="relative bg-black/30 w-full h-full px-6 lg:px-0 text-center text-white font-bold flex flex-col items-center justify-center space-y-6">
        <h2 className="text-4xl lg:text-6xl drop-shadow">
          Lorem ipsum dolor sit.
        </h2>
        <p className="lg:text-xl lg:w-[800px] drop-shadow">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolore
          sapiente rem qui, voluptate perferendis expedita molestias aspernatur
          eius neque!
        </p>
        <p className="lg:text-xl lg:w-[800px] drop-shadow">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolore
          sapiente rem qui, voluptate perferendis expedita molestias aspernatur
          eius neque!
        </p>
        <Button className="drop-shadow">Lorem, ipsum.</Button>
        <Image
          src="/Path 2.png"
          width={1440}
          height={35}
          alt="path"
          className="absolute -bottom-1 w-full z-10"
        />
        <Image
          src="/Path 2 reversed.png"
          width={1440}
          height={35}
          alt="path"
          className="absolute -top-7 w-full z-10"
        />
      </div>
    </section>
  );
};

export default AdBlock;
