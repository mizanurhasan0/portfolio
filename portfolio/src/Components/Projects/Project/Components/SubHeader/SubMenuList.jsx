import React from "react";
import { Category } from "../Shared/FakeData";

export default function SubMenuList({ ulStyle, liStyle }) {
  return (
    <ul className={`${ulStyle}`}>
      {Category.map((cat) => (
        <li key={cat.id} className={`${liStyle}`}>
          {cat.name}
        </li>
      ))}
    </ul>
  );
}
