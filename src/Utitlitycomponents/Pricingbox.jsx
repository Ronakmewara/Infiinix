import React from 'react'
import { useState } from 'react';
import { PriceAccordian } from "../Utitlitycomponents/PriceAccordian";
export const Pricingbox = ({heading , desc , q1, q2, q3, desc1, desc2 , desc3}) => {
    const [openDesc, setopenDesc] = useState(false);
    const accordianHandle = () => {
      setopenDesc(!openDesc);
    };
  return (
   <div>
          
 
    
          <div className="single hover:cursor-pointer rounded-xl">
          <div
          
          className="single-sprint  p-4 rounded-3xl "
        >
          <div className="heading-price p-8">
            <div className="sprint-heading">
              <div className="heading">
                <h2 className="  font-bold inter text-2xl  text-white">
                   {heading}
               
                </h2>
              </div>

              <div className="subheading inter w-54 text-slate-300 pt-3">
                <span>
                 {desc}
                </span>
              </div>
            </div>
          </div>
         
          <div  style={{backgroundColor: "#081A2A" }} className="price-outer border-2 border-white/10 rounded-2xl mt-4 ">
              <div className="price-btn p-5">
                <div className="price-days flex flex-row justify-center gap-3">
                  <div className="price text-white font-bold text-4xl inter ">
                    <sup className="text-xl inter">$</sup>6000
                  </div>
                  <div className="days text-white inter text-sm flex flex-col ">
                    <span className="font-bold">4 Days</span>
                    <span className=" text-slate-300"> 2 Developers</span>
                  </div>
                </div>
                <div className="req-button text-center mt-6 ">
                  <button className=" bg-gradient-to-b rounded-lg from-blue-400 to-blue-600 px-6 sm:px-8 lg:px-12 py-3 text-base font-semibold text-white inter ">
                    Request this sprint
                  </button>
                </div>
              </div>
            </div>


            <div className="mt-8">


            <PriceAccordian
            openDesc={openDesc}           
            accordianHandle={accordianHandle}
            
            q={q1}
            desc={desc1}
            
           
            />
          <PriceAccordian
            openDesc={openDesc}          
            accordianHandle={accordianHandle}
            
            q={q2}
            desc={desc2}
            
            />
          <PriceAccordian
            openDesc={openDesc}
            accordianHandle={accordianHandle}
            
            q={q3}
            desc={desc3}
            
            />
            </div>
          </div>
          </div>
          
         

    {/* demo down */}
        {/* <div
          
          className="single-sprint  p-4 rounded-3xl "
        >
          <div className="heading-price p-8">
            <div className="sprint-heading">
              <div className="heading">
                <h2 className="  font-bold inter text-2xl  text-white">
                   
                  {heading}
                </h2>
              </div>

              <div className="subheading inter w-40 text-slate-300 pt-3">
                <span>
                 {desc}
                </span>
              </div>
            </div>

            <div  style={{backgroundColor: "#081A2A" }} className="price-outer border-2 border-white/10 rounded-2xl mt-4 ">
              <div className="price-btn p-5">
                <div className="price-days flex flex-row justify-center gap-3">
                  <div className="price text-white font-bold text-4xl inter ">
                    <sup className="text-xl inter">$</sup>6000
                  </div>
                  <div className="days text-white inter text-sm flex flex-col ">
                    <span className="font-bold">4 Days</span>
                    <span className=" text-slate-300"> 2 Developers</span>
                  </div>
                </div>
                <div className="req-button text-center mt-6 ">
                  <button className=" bg-gradient-to-b rounded-lg from-blue-400 to-blue-600 px-12 py-3 text-base font-semibold text-white inter ">
                    Request this sprint
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          {/* <PriceAccordian
            openDesc={openDesc}           
            accordianHandle={accordianHandle}
            
            q={q1}
            desc={desc1}
           
           
          />
          <PriceAccordian
            openDesc={openDesc}          
            accordianHandle={accordianHandle}
             
            q={q2}
            desc={desc2}

          />
          <PriceAccordian
            openDesc={openDesc}
            accordianHandle={accordianHandle}
            
            q={q3}
            desc={desc3}

          /> */}
        
       
    </div>
  )
}
