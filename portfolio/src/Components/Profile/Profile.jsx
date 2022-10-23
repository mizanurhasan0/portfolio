import React from "react";
import { me } from "../../Assets/Index";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { ContactInfo } from "../Shares/StaticData";

export default function Profile() {
  return (
    <div className="sticky top-32 text-white font-Audiowide ">
      <div className="relative space-y-5 flex flex-col items-center  border-2 rounded-xl shadow-2xl px-10 pb-10 ">
        <div className="absolute w-4 h-4 bg-green-600 rounded-full right-5 top-5 border-b-2 border-gray-300">
          <span className="animate-ping absolute  h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        </div>
        <div className="p-1 Gradient rounded-full">
          <img
            src={me}
            alt=""
            className="w-60 h-60 rounded-full object-cover "
          />
        </div>
        <div className="flex items-center space-x-2 ">
          <span className="text-[1.25rem] font-[500]">Mizanur Hasan </span>
          <span className="font-Silkscreen text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Aviable for Hire
          </span>
        </div>
        <p>
          Hi there! i'm <span className="text-blue-400">MERN stack</span>{" "}
          developer
        </p>
        <div className="bg-white h-[.10rem] w-full"></div>

        <div className="flex items-center space-x-6  text-2xl ">
          <AiFillGithub className="hover:text-blue-400 cursor-pointer" />
          <AiOutlineInstagram className="hover:text-pink-400 cursor-pointer" />
          <AiFillTwitterCircle className="hover:text-blue-400 cursor-pointer" />
        </div>
        <div className="bg-white h-[.10rem] w-full"></div>
        <div className="font-Silkscreen space-y-2">
          <h2 className="font-Audiowide text-xl">Contact me</h2>
          {ContactInfo.map((info, index) => (
            <p key={index} className="flex items-center sm:space-x-2">
              <span className="text-pink-500 hidden sm:inline-block">
                {info.icon}
              </span>
              <span>{info.name}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
