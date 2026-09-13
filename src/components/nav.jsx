import React from 'react';
import logo from '../assets/logo-text.png'

const nav = () => {
    return (

            <div className="container mx-auto
            ">
      <div className="flex justify-between md:justify-evenly items-center gap-3 bg-white text-black w-full h-16 px-4 py-3 top-0 shadow-md sticky z-50">
        
        <div className="md:hidden text-3xl">
          ☰
        </div>

        <div className="flex-1 flex justify-center md:justify-start md:flex-none">
          <img src={logo} alt="img" className="h-10" />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-10 justify-evenly items-center text-2xl">
            <li className="text-pink-600">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-2 md:gap-7">
          <button className="btn btn-active btn-accent text-sm md:text-2xl text-black bg-gray-400 border-0 px-2 md:px-4">
            Sign In
          </button>
          <button className="btn btn-active btn-accent bg-pink-700 border-0 text-sm md:text-2xl text-white px-2 md:px-4">
            Sign Up
          </button>
        </div>

      </div>
    </div>
      
    );
};

export default nav;