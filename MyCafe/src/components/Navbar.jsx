import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import MenuPage from "./MenuPage";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const openNavbar = () => setIsOpen(!isOpen);

  const changePage = () => {
    setIsOpen(false);
    if (isScroll) {
      console.log("isScroll is true.");
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 p-2 bg-white/50 backdrop-blur-sm drop-shadow-md">
      <div
        className={`flex justify-between items-center w-full mx-auto
        md:flex-col md:w-[90%] md:py-4 md:gap-8
        ${isScroll ? "xl:flex-row" : ""}`}
      >
        <Logo isScroll={isScroll} changePage={changePage}/>
        <Hamburger isOpen={isOpen} openNavbar={openNavbar} />
        <MenuPage isOpen={isOpen} changePage={changePage} />
      </div>
    </header>
  );
}

export default Navbar;
