import React from "react";
import {useEffect} from "react";
 
import AOS from 'aos';
import { Pricingbox } from "../Utitlitycomponents/Pricingbox";
export const Pricing = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="w-screen grad-back pb-20  ">
      <div data-aos = "fade-up"  data-aos-duration="3000" >

      <div className="pricing ">
        <div className="heading pt-12">
          <div className=" mt-40 main-heading bg-gradient-to-r from-white to-blue-600 bg-clip-text text-transparent">
            <h1
              style={{ lineHeight: "1.5" }}
              className=" font-bold text-4xl sm:text-6xl lg:text-7xl text-center "
              >
              {" "}
              Pricing
            </h1>
          </div>
          <div className="sub-heading">
            <h2 className="inter px-10 text-xl sm:text-2xl text-slate-400 text-center">
              Buy a sprint or hire us on a daily basis.
            </h2>
          </div>
        </div>
      </div>

      {/* Price boxes  */}

      <div className="container mx-auto mt-20 px-5 sm:px-5 md:5px lg:px-5 xl:px-20">
        <div className="flex flex-wrap  ">
          <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 ">
            <Pricingbox
              heading="Research Sprint"
              desc="Gain insights into your audience and your product’s performance."
              q1="Generate founded ideas"
              desc1="Next, we select the ideas to prioritize and develop a user flow. We construct a prototype and prepare for user testing."
              q2="Build a prototype"
              desc2="Next, we select the ideas to prioritize and develop a user flow. We construct a prototype and prepare for user testing"
              q3="Get those ideas validated"
              desc3="We test our new concept with real users in a test lab, determining what works and what doesn’t work within the design."
              />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3  ">
            <Pricingbox
              heading="Brand Sprint"
              desc="Maximize your brand through 
              your product with high end performence"
              q1="Understand your brand"
              desc1="In a workshop, we dive into the foundation of your brand and collaboratively develop branding narratives."
              q2="Explore concepts"
              desc2="We transform the most compelling narratives into creative branding concepts that align with your product and explore the directions that we find most appealing."
              q3="Get a product branding"
              desc3="Eventually, we work towards refining your brand, delivering a digital style guide and an exemplary web or app page."
              />
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 ">
            <Pricingbox
              heading="Design Sprint"
              desc="Validate new concepts or bold 
              ideas fast and at affordable cost."
              q1="Find bottlenecks & problems"
              desc1="Together we define pain points, doubts & assumptions and frame them as hypotheses. These serve as the primary focus of our sprint."
              q2="Collect insights"
              desc2="We use various research methods (such as interviews, surveys, user tests & audits) to confirm our hypotheses."
              q3="Get recommendations"
              desc3="We will provide you with a list of design recommendations, highlighting areas to prioritize for immediate value."
              />
          </div>
        </div>
      </div>

      {/* <div className="price-sprint  container mx-auto mt-20 px-14   ">
        <div className="price-boxes flex flex-row gap-1  ">
        <Pricingbox
        heading="Research Sprint"
        desc="Gain insights into your target audience and your product’s performance."
        q1="Find bottlenecks & problems"
        desc1="Together we define pain points, doubts & assumptions and frame them as hypotheses. These serve as the primary focus of our sprint."
        q2="Collect insights"
        desc2="We use various research methods (such as interviews, surveys, user tests & audits) to confirm our hypotheses."
        q3="Get recommendations"
            desc3="We will provide you with a list of design recommendations, highlighting areas to prioritize for immediate value."
          />
          <Pricingbox
          heading="Brand Sprint"
          desc="Maximize your brand throughout 
          your product"
          q1="Understand your brand"
          desc1="In a workshop, we dive into the foundation of your brand and collaboratively develop branding narratives."
          q2="Explore concepts"
          desc2="We transform the most compelling narratives into creative branding concepts that align with your product and explore the directions that we find most appealing."
          q3="Get a product branding"
          desc3="Eventually, we work towards refining your brand, delivering a digital style guide and an exemplary web or app page."
          />
          <Pricingbox
          heading="Design Sprint"
          desc="Validate new concepts or bold 
          ideas fast and at low cost."
            q1="Generate founded ideas"
            desc1="Build a prototype"
            q2="Build a prototype"
            desc2="Next, we select the ideas to prioritize and develop a user flow. We construct a prototype and prepare for user testing"
            q3="Get those ideas validated"
            desc3="We test our new concept with real users in a test lab, determining what works and what doesn’t work within the design."
            />
            </div>
          </div> */}
          </div>
    </div>
  );
};
