import { Facebook, Instagram, Menu, Youtube } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="w-full bg-pink-600 h-20 lg:h-24 px-6 lg:px-10 flex items-center">
      <nav className="flex w-full justify-between items-center">
        <a
          href="/"
          className="text-white font-bold text-3xl lg:text-4xl xl:text-5xl"
        >
          Volyn<span className="text-pink-200">pack</span>
        </a>
        <div className="hidden lg:flex space-x-10 px-10 items-center">
          <a
            href=""
            className="text-white xl:text-lg hover:text-white/80 transitions duration-200"
          >
            Відгуки
          </a>
          <a
            href=""
            className="text-white xl:text-lg hover:text-white/80 transitions duration-200"
          >
            Про нас
          </a>
          <a
            href=""
            className="text-white xl:text-lg hover:text-white/80 transitions duration-200"
          >
            Контакти
          </a>
          <a
            href=""
            className="text-white xl:text-lg hover:text-white/80 transitions duration-200"
          >
            Продукція
          </a>
          <Button
            variant="outline"
            className="text-md text-pink-600 font-bold hover:text-pink-600/80"
          >
            Замовити
          </Button>
        </div>
      </nav>
      <HeaderMobile />
    </header>
  );
};

const HeaderMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Volynpack</SheetTitle>
          <SheetDescription>Lorem ipsum dolor sit amet.</SheetDescription>
        </SheetHeader>
        <nav className="items-center flex flex-col space-y-2 mt-10 mb-6">
          <a href="">Відгуки</a>
          <a href="">Про нас</a>
          <a href="">Контакти</a>
          <a href="">Продукція</a>
        </nav>
        <div className="flex space-x-4 justify-center">
          <Button className="rounded-full" size="icon">
            <Instagram className="size-6 text-white" />
          </Button>
          <Button className="rounded-full" size="icon">
            <Facebook className="size-6 text-white" />
          </Button>
          <Button className="rounded-full" size="icon">
            <Youtube className="size-6 text-white" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Header;
