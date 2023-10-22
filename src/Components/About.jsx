import React from 'react'
import ".."
import { Images } from '../Utitlitycomponents/Images'
import {useEffect} from "react";
 
import AOS from 'aos';
import 'aos/dist/aos.css';
export const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className=' grad-back w-screen  ' >

         <div className="About flex justify-center container mx-auto  ">
      
            <div className="heading">
                <div className="main-heading font-bold inter bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent pt-20  text-center sm:text-5xl  lg:text-7xl text-5xl ">
                    <h1 className=' mt-36' > We are Infinix</h1>
                </div>
                <div   className="desc px-5  text-slate-300 inter text-center py-5 max-w-sm lg:max-w-2xl sm:max-w-xl  lg:text-xl text-lg  ">
                        <h2> An accomplished crew, scattered across the globe, with each member excelling in their respective domains of design and development</h2>
                </div>
            </div>
           
         </div>

         <Images/>
         <div data-aos = "fade-up"  data-aos-duration="3000" >


         <div className=" container px-5 lg:px-20  pb-40 mx-auto  we-tranform flex flex-row flex-wrap justify-between">
            <div className="left-heading">
                <h1  className=' text-3xl  sm:max-w-2xl sm:text-4xl inter pb-10 text-white font-bold ' >We transform ideas into extraordinary designed products</h1>
            </div>
            <div className="dec text-slate-300 inter text-base flex flex-col gap-6 ">
               <span>At Infinix we unleash digital product design's power to ignite positive impact. With an unwavering commitment to excellence, we place the user, business, and technology at the heart of our creative process while validating usability and effectiveness.</span>
               <span>
               We go beyond the ordinary to create extraordinary digital experiences for our clients and their users. As an agile team of design experts, we specialise in crafting validated digital solutions with impact. Our hands-on approach thrives on flexibility and close collaboration, ensuring rapid and validated outcomes that propel your brand forward.
               </span>
            </div>
         </div>

         </div>
             

       </div>
     
  )
}
