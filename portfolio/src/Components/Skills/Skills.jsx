import React from "react";
import { WrokSkills } from "../Shares/StaticData";

export default function Skills() {
  return (
    <div className="text-white font-Audiowide ">
      <h1 className="border-b-2 text-[1.875rem] font-Audiowide mb-5 ">
        My Skills
      </h1>
      <div className="space-y-5">
        {WrokSkills.map((skill, index) => (
          <div key={index}>
            <h4 className="">{skill.title}</h4>
            <p className="font-mono text-gray-400">{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
