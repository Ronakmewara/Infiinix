import React from "react";
import { useState } from "react";
export const Navbar = () => {
  const [showMobileNav, setshowMobileNav] = useState(false);
  return (
    <div>
      {showMobileNav ? (<div className=" flex p-10 z-50  navbar h-96   w-full bg-transparent backdrop-blur-lg border-b-2 border-blue-200/10 fixed ">
        <div className=" container mx-auto navbar-content   flex flex-row justify-between">
          <div className="navbar-logo max-w-[37px]">
            <a href="/" className="text-white inter font-bold text-3xl">
              Infinix
            </a>
          </div>
          <div className="navbar-home-links  flex items-center text-center pt-20  ">
            <ul className=" opacity-100 flex text-xl flex-col gap-10 text-white justify-center ">
              <li>
                <a href="/Expertise">Expertise</a>
              </li>
              <li>
                <a href="/Work">Work</a>
              </li>
              <li>
                <a href="/Pricing">Pricing</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
            <button className=" inter px-4 py-3 rounded-lg bg-gradient-to-b from-white to-slate-200 text-sm font-semibold text-black    ">
              Get in touch
            </button>
            </ul>
          </div>

          <div onClick={() => setshowMobileNav(!showMobileNav)}  className="navbar-getintouch ">
            
            <div className="ham-bars block lg:hidden ">
              <i className="fa-solid fa-bars text-white text-2xl  "></i>
            </div>
          </div>
        </div>
      </div>)  : (<div className=" flex p-10 z-50 items-center navbar h-16 w-full bg-transparent backdrop-blur-lg border-b-2 border-blue-200/10 fixed ">
        <div className=" container  lg:px-20 mx-auto navbar-content items-center flex flex-row justify-between">
          <div className="navbar-logo">
            <a href="/" className="text-white inter font-bold text-3xl">
              Infinix
            </a>
          </div>
          <div className="navbar-home-links hidden lg:block ">
            <ul className="flex flex-row gap-9 text-white justify-center ">
              <li>
                <a href="/Expertise">Expertise</a>
              </li>
              <li>
                <a href="/Work">Work</a>
              </li>
              <li>
                <a href="/Pricing">Pricing</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
            </ul>
          </div>

          <div   className="navbar-getintouch ">
            <button   className=" inter px-4 py-3 rounded-lg bg-gradient-to-b from-white to-slate-200 text-sm font-semibold text-black hidden lg:block ">
              Get in touch
            </button>
            <div className="ham-bars block lg:hidden" onClick={() => setshowMobileNav(!showMobileNav)}>
              <i className="fa-solid fa-bars text-white text-2xl  "></i>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
};
