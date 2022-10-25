import React from "react";
import Profile from "../../Components/Profile/Profile";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";

export default function InfoWrapper() {
  return (
    <div
      className="px-5 md:container md:flex py-10 
    space-y-10 md:space-y-0 md:space-x-10 "
    >
      <div
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Profile />
      </div>
      <div
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
