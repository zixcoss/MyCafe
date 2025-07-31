import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import MenuPage from "./MenuPage";
import ScrollContext from "../utils/ScrollContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {isScroll} = useContext(ScrollContext);

  const openNavbar = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-100 p-2 px-4 bg-white/50 backdrop-blur-sm drop-shadow-md">
      <div
        className={`flex justify-between items-center w-full mx-auto
        md:flex-col md:w-[90%] md:py-4 md:gap-8
        ${isScroll ? "xl:flex-row" : ""}`}
      >
        <Logo />
        <Hamburger isOpen={isOpen} openNavbar={openNavbar} />
        <MenuPage isOpen={isOpen} />
      </div>
    </header>
  );
}

export default Navbar;
