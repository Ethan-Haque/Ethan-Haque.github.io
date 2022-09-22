import React from "react";
import TypingTestGif from "../assets/TypingTest.gif";
import DroneSimImg from "../assets/Dronesim.jpg";
import NumPadImg from "../assets/NumPad.jpg";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-full md:h-screen text-white bg-[#0d47a1]">
      <div className="max-w-[1100px] mx-auto p-14  md:pt-0 md:pb-0 flex flex-col justify-center w-full h-full bg-[#08306d] md:bg-transparent rounded-2xl">
        <div className="pb-8">
          <p className='text-4xl  inline border-b-4 border-[#6c9eed]'>Projects</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4">
          <div
            style={{ backgroundImage: `url(${TypingTestGif})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="project-title">
                React Typing Test
              </span>
              <div className="pt-8 text-center">
                <a href="https://eh-type.netlify.app/">
                  <button className="project-button">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Ethan-Haque/typing-test-react">
                  <button className="project-button">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div
            style={{ backgroundImage: `url(${NumPadImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="project-title">
                Numpad Calculator
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Ethan-Haque/duckboard-calc">
                  <button className="project-button">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${DroneSimImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="project-title">
                Drone Simulator
              </span>
              <div className="pt-8 text-center">
                <a href="https://ethan-haque.github.io/DroneSim/">
                  <button className="project-button">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
