import { Mail, MapPin, Phone } from "lucide-react";

const Header = () => {
  return (
    <footer className="w-full py-14 bg-black">
      <div className="container flex justify-between text-gray-400">
        <h3 className="">
          <a href="/" className="text-white font-bold text-4xl">
            Volyn<span className="text-pink-600">pack</span>
          </a>
        </h3>
        <nav className="flex space-x-10">
          <a
            className="flex items-center hover:text-white transition duration-200"
            href="mailto:example@gmail.com"
          >
            <Mail className="text-pink-600 mr-2" />
            example@gmail.com
          </a>
          <a
            className="flex items-center hover:text-white transition duration-200"
            href="tel:1234567890"
          >
            <Phone className="text-pink-600 mr-2" /> +1-234-56-78-90
          </a>
          <a
            className="flex items-center hover:text-white transition duration-200"
            href="#"
          >
            <MapPin className="text-pink-600 mr-2" /> 09100, Street, City,
            Country
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Header;
