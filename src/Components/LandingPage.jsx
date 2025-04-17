/*import React from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-100 flex flex-col justify-between pt-10 px-6 md:px-20'>
      
      <div className="mt-32 md:mt-52 px-4 md:px-20">
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full">
    
    {/* Text Content */
    /*<div className="w-full md:w-1/2 mb-10 md:mb-0">
      {['welcome', 'to my', 'portfolio'].map((elem, index) => (
        <div key={index} className="masker">
          <div className="w-fit flex items-center">
            {index === 1 && (
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: '6vw' }} 
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className="mr-2 md:mr-[1vw] mt-1 md:mt-2 rounded-md relative w-[10vw] md:w-[7vw] h-[7vw] md:h-[6vw] bg-blue-950 border-2"
              />
            )}
            <h1 className="text-[10vw] md:text-[7vw] uppercase leading-[8vw] md:leading-[6vw] tracking-tighter font-bold font-['Oswald']">

              {elem}
            </h1>
          </div>
        </div>
      ))}
    </div>

    {/* Image */
   /* <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <div className="w-[70vw] md:w-[30vw] aspect-square bg-[url('/front.png')] bg-cover bg-center rounded-lg" />
    </div>

  </div>
</div>

  

      {/* Footer Section */
      /*<div className='border-t-2 mt-20 md:mt-32 border-zinc-400 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-5 text-center md:text-left'>
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

export default LandingPage;*/
import React from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="relative w-full min-h-screen flex flex-col justify-between pt-10 px-6 md:px-20 bg-gradient-to-br from-[#FDFCFB] via-[#E2D1C3] to-[#A6B1E1]"
    >
      {/* Hero Section */}
      <div className="mt-24 md:mt-40 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            {['Welcome', 'To My', 'Portfolio'].map((elem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="masker"
              >
                <div className="w-fit mx-auto md:mx-0 flex items-center">
                  {index === 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        ease: [0.76, 0, 0.24, 1],
                        duration: 1,
                      }}
                      className="origin-left mr-2 md:mr-[1vw] mt-1 md:mt-2 rounded-2xl w-[10vw] md:w-[7vw] h-[7vw] md:h-[6vw] 
                      bg-gradient-to-tr from-indigo-900 via-indigo-700 to-purple-700 
                      border-2 border-indigo-800 shadow-[0px_4px_20px_rgba(79,70,229,0.5)] backdrop-blur-md"
                      
                    />
                  )}
                  <h1 className="text-[10vw] md:text-[7.5vw] uppercase tracking-tighter font-bold font-['Oswald'] text-gray-800 leading-[6vw] drop-shadow-2xl">
                    {elem}
                  </h1>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="w-[70vw] md:w-[28vw] aspect-square bg-[url('/front.png')] bg-cover bg-center rounded-2xl shadow-2xl border-4 border-white hover:scale-110 transition-transform duration-500 hover:shadow-[0px_0px_30px_5px_rgba(0,0,0,0.3)]" />
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t-2 mt-20 md:mt-32 border-zinc-400 flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-10 py-6 text-center md:text-left relative z-10">
        <p className="text-sm md:text-base font-medium tracking-wide uppercase text-gray-700 hover:text-indigo-900 transition-colors">
          Web Development
        </p>
        <p className="text-sm md:text-base font-medium tracking-wide uppercase text-gray-700 hover:text-indigo-900 transition-colors">
          Freelancing
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="uppercase px-5 py-2 border-2 border-indigo-700 rounded-full text-sm md:text-base text-gray-800 hover:bg-indigo-700 hover:text-white transition duration-300">
            Responsive Portfolios
          </div>
          <div className="w-11 h-11 flex items-center justify-center border-2 border-indigo-700 rounded-full hover:bg-indigo-700 hover:text-white transition duration-300">
            <span className="rotate-45">
              <IoMdArrowRoundUp size={22} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

