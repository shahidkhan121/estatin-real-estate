import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io"

import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className="bg-black-light p-5 font-urbanist">
      {/* nav bar */}
      <nav className="flex justify-between text-center items-center max-w-[93%] m-auto">
        {/* logo */}
        <div className="logo">
          <img src="/img/logo.png" alt="logo img" width={120} />
        </div>
        {/* Links */}
        <div className="text-white text-base flex gap-12 800px:hidden">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/AboutUs">
            <p>About us</p>
          </NavLink>

          <NavLink to="/properties">
            <p>Properties</p>
          </NavLink>

          <NavLink to="/services">
            <p>Services</p>
          </NavLink>
        </div>
     
        <div className="flex items-center">
        <NavLink to="Contact">
        <p className="text-white 800px:hidden">Contact Us</p>
        </NavLink>
        <div className=' text-4xl ml-2 w-5 text-white cursor-pointer  hidden 800px:block' onClick={() => setVisible(true)}><IoIosMenu /></div>
        </div>
         
       

      </nav>

      {/* side bar icon */}
      {/* sidebar */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden h-full  shadow-xl bg-black-light transition-all ${visible ? 'w-1/2 900px:w-1/2 z-10' : 'w-0 '} font-urbanist `}>
        <div className="w-[90%] m-auto ">
          {/* logo */}
          <div className="flex justify-between items-center px-5 py-7 ">
            <img src="img/logo.png" alt="img" className='w-28' />

            <div onClick={() => setVisible(false)} className='text-2xl  text-white '>
              <RxCross2 />
            </div>

          </div>

          {/* input field */}
          <div className="border border-2 w-[90%] m-auto mt-7 rounded-md flex justify-between p-3" style={{ borderColor: '#83C0BC' }}>
            <input type="text" placeholder='Search For items...' className='outline-none text-white  bg-black-light' />
            <div className='text-2xl text-white 600px:hidden'>
              <CiSearch />
            </div>
          </div>
          <div className="sideBar flex flex-col w-[90%] m-auto mt-10 gap-6 font-bold font-lato text-white">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/aboutus'>About US</NavLink>
            <NavLink to='/properties'>Properties</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/contact'>Contact Us</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
