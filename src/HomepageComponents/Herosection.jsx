import React from 'react'
import {useEffect} from "react";
 
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Herosection = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>

            <div  className=" grad-back-home relative herosection w-screen h-screen flex flex-col items-center justify-center ">
            <div data-aos = "fade-down"  data-aos-duration="3000" >
                <div style={{ maxWidth: "772px",  marginTop: "100px" }} className="main-heading     container ">
                    <h1 className=' flex justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent text-center'><span>Crafting Products to Shape Tommorow</span> </h1>

                </div>
                <div style={{ maxWidth: "850px" }} className="small-heading mt-5 ">
                    <h3 className=' text-xl sm:text-2xl px-10 md:text-3xl text-center text-slate-300 sm:text-slate-400' >Infinix is a digital product design studio bringing value as efficiently as possible by designing validated digital solutions.
                    </h3>
                </div>


            </div>
            <div className=" absolute bottom-1 flex justify-center  inset-x-0  scroll text-sm  ">
                <div className=" flex flex-col  items-center gap-2 scroll-animation">
                    <span className=' scroll text-slate-200 font-bold'> Scroll to explore </span>
                    <div className="verticle-line flex flex-col items-center h-16 w-px bg-gradient-to-b from-slate-800 to-slate-600/0  ">
                        <div className="inner-animation w-px bg-slate-100 h-5 ">

                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
    )
}
