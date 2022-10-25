import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { logo } from "../../Assets/Index";
import { HiMenuAlt3, HiOutlineDownload } from "react-icons/hi";
import { SlClose } from "react-icons/sl";
import Btn from "../Shares/Btn";
import OutSideClick from "../../Utils/OutSideClick";
import { MenuList } from "../Shares/StaticData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  let refContent = useRef(false);
  OutSideClick(refContent, setOpen);

  const [display, setDisplay] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/project")) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
    return () => {
      setDisplay(false);
    };
  }, [location]);

  return (
    <div
      ref={refContent}
      className={`${
        display
          ? "TBGradient fixed top-0 left-0 w-full shadow-xl text-gray-200 hover:text-white  text-2xl z-50"
          : "hidden"
      } `}
    >
      <div
        className="py-4 TBGradient px-6 md:px-0 md:container 
      md:flex justify-between  font-Audiowide "
      >
        {/* Logo */}
        <div className="flex items-center text-4xl space-x-2 ">
          <img src={logo} alt="" className="h-10 " />
          <span>MHKhan</span>
        </div>
        {/* End Logo */}
        {/* Icon */}
        <div
          className="md:hidden absolute top-6 right-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <SlClose /> : <HiMenuAlt3 />}
        </div>
        {/* End Icon */}
        {/* Menu */}
        <ul
          className={`md:flex items-center md:space-x-5  absolute 
          md:static w-full md:w-auto bg-black md:bg-transparent left-0 
          transition-all duration-1000 ease-in  z-[-1] md:z-auto
          pl-5
          ${open ? "top-[4.7rem] pb-10" : "top-[-300px]"}`}
        >
          {MenuList.map((menu, key) => (
            <li key={key} className="ml-4 capitalize  my-7 md:my-0">
              <NavLink to={menu.path}>{menu.name}</NavLink>
            </li>
          ))}
          <Btn
            child={
              <span className="flex items-center ">
                <HiOutlineDownload className="mr-2" /> Resume
              </span>
            }
            cStyle={"BtnGradient text-black "}
          />
        </ul>

        {/* End menu */}
      </div>
    </div>
  );
}
