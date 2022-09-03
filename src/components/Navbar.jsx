import React, { useState } from "react";
import { Link } from 'react-scroll';
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 font-bold bg-[#08306d] text-white ">
      <div>
        <h1 className="text-4xl">E H</h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to='home' smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={1000}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='resume' smooth={true} duration={1000}>
            Resume
          </Link>
        </li>
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
      ><li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='projects' smooth={true} duration={1000}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='resume' smooth={true} duration={1000}>
            resume
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;