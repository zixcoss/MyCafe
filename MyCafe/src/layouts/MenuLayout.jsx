import React, { useEffect } from "react";
import { Outlet,NavLink } from 'react-router'
import FoodCate from '../utils/FoodCategories'

const MenuLayout = () => {
  useEffect(()=>{
      document.title = "Menus | MyCafe";
    },[]);

  return (
    <div className='my-5 font-roboto'>
      <h1 className='text-4xl font-bold text-center'><i>Menus</i></h1>
      <div className='mt-10 flex flex-col gap-5 items-center
        md:flex-row md:justify-center'>
        {
          FoodCate.map((c)=>{
            return(
              <NavLink
                to={c.link}
                className={({isActive})=>{
                  return `py-2 px-4 border rounded-sm text-base 
                  ${isActive ? "border-green-500"
                    :"border-black hover:border-green-500 duration-200"}`
                }}
                key={c.title}
              >
                {c.title}
              </NavLink>
            );
          })
        }
      </div>
      <Outlet />
    </div>
  )
}

export default MenuLayout