import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
        <li className="text-xl">Home</li>
        <li className="text-xl">Portfolio</li>
        <li className="text-xl">About</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0d47a1] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">Portfolio</li>
        <li className="py-6 text-4xl">About</li>
      </ul>
    </div>
  );
};

export default Navbar;
