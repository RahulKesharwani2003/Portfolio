import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', description: 'Structuring the web with semantic elements.' },
    { name: 'CSS', description: 'Styling the web with modern layouts and animations.' },
    { name: 'JavaScript', description: 'Making web pages interactive and dynamic.' },
    { name: 'React', description: 'Building reusable UI components and SPA development.' },
    { name: 'Node.js', description: 'Server-side scripting and API development.' },
    { name: 'MongoDB', description: 'NoSQL database for scalable applications.' }
  ];

  return (
    <div className="p-10 ">
      <h1 className="text-blue-800 font-bold text-4xl mb-12 text-center">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="w-72 bg-white shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">{skill.name}</h2>
            <p className="text-gray-700">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;