import React from "react";

export const Services = () => {
  return (
    <div className=" w-screen" style={{ backgroundColor: "rgb(4,6,22)" }}>
       <div data-aos = "fade-up"  data-aos-duration="3000" >

      <div className=" py-20 container mx-auto px-5 sm:px-5 lg:px-20 services  text-slate-300 ">
        <div className="  mt-16  flex flex-row justify-between flex-wrap  services-header">
          <div className="  lg:w-3/4 header">
            <div className=" site-name">
              <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent text-base leading-4  ">
                Ministry of Health, Welfare and Sport
              </span>
            </div>
            <div className="site-heading">
              <h2
               
               className=" font-bold text-[33px]  sm:text-[33px] lg:text-[40px] leading-[40px] lg:leading-[48px] text-white py-4 "
               >
                <span>Optimise contact investigation during the pandemic</span>
              </h2>
            </div>
            <div style={{ color: "#ced6de" }} className=" site-desc text-xl">
              <p>
               
                <span>
                  Designing the GGD Contact (mobile) application and new web
                  portal to help the municipal health services speed up source
                  and contact investigation and make it more privacy resistant.
                </span> 
              </p>
            </div>
          </div>
          <div className=" flex flex-col mt-5 sm:mt-0 mr-12 gap-2  services">
            <span className="font-bold text-white">Services</span>
            <span>UX Design</span>
            <span>UI Design</span>
          </div>
        </div>
      </div>

      <div className=" flex justify-center container mx-auto px-5 sm:px-5 lg:px-20 img">
        <div
           
           className=" bg-slate-200 serivces-img  h-[400px]  sm:h-[500px] sm:w-[600px] lg:w-[900px] lg:h-[800px] xl:h-[800px] xl:w-[1120px] overflow-hidden rounded-3xl flex justify-center white-shadow "
           >
          <img
            style={{ height: "100%", width: "100%", objectFit: "scale-down" }}
            className=""
            src="https://framerusercontent.com/images/VXTlUyZVICqcwhMbzRmnKwxykk.png?scale-down-to=1024"
            alt=""
            />
        </div>
      </div>

      <div className="show-work white-hover container flex justify-center  py-20 mx-auto px-20 ">
        <a href="/Work" className="  text-white px-6 py-3 bg-gradient-to-b from-slate-800 to-slate-900 leading-6 text-base font-semibold rounded-lg hover:opacity-80 transition-all hover:cursor-pointer">
           
          Show more work 
        </a>
      </div>
            </div>
    </div>
  );
};
