import React from "react";

export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#040615" }} className="w-screen border-t-2  border-white/10  ">
      <div className="footer flex flex-col lg:flex-row gap-6  items-center  lg:justify-between container px-20 mx-auto pt-20 pb-20 ">
        <div className="logo">
          <span className="text-white inter  font-bold text-3xl">
            Infinix
          </span>
        </div>
        <div className=" inter text-white Address text-center">
          <ul className="flex flex-col gap-3">
            <li className="font-semibold">Headquarters</li>
            <li className=" cursor-pointer  hover:text-slate-300 ease-linear duration-75 text-slate-400">
              Voorhaven 27C
            </li>
            <li className=" cursor-pointer hover:text-slate-300 ease-linear duration-75 text-slate-400">
              3025 HC Rotterdam
            </li>
          </ul>
        </div>
        <div className=" inter  text-white contact text-center">
          <ul className=" flex flex-col gap-3">
            <li className="font-semibold">Contact</li>
            <li className=" text-slate-400  cursor-pointer hover:text-slate-300 ease-linear duration-75">
              +31(6)39 56 15 80
            </li>
            <li className=" text-slate-400 cursor-pointer hover:text-slate-300 ease-linear duration-75">
              info@infinix.com
            </li>
          </ul>
        </div>
        <div className=" text-white inter text-center social-media">
          <span className="font-semibold">Follow us</span>
          <ul className=" mt-6 text-slate-400 flex flex-row gap-8">
            <li>
              <i className=" hover:text-slate-200 cursor-pointer ease-linear duration-75 text-2xl fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className=" hover:text-slate-300 cursor-pointer ease-linear duration-75  text-2xl fa-brands fa-linkedin"></i>
            </li>
            <li>
              <i className="  hover:text-slate-300 cursor-pointer ease-linear duration-75  text-2xl fa-brands fa-facebook"></i>
            </li>

            <li>
              <i className="  hover:text-slate-300 cursor-pointer ease-linear duration-75  text-2xl fa-brands fa-x-twitter"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
