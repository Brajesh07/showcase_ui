import {
  FaGoogle,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";

const HeaderNav = () => {
  return (
    <div className="px-5 py-3 flex items-center justify-between fixed w-full">
      <div className="flex space-x-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/search?rlz=1C1CHBF_enIN1017IN1017&q=Brajesh+Tanwar&stick=H4sIAAAAAAAAAOOwesRoyi3w8sc9YSmdSWtOXmNU4-IJSC0qzs8LTk0sSs4QEuNic80rySypFOKR4uLiMK9ws_QKtSjiWcTK51SUmJVanKEQkphXnlgEAH2d5vJLAAAA&sa=X&ved=2ahUKEwiL27638YT6AhV1R2wGHSADDccQnJoFegQIFBAG&biw=1360&bih=635&dpr=1"
        >
          <FaGoogle size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/9340459568"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/graphic_stack/"
        >
          <FaInstagram size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/brajesh-tanwar-610bb9166/"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/brajesh_tanwar"
        >
          <FaTwitter size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.behance.net/brajeshtanwar007"
        >
          <FaBehance size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dribbble.com/GraphicStack007"
        >
          <FaDribbble size={24} />
        </a>
      </div>
      <a
        className="btn"
        href="GraphicStack.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Resume
      </a>
    </div>
  );
};

export default HeaderNav;
