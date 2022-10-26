import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { projectLogo } from "../../../../../Assets/Index";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import MenuHeader from "./MenuHeader";

export default function Header() {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b-2 py-2 shadow-md">
      <div
        className="font-Lato text-[1rem] uppercase font-[600]
        flex md:justify-between justify-center items-center px-10 transition-all duration-700"
      >
        <img src={projectLogo} alt="" className="w-[19rem] h-[5.8rem]" />
        <div className="hidden md:block">
          <MenuHeader
            ulStyle={`md:flex space-x-1 py-4 flex-wrap`}
            linkStyle={`flex items-center space-x-1`}
          />
        </div>
        <div className="hidden md:block">
          <NavLink
            to="#"
            className="flex items-center space-x-1 hover:text-gray-400 "
          >
            <BsPerson className="w-5 h-5" />
            <span className="">Login/Register</span>
          </NavLink>
        </div>
      </div>
      <AiOutlineMenuUnfold className="md:hidden block absolute left-8 h-10 w-8 text-red-500 " />
      {open ? (
        <div className="absolute bg-gray-600/50 h-screen w-full left-0 top-0 z-10"></div>
      ) : (
        ""
      )}
    </div>
  );
}
