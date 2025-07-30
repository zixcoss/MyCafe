import React from "react";
import { Link } from "react-router";
import MenuCard from "../components/MenuCard";

const Home = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 grid-rows-5 gap-3 my-5 font-roboto
        md:grid-rows-6
        lg:grid-cols-2 lg:grid-rows-4 lg:gap-10 lg:h-[1500px]
        "
      >
        <MenuCard
          text={"Reservations"}
          image={
            "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?q=80&w=963&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className={"md:row-span-2"}
        />
        <MenuCard
          text={"Menus"}
          linkTo={"menu"}
          image={
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <MenuCard
          text={"On Hospitality"}
          image={
            "https://images.unsplash.com/photo-1542181961-9590d0c79dab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <div className="w-[90%] m-auto p-5 text-center
            lg:row-span-2 animate-scrolling scroll-fade">
          <div className="flex flex-col">
            <h1 className="pb-4 text-3xl">VISIT US</h1>
            <p className="underline pb-4">
              123/45 Sukjai Village, Ramkhamhaeng Rd., Hua Mak, Bang Kapi,
              Bangkok 10240, Thailand
            </p>
            <div className="pb-4">
              <p>9AM - 2PM</p>
              <p>5PM - 10PM</p>
              <p>MONDAY - SATURDAY</p>
            </div>
            <p>CLOSED TUESDAYS AND HOLIDAY</p>
          </div>
        </div>
        <MenuCard
          text={"Catering & Events"}
          image={
            "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className={"lg:row-span-2"}
        />
      </div>
      <div className="w-[90%] m-auto pt-5 text-center animate-scrolling">
          <h1 className="pb-4 text-xl">HEADER</h1>
          <p className="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            voluptate quis distinctio nobis aliquid? Dolorem distinctio sed
            nihil, voluptates culpa ipsam similique eaque ut amet voluptatem
            quos nisi quibusdam blanditiis libero, recusandae, necessitatibus
            repudiandae odit omnis veniam ab. Esse quos adipisci sunt sint atque
            natus tempora aperiam numquam assumenda vel!
          </p>
        </div>
    </>
  );
};

export default Home;
