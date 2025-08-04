import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const FoodCard = ({ title, image, ingredient, warning }) => {
  const [isOpen, setIsOpen] = useState(false);
  const changeOpen = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col h-90 relative gap-5 items-center pb-5 overflow-hidden rounded-2xl shadow-lg">
      <img src={image} alt="food" className="h-60 w-full object-cover" />
      <p className="text-lg text-center">{title}</p>
      <button
        onClick={changeOpen}
        className="w-fit underline text-blue-500 hover:text-blue-700 duration-200 cursor-pointer"
      >
        {`>> Detail <<`}
      </button>
      <div
        className={`absolute flex flex-col p-5 h-full w-full bg-linear-to-t from-black from-20% to-black/60 ${
          isOpen ? "bottom-0" : "-bottom-90"
        } transition-[bottom] ease-in-out duration-300`}
      >
        <div className="flex justify-end w-full">
          <button onClick={changeOpen}>
            <RxCross1
              size={25}
              strokeWidth={1}
              color="#ffff"
              className="cursor-pointer"
            />
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-between p-2">
          <div>
            <h1 className="text-white">INGREDIENT</h1>
            <ul className="text-white list-disc list-inside">
              {ingredient.map((i) => {
                return <li key={i}>{i}</li>;
              })}
            </ul>
          </div>
          <div>
            <h1 className="text-white underline underline-offset-2">WARNING</h1>
            <p className="text-white text-sm">{warning}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
