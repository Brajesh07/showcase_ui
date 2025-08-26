import { useState } from "react";
import {
  FaGoogle,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaBehance,
  FaDribbble,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { LiquidButton } from "./impossible/LiquidButton";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  className?: string;
}

const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Header Bar */}

      <div
        className={cn("fixed top-0 left-0 right-0 z-50 px-4 py-3", className)}
      >
        <div
          className="bg-white/50 backdrop-blur-md shadow-lg border border-gray-200/20 px-5 py-3 flex items-center justify-between"
          style={{ borderRadius: "1rem" }}
        >
          {/* Logo/Brand */}
          <div className="text-lg font-semibold text-gray-800">
            Brajesh Tanwar
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMenu}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-20 left-4 right-4 bg-white/50 backdrop-blur-md shadow-xl border border-gray-200/20 rounded-lg p-6 transition-all duration-300 ease-out ${
            isOpen
              ? "transform translate-y-2 opacity-100"
              : "transform -translate-y-6 opacity-0"
          }`}
          style={{ borderRadius: "1rem" }}
        >
          {/* Social Links Grid */}
          <div className="mb-6">
            <h3
              className={`text-sm font-medium  uppercase tracking-wide mb-4 ${isOpen ? "text-black" : "text-gray-500"}`}
            >
              Connect With Me
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/search?rlz=1C1CHBF_enIN1017IN1017&q=Brajesh+Tanwar&stick=H4sIAAAAAAAAAOOwesRoyi3w8sc9YSmdSWtOXmNU4-IJSC0qzs8LTk0sSs4QEuNic80rySypFOKR4uLiMK9ws_QKtSjiWcTK51SUmJVanKEQkphXnlgEAH2d5vJLAAAA&sa=X&ved=2ahUKEwiL27638YT6AhV1R2wGHSADDccQnJoFegQIFBAG&biw=1360&bih=635&dpr=1"
                className="flex flex-col items-center p-3 text-black"
              >
                <FaGoogle size={20} />
                <span className="text-xs mt-1">Google</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/9340459568"
                className="flex flex-col items-center p-3 text-black"
              >
                <FaWhatsapp size={20} />
                <span className="text-xs mt-1">WhatsApp</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/graphic_stack/"
                className="flex flex-col items-center p-3 text-black"
              >
                <FaInstagram size={20} />
                <span className="text-xs mt-1">Instagram</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/brajesh-tanwar-610bb9166/"
                className="flex flex-col items-center p-3 text-black"
              >
                <FaLinkedin size={20} />
                <span className="text-xs mt-1">LinkedIn</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/brajesh_tanwar"
                className="flex flex-col items-center p-3 text-black"
              >
                <FaTwitter size={20} />
                <span className="text-xs mt-1">Twitter</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.behance.net/brajeshtanwar007"
                className="flex flex-col items-center p-3 text-black"
              >
                <FaBehance size={20} />
                <span className="text-xs mt-1">Behance</span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dribbble.com/GraphicStack007"
                className="flex flex-col items-center p-3 text-black"
              >
                <FaDribbble size={20} />
                <span className="text-xs mt-1">Dribbble</span>
              </a>
            </div>
          </div>

          {/* Resume Button */}
          <div className="w-full flex items-center justify-center">
            <LiquidButton
              onClick={() => {
                window.open(
                  "GraphicStack.pdf",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              variant="primary"
              className="w-full"
            >
              My Resume
            </LiquidButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
