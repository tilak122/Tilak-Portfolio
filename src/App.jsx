import React from 'react'
import LandingPage from './Components/LandingPage'
import Home from './Components/Home'
import Marquee from './Components/Marquee'
import Skills from './Components/Skills'
import LocomotiveScroll from 'locomotive-scroll'
import Eyes from './Components/Eyes'
import Projects from './Components/Projects'
import Contact from './Components/Contact'


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 '>
      <Home/>
      <LandingPage/>
      <Marquee/>
      <Skills/>
      <Eyes/>
      <Projects/>
      <Contact/>
      
 

  

    
    </div>
  )
}

export default App
