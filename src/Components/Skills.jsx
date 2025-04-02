import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl  !py-15 !px-30'>
      <h1 className='text-[7vw] tracking-tight font-["Oswald"] font-semibold'>Skills</h1>
      <hr className='!mt-15' />
      <div className='skills'>
        <div className='!mt-5'>
          <h1 className='text-2xl font-["Boldonse"]'>HTML</h1>
          <p className='text-xl font-["Oswald"]'>HTML (Hypertext Markup Language) is a text-based approach to describing how content contained within an HTML file is structured.</p>
        </div>
        <div className='!mt-4'>
          <h1 className='text-2xl font-["Boldonse"]'>CSS</h1>
          <p className='text-xl font-["Oswald"]'>CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed. </p>
        </div>
        <div className='!mt-4'>
          <h1 className='text-2xl font-["Boldonse"]'>JAVASCRIPT</h1>
          <p className='text-xl font-["Oswald"]'>JavaScript is a scripting or programming language that allows you to implement complex features on web pages.</p>
        </div>
        <div className='!mt-4'>
          <h1 className='text-2xl font-["Boldonse"]'>REACT JS</h1>
          <p className='text-xl font-["Oswald"]'>React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.</p>
        </div>
        <div className='!mt-4'>
          <h1 className='text-2xl font-["Boldonse"]'>C/C++</h1>
          <p className='text-xl font-["Oswald"]'>C is a structural or procedural programming language that was used for system applications and low-level programming applications. Whereas C++ is an object-oriented programming language having some additional features like Encapsulation, Data Hiding, Data Abstraction, Inheritance, Polymorphism, etc.
          </p>
        </div>
        <div className='!mt-4'>
          <h1 className='text-2xl font-["Boldonse"]'>PYTHON</h1>
          <p className='text-xl font-["Oswald"]'>Python is a programming language that lets you work quickly and integrate systems more effectively.</p>
        </div>
        <div className='!mt-4'>
          <h1 className='text-2xl font-["Boldonse"]'>COMPUTER NETWORK</h1>
          <p className='text-xl font-["Oswald"]'>A computer network is a collection of interconnected computers and devices that share resources and information using common communication protocols over digital connections. </p>
        </div>
       
      </div>
      
      
    </div>
  )
}

export default Skills
