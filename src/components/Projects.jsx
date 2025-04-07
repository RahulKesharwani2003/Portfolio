import React from 'react';

const projects = [
  {
    id: 1,
    title: "Job Portal",
    description: "A MERN stack-based job portal with JWT authentication and employer dashboard.",
    image: "https://images.unsplash.com/photo-1742845918430-c6093f93f740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "git@github.com:RahulKesharwani2003/Job-Portal1.git"
  },
  {
    id: 2,
    title: "Rest Countries API Explorer",
    description: "Interactive web app displaying country data with dark mode and animations.",
    image: "https://images.unsplash.com/photo-1742330425089-1f91d18eaa4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://yourgithub/rest-countries-api"
  },
  {
    id: 3,
    title: "Complaint Management System",
    description: "A MERN project for flatmates to manage complaints with voting and gamification.",
    image: "https://images.unsplash.com/photo-1742845918430-c6093f93f740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#"
  }
];

const Projects = () => {
  return (
    <div className='py-12 px-6'>
      <h2 className='text-blue-800 font-bold text-3xl mb-12 text-center'>Projects</h2>
      
      <div className='grid md:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <div key={project.id} className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'>
            <img src={project.image} alt={project.title} className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold'>{project.title}</h3>
              <p className='text-gray-600 mt-2'>{project.description}</p>
              <a href={project.link} target='_blank' rel='noopener noreferrer' className='block mt-4 text-blue-600 font-bold hover:underline'>View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
