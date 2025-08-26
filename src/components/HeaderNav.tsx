import { useState, useEffect } from "react";
import {
  FaGoogle,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";
import LiquidButton from "./impossible/LiquidButton";

const HeaderNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hidden md:flex px-5 py-3 items-center justify-between w-11/12 mx-auto mt-4 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-white/50 backdrop-blur-md shadow-lg border-none transform translate-y-0 fixed top-0 z-10 left-[5%]"
          : "bg-transparent transform -translate-y-2 opacity-90"
      }`}
      style={{ borderRadius: "1rem" }}
    >
      <div className="flex space-x-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/search?rlz=1C1CHBF_enIN1017IN1017&q=Brajesh+Tanwar&stick=H4sIAAAAAAAAAOOwesRoyi3w8sc9YSmdSWtOXmNU4-IJSC0qzs8LTk0sSs4QEuNic80rySypFOKR4uLiMK9ws_QKtSjiWcTK51SUmJVanKEQkphXnlgEAH2d5vJLAAAA&sa=X&ved=2ahUKEwiL27638YT6AhV1R2wGHSADDccQnJoFegQIFBAG&biw=1360&bih=635&dpr=1"
          className={`transition-colors duration-300 ${
            isScrolled
              ? "text-gray-700 hover:text-blue-600"
              : "text-white hover:text-blue-300"
          }`}
        >
          <FaGoogle size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/9340459568"
          className={`transition-colors duration-300 ${
            isScrolled
              ? "text-gray-700 hover:text-green-600"
              : "text-white hover:text-green-300"
          }`}
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/graphic_stack/"
          className={`transition-colors duration-300 ${
            isScrolled
              ? "text-gray-700 hover:text-pink-600"
              : "text-white hover:text-pink-300"
          }`}
        >
          <FaInstagram size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/brajesh-tanwar-610bb9166/"
          className={`transition-colors duration-300 ${
            isScrolled
              ? "text-gray-700 hover:text-blue-700"
              : "text-white hover:text-blue-400"
          }`}
        >
          <FaLinkedin size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/brajesh_tanwar"
          className={`transition-colors duration-300 ${
            isScrolled
              ? "text-gray-700 hover:text-blue-500"
              : "text-white hover:text-blue-300"
          }`}
        >
          <FaTwitter size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.behance.net/brajeshtanwar007"
          className={`transition-colors duration-300 ${
            isScrolled
              ? "text-gray-700 hover:text-blue-600"
              : "text-white hover:text-blue-300"
          }`}
        >
          <FaBehance size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dribbble.com/GraphicStack007"
          className={`transition-colors duration-300 ${
            isScrolled
              ? "text-gray-700 hover:text-pink-500"
              : "text-white hover:text-pink-300"
          }`}
        >
          <FaDribbble size={24} />
        </a>
      </div>
      <LiquidButton
        onClick={() => {
          window.open("GraphicStack.pdf", "_blank", "noopener,noreferrer");
        }}
        variant="secondary"
      >
        My Resume
      </LiquidButton>
    </div>
  );
};

export default HeaderNav;
