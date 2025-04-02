import React from 'react'

const Projects = () => {
  return (
    <div id='projects'  className='w-full !py-15 '>
    <div className='w-full !px-20 border-b-[1px] border-zinc-700 !pb-20 '>
        <h1 className='text-[7vw] tracking-tighter font-["Oswald"]'>Featured Projects</h1>
        </div>
        <div className='cards !py-20 !px-15'>
          <div className='cardcontainer w-full flex gap-10 '>
            <div className='card1  w-1/2 h-[70vh] '>
            <img className='w-full h-full  bg-cover rounded-3xl' src="spotify.webp" alt="" />
        
              

            </div>
            <div className='card2  w-1/2 h-[70vh] '>
            <img className='w-full h-full  bg-cover rounded-3xl' src="game.jpg" alt="" />
        
              

            </div>
        
            
            </div>
          <div className='cardcontainer w-full flex gap-10 !mt-20 '>
          <div className='card1  w-1/2 h-[70vh] '>
            <img className='w-full h-full  bg-cover rounded-3xl' src="converter.jpg" alt="" />
        
              

            </div>
            <div className='card2  w-1/2 h-[70vh] '>
            <img className='w-full h-full  bg-cover rounded-3xl' src="EWS.png" alt="" />
        
              

            </div>
          </div>
          </div>
  
      
    </div>
  
  )
}

export default Projects
