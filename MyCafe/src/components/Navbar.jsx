import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const openNavbar = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex sticky top-0 w-full p-2 bg-white/50 backdrop-blur-sm drop-shadow-md items-center">
      <div className="flex justify-between mx-2 w-full">
        <div
          className='bg-[url("https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]
        bg-cover bg-center bg-clip-text text-transparent'
        >
          <h1
            className={`font-roboto ${
              scroll ? "text-2xl" : "text-3xl"
            } font-extrabold transition-all`}
          >
            MyCaf&#233;
          </h1>
        </div>
        <button onClick={openNavbar} className="relative z-10">
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
      </div>
      <nav
        className={`absolute w-full h-screen ${
          isOpen ? "top-[0px]" : "top-[-800px]"
        } left-0 pt-10 pb-3 bg-white overflow-auto
          transition-all ease-in duration-300`}
      >
        <ul className="space-y-2 font-roboto text-3xl text-center">
          <li>ABOUT</li>
          <li>MENUS</li>
          <li>CONTACT</li>
        </ul>
        <div className="flex justify-center space-x-3 pt-10">
          <FaFacebook size={30} />
          <RiInstagramFill size={30} />
          <FaSquareXTwitter size={30} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
