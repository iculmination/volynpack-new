import { Button } from "../ui/button";

const AdBlock = () => {
  return (
    <section className="bg-[url('/bags-wide.png')] h-[800px] bg-fixed bg-cover w-full">
      <div className="bg-black/30 w-full h-full text-center text-white font-bold flex flex-col items-center justify-center space-y-6 drop-shadow">
        <h2 className="text-6xl">Lorem ipsum dolor sit.</h2>
        <p className="text-xl w-[800px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolore
          sapiente rem qui, voluptate perferendis expedita molestias aspernatur
          eius neque!
        </p>
        <Button>Lorem, ipsum.</Button>
      </div>
    </section>
  );
};

export default AdBlock;
