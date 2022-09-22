import React from "react";
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {

  // run once 
  React.useEffect(() => {
    // list of text to fade-in
    let fadeList = document.querySelectorAll(".fadeText");

    // iterate over list to start animation with delays
    for (let i = 0; i < fadeList.length; i++) {
      setTimeout(() => {
        fadeList[i].classList.add('fade-in');
      }, 500 + i * 1100);
    }
  }, []);

  return (
    <div name="home" className="w-full h-screen bg-[#0d47a1]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="fadeText">
          <p className="text-white text-2xl">Hello, my name is</p>
          <h1 className="text-5xl sm:text-7xl text-white">
            Ethan Haque.
          </h1>
        </div>
        <div>
          <h2 className="text-4xl sm:text-7xl text-slate-300 fadeText">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-gray-200 py-4 max-w-[660px] font-bold fadeText">
            Over the last year, I have gained both professional and personal experience developing websites, mobile apps and bots with different tech stacks.
            I am now looking to join a team where I can both demonstrate my skills and improve upon them.
          </p>
        </div>
        <div className="fadeText w-[190px]">
          <Link to='projects' smooth={true} duration={1000}>
            <button className="group text-white border-2 rounded-lg px-6 py-3 my-2 flex items-center bg-[#0a4093] hover:bg-[#08306d]">
              View Projects
              <span className="group-hover:rotate-90 duration-300 text-[20px]">
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
