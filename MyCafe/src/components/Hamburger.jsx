import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Hamburger = ({isOpen,openNavbar}) => {

  const generateLink = () => {}

  return (
    <button onClick={openNavbar} className="relative z-10 w-[30px] h-[30px] md:hidden">
      <RxHamburgerMenu
        className={`absolute top-0 right-0 transition-all duration-300 ${
          isOpen
            ? "opacity-0 rotate-90 scale-75"
            : "opacity-100 rotate-0 scale-100"
        }`}
        size={30}
        strokeWidth={1}
        color="#555"
      />
      <RxCross1
        className={`absolute top-0 right-0 transition-all duration-300 ${
          isOpen
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-75"
        }`}
        size={30}
        strokeWidth={1}
        color="#555"
      />
    </button>
  );
};

export default Hamburger;
