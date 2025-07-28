import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-[90%] mx-auto max-sm:hidden">
      <hr className="border-1 rounded-md" />
      <div className="flex justify-between items-center py-5 mx-2">
        <div className="flex gap-3 w-fit">
          <FaFacebook size={25} />
          <RiInstagramFill size={25} />
          <FaSquareXTwitter size={25} />
        </div>
        <div>
          <label htmlFor="subscriber" className="block mb-1 font-roboto font-bold">SUBSCRIBER</label>
          <div className="flex">
            <input
              type="email"
              id="subscriber"
              name="subscriber"
              placeholder="email"
              className="px-1 border-1 rounded-l-xs text-sm/6 font-medium focus:outline-none"
            />
            <button className="p-1 px-2 rounded-r-xs text-xs font-roboto bg-black text-white
              cursor-pointer hover:bg-[#262626] transition-all duration-200">
              SUMMIT
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
