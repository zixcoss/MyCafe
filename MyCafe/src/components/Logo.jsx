import React from "react";
import { Link } from "react-router";

const Logo = ({ isScroll, changePage }) => {
  return (
    <div
      className='bg-[url("https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]
        bg-cover bg-center bg-clip-text text-transparent w-fit'
    >
      <Link
        to="/"
        onClick={changePage}
        className={`font-roboto ${
          isScroll ? "text-2xl md:text-5xl" : "text-3xl md:text-8xl"
        } font-extrabold transition-all mx-auto`}
      >
        MyCaf&#233;
      </Link>
    </div>
  );
};

export default Logo;
