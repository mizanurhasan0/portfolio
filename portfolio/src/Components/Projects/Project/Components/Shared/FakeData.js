import React from "react";
import { IoIosHome, IoIosBasket, IoMdContacts } from "react-icons/io";
import { TiInfoLargeOutline } from "react-icons/ti";
const MenuList = [
  { name: "Home", path: "/", icon: <IoIosHome /> },
  { name: "Shop", path: "/shop", icon: <IoIosBasket /> },
  { name: "about us", path: "/about", icon: <TiInfoLargeOutline /> },
  { name: "contact us", path: "/contact", icon: <IoMdContacts /> },
];

const Category = [
  {
    name: "Offer & packages",
    id: "1",
  },
  {
    name: "Baking",
    id: "2",
  },
  {
    name: "Cooking",
    id: "3",
  },
  {
    name: "Baby care",
    id: "4",
  },
  {
    name: "Food",
    id: "5",
  },
  {
    name: "Home & Cleaning",
    id: "6",
  },
  {
    name: "Personal Care",
    id: "7",
  },
];
export { MenuList, Category };
