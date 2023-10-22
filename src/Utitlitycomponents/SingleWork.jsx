import React from 'react'
import {useEffect} from "react";
 
import AOS from 'aos';
export const SingleWork = ({name, desc, img, heading, objectfit}) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div> 
         <div className=" py-20 container mx-auto px-5 lg:px-20 services  text-slate-300 ">
        <div className="  mt-20  flex flex-row justify-between flex-wrap  services-header">
          <div className=" w-3/4 header">
            <div className=" site-name">
              <span className=" font-semibold text-sm bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent sm:text-base leading-4 ">
               {name}
              </span>
            </div>
            <div className="site-heading lg:w-[670px] ">
              <h2
                
                className=" font-bold text-white leading-8  sm:leading-9 lg:leading-[48px] py-4 text-[25px]  sm:text-[35px] lg:text-[45px] inter "
              >
                <span>{heading}</span>
              </h2>
            </div>
            <div style={{ color: "#ced6de" }} className=" site-desc text-base sm:text-xl">
              <p className=' min-w-[309px] '>
                
                <span>
                  {desc}
                </span> 
              </p>
            </div>
          </div>
          <div className=" flex flex-col mt-10 sm:mt-0  mr-12 gap-2  services">
            <span className="font-bold text-white">Services</span>
            <span>UX Design</span>
            <span>UI Design</span>
          </div>
        </div>
      </div>
      <div data-aos = "fade-up"  data-aos-duration="3000" > 
      <div className=" container flex justify-center mx-auto px-5 lg:px-20  img">
        <div
          className=" bg-slate-200 serivces-img h-[400px]  sm:h-[500px] sm:w-[600px] lg:h-[800px] lg:w-[1120px] overflow-hidden rounded-3xl "
          >
          <img
            style={{ height: "100%", width: "100%", objectFit:objectfit}}
            className=""
            src={img}
            alt=""
            />
        </div>
      </div>
            </div>

      
         </div>

    
  )
}
