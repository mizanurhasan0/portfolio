import React from "react";
import Profile from "../Components/Profile/Profile";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";

export default function InfoWrapper() {
  return (
    <div
      className="px-5 md:container md:flex py-10 
    space-y-10 md:space-y-0 md:space-x-10 "
    >
      <div>
        <Profile />
      </div>
      <div>
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
