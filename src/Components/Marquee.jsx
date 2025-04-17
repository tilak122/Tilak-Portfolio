/*import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full !py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004d43]'>
    <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ repeat:Infinity, ease:"linear",duration:8}}  className='text-[22vw] leading-none -mb-[3vw] pt-10 uppercase font-semibold tracking-tighter !pr-20 text-white'>html css javascript reactjs </motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ repeat:Infinity, ease:"linear",duration:8}} className='text-[22vw] leading-none -mb-[3vw] pt-10 uppercase font-semibold tracking-tighter !pr-20 text-white'>html css javascript reactjs</motion.h1>
    </div>

  
</div>
  )
}

export default Marquee*/
import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed=".1" 
      className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 overflow-hidden'
    >
      <div className='border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap'>
        
        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }} 
          className='text-[17vw] leading-none -mb-[1vw] pt-8 uppercase font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300'
        >
          html css javascript reactjs 
        </motion.h1>

        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }} 
          className='text-[17vw] leading-none -mb-[1vw] pt-8 uppercase font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300'
        >
          html css javascript reactjs
        </motion.h1>

      </div>
    </div>
  )
}

export default Marquee

