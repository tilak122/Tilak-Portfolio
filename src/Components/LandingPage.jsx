
import React from 'react'
import { IoMdArrowRoundUp } from "react-icons/io";
import { motion } from 'framer-motion';





const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-200  !pt-1'>
      
        <div className='textsructure !mt-52 !px-25'>
          {["welcome","to my","portfolio"].map((elem,index)=>{
            return   <div key={index} className='masker'>
              <div className=' w-fit flex items-center'>
            
                
                {index===1 && (<motion.div initial={{width:0}} animate={{width:"6vw"}} transition={{ ease: [0.76, 0, 0.24, 1],duration:1 }}  className=' !mr-[1vw]  rounded-md !mt-2  relative w-[6vw] h-[5vw] bg-[url("coding.gif")] bg-cover'></motion.div>)}
            <h1 className='text-[7vw] uppercase leading-[6vw] tracking-tighter font-bold font-["Oswald"]'>{elem}</h1>
            </div>
        </div>
      
          })}
        </div>


            <div className='border-t-2 !mt-45 border-zinc-400 flex items-center justify-between !px-10 py-5'>
                <p className='text-md font-light tracking-tight leading-nones uppercase'>Web development</p>
                <p className='text-md font-light tracking-tight leading-nones uppercase'>freelancing</p>
                <div className='flex items-center gap-2'>
                <div className='uppercase px-4 !py-2  border-[2px] border-zinc-700 rounded-full '>Responsive portfolios</div>
                <div className='w-11 h-11 flex items-center justify-center  border-[2px] border-zinc-700  rounded-full '>
                <span className='rotate-45'><IoMdArrowRoundUp /></span>
                
                </div>
                </div>
                
                

            </div>

        </div>

  )
}

export default LandingPage
