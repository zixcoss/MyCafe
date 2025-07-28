import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="w-[90%] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
