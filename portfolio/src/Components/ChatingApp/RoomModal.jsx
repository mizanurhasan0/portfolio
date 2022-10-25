import React from "react";
import Btn from "../Shares/Btn";
import Input from "../Shares/Input";
import { AiFillCloseCircle } from "react-icons/ai";

export default function RoomModal({ setOpen }) {
  return (
    <div className="font-Audiowide pt-20 absolute top-0 h-screen left-0 bg-gray-100/50 w-full">
      <div className=" flex  items-center justify-center h-full">
        <div className=" relative bg-gray-700 flex flex-col p-10 space-y-5 rounded-lg">
          <AiFillCloseCircle
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 cursor-pointer hover:text-blue-400 "
          />
          <Input label={"username..."} cStyle="capitalize" />
          <Input label={"Joining key..."} />
          <Btn child={"Join"} cStyle="px-10 text-white" />
        </div>
      </div>
    </div>
  );
}
