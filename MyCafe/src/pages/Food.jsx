import React from "react";
import FoodCard from "../components/FoodCard";


const Food = () => {
  return (
    <div className="mt-10">
      <p className="text-center
      md:w-[80%] md:mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem ullam
        sint itaque ad debitis ut, corrupti doloribus ipsum odit.
      </p>
      <h1 className="mt-10 text-3xl font-bold text-center">FOOD</h1>
      <div className="mt-8">
        <FoodCard />
      </div>
    </div>
  );
};

export default Food;
