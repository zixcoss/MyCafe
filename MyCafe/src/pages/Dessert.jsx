import React from 'react'
import Desserts from '../utils/Desserts';
import FoodCard from "../components/FoodCard";

const Dessert = () => {
  return (
    <div className="mt-10 animate-fade">
      <p
        className="text-center
      md:w-[80%] md:mx-auto"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem ullam
        sint itaque ad debitis ut, corrupti doloribus ipsum odit.
      </p>
      <h1 className="mt-10 text-3xl font-bold text-center">DESSERT</h1>
      <div className="grid grid-cols-1 gap-6 mt-8 lg:w-[80%] lg:mx-auto
        md:grid-cols-2 xl:grid-cols-3">
        {Desserts.map((d) => {
          return (
            <FoodCard
              key={d.title}
              title={d.title}
              image={d.image}
              ingredient={d.ingredient}
              warning={d.warning}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Dessert