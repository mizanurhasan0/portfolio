import React from "react";
import Btn from "../Shares/Btn";
import { ProjectList } from "../Shares/StaticData";

export default function Projects() {
  return (
    <div className="text-white py-10">
      <h1 className="border-b-2 text-[1.875rem] font-Audiowide mb-5">
        My Project
      </h1>

      <div className="grid grid-cols-2 2xl:grid-cols-3 gap-5">
        {ProjectList.map((project, index) => (
          <div
            key={index}
            className="TBGradient space-y-5 pb-5 shadow-2xl  rounded-b-xl "
          >
            <img src={project.img} alt="" />

            <div className="space-y-2 font-Silkscreen px-2">
              <h2 className="font-Silkscreen">{project.name}</h2>
              <p className="font-Roboto text-gray-400">
                Click on the detail button to explore ore
              </p>
              <Btn child={"Details"} cStyle="bg-gray-600 text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
