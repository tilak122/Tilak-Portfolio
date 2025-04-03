import React from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-100 flex flex-col justify-between pt-10 px-6 md:px-20'>
      
      {/* Heading Section */}
      <div className='mt-32 md:mt-52 px-4 md:px-20'>
        {['welcome', 'to my', 'portfolio'].map((elem, index) => (
          <div key={index} className='masker'>
            <div className='w-fit flex items-center'>
              {index === 1 && (
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: '6vw' }} 
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className='mr-2 md:mr-[1vw] mt-1 md:mt-2 rounded-md relative w-[10vw] md:w-[6vw] h-[7vw] md:h-[5vw] bg-blue-600 border-2'
                />
              )}
              <h1 className='text-[10vw] md:text-[7vw] uppercase leading-[8vw] md:leading-[6vw] tracking-tighter font-bold font-["Oswald"]'>
                {elem}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className='border-t-2 mt-20 md:mt-32 border-zinc-400 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-5 text-center md:text-left'>
        <p className='text-sm md:text-md font-light tracking-tight uppercase'>Web development</p>
        <p className='text-sm md:text-md font-light tracking-tight uppercase'>Freelancing</p>
        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-2'>
          <div className='uppercase px-4 py-2 border-2 border-zinc-700 rounded-full text-sm md:text-md'>Responsive portfolios</div>
          <div className='w-10 h-10 md:w-11 md:h-11 flex items-center justify-center border-2 border-zinc-700 rounded-full'>
            <span className='rotate-45'><IoMdArrowRoundUp size={20} /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
