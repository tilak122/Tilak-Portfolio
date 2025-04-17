import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full fixed z-[999] flex items-center justify-between px-6 md:px-20 py-5 shadow-md'>
      <div>
        <Link to='Home' smooth={true} duration={300} className='text-3xl font-semibold font-["Boldonse"] cursor-pointer  text-gray-700'>
          Tilak Asthana
        </Link>
      </div>
      
      {/* Desktop Menu */}
      <div className='hidden md:flex gap-5 font-["Boldonse"] uppercase text-md'>
        <Link to='projects' smooth={true} duration={500} className='hover:bg-gray-800 hover:text-white hover:border-2 px-4 py-2 rounded cursor-pointer  text-gray-700'>Projects</Link>
        <Link to='Skills' smooth={true} duration={500} className='hover:bg-gray-800 hover:text-white hover:border-2 px-4 py-2 rounded cursor-pointer  text-gray-700'>Skills</Link>
        <Link to='Contact' smooth={true} duration={500} className='hover:bg-gray-800 hover:text-white hover:border-2 px-4 py-2 rounded cursor-pointer  text-gray-700'>Contact</Link>
      </div>
      
      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-16 right-6 w-48 bg-white shadow-lg rounded-lg flex flex-col items-center gap-4 py-4 md:hidden'>
          <Link to='projects' smooth={true} duration={500} onClick={() => setIsOpen(false)} className='hover:bg-gray-800 hover:text-white hover:border-2 px-4 py-2 rounded cursor-pointer text-gray-700'>Projects</Link>
          <Link to='Skills' smooth={true} duration={500} onClick={() => setIsOpen(false)} className='hover:bg-gray-800 hover:text-white hover:border-2 px-4 py-2 rounded cursor-pointer  text-gray-700'>Skills</Link>
          <Link to='Contact' smooth={true} duration={500} onClick={() => setIsOpen(false)} className='hover:bg-gray-800 hover:text-white hover:border-2 px-4 py-2 rounded cursor-pointer  text-gray-700'>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
