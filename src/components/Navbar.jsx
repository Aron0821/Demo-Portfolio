import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-slate-100 text-4xl">As</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/aron-shakha-489051261/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Aron0821">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/aronshakha/">
          <FaInstagram />
        </a>
        <a href="https://x.com/Arma1095">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
