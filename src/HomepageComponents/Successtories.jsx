import React from "react";
import { Singlefeedback } from "./Singlefeedback";

export const Successtories = () => {
  return (
    <div
      className="w-screen    "
      style={{ backgroundColor: "rgb(4,6,22)" }}
    >
       <div data-aos = "fade-up"  data-aos-duration="3000" >

      <div className=" container mx-auto px-5 lg:px-20 py-32 success-stories">
        <div
          style={{ color: "#6bbcff" }}
          className="small-heading text-base leading-4 font-bold tracking-wider text-center "
          >
          <span>SUCCESS STORIES</span>
        </div>
        <div className="main-heading">
          <h1
            style={{ lineHeight: "62px" }}
            className=" text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mt-8"
            >
            <span> Words from our clients </span>
          </h1>
        </div>

        {/*Client Feedback  */}

        <div className=" flex flex-row justify-between gap-2 client-section mt-20 ">
          <div className="  client-col flex flex-col gap-12 sm:gap-6">
            <Singlefeedback
              feedback="Our collaboration with Infinix was exceptional. The Infinix team's expertise and dedication played a pivotal role in our project's success, resulting in a seamless product launch."
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR63KoribGVDB_dswx8iUX99udIebJK_EsaYYTwg2vJoIeIECXhO8iWnI5VBU64wLJ-8gg&usqp=CAU"
              name="Jackson Wells"
              des="Founder at PixelCrafters"
            />
            <Singlefeedback
              feedback="I can't say enough about the positive impact Infinix has had on our projects. Their ability to bring together a diverse team with unique strengths has allowed us to achieve seamless product launches. Infinix's professionalism, attention to detail, and harmonious teamwork make them a standout partner. We couldn't be happier with the results, and we look forward to more productive collaborations in the future."
              src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
              name="Zoey Davis"
              des="CTO at DataLinx"
            />
            <Singlefeedback
              feedback="Working with Infinix was a game-changer. Their critical thinking, harmonious teamwork, and expertise played a pivotal role in the rapid and successful launch of our project. We couldn't be happier with the results."
              src="https://qph.cf2.quoracdn.net/main-qimg-719f114ee38ebe42fff5baf5be8bcee7-lq"
              name="Henry Wright"
              des="COO at FoodFleet"
              />
          </div>
          {/* 2nd Column */}
          <div className="  client-2ndcol hidden xl:flex flex-col gap-6">
            <Singlefeedback
              feedback="Infinix's commitment to excellence is evident in every interaction. Their dedication, attention to detail, and collaborative approach have made a real impact. Thanks to Infinix, our project was not only completed successfully but also with efficiency and precision."
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJSQfP3nec2Tl-5tWF0llr8reHhHPCTQl6tU8BYHOmaINYL1TC5M4PlJG-A_Bu1zkMxE&usqp=CAU"
              name="Leo Carter"
              des="Head Brewer at BrewCrafters"
              />
            <Singlefeedback
              feedback="Working with Infinix was a game-changer. Their critical thinking, harmonious teamwork, and expertise played a pivotal role in the rapid and successful launch of our project. We couldn't be happier with the results."
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI47XBn1MH2RqQUoC-kV84Oa0h6ANHFWk7UtSoiyX4oKEmA1CJVuxFomYx9UOT9sPjtO4&usqp=CAU"
              name="Grace Clark"
              des="PD at InnovateHub"
            />
            <Singlefeedback
              feedback="Infinix has been an indispensable partner throughout our journey. Their collaborative approach and critical thinking have consistently delivered exceptional results. With Infinix's expert guidance, we were able to successfully launch our project, and their commitment to innovation remains unmatched. We can't Thank Infinix. "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGj22PBmittPGAdDMqtKbd8BIdpWVGd1FcN46fhLOKSPwdwOkZQ8dnss7rDFud3U5E7-o&usqp=CAU"
              name="Chris Evans"
              des="Head Chef at FlavorsKitchen"
            />
          </div>
          {/* 3rd Coloumn */}
          <div className="  client-3rdcol hidden lg:flex flex-col gap-6">
            <Singlefeedback
              feedback="Our experience with Infinix has been exceptional. Their professionalism and dedication are unmatched, and they significantly contributed to the success of our project. We look forward to more collaborations."
              src="https://img.freepik.com/premium-photo/smiling-asian-student-holding-laptop-looking-camera-university-campus-education-concept_219285-840.jpg?size=626&ext=jpg&ga=GA1.1.1377295593.1697443767&semt=sph"
              name="Max Smith"
              des="Lead Developer at AppGenius"
              />
            <Singlefeedback
              feedback="Infinix has been an indispensable partner throughout our journey. Their collaborative approach and critical thinking have consistently delivered exceptional results. With Infinix's expert guidance, we were able to successfully launch our project, and their commitment to innovation remains unmatched. We absolutely value the Infinix team's dedication and complementary skills. Infinix continues to set a high standard for what's possible."
              src="https://img.freepik.com/free-photo/waist-up-portrait-smiling-pleased-guy-round-spectacles-looking-front-him_259150-57689.jpg?size=626&ext=jpg&ga=GA1.1.1377295593.1697443767&semt=sph"
              name="David Johnson"
              des="CEO at TechCorp"
              />
            <Singlefeedback
              feedback="Working with Infinix was a game-changer. Their critical thinking, harmonious teamwork, and expertise played a pivotal role in the rapid and successful launch of our project. "
              src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-elegant-black-suit-fashion-male-posing-studio-dark-background_158538-21659.jpg?size=626&ext=jpg&ga=GA1.1.1377295593.1697443767&semt=sph"
              name="Daniel Anderson"
              des="COO at TechTom"
              />
          </div>
        </div>
        <div className="get-in-touch  ">
          <div className=" flex justify-center  mt-28 heading">
            <h1 className=" w-3/6 text-center  sm:text-4xl text-3xl lg:text-5xl font-bold text-white">
              <span className=""> Let’s brew something great together! </span>
            </h1>
          </div>
          <div className="get-in-touch-button mt-10 req-button flex justify-center">
            <button className=" inter  px-6 py-3 bg-gradient-to-b from-blue-500 to-blue-800 rounded-lg text-white">
              Get in touch 
            </button>
          </div>
        </div>
      </div>
              </div>
    </div>
  );
};
