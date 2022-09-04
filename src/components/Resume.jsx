import React from "react";
import ResumePDF from "../assets/Resume.pdf";
const Resume = () => {
    return (
        <div name="resume" className="hidden md:flex md:w-full h-screen text-white bg-[#0d47a1]">
            <div className="max-w-[1100px] mx-auto p-14  md:pt-0 md:pb-0 flex flex-col justify-center w-full h-full bg-[#08306d] md:bg-transparent rounded-2xl">
                <div className="pb-8">
                    <p className='text-4xl inline border-b-4 border-[#6c9eed]'>Resume</p>
                </div>
                <object data={ResumePDF} type="application/pdf" className="w-0 md:w-full md:h-[85%]">
                </object>

            </div>
        </div>
    );
};

export default Resume;
