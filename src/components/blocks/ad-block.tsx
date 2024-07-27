import Image from "next/image";
import { Button } from "../ui/button";
import { MotionDiv } from "../ui/motion-div";

const AdBlock = () => {
  return (
    <section
      id="ad"
      className="bg-[url('/bags-wide.png')] h-[600px] lg:h-[800px] bg-fixed bg-cover w-full relative"
    >
      <div className="bg-black/30 w-full h-full flex items-center justify-center">
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="px-6 lg:px-0 text-center text-white font-bold flex flex-col space-y-6"
        >
          <h2 className="text-4xl lg:text-6xl drop-shadow">
            Lorem ipsum dolor sit.
          </h2>
          <p className="lg:text-xl lg:w-[800px] drop-shadow">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolore
            sapiente rem qui, voluptate perferendis expedita molestias
            aspernatur eius neque!
          </p>
          <p className="lg:text-xl lg:w-[800px] drop-shadow">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolore
            sapiente rem qui, voluptate perferendis expedita molestias
            aspernatur eius neque!
          </p>
          <a href="#form" className="">
            <Button className="drop-shadow">Lorem, ipsum.</Button>
          </a>
        </MotionDiv>
      </div>
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
        className="absolute -top-1 w-full z-10"
      />
    </section>
  );
};

export default AdBlock;
