import { useState } from 'react';
import React from 'react'
export const PriceAccordian = ({ q , desc }) => {
    const [openDesc, setopenDesc] = useState(false);
      const accordianHandle = () => {
        setopenDesc(!openDesc);
      };
    return (
    <div>
        <div className="accordian px-8  pb-6  ">
            <div className="q1 border-b-2 border-white/10 ">
              <div
                onClick={accordianHandle}
                className={`heading pb-2   flex  flex-row justify-between`}
              >
                <div className="text text-base font-semibold text-white inter">
                  <h2>{q}</h2>
                </div>  
                <div className={`plus-sign transition-all duration-500 ease-in-out `}>
                  {openDesc ? (
                      <i className="fa-solid fa-minus text-white  "></i>
                      ) : (
                          <i className="fa-solid fa-plus text-white font-bold"></i>
                          )}
                </div>
              </div>
              <div
                className={`dec  ${openDesc ? "open " : " "}     pb-5`}
              >
                <span className="inter text-slate-300 ">
                  {desc}
                </span>
              </div>
            </div>
          </div>
    </div>
  )
}
