import React from "react";
import {useEffect} from "react";
 
import AOS from 'aos';
export const Expertise = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="w-screen grad-back flex pb-20 ">
      <div className="Expertise container mx-auto px-5 lg:px-20 ">
      <div data-aos = "fade-down"  data-aos-duration="3000" > 
        <div className="main-heading mt-52  ">
          <h1
             
             className=" text-left mb-2 text-[30px]  sm:text-[48px] lg:text-[65px]  font-bold inter bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
             >
            Digital product design
          </h1>
        </div>
            </div>
            <div data-aos = "fade-down"  data-aos-duration="3000" > 
        <div
           
           className="desc leading-7 sm:leading-8  w-[350px] sm:w-[600px] lg:w-[800px] text-base sm:text-xl  text-slate-300 inter "
           >
          <span>
            We specialise in determining how digital services can provide value
            within the user and business context. By utilising research,
            strategy and design we create valuable mobile apps, web
            applications, webshops, and software. This holistic approach to
            design is what we refer to as digital product design.
          </span>
        </div>
          </div>
        <div data-aos = "fade-up"  data-aos-duration="3000" > 
        
        <div className="single-experty flex flex-row flex-wrap justify-between   mt-24 ">
          <div className="heading">
            <div className="main-heading">
                <h2 className=" text-4xl text-white font-bold inter" >Research</h2>
            </div>
            <div   className=" mt-10 desc sm:text-base w-[350px] sm:w-[600px] lg:w-[800px] inter  text-slate-300">
                <span  >    
                Research plays a crucial role in helping both our team and yours to develop a profound understanding of the problem at hand, identify potential opportunities, and make informed design decisions. By assessing our existing knowledge and identifying gaps, we can determine the most suitable research approach for our collaboration. This ensures that our research efforts are tailored to meet the specific needs of the project and enable us to work together effectively.
                </span>
            </div>
          </div>
          <div className=" flex flex-col xl:mt-0 mt-5  gap-1 sm:gap-2  services text-slate-300 inter">
            <span className="text-white font-semibold" >Services</span>
            <span>User Interviews</span>
            <span>User Testing</span>
            <span>Stakeholder sessions</span>
            <span>Competitor Analysis</span>
            <span>UX/UI Audit</span>
          </div>
        </div>
        </div>
        <div data-aos = "fade-up"  data-aos-duration="3000" > 
        <div className="single-experty flex flex-row flex-wrap justify-between  mt-24 ">
          <div className="heading">
            <div className="main-heading">
                <h2 className=" text-4xl text-white font-bold inter" >Strategy</h2>
            </div>
            <div   className=" mt-10 desc text-base sm:text-base inter  text-slate-300 w-[350px] sm:w-[600px] lg:w-[800px]">
                <span  >    
                Strategy involves deliberate planning and decision-making that directs the overall direction and goals of the product. It entails defining the product's vision, objectives, and key principles that will shape its design. By aligning with your business goals, user needs, and market conditions, our strategic approach ensures that we identify what brings value to both your users and your business. It serves as the foundation for driving the product towards success.
                </span>
            </div>
          </div>
          <div className=" flex flex-col  xl:mt-0 mt-5  gap-1 sm:gap-2 services text-slate-300 inter">
            <span className="text-white font-semibold" >Services</span>
            <span>User Journey</span>
            <span>User Testing</span>
            <span>Custom Development</span>
            <span>Competitor Analysis</span>
            <span>Flowchart</span>
          </div>
        </div>
        </div>
        <div data-aos = "fade-up"  data-aos-duration="3000" > 
        <div className="single-experty flex flex-row flex-wrap justify-between  mt-24 ">
          <div className="heading">
            <div className="main-heading">
                <h2 className=" text-4xl text-white font-bold inter" >Design</h2>
            </div>
            <div   className=" mt-10 desc text-base sm:text-base inter w-[350px] sm:w-[600px] lg:w-[800px] text-slate-300">
                <span  >    
                We will transform the insights gained from research and strategic decisions into practical design solutions. Design involves a range of activities focused on developing user-centered and visually captivating interfaces while defining the overall user experience. Furthermore, we will integrate the brand identity and guidelines, ensuring that visual elements, tone of voice, and the overall brand representation are consistent throughout the product.
                </span>
            </div>
          </div>
          <div className=" flex flex-col  xl:mt-0 mt-5  gap-1 sm:gap-2  services text-slate-300 inter">
            <span className="text-white font-semibold" >Services</span>
            <span>User Interviews</span>
            <span>User Testing</span>
            <span>Stakeholder sessions</span>
            <span>Competitor Analysis</span>
            <span>Design Systems</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
