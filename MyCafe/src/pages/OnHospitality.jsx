import React, { useEffect } from "react";
import HospitalityCard from "../components/HospitalityCard";
import hospitality from "../utils/hospitality";
import { Link } from "react-router";
import awards from "../utils/awards";

const OnHospitality = () => {
  useEffect(()=>{
      document.title = "Press | MyCafe";
    },[]);

  return (
    <div className="my-5 animate-fade">
      <h1 className="font-roboto text-3xl text-center mb-8">ON HOSPITALITY</h1>
      <div className="grid grid-cols-1 gap-10 my-5
        lg:grid-cols-2 xl:grid-cols-3">
        {hospitality.map((h) => {
          return (
            <HospitalityCard
              key={h.title}
              image={h.image}
              text={h.title}
              linkTo={h.link}
            />
          );
        })}
      </div>
      <div className="my-40">
        <h1 className="font-roboto text-3xl text-center mb-5">AWARDS</h1>
        <ul className="space-y-4">
          {
            awards.map((a) => {
              return(
                <li className="text-center" key={a.title}>
                  <Link to={a.link} className="font-roboto text-xl underline decoration-1 underline-offset-2 hover:text-[#555]">
                    {a.title}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default OnHospitality;
