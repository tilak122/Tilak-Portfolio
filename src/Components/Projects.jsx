import React from 'react';

const Projects = () => {
  return (
    <div id='projects' className='w-full py-10 text-white bg-zinc-900'>
      {/* Header Section */}
      <div className='w-full px-6 md:px-20 border-b border-zinc-700 pb-10 md:pb-20'>
        <h1 className='text-[10vw] md:text-[7vw] tracking-tighter font-["Oswald"]'>Featured Projects</h1>
      </div>
      
      {/* Project Cards */}
      <div className='py-10 px-6 md:px-15 grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='w-full h-[50vh] md:h-[70vh]'>
          <img className='w-full h-full bg-cover rounded-3xl' src='spotify.webp' alt='Spotify Project' />
        </div>
        <div className='w-full h-[50vh] md:h-[70vh]'>
          <img className='w-full h-full bg-cover rounded-3xl' src='game.jpg' alt='Game Project' />
        </div>
        <div className='w-full h-[50vh] md:h-[70vh]'>
          <img className='w-full h-full bg-cover rounded-3xl' src='converter.jpg' alt='Converter Project' />
        </div>
        <div className='w-full h-[50vh] md:h-[70vh]'>
          <img className='w-full h-full bg-cover rounded-3xl' src='EWS.png' alt='EWS Project' />
        </div>
      </div>
    </div>
  );
};

export default Projects;