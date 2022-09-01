import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0d47a1] text-white">
      <div>
        <h1 className="text-4xl">E H</h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <a href="https://www.linkedin.com/in/ethan-haque-580bb2149/" >
          <li className="text-xl">
            <FaLinkedin size={30} />
          </li>
        </a>
        <a href="https://github.com/Ethan-Haque" >
          <li className="text-xl">
            <FaGithub size={30} />
          </li>
        </a>
        <a href="mailto:eth.haque@gmail.com" >
          <li className="text-xl">
            <HiOutlineMail size={30} />
          </li>
        </a>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0d47a1] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl"><FaLinkedin size={30} /></li>
        <li className="py-6 text-4xl"><FaGithub size={30} /></li>
        <li className="py-6 text-4xl"> <HiOutlineMail size={30} /></li>
      </ul>
    </div>
  );
};

export default Navbar;
