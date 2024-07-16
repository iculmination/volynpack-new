import { Button } from "../ui/button";
import SwiperMain from "../ui/swiper";

const WelcomeBlock = () => {
  return (
    <section className="relative flex items-center justify-center">
      <div className="absolute z-10 text-white flex flex-col justify-center space-y-4 ">
        <h2 className="text-center drop-shadow-lg text-6xl font-bold">
          <p>Ласкаво просимо</p>
          <p>
            до Volyn<span className="text-pink-200">pack</span>
          </p>
        </h2>
        <Button className="mx-auto text-md">Про нас</Button>
      </div>
      <SwiperMain />
    </section>
  );
};

export default WelcomeBlock;
