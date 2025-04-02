import React from 'react';
import {  Route, Routes, } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Contact from './Contact';
import Skills from './Skills';
import Navbar from './Navbar';
import Projects from './Projects';

const Home = () => {
  return (
    <div id='Home' className='w-full  '>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </HashRouter>
    </div>
  );
};

export default Home;
