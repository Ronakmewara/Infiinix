import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import video from "../Asset/video1.mp4";
export const VideoPlayer = () => {
  // const videoStyle = {
  //   width: "1120px",
  //   height: "630px",
  //   borderRadius: "25px",
  //   overflow: "hidden",
  //   marginTop: "100px",
  // };
  return (
    <div>

      <div
        style={{ backgroundColor: "rgb(4,6,22)" }}
        className="showreel-section w-screen   "
      >
       <div data-aos = "fade-up"  data-aos-duration="3000" >
        <div         
          className="video flex  justify-center"
        >
     <Video className=" w-screen h-[220px]  sm:w-[screen] sm:h-[440px] md:w-[screen] md:h-[465px] lg:h-[580px]  lg:w-[screen] xl:w-[1000px] xl:h-[565px] xl:rounded-3xl overflow-hidden mt-[100px]" autoPlay={true} loop muted controls={['Fullscreen']}  >
            <source className="videocust" src={video} type="video/webm" />
          </Video>
        </div>
      </div>
        </div>
    </div>
  );
};
