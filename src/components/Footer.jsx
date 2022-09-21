import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <div className="fixed h-[35px] md:h-[50px] md:rounded-tl-2xl flex justify-center bottom-0 w-full md:w-auto md:right-0 items-center px-4 text-white bg-[#08306d] ">
            {/* Menu */}
            <ul className="flex">
                <li className="text-xl">
                    <a href="https://www.linkedin.com/in/ethan-haque/" >
                        <FaLinkedin size={30} />
                    </a>
                </li>
                <li className="text-xl">
                    <a href="https://github.com/Ethan-Haque" >
                        <FaGithub size={30} />
                    </a>
                </li>
                <li className="text-xl">
                    <a href="mailto:eth.haque@gmail.com" >
                        <HiOutlineMail size={30} />
                    </a>
                </li>
            </ul>

        </div >
    );
};

export default Footer;