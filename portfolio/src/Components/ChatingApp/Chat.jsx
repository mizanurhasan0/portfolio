import React, { useState } from "react";
import Input from "../Shares/Input";
import ChatBody from "./ChatBody";
import Header from "./Header";
import { AiFillCaretRight } from "react-icons/ai";
import RoomModal from "./RoomModal";

export default function Chat() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" h-screen text-white pt-20">
      <h1 className="text-center font-Silkscreen text-2xl pt-10">
        Welcome to Private chating
      </h1>
      <div className="md:container pt-10">
        <Header setOpen={setOpen} />
        <ChatBody />
        <div className="flex items-end space-x-4 font-Courgette">
          <Input label={"Type Message..."} cStyle="w-full h-10 pl-2" />
          <AiFillCaretRight className="w-7 h-7 cursor-pointer " />
        </div>
      </div>
      {open && <RoomModal setOpen={setOpen} />}
    </div>
  );
}
