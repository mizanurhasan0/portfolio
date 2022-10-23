import React from "react";
import { FiFacebook, FiYoutube, FiTwitter } from "react-icons/fi";
import { logo } from "../../Assets/Index";

export default function Footer() {
  return (
    <div className="text-white py-4 TBGradient font-Silkscreen">
      <div className="px-2 md:container flex justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="" className="w-6 h-6 " />
          <p className="text-xs">
            Copyright © 2022 - All right reserved ||{" "}
            <span className="text-blue-400 text-base">Mizanur Hasan</span>
          </p>
        </div>
        <div className="flex space-x-4">
          <FiFacebook className="cursor-pointer text-blue-500" />
          <FiYoutube className="cursor-pointer text-red-500" />
          <FiTwitter className="cursor-pointer text-blue-500" />
        </div>
      </div>
    </div>
  );
}
