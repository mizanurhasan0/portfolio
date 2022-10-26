import React from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "../Shared/FakeData";

export default function MenuHeader({ ulStyle, linkStyle }) {
  return (
    <ul className={`${ulStyle}`}>
      {MenuList.map((list, key) => (
        <li className="py-2 px-2" key={key}>
          <NavLink to={"#"} className={`${linkStyle}`}>
            {list.icon}
            <span className="hover:underline-offset-8 hover:underline ">
              {list.name}
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
