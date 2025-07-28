import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";
import link from "../utils/Link";

const MenuPage = ({ isOpen, changePage }) => {
  return (
    <>
      <nav
        className={`absolute w-full h-screen ${
          isOpen ? "top-[0px]" : "-top-[100vh]"
        } left-0 pt-10 pb-3 bg-white overflow-auto
          transition-[top] ease-in-out duration-300 md:hidden`}
      >
        <ul
          className="flex flex-col gap-5 font-roboto text-3xl text-center"
        >
          {link.map((page) => (
            <li className="my-auto" key={page.page}>
              <NavLink
                to={page.path}
                onClick={changePage}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#555]"
                    : "text-black hover:text-[#555] duration-200"
                }
              >
                {page.page}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex justify-center space-x-3 pt-10 md:hidden">
          <FaFacebook size={30} />
          <RiInstagramFill size={30} />
          <FaSquareXTwitter size={30} />
        </div>
      </nav>

      <nav className="max-md:hidden w-fit">
        <ul
          className="flex justify-center flex-wrap gap-5 font-roboto text-2xl
          lg:text-base"
        >
          {link.map((page) => (
            <li className="my-auto" key={page.page}>
              <NavLink
                to={page.path}
                onClick={changePage}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#555]"
                    : "text-black hover:text-[#555] duration-200"
                }
              >
                {page.page}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MenuPage;
