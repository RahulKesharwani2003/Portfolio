import React from "react";
import About from "./About";
import { Linkedin, Github, CircleArrowUp } from "lucide-react";

import Hire from "./Hire";
import Skills from "./Skills";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="px-80 pt-40 pr-50 ">
      <div className="flex items-center justify-center">
        {/* Left Side - Text Content */}
        <div className="flex-1 md:w-1/2 ">
          <div className="text-6xl  flex flex-col font-bold leading-normal">
            <h1>Hi,</h1>
            <h1>
              I'm <span className="text-blue-700">Rahul,</span>
            </h1>
            <h1>Web Developer</h1>
          </div>
          <div className="pt-6 ">
            <a href="https://drive.google.com/file/d/1FMRSHVSJWAqrNSWSI59AZScjoRVDdqGy/view?usp=drivesdk">
              <button className="px-11 py-2 cursor-pointer bg-blue-700 rounded-md text-white flex gap-2 font-bold">
                <CircleArrowUp className="bg-black rounded-full" />
                Resume
              </button>
            </a>
            <div className="flex pt-30 gap-5">
              <a href="www.linkedin.com/in/rahul-kesharwani-56b0a8292">
                {" "}
                <Linkedin />
              </a>
              <a href="https://github.com/RahulKesharwani2003">
                <Github />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 md:w-1/2 flex justify-center ">
          <img className="object-cover " src="/img.png" alt="Profile" />
        </div>
      </div>
      <About />
      <Skills />  {/* Add this component when you have data */}
      <Projects />  
      <Hire />
    </div>
  );
};

export default Home;
