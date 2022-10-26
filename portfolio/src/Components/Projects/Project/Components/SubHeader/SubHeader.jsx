import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdArrowDropright } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import Input from "../../../../Shares/Input";
import SubMenuList from "./SubMenuList";

export default function SubHeader() {
  return (
    <div className="flex items-center justify-between md:space-x-5 px-10 h-[3.313rem] shadow-md py-1">
      <div className="relative h-full group cursor-pointer">
        <div
          className="hidden md:flex flex-row items-center md:space-x-2 bg-red-500 px-4
   text-white font-[600] h-full "
        >
          <HiOutlineMenuAlt2 className="text-2xl" />
          <span className="whitespace-nowrap">Browse category</span>
          <IoMdArrowDropright className=" text-xl group-hover:rotate-90 transition-all duration-700" />
        </div>
        {/* SubMenu List components */}
        <SubMenuList
          ulStyle={`top-[-400px]  group-hover:top-14 z-[-1] transition-all duration-1000 
    absolute bg-white w-full shadow-md pb-`}
          liStyle={`border-b-2 px-5 py-2 font-[600] hover:shadow-md cursor-pointer`}
        />
      </div>
      <div className="flex items-center  w-full h-full">
        <Input
          label={"Search for products"}
          cStyle="border-2 w-full h-full text-black px-4"
        />
        <div
          className="font-bold  bg-red-500 h-full
   text-white px-3 flex items-center rounded-md"
        >
          <BiSearch className="w-6 h-6" />
        </div>
      </div>
      <div className="hidden md:block h-full border-red-500 border-2">
        <div className="relative px-6 border-2 h-full flex items-center">
          <GiShoppingCart className="w-6 h-6 text-red-500" />
          <span
            className="absolute top-0 right-1 bg-red-500 rounded-full w-5 h-5 
      flex items-center justify-center text-white "
          >
            1
          </span>
        </div>
      </div>
    </div>
  );
}
