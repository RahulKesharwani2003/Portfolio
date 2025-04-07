import React from "react";

const About = () => {
  return (
    <div className="px-4 py-16 max-w-5xl mx-auto">
      <h1 className="text-blue-800 font-bold text-3xl mb-12 text-center">
        About
      </h1>

      <div className="flex flex-col md:flex-row items-start md:space-x-8">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            className="h-90 w-70 rounded-md object-cover shadow-lg"
            src="/my image.jpg"
            alt="Profile"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          {/* Name with Hover Effect */}
          <div className="relative inline-block group">
            <h2 className="font-bold text-2xl mb-4 cursor-pointer">
              Rahul Kesharwani
            </h2>

            {/* Hidden Image on Hover */}
            <img
              src="/my image.jpg" 
              alt="Hover Preview"
              className="absolute object-cover left-1/2 top-full mt-2 w-40 h-40 rounded-lg shadow-lg opacity-0 transition-opacity duration-300 transform -translate-x-1/2 group-hover:opacity-100"
            />
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            I am a passionate Frontend Web Developer with a solid understanding of backend technologies, specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. I love crafting interactive, high-performance, and user-friendly web applications that deliver seamless experiences.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            These applications include Static Websites, Single Page Applications, Progressive Web Apps.
          </p>
          <p className="text-gray-700 leading-relaxed">
            These projects are supported by Sequential (SQL) & Non-sequential (MongoDB) where I've worked on Database architecture via usage of Entity Relationship Diagram, Sequence Diagrams & n-tier architecture which may fulfill the requirements of Micro-services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
