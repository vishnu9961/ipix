
import React, { useState } from 'react';

import logo from '../assets/Frame.png';
import { CiSearch } from 'react-icons/ci';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
          <img className='w-40' src={logo} alt="Logo" />
          
        
          <ul className='hidden md:flex gap-7 text-white'>
            <a className='cursor-pointer text-black' href="#Header">Home</a>
            <a className='cursor-pointer text-black' href="#About">About</a>
            <a className='cursor-pointer font-bold text-black' href="#Services">Services</a>
            <a className='cursor-pointer text-black' href="#Careers">Careers</a>
            <a className='cursor-pointer font-bold text-black' href="#Knowledge">Knowledge</a>
          </ul>

       
          <CiSearch className='text-black text-2xl' />

        
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                English
                <IoMdArrowDropdown />
              </button>
            </div>
          </div>

         
          <button className='hidden md:block text-black rounded-md px-8 py-2 border border-gray-300 bg-yellow-200'>Contact Us</button>

         
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden text-black text-2xl'
          >
            &#9776;
          </button>
        </div>
      </div>

     
      {menuOpen && (
        <div className='md:hidden bg-gray-900 text-white py-4 px-6'>
          <ul className='space-y-4'>
            <li><a className='cursor-pointer' href="#Header">Home</a></li>
            <li><a className='cursor-pointer' href="#About">About</a></li>
            <li><a className='cursor-pointer font-bold' href="#Services">Services</a></li>
            <li><a className='cursor-pointer' href="#Careers">Careers</a></li>
            <li><a className='cursor-pointer font-bold' href="#Knowledge">Knowledge</a></li>
          </ul>

          <div className='flex items-center justify-between mt-4'>
            <button className='text-black rounded-md px-8 py-2 border border-gray-300 bg-yellow-200'>Contact Us</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
