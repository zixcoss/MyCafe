import React, { useEffect } from "react";

const Mission = () => {
  useEffect(()=>{
    document.title = "Mission | MyCafe";
  },[]);

  return (
    <div className="my-5 font-roboto space-y-5 animate-fade
      lg:w-[80%] lg:mx-auto">
      <h1 className="text-3xl text-center">OUR MISSION AND VALUES</h1>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam enim
        consequuntur aliquam animi aspernatur nihil repellendus sapiente tempora
        fugit totam vero impedit officiis id numquam ex perspiciatis, corporis,
        maxime error a! Libero excepturi possimus dolor quasi ab velit minima
        rem aliquam fugiat, doloribus esse, quisquam quia tempore maxime eveniet
        id?
      </p>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam enim
        consequuntur aliquam animi aspernatur nihil repellendus sapiente tempora
        fugit totam vero impedit officiis id numquam ex perspiciatis, corporis,
        maxime error a! Libero excepturi possimus dolor quasi ab velit minima
        rem aliquam fugiat, doloribus esse, quisquam quia tempore maxime eveniet
        id?
      </p>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam enim
        consequuntur aliquam animi aspernatur nihil repellendus sapiente tempora
        fugit totam vero impedit officiis id numquam ex perspiciatis, corporis,
        maxime error a! Libero excepturi possimus dolor quasi ab velit minima
        rem aliquam fugiat, doloribus esse, quisquam quia tempore maxime eveniet
        id?
      </p>
    </div>
  );
}

export default Mission