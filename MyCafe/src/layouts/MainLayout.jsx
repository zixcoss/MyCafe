import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ScrollContext from "../utils/ScrollContext";

function MainLayout() {

  const [isScroll,setIsScroll] = useState(false);

  const changePage = () => {
    setIsOpen(false);
    if (isScroll) {
      console.log("hello world");
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{isScroll,changePage}}>
      <Navbar />
      <main className="w-[90%] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </ScrollContext.Provider>
  );
}

export default MainLayout;
