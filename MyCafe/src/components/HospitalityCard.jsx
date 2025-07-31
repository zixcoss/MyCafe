import React from "react";
import { Link } from "react-router";

const HospitalityCard = ({ linkTo, image, text, className }) => {
  return (
    
      <Link to={linkTo} className={`flex flex-col gap-4 group ${className}`}>
        <div className={`w-full h-[300px] overflow-hidden transition-transform duration-300 ease-in-out
            md:h-[400px] lg:h-[300px]`}>
          <img 
            src={image} 
            alt={text}
            className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <p className="grow-1 text-center text-lg">{text}</p>
      </Link>
  );
};

export default HospitalityCard;
