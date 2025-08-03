import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const FoodCard = ({ title, image, ingredient }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openDetail = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col relative gap-5 items-center pb-5 overflow-hidden rounded-2xl shadow-2xl">
      <img
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="food"
        className="object-cover"
      />
      <p className="text-lg text-center">salad</p>
      <button
        onClick={openDetail}
        className="border-1 w-fit py-1 px-3 rounded-sm hover:border-green-500"
      >
        detail
      </button>
      <div className="absolute flex flex-col p-5 h-full w-full bg-black opacity-60">
        <button className="flex justify-end">
          <RxCross1
            size={25}
            strokeWidth={1}
            color="#ffff"
          />
        </button>
        <div>
          <h1 className="text-white">INGREDIENT</h1>
          <ul className="text-white ">
            <li>
              asdf
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
