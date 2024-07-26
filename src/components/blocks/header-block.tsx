import { Facebook, Instagram, Menu, Youtube } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header
      id="header"
      className="fixed lg:relative z-20 w-full bg-pink-600 h-20 lg:h-24 px-6 lg:px-10 flex items-center"
    >
      <nav className="flex w-full justify-between items-center drop-shadow-lg">
        <a
          href="#welcome"
          className="text-white font-bold text-3xl lg:text-4xl xl:text-5xl group"
        >
          Volyn
          <span className="text-pink-200 group-hover:text-white transitions duration-200">
            pack
          </span>
        </a>
        <div className="hidden lg:flex space-x-10 px-10 items-center">
          <a
            href="#reviews"
            className="text-white xl:text-lg hover:text-white/80 transitions duration-200"
          >
            Відгуки
          </a>
          <a
            href="#description"
            className="text-white xl:text-lg hover:text-white/80 transitions duration-200"
          >
            Про нас
          </a>
          <a
            href="#social"
            className="text-white xl:text-lg hover:text-white/80 transitions duration-200"
          >
            Контакти
          </a>
          <a
            href="#sheet"
            className="text-white xl:text-lg hover:text-white/80 transitions duration-200"
          >
            Продукція
          </a>
          <a href="#form" className="">
            <Button
              variant="outline"
              className="text-md text-pink-600 font-bold hover:text-pink-600/80"
            >
              Замовити
            </Button>
          </a>
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
          <SheetClose>
            <a href="#mobile-reviews">Відгуки</a>
          </SheetClose>
          <SheetClose>
            <a href="#description">Про нас</a>
          </SheetClose>
          <SheetClose>
            <a href="#social">Контакти</a>
          </SheetClose>
          <SheetClose>
            <a href="#mobile-sheet">Продукція</a>
          </SheetClose>
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
