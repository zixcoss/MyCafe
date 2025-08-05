import React, { useEffect } from "react";

const History = () => {
  useEffect(() => {
    document.title = "Story | MyCafe";
  }, []);

  return (
    <div
      className="my-5 font-roboto space-y-5 animate-fade
      lg:w-[80%] lg:mx-auto"
    >
      <h1 className="text-4xl font-bold text-center">
        <i>Our Story</i>
      </h1>
      <h1 className="text-3xl text-center">History</h1>
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
      <img
        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="MyCafe"
        className="object-center w-150 mx-auto"
      />
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
};

export default History;
