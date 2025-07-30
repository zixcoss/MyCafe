import React from "react";
import { Link } from "react-router";

const MenuCard = ({ text, image, linkTo, className }) => {
  return (
    <div className={`overflow-hidden animate-scrolling ${className}`}>
      <Link to={linkTo}>
        <div
          className={`flex justify-center items-center w-full h-full
      bg-[url(${image})]
      bg-center bg-cover hover:scale-125 bg-no-repeat
      transition-[scale] duration-300`}
        >
          <i className="text-white text-4xl text-shadow-lg/20">{text}</i>
        </div>
      </Link>
    </div>
  );
};

export default MenuCard;
