import React, { useEffect } from "react";
import MenuCard from "../components/MenuCard";

const About = () => {
  useEffect(()=>{
    document.title = "About | MyCafe";
  },[]);

  return (
    <div className="my-5 font-roboto animate-fade">
      <h1 className="text-3xl font-bold text-center">
        <i>About</i>
      </h1>
      <div className="grid grid-cols-1 gap-5 mt-10
        lg:grid-cols-2 xl:w-[80%] xl:mx-auto">
        <MenuCard
          text={"Our Story"}
          image={
            "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          linkTo={"/history"}
          className={"h-80"}
        />
        <MenuCard
          text={"Press"}
          image={
            "https://images.unsplash.com/photo-1599727076124-e1c82d722dda?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          linkTo={"/hospitality"}
          className={"h-80"}
        />
        <MenuCard
          text={"Our Mission And Values"}
          image={
            "https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          linkTo={"/mission"}
          className={"h-80"}
        />
        <MenuCard
          text={"Contact Us"}
          image={
            "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?q=80&w=963&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          linkTo={"/contact"}
          className={"h-80"}
        />
        <MenuCard
          text={"FAQs"}
          image={
            "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          linkTo={"/faqs"}
          className={"h-80"}
        />
      </div>
    </div>
  );
};

export default About;
