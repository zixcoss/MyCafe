import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full p-2 bg-white backdrop-blur-md drop-shadow-md ">
      <div className="flex justify-between">
        <div
          className='bg-[url("https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]
        bg-cover bg-no bg-clip-text text-transparent'
        >
          <h1 className="font-mono text-3xl font-extrabold ">MyCaf&#233;</h1>
        </div>
        <nav className="hidden"></nav>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <RxHamburgerMenu size={30} strokeWidth={1} color="#8C8C8C" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
