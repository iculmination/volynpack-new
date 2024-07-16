import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full bg-pink-600 h-24 px-10 flex items-center">
      <nav className="w-full flex justify-between">
        <a href="/" className="text-white font-bold text-5xl">
          Volyn<span className="text-pink-200">pack</span>
        </a>
        <div className="flex space-x-10 px-10 items-center">
          <a
            href=""
            className="text-white text-lg hover:text-white/80 transitions duration-200"
          >
            Відгуки
          </a>
          <a
            href=""
            className="text-white text-lg hover:text-white/80 transitions duration-200"
          >
            Про нас
          </a>
          <a
            href=""
            className="text-white text-lg hover:text-white/80 transitions duration-200"
          >
            Контакти
          </a>
          <a
            href=""
            className="text-white text-lg hover:text-white/80 transitions duration-200"
          >
            Продукція
          </a>
        </div>
      </nav>
      <Button
        variant="outline"
        className="text-md text-pink-600 font-bold hover:text-pink-600/80"
      >
        Замовити
      </Button>
    </header>
  );
};

export default Header;
