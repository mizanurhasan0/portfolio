import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { project1, project2, project3, project4 } from "../../Assets/Index";

const MenuList = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Chat", path: "/chating" },
  { name: "Todos", path: "/todo" },
];

const ContactInfo = [
  { icon: <AiOutlineMail />, name: "eng.mizanur.hasan@gmail.com" },
  { icon: <AiOutlinePhone />, name: "+880 1818-674298" },
  { icon: <GoLocation />, name: "Mirpur-2, Dhaka-1216" },
];

const WrokSkills = [
  {
    title: "Expertise",
    desc: "Tailwind, JavaScript, ES6, React Js, MongoDB, Node Js, Github,Postman",
  },
  {
    title: "Familiar",
    desc: "Web3, Solidity",
  },
  {
    title: "Technologies",
    desc: "Github, Figma",
  },
];

const ProjectList = [
  { id: 1, name: "Web3 project 1", img: project1 },
  { id: 2, name: "Web3 project 2", img: project2 },
  { id: 3, name: "Web3 project 3", img: project3 },
  { id: 4, name: "Web3 project 4", img: project4 },
];

const chatingData = [];
export { MenuList, ContactInfo, WrokSkills, ProjectList };
