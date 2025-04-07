import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-scren  px-80 text-gray-300 py-8 relative">
      <div className="max-w-8xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          {/* About Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold text-white">About Me</h2>
            <p className="text-sm mt-2 leading-relaxed">
              I'm a passionate web developer specializing in modern web
              technologies like React, Tailwind, and Node.js. Crafting
              responsive and performant web applications is what I love to do.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Blog
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>

          {/* Copyright Section */}
          <div className="mt-6 md:mt-0 text-sm text-gray-500">
            © {new Date().getFullYear()} Rahul Kesharwani. All rights reserved.
          </div>
        </div>
      </div>
      <div className="border-2 border-red-500 absolute bottom-0 left-0 right-0"></div>

    </footer>
  );
};

export default Footer;
