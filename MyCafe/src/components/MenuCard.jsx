import React, { useContext } from "react";
import { Link } from "react-router";
import ScrollContext from "../utils/ScrollContext";

const MenuCard = ({ text, image, linkTo, className }) => {
  
  const {changePage} = useContext(ScrollContext);

  return (
    <div className={`overflow-hidden ${className}`}>
      <Link to={linkTo} onClick={changePage}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={`flex justify-center items-center w-full h-full
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
