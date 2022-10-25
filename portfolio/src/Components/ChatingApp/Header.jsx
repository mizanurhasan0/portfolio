import React from "react";
import { avater } from "../../Assets/Index";
import Btn from "../Shares/Btn";

export default function Header({ setOpen }) {
  return (
    <div className="bg-white text-gray-500 font-Silkscreen rounded-md">
      <div className="flex justify-between items-center px-10 py-2">
        <div className="flex items-center space-x-3">
          <img src={avater} alt="" className="w-10 h-10 rounded-full" />
          <p>Username</p>
        </div>
        <div>
          <Btn
            onClick={() => setOpen(true)}
            child={"New"}
            cStyle="bg-gray-800 px-10 text-white"
          />
        </div>
      </div>
    </div>
  );
}
