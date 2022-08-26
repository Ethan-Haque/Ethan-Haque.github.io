import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0d47a1]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl foxt-bold text-[#ffffff]">
          Ethan Haque
        </h1>
        <h2 className="text-4xl sm:text-7xl foxt-bold text-[#ccd6f6]">
          I'm a Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
          eros massa, in luctus elit cursus nec. Curabitur consectetur lorem
          feugiat turpis malesuada, vitae porta velit dignissim. Integer
          efficitur magna a velit tincidunt accumsan. 
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-black">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
