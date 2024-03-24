import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-7 pb-2 px-10 flex justify-between">
      <div>
        <div className="flex items-center font-bold">
          Headless
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-red-400 font-lobster text-2xl font-bold ">
            Practice
          </span>
        </div>
        <div>
          <NavLink to="/about">about</NavLink>
        </div>

        <p>
          Propired by:
          <span className="text-sm font-bold">Ahmad Morshed 'Morad'</span>©
        </p>
      </div>
      <div className="flex gap-3">
        <a href="https://www.linkedin.com/in/morshed-morad-902077247/">
          <FaLinkedin className="text-xl " />
        </a>
        <a href="#">
          <FaFacebook className="text-xl " />
        </a>
      </div>
    </div>
  );
};

export default Footer;
