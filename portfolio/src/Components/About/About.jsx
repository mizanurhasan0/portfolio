import React from "react";

export default function About() {
  return (
    <div
      data-aos="zoom-in"
      className=" bgSubGradient text-white py-10 shadow-xl"
    >
      <div className="px-4 md:px-0 md:container">
        <h1 className="text-[1.875rem] font-Audiowide mb-5 font-[500]">
          About Me!
        </h1>
        <p className="md:text-justify font-Courgette text-gray-400">
          Having more than 1 years of professional experience in responsive
          Frontend (React JS – React hooks, field validation, error handling)
          and Backend (Node JS- JWT, authentication, routing, image processing,
          file uploading, json API)
        </p>
      </div>
    </div>
  );
}
