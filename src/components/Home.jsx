import React from "react";
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0d47a1]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white text-xl">Hello, my name is</p>
        <h1 className="text-5xl sm:text-7xl text-[#ffffff]">
          Ethan Haque.
        </h1>
        <h2 className="text-4xl sm:text-7xl text-[#ccd6f6]">
          I'm a Junior Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          // Profile
        </p>
        <div>
          <Link to='projects' smooth={true} duration={1000}>
            <button className="group text-white border-2 rounded-lg px-6 py-3 my-2 flex items-center bg-[#0a4093] hover:bg-[#08306d]">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
