import React from "react";
import FoodCard from "../components/FoodCard";
import Foods from "../utils/Foods";

const Food = () => {
  return (
    <div className="mt-10 animate-fade">
      <p
        className="text-center
      md:w-[80%] md:mx-auto"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem ullam
        sint itaque ad debitis ut, corrupti doloribus ipsum odit.
      </p>
      <h1 className="mt-10 text-3xl font-bold text-center">FOOD</h1>
      <div className="grid grid-cols-1 gap-6 mt-8 lg:w-[80%] lg:mx-auto
        md:grid-cols-2 xl:grid-cols-3">
        {Foods.map((f) => {
          return (
            <FoodCard
              key={f.title}
              title={f.title}
              image={f.image}
              ingredient={f.ingredient}
              warning={f.warning}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Food;
