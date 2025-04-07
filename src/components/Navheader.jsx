import React from "react";

import { Link, Route, Routes } from "react-router-dom";

const Navheader = () => {
  return (
      <div className="h-[70px] shadow-md px-80 w-full flex justify-between items-center font-bold text-lg">
        <p>Rahul</p>
        <div className="flex gap-8">
          <Link to="/" className="cursor-pointer">
            Home
          </Link>
          <Link to="/about" className="cursor-pointer">
            About
          </Link>
          <Link to="/skills">Skills</Link>
          <Link to="/hireme">Projects</Link>
          <Link to="/hireme">Hire Me</Link>

        </div>
      </div>
  );
};

export default Navheader;
