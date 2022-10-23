import React from "react";
import { banner1, banner } from "../../Assets/Index";

export default function Banner() {
  return (
    <div className="py-20 text-white  ">
      <div
        className="text-center px-4 md:px-0 md:container md:flex flex-col
       items-center text-[1.25rem] font-Courgette transition-all duration-1000"
      >
        <span className="text-[1.875rem]">Hi There!!!</span>
        <h1>
          i am <span className="font-Monoton">Mizanur Hasan Khan</span>! i'm a
          MERN Stack Developer!
        </h1>
        <h4>Please Scroll Down to Know more!</h4>

        <img
          src={banner}
          alt=""
          className="animate-pulse px-6 md:px-32 py-4 transition-all duration-1000 "
        />
      </div>
    </div>
  );
}
