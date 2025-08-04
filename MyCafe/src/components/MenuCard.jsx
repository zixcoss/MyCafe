import React, { useContext } from "react";
import { Link } from "react-router";
import ScrollContext from "../utils/ScrollContext";

const MenuCard = ({ text, image, linkTo, className }) => {
  const { changePage } = useContext(ScrollContext);

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      <Link to={linkTo} onClick={changePage}>
        <i
          className="absolute z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          text-white text-4xl text-shadow-lg/20"
        >
          {text}
        </i>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={`w-full h-full
          bg-center bg-cover group-hover:scale-125 bg-no-repeat
          transition-transform duration-300`}
        ></div>
      </Link>
    </div>
  );
};

export default MenuCard;
