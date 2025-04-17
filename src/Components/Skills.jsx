/*import React from 'react'

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

export default Skills*/
import React from 'react';

const Skills = () => {
  const skillsData = [
    { title: "HTML", description: "HTML (Hypertext Markup Language) is a text-based approach to describing how content contained within an HTML file is structured." },
    { title: "CSS", description: "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed." },
    { title: "JavaScript", description: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages." },
    { title: "React JS", description: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript." },
    { title: "C / C++", description: "C is a structural programming language used for system applications, while C++ is an object-oriented language with features like Encapsulation and Inheritance." },
    { title: "Python", description: "Python is a high-level programming language that lets you work quickly and integrate systems more effectively." },
    { title: "Computer Networks", description: "A computer network is a collection of interconnected computers and devices that share resources and information over digital connections." },
  ];

  return (
    <div id="Skills" className="w-full bg-gradient-to-r from-[#CDEA68] via-green-300 to-[#CDEA68] rounded-tl-3xl rounded-tr-3xl px-6 md:px-20 py-16 shadow-2xl">
      {/* Heading */}
      <h1 className="text-[8vw] md:text-[5vw] font-['Oswald'] font-bold tracking-tight text-center md:text-left text-zinc-900">
        Skills
      </h1>

      <hr className="my-8 border-zinc-700" />

      {/* Skills List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillsData.map((skill, index) => (
          <div key={index} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 font-['Oswald']">
              {skill.title}
            </h2>
            <p className="text-md md:text-lg text-zinc-700 leading-relaxed font-['Oswald']">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

