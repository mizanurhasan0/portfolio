import React from "react";

export default function Btn({ child, cStyle, onClick = () => {} }) {
  return (
    <button
      className={`rounded-[0.7rem] 
    px-5 py-1 transition-all ${cStyle}`}
      onClick={onClick}
    >
      {child}
    </button>
  );
}
