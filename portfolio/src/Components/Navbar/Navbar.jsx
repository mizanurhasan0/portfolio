import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../../Assets/Index";
import MenuList from "./MenuList";
import { HiMenuAlt3 } from "react-icons/hi";
import { SlClose } from "react-icons/sl";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="TBGradient fixed top-0 left-0 w-full shadow-xl text-gray-200 hover:text-white  text-2xl">
      <div
        className="py-4 TBGradient px-6 md:px-0 md:container 
      md:flex justify-between "
      >
        {/* Logo */}
        <div className="flex items-center text-4xl space-x-2 ">
          <img src={logo} alt="" className="h-10 " />
          <span className=" font-Monoton">MHKhan</span>
        </div>
        {/* End Logo */}
        {/* Icon */}
        <div
          className="md:hidden absolute top-6 right-6"
          onClick={() => setOpen(!open)}
        >
          {open ? <SlClose /> : <HiMenuAlt3 />}
        </div>
        {/* End Icon */}
        {/* Menu */}
        <ul
          className={`md:flex font-Audiowide absolute 
          md:static w-full md:w-auto TBGradient left-0 
          transition-all duration-1000 ease-in  md:z-auto z-[-1]
          pl-5
          ${open ? "top-20" : "top-[-300px]"}`}
        >
          {MenuList.map((menu, key) => (
            <li key={key} className="ml-4 capitalize  my-7 md:my-0">
              <NavLink to={menu.path}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>

        {/* End menu */}
      </div>
    </div>
  );
}

{
  /* <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between 
      bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 pb-7">
          Logo
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`text-3xl absolute right-8 top-6 cursor-pointer md:hidden`}
        >
          X
        </div>
        <ul
          className={`md:flex md:items-center 
          md:pb-0 pb-12 absolute md:static
        bg-white md:z-auto z-[-1] 
        left-0 w-full md:w-auto md:pl-0 pl-9 
        transition-all duration-500 ease-in ${
          open ? "top-24" : "top-[-500px]"
        }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl cursor-pointer md:my-0 my-7"
            >
              <a
                className="text-gray-800 hover:text-gray-400 duration-500"
                href={link.link}
              />
              {link.name}
            </li>
          ))}
          <button className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-500 duration-500">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
} */
}
