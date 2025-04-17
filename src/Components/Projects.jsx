/*import React from 'react';

const Projects = () => {
  return (
    <div id='projects' className='w-full py-10 text-white bg-zinc-900'>
      {/* Header Section */
    /*  <div className='w-full px-6 md:px-20 border-b border-zinc-700 pb-10 md:pb-20'>
        <h1 className='text-[10vw] md:text-[7vw] tracking-tighter font-["Oswald"]'>Featured Projects</h1>
      </div>
      
      {/* Project Cards */
      /*<div className='py-10 px-6 md:px-15 grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='w-full h-[50vh] md:h-[70vh]'>
         <a href="https://github.com/tilak122/Spotify_clone"><img className='w-full h-full bg-cover rounded-3xl' src='spotify.webp' alt='Spotify Project' /></a>
        </div>
        <div className='w-full h-[50vh] md:h-[70vh]'>
        <a href="https://github.com/tilak122/action-game"><img className='w-full h-full bg-cover rounded-3xl' src='game.jpg' alt='Game Project' /></a>
        </div>
        <div className='w-full h-[50vh] md:h-[70vh]'>
          <a href="https://github.com/tilak122/Currency-Converter"><img className='w-full h-full bg-cover rounded-3xl' src='converter.jpg' alt='Converter Project' /></a>
        </div>
        <div className='w-full h-[50vh] md:h-[70vh]'>
          <a href="https://github.com/tilak122/Employee-Management-System"><img className='w-full h-full bg-cover rounded-3xl' src='EWS.png' alt='EWS Project' /></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;*/
import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: "Spotify Clone",
      imgSrc: "spotify.webp",
      link: "https://github.com/tilak122/Spotify_clone",
    },
    {
      title: "Action Game",
      imgSrc: "game.jpg",
      link: "https://github.com/tilak122/action-game",
    },
    {
      title: "Currency Converter",
      imgSrc: "converter.jpg",
      link: "https://github.com/tilak122/Currency-Converter",
    },
    {
      title: "Employee Management System",
      imgSrc: "EWS.png",
      link: "https://github.com/tilak122/Employee-Management-System",
    },
  ];

  return (
    <div id="projects" className="w-full py-16 px-6 md:px-20 bg-gradient-to-br from-zinc-900 to-black text-white">
      {/* Header */}
      <div className="border-b border-zinc-700 pb-10 mb-10">
        <h1 className="text-[10vw] md:text-[5vw] font-['Oswald'] tracking-tight text-center md:text-left">
          Featured Projects
        </h1>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectData.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-[50vh] md:h-[65vh] bg-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-bold font-['Oswald'] tracking-tight">
                {project.title}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
