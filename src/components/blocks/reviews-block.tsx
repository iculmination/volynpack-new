import Image from "next/image";
import { MotionDiv } from "../ui/motion-div";

const ReviewsBlock = () => {
  return (
    <section
      id="reviews"
      className="hidden lg:block bg-gradient-to-b from-pink-600 from-50% via-pink-600 to-pink-800 text-white pb-20 relative"
    >
      <div className="container flex justify-center space-x-12">
        <div className="flex flex-col items-end w-1/2 mt-32">
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
            <h2 className="w-full text-6xl font-bold mb-4 drop-shadow-md">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="w-full text-xl mb-12">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
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
            className="bg-white text-black w-4/5 rounded-lg p-10 drop-shadow-lg"
          >
            <h3 className="text-pink-600 text-4xl font-bold mb-8">
              Lorem, ipsum dolor.
            </h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              ipsam cum, minus suscipit recusandae rerum similique odit deserunt
              facilis unde, hic eaque quidem dignissimos? Libero, temporibus
              voluptatibus? Deserunt vero eos minima dicta accusantium ea,
              doloremque tenetur qui sapiente alias. Corporis.
            </p>
          </MotionDiv>
        </div>

        <div className="flex flex-col items-start w-1/2 justify-center space-y-12 mt-48">
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="bg-white text-black w-full p-10 drop-shadow-lg rounded-lg"
          >
            <h3 className="text-pink-600 text-4xl font-bold mb-8">
              Lorem ipsum dolor sit.
            </h3>
            <p className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              aliquid dignissimos ducimus molestiae soluta quasi eligendi
              delectus. Tempora, qui accusantium!
            </p>
          </MotionDiv>
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="bg-white text-black w-3/5 rounded-lg p-10 drop-shadow-lg"
          >
            <h3 className="text-pink-600 text-4xl font-bold mb-8">
              Lorem, ipsum.
            </h3>
            <p className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              aliquid dignissimos ducimus molestiae soluta quasi eligendi
              delectus. Tempora, qui accusantium!
            </p>
          </MotionDiv>
        </div>
      </div>
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

export default ReviewsBlock;
